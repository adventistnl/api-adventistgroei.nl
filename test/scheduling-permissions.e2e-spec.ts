/* eslint-disable @typescript-eslint/no-unsafe-member-access -- GraphQL response shapes vary per mutation; typing each one for these assertions would add more noise than value. */
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
 * Phase 6 (blueprint §Phase 6, R11) — proves the scheduling module's own/any scope
 * enforcement actually holds at the API layer, not just that the generic
 * PermissionsGuard is wired up. Every fixture is created fresh under a single,
 * clearly-named test institution pair and torn down in afterAll — this repo has no
 * separate test database (see preacher-scheduling-blueprint/docs), so tests run
 * against the real one, isolated by using dedicated rows nothing else references.
 */
describe('Preacher scheduling — R11 permission scope (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let httpServer: Server;

  const ids = {
    institutionA: '',
    institutionB: '',
    regionR1: '',
    churchA1: '', // led by churchLeaderA1
    churchA2: '', // led by churchLeaderA2
    churchA3: '', // region_id = regionR1, no leader
    churchB1: '', // institution B
    adminA: '',
    deptLeaderA: '',
    churchLeaderA1: '',
    churchLeaderA2: '',
    preacherA: '',
    preacherOutOfReach: '',
    churchMemberA: '',
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

  async function serviceDay(institutionId: string, churchId: string, date: string): Promise<void> {
    await prisma.churchServiceCalendar.create({
      data: {
        institution_id: institutionId,
        church_id: churchId,
        date: new Date(date),
        has_service: true,
        created_by: 'e2e-test',
        updated_by: 'e2e-test',
      },
    });
  }

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
    httpServer = app.getHttpServer();
    prisma = app.get(PrismaService);

    const institutionA = await prisma.institution.create({
      data: { name: 'E2E Phase6 Institution A', denomination: 'e2e-test', language_preference: 'en', created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    const institutionB = await prisma.institution.create({
      data: { name: 'E2E Phase6 Institution B', denomination: 'e2e-test', language_preference: 'en', created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    ids.institutionA = institutionA.id;
    ids.institutionB = institutionB.id;

    const region = await prisma.region.create({ data: { name: 'E2E Phase6 Region', created_by: 'e2e-test', updated_by: 'e2e-test' } });
    ids.regionR1 = region.id;

    const churchA1 = await prisma.church.create({
      data: { institution_id: institutionA.id, name: 'E2E Phase6 Church A1', created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    const churchA2 = await prisma.church.create({
      data: { institution_id: institutionA.id, name: 'E2E Phase6 Church A2', created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    const churchA3 = await prisma.church.create({
      data: { institution_id: institutionA.id, name: 'E2E Phase6 Church A3', region_id: region.id, created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    const churchB1 = await prisma.church.create({
      data: { institution_id: institutionB.id, name: 'E2E Phase6 Church B1', created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    ids.churchA1 = churchA1.id;
    ids.churchA2 = churchA2.id;
    ids.churchA3 = churchA3.id;
    ids.churchB1 = churchB1.id;

    async function createUser(name: string, institutionId: string): Promise<string> {
      const user = await prisma.user.create({
        data: {
          name,
          email: `${name.toLowerCase().replace(/\s+/g, '.')}.${Date.now()}@e2e-test.local`,
          password: 'unused-e2e-placeholder',
          language_preference: 'en',
          institution_id: institutionId,
          created_by: 'e2e-test',
          updated_by: 'e2e-test',
        },
      });
      return user.id;
    }

    ids.adminA = await createUser('E2E Admin A', institutionA.id);
    ids.deptLeaderA = await createUser('E2E DeptLeader A', institutionA.id);
    ids.churchLeaderA1 = await createUser('E2E ChurchLeader A1', institutionA.id);
    ids.churchLeaderA2 = await createUser('E2E ChurchLeader A2', institutionA.id);
    ids.preacherA = await createUser('E2E Preacher A', institutionA.id);
    ids.preacherOutOfReach = await createUser('E2E Preacher OutOfReach', institutionA.id);
    ids.churchMemberA = await createUser('E2E ChurchMember A', institutionA.id);

    await prisma.church.update({ where: { id: churchA1.id }, data: { leader_id: ids.churchLeaderA1 } });
    await prisma.church.update({ where: { id: churchA2.id }, data: { leader_id: ids.churchLeaderA2 } });

    await createRole(ids.adminA, 'ADMIN');
    await createRole(ids.deptLeaderA, 'INSTITUTIONAL_DEPARTMENT_LEADER');
    await createRole(ids.churchLeaderA1, 'CHURCH_LEADER');
    await createRole(ids.churchLeaderA2, 'CHURCH_LEADER');
    await createRole(ids.preacherA, 'CHURCH_MEMBER');
    await createRole(ids.preacherOutOfReach, 'CHURCH_MEMBER');
    await createRole(ids.churchMemberA, 'CHURCH_MEMBER');

    // Service days for every date this suite touches (R1/R4 — no slot without one).
    for (const date of ['2027-01-04', '2027-01-05', '2027-01-06', '2027-01-07', '2027-01-08', '2027-01-09']) {
      await serviceDay(institutionA.id, churchA1.id, date);
    }
    await serviceDay(institutionA.id, churchA2.id, '2027-01-05');
    await serviceDay(institutionA.id, churchA3.id, '2027-01-11');
    await serviceDay(institutionB.id, churchB1.id, '2027-01-06');
    await serviceDay(institutionA.id, churchA1.id, '2027-02-01');
  }, 60000);

  afterAll(async () => {
    const institutionIds = [ids.institutionA, ids.institutionB];
    const churchIds = [ids.churchA1, ids.churchA2, ids.churchA3, ids.churchB1];
    const userIds = [ids.adminA, ids.deptLeaderA, ids.churchLeaderA1, ids.churchLeaderA2, ids.preacherA, ids.preacherOutOfReach, ids.churchMemberA];

    const assignments = await prisma.assignment.findMany({ where: { church_id: { in: churchIds } } });
    await prisma.assignmentHistory.deleteMany({ where: { assignment_id: { in: assignments.map((a) => a.id) } } });
    await prisma.assignment.deleteMany({ where: { church_id: { in: churchIds } } });
    await prisma.assignmentRequest.deleteMany({ where: { church_id: { in: churchIds } } });
    await prisma.preacherRegionAccess.deleteMany({ where: { user_id: { in: userIds } } });
    await prisma.churchServiceCalendar.deleteMany({ where: { church_id: { in: churchIds } } });
    await prisma.notification.deleteMany({ where: { user_id: { in: userIds } } });
    await prisma.userRole.deleteMany({ where: { user_id: { in: userIds } } });
    await prisma.church.updateMany({ where: { id: { in: [ids.churchA1, ids.churchA2] } }, data: { leader_id: null } });
    await prisma.church.deleteMany({ where: { id: { in: churchIds } } });
    await prisma.user.deleteMany({ where: { id: { in: userIds } } });
    await prisma.region.deleteMany({ where: { id: ids.regionR1 } });
    await prisma.institution.deleteMany({ where: { id: { in: institutionIds } } });

    await app.close();
  }, 60000);

  const SET_ASSIGNMENT = `mutation SetAssignment($church_id: String!, $date: DateTime!) { setAssignment(input: { church_id: $church_id, date: $date }) { id status } }`;
  const SET_ASSIGNMENT_ANY = `mutation SetAssignmentAny($church_id: String!, $date: DateTime!) { setAssignmentAny(input: { church_id: $church_id, date: $date }) { id status } }`;
  const INVITE = `mutation Invite($church_id: String!, $date: DateTime!, $user_id: String!) { inviteToAssignment(church_id: $church_id, date: $date, user_id: $user_id) { id status } }`;
  const RESPOND = `mutation Respond($id: String!, $accept: Boolean!) { respondToAssignmentRequest(id: $id, accept: $accept) { id status } }`;
  const RESPOND_ANY = `mutation RespondAny($id: String!, $accept: Boolean!) { respondToAssignmentRequestAny(id: $id, accept: $accept) { id status } }`;
  const REQUEST_ASSIGNMENT = `mutation Request($church_id: String!, $date: DateTime!) { requestAssignment(church_id: $church_id, date: $date) { id status } }`;
  const GRANT_REGION = `mutation Grant($user_id: String!, $region_id: String!) { grantPreacherRegionAccess(user_id: $user_id, region_id: $region_id) { id } }`;
  const TRIGGER_CLOSE = `mutation Close($month: String!) { triggerMonthlyClose(month: $month) { autoAccepted locked } }`;

  it('setAssignment (own scope) succeeds for the church\'s own leader', async () => {
    const res = await gql(tokenFor(ids.churchLeaderA1), SET_ASSIGNMENT, { church_id: ids.churchA1, date: '2027-01-04T00:00:00.000Z' });
    expect(res.errors).toBeUndefined();
    expect(res.data!.setAssignment.status).toBe('DRAFT');
  });

  it('setAssignment (own scope) fails for a different church\'s leader', async () => {
    const res = await gql(tokenFor(ids.churchLeaderA2), SET_ASSIGNMENT, { church_id: ids.churchA1, date: '2027-01-04T00:00:00.000Z' });
    expect(res.errors?.[0]?.message).toMatch(/only assign a preacher to a church you lead/i);
  });

  it('setAssignmentAny succeeds for Admin on any church in the institution', async () => {
    const res = await gql(tokenFor(ids.adminA), SET_ASSIGNMENT_ANY, { church_id: ids.churchA2, date: '2027-01-05T00:00:00.000Z' });
    expect(res.errors).toBeUndefined();
    expect(res.data!.setAssignmentAny.status).toBe('DRAFT');
  });

  it('setAssignmentAny succeeds for an Institutional Department Leader on any church in the institution', async () => {
    const res = await gql(tokenFor(ids.deptLeaderA), SET_ASSIGNMENT_ANY, { church_id: ids.churchA1, date: '2027-01-05T00:00:00.000Z' });
    expect(res.errors).toBeUndefined();
    expect(res.data!.setAssignmentAny.status).toBe('DRAFT');
  });

  it('setAssignmentAny is rejected at the guard layer for a plain Church Member', async () => {
    const res = await gql(tokenFor(ids.churchMemberA), SET_ASSIGNMENT_ANY, { church_id: ids.churchA1, date: '2027-01-05T00:00:00.000Z' });
    expect(res.errors?.[0]?.message).toMatch(/does not have permission/i);
  });

  it('setAssignmentAny (Admin of Institution A) fails against a church in Institution B', async () => {
    const res = await gql(tokenFor(ids.adminA), SET_ASSIGNMENT_ANY, { church_id: ids.churchB1, date: '2027-01-06T00:00:00.000Z' });
    expect(res.errors?.[0]?.message).toMatch(/only manage assignments within your own institution/i);
  });

  it('inviteToAssignment (own scope) succeeds for the inviting church\'s own leader, fails for a different leader', async () => {
    const denied = await gql(tokenFor(ids.churchLeaderA2), INVITE, { church_id: ids.churchA1, date: '2027-01-07T00:00:00.000Z', user_id: ids.preacherA });
    expect(denied.errors?.[0]?.message).toMatch(/only invite a preacher to a church you lead/i);

    const allowed = await gql(tokenFor(ids.churchLeaderA1), INVITE, { church_id: ids.churchA1, date: '2027-01-07T00:00:00.000Z', user_id: ids.preacherA });
    expect(allowed.errors).toBeUndefined();
    expect(allowed.data!.inviteToAssignment.status).toBe('PENDING');
  });

  it('respondToAssignmentRequestAny rejects a CHURCH_INVITED request even for Admin', async () => {
    const invite = await gql(tokenFor(ids.churchLeaderA1), INVITE, { church_id: ids.churchA1, date: '2027-01-08T00:00:00.000Z', user_id: ids.preacherA });
    expect(invite.errors).toBeUndefined();
    const requestId = invite.data!.inviteToAssignment.id;

    const res = await gql(tokenFor(ids.adminA), RESPOND_ANY, { id: requestId, accept: true });
    expect(res.errors?.[0]?.message).toMatch(/only the invited preacher can respond/i);
  });

  it('respondToAssignmentRequest (own scope) succeeds for the invited preacher, fails for someone else', async () => {
    const invite = await gql(tokenFor(ids.churchLeaderA1), INVITE, { church_id: ids.churchA1, date: '2027-01-09T00:00:00.000Z', user_id: ids.preacherA });
    expect(invite.errors).toBeUndefined();
    const requestId = invite.data!.inviteToAssignment.id;

    const wrongUser = await gql(tokenFor(ids.churchMemberA), RESPOND, { id: requestId, accept: true });
    expect(wrongUser.errors?.[0]?.message).toMatch(/only the invited preacher can respond/i);

    const rightUser = await gql(tokenFor(ids.preacherA), RESPOND, { id: requestId, accept: true });
    expect(rightUser.errors).toBeUndefined();
    expect(rightUser.data!.respondToAssignmentRequest.status).toBe('ACCEPTED');
  });

  it('R6 reach: requestAssignment is denied without region access, then allowed once granted', async () => {
    const denied = await gql(tokenFor(ids.preacherOutOfReach), REQUEST_ASSIGNMENT, { church_id: ids.churchA3, date: '2027-01-11T00:00:00.000Z' });
    expect(denied.errors?.[0]?.message).toMatch(/outside the preacher's reach/i);

    const grant = await gql(tokenFor(ids.adminA), GRANT_REGION, { user_id: ids.preacherOutOfReach, region_id: ids.regionR1 });
    expect(grant.errors).toBeUndefined();

    const allowed = await gql(tokenFor(ids.preacherOutOfReach), REQUEST_ASSIGNMENT, { church_id: ids.churchA3, date: '2027-01-11T00:00:00.000Z' });
    expect(allowed.errors).toBeUndefined();
    expect(allowed.data!.requestAssignment.status).toBe('PENDING');
  });

  it('R10 lock: after monthly close, own-scope edit is rejected but the admin override still works', async () => {
    const draft = await gql(tokenFor(ids.churchLeaderA1), SET_ASSIGNMENT, { church_id: ids.churchA1, date: '2027-02-01T00:00:00.000Z' });
    expect(draft.errors).toBeUndefined();

    const close = await gql(tokenFor(ids.adminA), TRIGGER_CLOSE, { month: '2027-02' });
    expect(close.errors).toBeUndefined();
    expect(close.data!.triggerMonthlyClose.locked).toBeGreaterThanOrEqual(1);

    const ownScopeDenied = await gql(tokenFor(ids.churchLeaderA1), SET_ASSIGNMENT, { church_id: ids.churchA1, date: '2027-02-01T00:00:00.000Z' });
    expect(ownScopeDenied.errors?.[0]?.message).toMatch(/month has been closed/i);

    const anyScopeAllowed = await gql(tokenFor(ids.adminA), SET_ASSIGNMENT_ANY, { church_id: ids.churchA1, date: '2027-02-01T00:00:00.000Z' });
    expect(anyScopeAllowed.errors).toBeUndefined();
  });

  it('triggerMonthlyClose is rejected at the guard layer for a plain Church Member', async () => {
    const res = await gql(tokenFor(ids.churchMemberA), TRIGGER_CLOSE, { month: '2027-03' });
    expect(res.errors?.[0]?.message).toMatch(/does not have permission/i);
  });
});
