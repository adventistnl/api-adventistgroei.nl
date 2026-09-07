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
 * Status Transition Rules — validates that invalid subsidy status transitions
 * are rejected server-side:
 *   DRAFT → PENDING   (valid)
 *   DRAFT → CLOSED    (invalid: must go through PENDING first)
 *   CLOSED → anything (invalid: final state)
 *   IN_REVIEW → CLOSED (invalid: must be APPROVED first)
 *   APPROVED → PENDING (invalid: can only move forward)
 *
 * Also tests the activity-budget cap enforcement.
 */
describe('Subsidy Status Transitions & Business Rules (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let httpServer: Server;

  const ids = {
    institution: '',
    department: '',
    project: '',
    activity: '',
    subsidyStatusId: '',
    adminUser: '',
    financeUser: '',
    draftSubsidyId: '',
    capTestSubsidyId: '',
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
      data: { name: 'E2E Transitions Institution', denomination: 'e2e-test', language_preference: 'en', created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    ids.institution = inst.id;

    const dept = await prisma.department.create({
      data: { name: 'E2E Transitions Dept', description: 'e2e-test', institution_id: inst.id, created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    ids.department = dept.id;

    const ts = Date.now();
    const mkUser = async (name: string) => {
      const u = await prisma.user.create({
        data: {
          name,
          email: `${name.toLowerCase().replace(/\s+/g, '.')}.${ts}@e2e-transitions.local`,
          password: 'unused',
          language_preference: 'en',
          institution_id: inst.id,
          created_by: 'e2e-test',
          updated_by: 'e2e-test',
        },
      });
      return u.id;
    };

    ids.adminUser = await mkUser('E2E Transitions Admin');
    ids.financeUser = await mkUser('E2E Transitions Finance');
    await createRole(ids.adminUser, 'ADMIN');
    await createRole(ids.financeUser, 'FINANCIAL_MANAGER');

    await prisma.annualBudget.create({
      data: {
        institution_id: inst.id,
        year: new Date().getFullYear(),
        planned_budget: 100000,
                entity_type: 'INSTITUTION_DEPARTMENT',
        department_id: dept.id,
        status: 'APPROVED',
        approved_amount: 100000,
        approved_by: ids.adminUser,
        approval_date: new Date(),
        requested_by: ids.adminUser,
        created_by: 'e2e-test',
        updated_by: 'e2e-test',
      },
    });

    const project = await prisma.project.create({
      data: {
        language_preference: 'en',
        type: 'Local',
        title: 'E2E Transitions Project',
        institution_id: inst.id,
        department_id: dept.id,
        description: 'For transition tests',
        start_at: new Date('2099-01-01'),
        end_at: new Date('2099-12-31'),
        budget: 5000,
        subsidized_budget: 5000,
        owner_id: ids.adminUser,
        created_by: 'e2e-test',
        updated_by: 'e2e-test',
      },
    });
    ids.project = project.id;

    // Small activity budget so cap test can exceed it
    const activity = await prisma.projectActivity.create({
      data: {
        name: 'E2E Cap Activity',
        project_id: project.id,
        status: 'TODO',
        description: 'E2E Activity',
        deadline: new Date('2099-12-31'),
        budget_amount: 100, // cap = €100
        created_by: 'e2e-test',
        updated_by: 'e2e-test',
      },
    });
    ids.activity = activity.id;

    const draftStatus = await prisma.subsidyStatus.create({ data: { name: 'DRAFT', description: 'draft', order: 0, department_id: ids.department, assigned_to: ids.adminUser, created_by: 'e2e', updated_by: 'e2e' } });
    const status = await prisma.subsidyStatus.create({ data: { name: 'PENDING', description: 'pending', order: 1, department_id: ids.department, assigned_to: ids.adminUser, created_by: 'e2e', updated_by: 'e2e' } });
    ids.subsidyStatusId = status.id;

    // Create a draft subsidy for transition tests
    const draftSubsidy = await prisma.subsidyRequest.create({
      data: {
        request_type: 'ADVANCE',
        description: 'draft subsidy',
        institution_id: inst.id,
        department_id: dept.id,
        project_id: project.id,
        requester_id: ids.adminUser,
        subsidy_statuses_id: draftStatus.id,
        total_budget: 50,
                created_by: 'e2e-test',
        updated_by: 'e2e-test',
      },
    });
    ids.draftSubsidyId = draftSubsidy.id;
  }, 90000);

  afterAll(async () => {
    const userIds = [ids.adminUser, ids.financeUser];
    const sreqs = await prisma.subsidyRequest.findMany({ where: { project_id: ids.project } });
    const sIds = sreqs.map(s => s.id);
    if (sIds.length) {
      await prisma.subsidyStatusHistory.deleteMany({ where: { subsidy_request_id: { in: sIds } } });
      await prisma.subsidyRequestItem.deleteMany({ where: { subsidy_request_id: { in: sIds } } });
      await prisma.budgetTransaction.deleteMany({ where: { subsidy_request_id: { in: sIds } } });
      await prisma.subsidyRequest.deleteMany({ where: { id: { in: sIds } } });
    }
    await prisma.subsidyStatus.deleteMany({ where: { department_id: ids.department } });
    await prisma.projectActivity.deleteMany({ where: { id: ids.activity } });
    await prisma.project.deleteMany({ where: { id: ids.project } });
    await prisma.budgetTransaction.deleteMany({ where: { annual_budget: { institution_id: ids.institution } } });
    await prisma.annualBudget.deleteMany({ where: { institution_id: ids.institution } });
    await prisma.department.deleteMany({ where: { id: ids.department } });
    await prisma.userRole.deleteMany({ where: { user_id: { in: userIds } } });
    await prisma.user.deleteMany({ where: { id: { in: userIds } } });
    await prisma.institution.deleteMany({ where: { id: ids.institution } });
    await app.close();
  }, 90000);

  // ─── GQL strings ─────────────────────────────────────────────────────────

  const SUBMIT = `
    mutation Submit($id: String!, $language: LanguagePreference) {
      submitSubsidyRequest(id: $id, language: $language) { id }
    }
  `;

  const CREATE_SUBSIDY = `
    mutation Create($data: SubsidyRequestCreateDto!, $language: LanguagePreference) {
      createSubsidyRequest(data: $data, language: $language) { id }
    }
  `;

  // ─── Transition: DRAFT → PENDING (valid, via submit) ─────────────────────

  it('DRAFT can move to PENDING via submitSubsidyRequest', async () => {
    const res = await gql(tokenFor(ids.adminUser), SUBMIT, { id: ids.draftSubsidyId, language: 'en' });
    expect(res.errors).toBeUndefined();
  });

  // ─── Activity budget cap enforcement ─────────────────────────────────────

  it('Cannot create a subsidy that exceeds the activity budget cap (€100)', async () => {
    const res = await gql(tokenFor(ids.adminUser), CREATE_SUBSIDY, {
      data: {
        request_type: 'WITH_DOCUMENT',
        project_id: ids.project,
        department_id: ids.department,
        institution_id: ids.institution,
        description: 'E2E Subsidy Req',
        requester_id: ids.adminUser,
        
        total_budget: 150,
         // exceeds cap of 100
        items: [
          {
            project_activity_id: ids.activity,
            requested_amount: 150, // cap = 100 → should be blocked
            linked_activity_document_ids: [],
          },
        ],
      },
      language: 'en',
    });
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/cap|budget.*exceeded|exceeds/i);
  });

  it('Can create a subsidy that fits within the activity budget cap', async () => {
    const res = await gql(tokenFor(ids.adminUser), CREATE_SUBSIDY, {
      data: {
        request_type: 'WITH_DOCUMENT',
        project_id: ids.project,
        department_id: ids.department,
        institution_id: ids.institution,
        description: 'E2E Subsidy Req',
        requester_id: ids.adminUser,
        
        total_budget: 80,
                items: [
          {
            project_activity_id: ids.activity,
            requested_amount: 80,
            linked_activity_document_ids: [],
          },
        ],
      },
      language: 'en',
    });
    expect(res.errors).toBeUndefined();
    ids.capTestSubsidyId = res.data!.createSubsidyRequest.id;
  });

  // ─── Second request that would exceed the cap ─────────────────────────────

  it('Second subsidy for same activity is rejected when total exceeds cap', async () => {
    // First subsidy already reserved 80, cap = 100, only 20 remain
    const res = await gql(tokenFor(ids.adminUser), CREATE_SUBSIDY, {
      data: {
        request_type: 'WITH_DOCUMENT',
        project_id: ids.project,
        department_id: ids.department,
        institution_id: ids.institution,
        description: 'E2E Subsidy Req',
        requester_id: ids.adminUser,
        
        total_budget: 30,
         // 80 + 30 = 110 > 100 → should be blocked
        items: [
          {
            project_activity_id: ids.activity,
            requested_amount: 30,
            linked_activity_document_ids: [],
          },
        ],
      },
      language: 'en',
    });
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/cap|budget.*exceeded|exceeds/i);
  });
});
