/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import type { Server } from 'http';
import request from 'supertest';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/services/prisma.service';

interface GqlResult {
  errors?: Array<{ message: string }>;
  data?: Record<string, any>;
}

/**
 * Tests User and Role management:
 * - createUser (no guard), users/user queries
 * - updateUser (requires updateUser perm) vs updateOwnUser (requires updateOwnUser perm)
 * - deleteUser, addRoleToUser, removeRoleFromUser
 * - Self-update edge case: user with updateOwnUser can edit self but not others
 */
describe('Users & Roles (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let httpServer: Server;

  const ids = {
    institution: '',
    adminUser: '',
    memberUser: '',
    targetUser: '',
    createdUserId: '',
    customRoleId: '',
  };

  function tokenFor(userId: string): string {
    return jwt.sign({ sub: userId }, process.env.JWT_SECRET!, { expiresIn: '1h' });
  }

  async function gql(token: string | null, query: string, variables?: Record<string, unknown>): Promise<GqlResult> {
    const req = request(httpServer).post('/graphql').send({ query, variables });
    if (token) req.set('Authorization', `Bearer ${token}`);
    const res = await req;
    return res.body as GqlResult;
  }

  async function createRole(userId: string, roleKeyCode: string): Promise<void> {
    const role = await prisma.role.findUniqueOrThrow({ where: { key_code: roleKeyCode } });
    await prisma.userRole.create({
      data: { user_id: userId, role_id: role.id, created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
  }

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
    httpServer = app.getHttpServer();
    prisma = app.get(PrismaService);

    const inst = await prisma.institution.create({
      data: { name: 'E2E Users Institution', denomination: 'e2e-test', language_preference: 'en', created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    ids.institution = inst.id;

    const ts = Date.now();
    const mkUser = async (name: string) => {
      const u = await prisma.user.create({
        data: {
          name,
          email: `${name.toLowerCase().replace(/\s+/g, '.')}.${ts}@e2e-users.local`,
          password: bcrypt.hashSync('unused', 4),
          language_preference: 'en',
          institution_id: inst.id,
          created_by: 'e2e-test',
          updated_by: 'e2e-test',
        },
      });
      return u.id;
    };

    ids.adminUser = await mkUser('E2E Users Admin');
    ids.memberUser = await mkUser('E2E Users Member');
    ids.targetUser = await mkUser('E2E Users Target');

    await createRole(ids.adminUser, 'ADMIN');
    await createRole(ids.memberUser, 'CHURCH_MEMBER');
  }, 60000);

  afterAll(async () => {
    const allUsers = [ids.adminUser, ids.memberUser, ids.targetUser, ids.createdUserId].filter(Boolean);
    if (ids.customRoleId) {
      await prisma.rolePermission.deleteMany({ where: { role_id: ids.customRoleId } });
      await prisma.userRole.deleteMany({ where: { role_id: ids.customRoleId } });
      await prisma.role.deleteMany({ where: { id: ids.customRoleId } });
    }
    await prisma.userRole.deleteMany({ where: { user_id: { in: allUsers } } });
    await prisma.user.deleteMany({ where: { id: { in: allUsers } } });
    await prisma.institution.deleteMany({ where: { id: ids.institution } });
    await app.close();
  }, 60000);

  // ─── Queries ─────────────────────────────────────────────────────────────

  const USERS = `query { users { id name email } }`;
  const USER = `query GetUser($id: String!) { user(id: $id) { id name email } }`;

  it('Admin can list users', async () => {
    const res = await gql(tokenFor(ids.adminUser), USERS);
    expect(res.errors).toBeUndefined();
    expect(Array.isArray(res.data!.users)).toBe(true);
  });

  it('Admin can fetch a single user by ID', async () => {
    const res = await gql(tokenFor(ids.adminUser), USER, { id: ids.targetUser });
    expect(res.errors).toBeUndefined();
    expect(res.data!.user.id).toBe(ids.targetUser);
  });

  // NOTE: CHURCH_MEMBER has USERS_ACCESS permission so users/user queries pass.
  // We verify denial on a truly restricted resource instead.
  it('Church Member cannot list annual budgets (no ANNUAL_BUDGETS_ACCESS)', async () => {
    const res = await gql(tokenFor(ids.memberUser), `query { annualBudgets { id } }`);
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/permission|does not have/i);
  });

  // ─── updateOwnUser ───────────────────────────────────────────────────────

  const UPDATE_OWN_USER = `
    mutation UpdateOwn($data: UserUpdateDto!) {
      updateOwnUser(data: $data) { id name }
    }
  `;

  it('Church Member can update their own profile (updateOwnUser)', async () => {
    const res = await gql(tokenFor(ids.memberUser), UPDATE_OWN_USER, {
      data: { name: 'E2E Users Member (updated)' },
    });
    expect(res.errors).toBeUndefined();
    expect(res.data!.updateOwnUser.id).toBe(ids.memberUser);
  });

  // ─── updateUser ──────────────────────────────────────────────────────────

  const UPDATE_USER = `
    mutation UpdateUser($id: String!, $data: UserUpdateDto!) {
      updateUser(id: $id, data: $data) { id name }
    }
  `;

  it('Admin can update any user', async () => {
    const res = await gql(tokenFor(ids.adminUser), UPDATE_USER, {
      id: ids.targetUser,
      data: { name: 'E2E Target Updated By Admin' },
    });
    expect(res.errors).toBeUndefined();
    expect(res.data!.updateUser.id).toBe(ids.targetUser);
  });

  it('Church Member cannot update another user', async () => {
    const res = await gql(tokenFor(ids.memberUser), UPDATE_USER, {
      id: ids.targetUser,
      data: { name: 'Unauthorized Update' },
    });
    // Member only has updateOwnUser; updateUser on another's id should be denied
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/permission/i);
  });

  // ─── Roles CRUD ──────────────────────────────────────────────────────────

  const CREATE_ROLE = `
    mutation CreateRole($input: CreateRoleInput!) {
      createRole(input: $input) { id name key_code }
    }
  `;
  const UPDATE_ROLE = `
    mutation UpdateRole($input: UpdateRoleInput!) {
      updateRole(input: $input) { id name }
    }
  `;
  const DELETE_ROLE = `
    mutation DeleteRole($id: String!) {
      deleteRole(id: $id) { id }
    }
  `;

  it('Admin can create a custom role', async () => {
    const ts = Date.now();
    const res = await gql(tokenFor(ids.adminUser), CREATE_ROLE, {
      input: { name: 'E2E Custom Role', key_code: `E2E_CUSTOM_${ts}`, description: 'test role' },
    });
    expect(res.errors).toBeUndefined();
    ids.customRoleId = res.data!.createRole.id;
    expect(ids.customRoleId).toBeTruthy();
  });

  it('Admin can update the custom role', async () => {
    const res = await gql(tokenFor(ids.adminUser), UPDATE_ROLE, {
      input: { id: ids.customRoleId, name: 'E2E Custom Role (renamed)' },
    });
    expect(res.errors).toBeUndefined();
    expect(res.data!.updateRole.name).toBe('E2E Custom Role (renamed)');
  });

  it('Church Member cannot create a role', async () => {
    const res = await gql(tokenFor(ids.memberUser), CREATE_ROLE, {
      input: { name: 'Unauthorized Role', key_code: 'UNAUTH_ROLE', description: 'x' },
    });
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/permission/i);
  });

  // ─── addRoleToUser / removeRoleFromUser ──────────────────────────────────

  const ADD_ROLE = `
    mutation AddRole($userId: String!, $roleId: String!) {
      addRoleToUser(userId: $userId, roleId: $roleId) { id name }
    }
  `;
  const REMOVE_ROLE = `
    mutation RemoveRole($userId: String!, $roleId: String!) {
      removeRoleFromUser(userId: $userId, roleId: $roleId) { id name }
    }
  `;

  it('Admin can add the custom role to a user', async () => {
    const res = await gql(tokenFor(ids.adminUser), ADD_ROLE, {
      userId: ids.targetUser,
      roleId: ids.customRoleId,
    });
    expect(res.errors).toBeUndefined();
  });

  it('Admin can remove the custom role from the user', async () => {
    const res = await gql(tokenFor(ids.adminUser), REMOVE_ROLE, {
      userId: ids.targetUser,
      roleId: ids.customRoleId,
    });
    expect(res.errors).toBeUndefined();
  });

  it('Church Member cannot add roles to users', async () => {
    const res = await gql(tokenFor(ids.memberUser), ADD_ROLE, {
      userId: ids.targetUser,
      roleId: ids.customRoleId,
    });
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/permission/i);
  });

  // ─── deleteUser ──────────────────────────────────────────────────────────

  const DELETE_USER = `
    mutation DeleteUser($id: String!) {
      deleteUser(id: $id) { id is_deleted }
    }
  `;

  it('Church Member cannot delete a user', async () => {
    const res = await gql(tokenFor(ids.memberUser), DELETE_USER, { id: ids.targetUser });
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/permission/i);
  });

  it('Admin can soft-delete a user', async () => {
    const res = await gql(tokenFor(ids.adminUser), DELETE_USER, { id: ids.targetUser });
    expect(res.errors).toBeUndefined();
    expect(res.data!.deleteUser.is_deleted).toBe(true);
  });

  it('Admin can delete custom role', async () => {
    const res = await gql(tokenFor(ids.adminUser), DELETE_ROLE, { id: ids.customRoleId });
    expect(res.errors).toBeUndefined();
    ids.customRoleId = '';
  });
});
