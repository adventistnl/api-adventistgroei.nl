/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import type { Server } from 'http';
import request from 'supertest';
import * as jwt from 'jsonwebtoken';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/services/prisma.service';

interface GqlResult {
  errors?: Array<{ message: string }>;
  data?: Record<string, any>;
}

/**
 * Tests Institution, Region, Church and Department CRUD — both happy paths
 * and permission denials. All fixtures are created via Prisma and torn down in afterAll.
 */
describe('Organizational Structure (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let httpServer: Server;

  const ids = {
    institutionA: '',
    adminA: '',
    memberA: '',
    instLeaderA: '',
    regionId: '',
    churchId: '',
    departmentId: '',
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

  async function createUser(name: string, institutionId: string): Promise<string> {
    const ts = Date.now();
    const user = await prisma.user.create({
      data: {
        name,
        email: `${name.toLowerCase().replace(/\s+/g, '.')}.${ts}@e2e-structure.local`,
        password: 'unused',
        language_preference: 'en',
        institution_id: institutionId,
        created_by: 'e2e-test',
        updated_by: 'e2e-test',
      },
    });
    return user.id;
  }

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
    httpServer = app.getHttpServer();
    prisma = app.get(PrismaService);

    const inst = await prisma.institution.create({
      data: { name: 'E2E Structure Institution', denomination: 'e2e-test', language_preference: 'en', created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    ids.institutionA = inst.id;

    ids.adminA = await createUser('E2E Struct Admin', inst.id);
    ids.memberA = await createUser('E2E Struct Member', inst.id);
    ids.instLeaderA = await createUser('E2E Struct InstLeader', inst.id);

    await createRole(ids.adminA, 'ADMIN');
    await createRole(ids.memberA, 'CHURCH_MEMBER');
    await createRole(ids.instLeaderA, 'INSTITUTIONAL_LEADER');
  }, 60000);

  afterAll(async () => {
    const userIds = [ids.adminA, ids.memberA, ids.instLeaderA];
    if (ids.departmentId) await prisma.department.deleteMany({ where: { id: ids.departmentId } });
    if (ids.churchId) await prisma.church.deleteMany({ where: { id: ids.churchId } });
    if (ids.regionId) await prisma.region.deleteMany({ where: { id: ids.regionId } });
    await prisma.userRole.deleteMany({ where: { user_id: { in: userIds } } });
    await prisma.user.deleteMany({ where: { id: { in: userIds } } });
    await prisma.department.deleteMany({ where: { institution_id: ids.institutionA } });
    await prisma.institution.deleteMany({ where: { id: ids.institutionA } });
    await app.close();
  }, 60000);

  // ─── Institution ─────────────────────────────────────────────────────────

  const INSTITUTIONS = `query { institutions { id name } }`;
  const UPDATE_INSTITUTION = `
    mutation UpdateInst($id: String!, $data: InstitutionUpdateDto!) {
      updateInstitution(id: $id, data: $data) { id name }
    }
  `;
  const CREATE_INSTITUTION = `
    mutation CreateInst($data: InstitutionCreateDto!) {
      createInstitution(data: $data) { id name }
    }
  `;

  it('Admin can list institutions', async () => {
    const res = await gql(tokenFor(ids.adminA), INSTITUTIONS);
    expect(res.errors).toBeUndefined();
    expect(Array.isArray(res.data!.institutions)).toBe(true);
  });

  it('Admin can update an institution', async () => {
    const res = await gql(tokenFor(ids.adminA), UPDATE_INSTITUTION, {
      id: ids.institutionA,
      data: { name: 'E2E Structure Institution (updated)' },
    });
    expect(res.errors).toBeUndefined();
    expect(res.data!.updateInstitution.name).toBe('E2E Structure Institution (updated)');
  });

  it('Church Member cannot create an institution', async () => {
    const res = await gql(tokenFor(ids.memberA), CREATE_INSTITUTION, {
      data: { name: 'Unauthorized Inst', denomination: 'x', language_preference: 'NL' },
    });
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/permission/i);
  });

  it('Unauthenticated request is rejected', async () => {
    const res = await gql(null, INSTITUTIONS);
    expect(res.errors).toBeDefined();
  });

  // ─── Region ──────────────────────────────────────────────────────────────

  const CREATE_REGION = `
    mutation CreateRegion($data: RegionCreateDto!) {
      createRegion(data: $data) { id name }
    }
  `;
  const UPDATE_REGION = `
    mutation UpdateRegion($id: String!, $data: RegionUpdateDto!) {
      updateRegion(id: $id, data: $data) { id name }
    }
  `;
  const DELETE_REGION = `
    mutation DeleteRegion($id: String!) {
      deleteRegion(id: $id) { id }
    }
  `;

  it('Admin can create a region', async () => {
    const res = await gql(tokenFor(ids.adminA), CREATE_REGION, { data: { name: 'E2E North Region' } });
    expect(res.errors).toBeUndefined();
    ids.regionId = res.data!.createRegion.id;
    expect(ids.regionId).toBeTruthy();
  });

  it('Admin can update a region', async () => {
    const res = await gql(tokenFor(ids.adminA), UPDATE_REGION, {
      id: ids.regionId,
      data: { name: 'E2E North Region (updated)' },
    });
    expect(res.errors).toBeUndefined();
    expect(res.data!.updateRegion.name).toBe('E2E North Region (updated)');
  });

  it('Church Member cannot create a region', async () => {
    const res = await gql(tokenFor(ids.memberA), CREATE_REGION, { data: { name: 'Unauthorized Region' } });
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/permission/i);
  });

  // ─── Church ──────────────────────────────────────────────────────────────

  const CREATE_CHURCH = `
    mutation CreateChurch($data: ChurchCreateDto!) {
      createChurch(data: $data) { id name }
    }
  `;
  const UPDATE_CHURCH = `
    mutation UpdateChurch($id: String!, $data: ChurchUpdateDto!) {
      updateChurch(id: $id, data: $data) { id name }
    }
  `;

  it('Admin can create a church', async () => {
    const res = await gql(tokenFor(ids.adminA), CREATE_CHURCH, {
      data: { name: 'E2E Test Church', institution_id: ids.institutionA },
    });
    expect(res.errors).toBeUndefined();
    ids.churchId = res.data!.createChurch.id;
    expect(ids.churchId).toBeTruthy();
  });

  it('Institutional Leader can update a church', async () => {
    const res = await gql(tokenFor(ids.instLeaderA), UPDATE_CHURCH, {
      id: ids.churchId,
      data: { name: 'E2E Test Church (updated)' },
    });
    expect(res.errors).toBeUndefined();
    expect(res.data!.updateChurch.name).toBe('E2E Test Church (updated)');
  });

  it('Church Member cannot create a church', async () => {
    const res = await gql(tokenFor(ids.memberA), CREATE_CHURCH, {
      data: { name: 'Unauthorized Church', institution_id: ids.institutionA },
    });
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/permission/i);
  });

  // ─── Department ──────────────────────────────────────────────────────────

  const CREATE_DEPARTMENT = `
    mutation CreateDept($data: DepartmentCreateDto!) {
      createDepartment(data: $data) { id name }
    }
  `;
  const UPDATE_DEPARTMENT = `
    mutation UpdateDept($id: String!, $data: DepartmentUpdateDto!) {
      updateDepartment(id: $id, data: $data) { id name }
    }
  `;
  const DELETE_DEPARTMENT = `
    mutation DeleteDept($id: String!) {
      deleteDepartment(id: $id) { id }
    }
  `;

  it('Admin can create a department', async () => {
    const res = await gql(tokenFor(ids.adminA), CREATE_DEPARTMENT, {
      data: { name: 'E2E Youth Ministry', description: 'e2e test department', institution: ids.institutionA },
    });
    expect(res.errors).toBeUndefined();
    ids.departmentId = res.data!.createDepartment.id;
    expect(ids.departmentId).toBeTruthy();
  });

  it('Admin can update a department', async () => {
    const res = await gql(tokenFor(ids.adminA), UPDATE_DEPARTMENT, {
      id: ids.departmentId,
      data: { name: 'E2E Youth Ministry (updated)' },
    });
    expect(res.errors).toBeUndefined();
    expect(res.data!.updateDepartment.name).toBe('E2E Youth Ministry (updated)');
  });

  it('Church Member cannot create a department', async () => {
    const res = await gql(tokenFor(ids.memberA), CREATE_DEPARTMENT, {
      data: { name: 'Unauthorized Dept', description: 'x', institution: ids.institutionA },
    });
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/permission/i);
  });

  it('Admin can delete a department (soft)', async () => {
    const res = await gql(tokenFor(ids.adminA), DELETE_DEPARTMENT, { id: ids.departmentId });
    expect(res.errors).toBeUndefined();
    ids.departmentId = ''; // already deleted
  });

  it('Admin can delete region after use', async () => {
    const res = await gql(tokenFor(ids.adminA), DELETE_REGION, { id: ids.regionId });
    expect(res.errors).toBeUndefined();
    ids.regionId = '';
  });
});
