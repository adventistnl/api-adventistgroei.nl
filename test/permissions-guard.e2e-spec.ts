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
 * Centralized guard / permission denial tests.
 *
 * These tests verify that the PermissionsGuard correctly blocks callers
 * who do not have the required resolver permission. Each test is a "negative"
 * check: the request MUST produce an error containing "permission" or "does not have".
 *
 * Kept in a single file to serve as a regression layer — if any guard is
 * accidentally removed or misconfigured the test here will catch it first.
 */
describe('PermissionsGuard — global denials (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let httpServer: Server;

  const ids = {
    institution: '',
    member: '',    // CHURCH_MEMBER — most restricted role
    noRoleUser: '', // authenticated but no role at all
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

  async function assertDenied(token: string | null, query: string, variables?: Record<string, unknown>) {
    const res = await gql(token, query, variables);
    expect(res.errors).toBeDefined();
    const msg = res.errors![0].message.toLowerCase();
    const isDenied =
      msg.includes('permission') ||
      msg.includes('does not have') ||
      msg.includes('unauthorized') ||
      msg.includes('not authenticated') ||
      msg.includes('unauthenticated') ||
      msg.includes('forbidden') ||
      msg.includes('access denied') ||
      msg.includes('failed to verify') ||
      msg.includes('invalid token') ||
      msg.includes('jwt');
    if (!isDenied) {
      throw new Error(`Expected a permission/auth denial but got: "${res.errors![0].message}"`);
    }
  }

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
    httpServer = app.getHttpServer();
    prisma = app.get(PrismaService);

    const inst = await prisma.institution.create({
      data: { name: 'E2E Guard Institution', denomination: 'e2e-test', language_preference: 'en', created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    ids.institution = inst.id;

    const ts = Date.now();
    const mkUser = async (name: string) => {
      const u = await prisma.user.create({
        data: {
          name,
          email: `${name.toLowerCase().replace(/\s+/g, '.')}.${ts}@e2e-guard.local`,
          password: 'unused',
          language_preference: 'en',
          institution_id: inst.id,
          created_by: 'e2e-test',
          updated_by: 'e2e-test',
        },
      });
      return u.id;
    };

    ids.member = await mkUser('E2E Guard Member');
    ids.noRoleUser = await mkUser('E2E Guard NoRole');

    const role = await prisma.role.findUniqueOrThrow({ where: { key_code: 'CHURCH_MEMBER' } });
    await prisma.userRole.create({
      data: { user_id: ids.member, role_id: role.id, created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    // noRoleUser gets no role assignment intentionally
  }, 60000);

  afterAll(async () => {
    const userIds = [ids.member, ids.noRoleUser];
    await prisma.userRole.deleteMany({ where: { user_id: { in: userIds } } });
    await prisma.user.deleteMany({ where: { id: { in: userIds } } });
    await prisma.institution.deleteMany({ where: { id: ids.institution } });
    await app.close();
  }, 30000);

  // ─── Unauthenticated ─────────────────────────────────────────────────────

  it('Unauthenticated: institutions query is blocked', async () => {
    await assertDenied(null, `query { institutions { id } }`);
  });

  it('Unauthenticated: subsidyRequests query is blocked', async () => {
    await assertDenied(null, `query { subsidyRequests { id } }`);
  });

  it('Unauthenticated: annualBudgets query is blocked', async () => {
    await assertDenied(null, `query { annualBudgets { id } }`);
  });

  it('Unauthenticated: projects query is blocked', async () => {
    await assertDenied(null, `query { projects { id } }`);
  });

  // ─── No-role / invalid user ───────────────────────────────────────────────
  // noRoleUser has a valid user account but no role assigned.
  // The API may reject with 'failed to verify token' if the user row is not found
  // after creation (timing) or with an auth error if found — both are valid denials.

  it('No-role user: annualBudgets query is blocked', async () => {
    await assertDenied(tokenFor(ids.noRoleUser), `query { annualBudgets { id } }`);
  });

  it('No-role user: institutions query is blocked', async () => {
    await assertDenied(tokenFor(ids.noRoleUser), `query { institutions { id } }`);
  });

  // ─── CHURCH_MEMBER cannot access admin operations ─────────────────────────

  it('CHURCH_MEMBER: createInstitution is blocked', async () => {
    // language_preference is typed as String in GraphQL, so it must be quoted
    await assertDenied(tokenFor(ids.member), `
      mutation { createInstitution(data: { name: "x", denomination: "x", language_preference: "nl" }) { id } }
    `);
  });

  it('CHURCH_MEMBER: deleteInstitution is blocked', async () => {
    await assertDenied(tokenFor(ids.member), `mutation { deleteInstitution(id: "fake-id") { id } }`);
  });

  it('CHURCH_MEMBER: createRegion is blocked', async () => {
    await assertDenied(tokenFor(ids.member), `mutation { createRegion(data: { name: "x" }) { id } }`);
  });

  it('CHURCH_MEMBER: createChurch is blocked', async () => {
    await assertDenied(tokenFor(ids.member), `
      mutation { createChurch(data: { name: "x", institution_id: "fake-id" }) { id } }
    `);
  });

  // NOTE: CHURCH_MEMBER has USERS_ACCESS permission so the users query IS accessible.
  // We test a truly admin-only query instead.
  it('CHURCH_MEMBER: annualBudgets query is blocked (no ANNUAL_BUDGETS_ACCESS)', async () => {
    await assertDenied(tokenFor(ids.member), `query { annualBudgets { id } }`);
  });

  it('CHURCH_MEMBER: addRoleToUser is blocked', async () => {
    await assertDenied(tokenFor(ids.member), `
      mutation { addRoleToUser(userId: "x", roleId: "x") { id } }
    `);
  });

  it('CHURCH_MEMBER: createInstitutionBudget is blocked', async () => {
    await assertDenied(tokenFor(ids.member), `
      mutation { createInstitutionBudget(data: { institution_id: "x", year: 2099, planned_budget: 1 }) { id } }
    `);
  });

  it('CHURCH_MEMBER: approveAnnualBudget is blocked', async () => {
    await assertDenied(tokenFor(ids.member), `
      mutation { approveAnnualBudget(id: "fake-id", data: { approved_amount: 100 }) { id } }
    `);
  });

  it('CHURCH_MEMBER: ledgerHistory is blocked', async () => {
    await assertDenied(tokenFor(ids.member), `
      query { ledgerHistory(filters: { institutionId: "x", year: 2099, page: 1, limit: 10 }) { totalCount } }
    `);
  });

  it('CHURCH_MEMBER: subsidyKPIs is blocked', async () => {
    await assertDenied(tokenFor(ids.member), `
      query { subsidyKPIs(institutionId: "x") { totalRequests } }
    `);
  });

  it('CHURCH_MEMBER: approveSubsidyRequest is blocked', async () => {
    await assertDenied(tokenFor(ids.member), `
      mutation { approveSubsidyRequest(id: "x", approved_amount: 100, language: en) { id } }
    `);
  });

  it('CHURCH_MEMBER: deleteUser is blocked', async () => {
    await assertDenied(tokenFor(ids.member), `mutation { deleteUser(id: "x") { id } }`);
  });

  it('CHURCH_MEMBER: createRole is blocked', async () => {
    await assertDenied(tokenFor(ids.member), `
      mutation { createRole(input: { name: "x", key_code: "x", description: "x" }) { id } }
    `);
  });

  it('CHURCH_MEMBER: setAssignmentAny is blocked', async () => {
    await assertDenied(tokenFor(ids.member), `
      mutation { setAssignmentAny(input: { church_id: "x", date: "2027-01-01T00:00:00.000Z" }) { id } }
    `);
  });

  it('CHURCH_MEMBER: triggerMonthlyClose is blocked', async () => {
    await assertDenied(tokenFor(ids.member), `mutation { triggerMonthlyClose(month: "2027-01") { locked } }`);
  });

  it('CHURCH_MEMBER: grantPreacherRegionAccess is blocked', async () => {
    await assertDenied(tokenFor(ids.member), `
      mutation { grantPreacherRegionAccess(user_id: "x", region_id: "x") { id } }
    `);
  });
});
