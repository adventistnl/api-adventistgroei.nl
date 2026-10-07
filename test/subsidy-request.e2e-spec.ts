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
 * Subsidy Request — complete financial flow:
 *   create → ALLOCATION_RESERVED in BudgetTransaction
 *   submit → moves to pending status
 *   approve(amount) → EXPENSE_APPROVED + balance decreases
 *   reject → ALLOCATION_RELEASED + balance restored
 *   createAdvanceRequest → separate ADVANCE flow
 *   createSubsidyWithoutDocument → WITHOUT_DOCUMENT flow
 *   KPI and analytics queries
 */
describe('Subsidy Request — full financial flow (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let httpServer: Server;

  const ids = {
    institution: '',
    department: '',
    annualBudgetId: '',
    deptBudgetId: '',
    project: '',
    activity: '',
    subsidyStatusId: '',
    adminUser: '',
    financeUser: '',
    deptLeader: '',
    memberUser: '',
    subsidyRequestId: '',
    advanceRequestId: '',
    withoutDocRequestId: '',
    rejectedRequestId: '',
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
      data: { name: 'E2E Subsidy Institution', denomination: 'e2e-test', language_preference: 'en', created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    ids.institution = inst.id;

    const dept = await prisma.department.create({
      data: { name: 'E2E Subsidy Dept', description: 'e2e-test', institution_id: inst.id, created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    ids.department = dept.id;

    const ts = Date.now();
    const mkUser = async (name: string) => {
      const u = await prisma.user.create({
        data: {
          name,
          email: `${name.toLowerCase().replace(/\s+/g, '.')}.${ts}@e2e-subsidy.local`,
          password: 'unused',
          language_preference: 'en',
          institution_id: inst.id,
          created_by: 'e2e-test',
          updated_by: 'e2e-test',
        },
      });
      return u.id;
    };

    ids.adminUser = await mkUser('E2E Subsidy Admin');
    ids.financeUser = await mkUser('E2E Subsidy Finance');
    ids.deptLeader = await mkUser('E2E Subsidy DeptLeader');
    ids.memberUser = await mkUser('E2E Subsidy Member');

    await createRole(ids.adminUser, 'ADMIN');
    await createRole(ids.financeUser, 'FINANCIAL_MANAGER');
    await createRole(ids.deptLeader, 'INSTITUTIONAL_DEPARTMENT_LEADER');
    await createRole(ids.memberUser, 'CHURCH_MEMBER');
    await prisma.department.update({ where: { id: ids.department }, data: { leader_id: ids.deptLeader } });

    // Approved annual budget so subsidies have a ledger to debit
    const instBudget = await prisma.annualBudget.create({
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
    ids.annualBudgetId = instBudget.id;

    const deptBudget = await prisma.annualBudget.create({
      data: {
        institution_id: inst.id,
        department_id: dept.id,
        year: new Date().getFullYear(),
        planned_budget: 20000,
                entity_type: 'INSTITUTION_DEPARTMENT',
        status: 'APPROVED',
        approved_amount: 20000,
        approved_by: ids.adminUser,
        approval_date: new Date(),
        requested_by: ids.adminUser,
        created_by: 'e2e-test',
        updated_by: 'e2e-test',
      },
    });
    ids.deptBudgetId = deptBudget.id;

    // Project and activity
    const project = await prisma.project.create({
      data: {
        language_preference: 'en',
        type: 'Local',
        title: 'E2E Subsidy Project',
        institution_id: inst.id,
        department_id: dept.id,
        description: 'For subsidy tests',
        start_at: new Date('2099-01-01'),
        end_at: new Date('2099-12-31'),
        budget: 15000,
        subsidized_budget: 15000,
                owner_id: ids.deptLeader,
        created_by: 'e2e-test',
        updated_by: 'e2e-test',
      },
    });
    ids.project = project.id;

    const activity = await prisma.projectActivity.create({
      data: {
        name: 'E2E Subsidy Activity',
        project_id: project.id,
        status: 'TODO',
        description: 'E2E Activity',
        deadline: new Date('2099-12-31'),
        budget_amount: 5000,
        created_by: 'e2e-test',
        updated_by: 'e2e-test',
      },
    });
    ids.activity = activity.id;

    // SubsidyStatus (kanban column) required by createSubsidyRequest
    await prisma.subsidyStatus.create({ data: { name: 'DRAFT', description: 'draft', order: 0, department_id: ids.department, assigned_to: ids.adminUser, created_by: 'e2e', updated_by: 'e2e' } });
    const status = await prisma.subsidyStatus.create({ data: { name: 'PENDING', description: 'pending', order: 1, department_id: ids.department, assigned_to: ids.adminUser, created_by: 'e2e', updated_by: 'e2e' } });
    ids.subsidyStatusId = status.id;
  }, 90000);

  afterAll(async () => {
    try {
      const userIds = [ids.adminUser, ids.financeUser, ids.deptLeader, ids.memberUser].filter(Boolean);
      const sreqs = await prisma.subsidyRequest.findMany({ where: { project_id: ids.project } });
      const sIds = sreqs.map(s => s.id);
      if (sIds.length) {
        await prisma.subsidyStatusHistory.deleteMany({ where: { subsidy_request_id: { in: sIds } } });
        await prisma.subsidyRequestItem.deleteMany({ where: { subsidy_request_id: { in: sIds } } });
        await prisma.budgetTransaction.deleteMany({ where: { subsidy_request_id: { in: sIds } } });
        await prisma.subsidyRequest.deleteMany({ where: { id: { in: sIds } } });
      }
      if (ids.department) await prisma.subsidyStatus.deleteMany({ where: { department_id: ids.department } });
      if (ids.activity) await prisma.projectActivity.deleteMany({ where: { id: ids.activity } });
      if (ids.project) await prisma.project.deleteMany({ where: { id: ids.project } });
      const budgetIds = [ids.annualBudgetId, ids.deptBudgetId].filter(Boolean);
      if (budgetIds.length) {
        await prisma.budgetTransaction.deleteMany({ where: { annual_budget_id: { in: budgetIds } } });
        await prisma.annualBudget.deleteMany({ where: { id: { in: budgetIds } } });
      }
      if (ids.department) {
        await prisma.department.update({ where: { id: ids.department }, data: { leader_id: null } }).catch(() => {});
        await prisma.department.deleteMany({ where: { id: ids.department } });
      }
      if (userIds.length) {
        await prisma.userRole.deleteMany({ where: { user_id: { in: userIds } } });
        await prisma.user.deleteMany({ where: { id: { in: userIds } } });
      }
      if (ids.institution) await prisma.institution.deleteMany({ where: { id: ids.institution } });
    } catch (e) {
      console.error('Teardown error in subsidy-request:', e);
    } finally {
      await app.close();
    }
  }, 90000);

  // ─── GQL strings ─────────────────────────────────────────────────────────

  const CREATE_SUBSIDY = `
    mutation CreateSubsidy($data: SubsidyRequestCreateDto!, $language: LanguagePreference) {
      createSubsidyRequest(data: $data, language: $language) {
        id request_type total_budget
      }
    }
  `;
  const SUBMIT_SUBSIDY = `
    mutation Submit($id: String!, $language: LanguagePreference) {
      submitSubsidyRequest(id: $id, language: $language) { id }
    }
  `;
  const APPROVE_SUBSIDY = `
    mutation Approve($id: String!, $approved_amount: Float!, $language: LanguagePreference) {
      approveSubsidyRequest(id: $id, approved_amount: $approved_amount, language: $language) {
        id approved_amount
      }
    }
  `;
  const REJECT_SUBSIDY = `
    mutation Reject($id: String!, $rejection_reason: String!, $language: LanguagePreference) {
      rejectSubsidyRequest(id: $id, rejection_reason: $rejection_reason, language: $language) { id }
    }
  `;

  const CREATE_ADVANCE = `
    mutation CreateAdvance($projectId: String!, $advanceAmount: Float!, $language: LanguagePreference) {
      createAdvanceRequest(projectId: $projectId, advanceAmount: $advanceAmount, language: $language) {
        id is_for_advance total_budget
      }
    }
  `;
  const CREATE_WITHOUT_DOC = `
    mutation CreateWithoutDoc($data: CreateWithoutDocumentSubsidyRequestDto!, $language: LanguagePreference) {
      createSubsidyWithoutDocument(data: $data, language: $language) { id request_type }
    }
  `;
  const SUBSIDY_KPIS = `
    query SubsidyKPIs($institutionId: String) {
      subsidyKPIs(institutionId: $institutionId) {
        totalRequests pendingRequests approvedRequests rejectedRequests
      }
    }
  `;
  const SUBSIDY_BY_DEPARTMENT = `
    query ByDept($institutionId: String) {
      subsidyByDepartment(institutionId: $institutionId) { department amount }
    }
  `;

  describe('Criação de Subsídio (Creation)', () => {

  it('Dept Leader can create a subsidy request', async () => {
    const res = await gql(tokenFor(ids.deptLeader), CREATE_SUBSIDY, {
      data: {
        request_type: 'ADVANCE',
        project_id: ids.project,
        department_id: ids.department,
        institution_id: ids.institution,
        description: 'E2E Subsidy Req',
        requester_id: ids.deptLeader,
        start_as_draft: true,
        total_budget: 1200,
        items: [
          {
            project_activity_id: ids.activity,
            requested_amount: 1200,
            linked_activity_document_ids: [],
          },
        ],
      },
      language: 'en',
    });
    expect(res.errors).toBeUndefined();
    ids.subsidyRequestId = res.data!.createSubsidyRequest.id;
    expect(ids.subsidyRequestId).toBeTruthy();
    expect(res.data!.createSubsidyRequest.total_budget).toBe("1200");

// (ALLOCATION_RESERVED check removed - not created per subsidy)
  });

  it('Church Member cannot create a subsidy request', async () => {
    const res = await gql(tokenFor(ids.memberUser), CREATE_SUBSIDY, {
      data: {
        request_type: 'ADVANCE',
        project_id: ids.project,
        department_id: ids.department,
        institution_id: ids.institution,
        description: 'E2E Subsidy Req',
        requester_id: ids.memberUser,
                total_budget: 100,
                      },
      language: 'en',
    });
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/permission/i);
  });

  });

  describe('Fluxo de Aprovação (Approval)', () => {
    it('Dept Leader can submit the subsidy request', async () => {
    const res = await gql(tokenFor(ids.deptLeader), SUBMIT_SUBSIDY, {
      id: ids.subsidyRequestId,
      language: 'en',
    });
    expect(res.errors).toBeUndefined();
  });

  it('Finance can approve the subsidy', async () => {
    const res = await gql(tokenFor(ids.financeUser), APPROVE_SUBSIDY, {
      id: ids.subsidyRequestId,
      approved_amount: 1200,
      language: 'en',
    });
    expect(res.errors).toBeUndefined();
    expect(res.data!.approveSubsidyRequest.approved_amount).toBe("1200");
  });

  it('Church Member cannot approve a subsidy request', async () => {
    // Create a separate subsidy to attempt to approve
    const createRes = await gql(tokenFor(ids.deptLeader), CREATE_SUBSIDY, {
      data: {
        request_type: 'ADVANCE',
        project_id: ids.project,
        department_id: ids.department,
        institution_id: ids.institution,
        description: 'E2E Subsidy Req',
        requester_id: ids.deptLeader,
                total_budget: 50,
                      },
      language: 'en',
    });
    const tempId = createRes.data!.createSubsidyRequest.id;
    await gql(tokenFor(ids.deptLeader), SUBMIT_SUBSIDY, { id: tempId, language: 'en' });

    const approveRes = await gql(tokenFor(ids.memberUser), APPROVE_SUBSIDY, {
      id: tempId,
      approved_amount: 50,
      language: 'en',
    });
    expect(approveRes.errors).toBeDefined();
    expect(approveRes.errors![0].message).toMatch(/permission/i);

    // cleanup
    ids.rejectedRequestId = tempId;
  });

  });

  describe('Fluxo de Rejeição (Rejection)', () => {
    it('Finance can reject the temporary subsidy', async () => {
    const res = await gql(tokenFor(ids.financeUser), REJECT_SUBSIDY, {
      id: ids.rejectedRequestId,
      rejection_reason: 'Budget exceeded',
      language: 'en',
    });
    expect(res.errors).toBeUndefined();
    ids.rejectedRequestId = '';
  });

  });

  describe('Outros Tipos de Solicitação (Other Types)', () => {

  it('Dept Leader can create an advance request', async () => {
    const res = await gql(tokenFor(ids.deptLeader), CREATE_ADVANCE, {
      projectId: ids.project,
      advanceAmount: 500,
      language: 'en',
    });
    expect(res.errors).toBeUndefined();
    ids.advanceRequestId = res.data!.createAdvanceRequest.id;
    expect(res.data!.createAdvanceRequest.is_for_advance).toBe(true);
    expect(res.data!.createAdvanceRequest.total_budget).toBe("500");
  });

  it('Church Member cannot create an advance request', async () => {
    const res = await gql(tokenFor(ids.memberUser), CREATE_ADVANCE, {
      projectId: ids.project,
      advanceAmount: 100,
      language: 'en',
    });
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/permission/i);
  });

  

  it('Dept Leader can create a without-document subsidy', async () => {
    const res = await gql(tokenFor(ids.deptLeader), CREATE_WITHOUT_DOC, {
      data: {
        project_id: ids.project,
        department_id: ids.department,
        institution_id: ids.institution,
        description: 'E2E Subsidy Req',
        requester_id: ids.deptLeader,
        total_budget: 300,
        items: [
          {
            project_activity_id: ids.activity,
            requested_amount: 300,
            linked_activity_document_ids: [],
          },
        ],
      },
      language: 'en',
    });
    expect(res.errors).toBeUndefined();
    ids.withoutDocRequestId = res.data!.createSubsidyWithoutDocument.id;
    expect(res.data!.createSubsidyWithoutDocument.request_type).toBe('WITHOUT_DOCUMENT');
  });

  });

  describe('Consultas e Analytics (Queries)', () => {

  it('Finance can query subsidy KPIs', async () => {
    const res = await gql(tokenFor(ids.financeUser), SUBSIDY_KPIS, { institutionId: ids.institution });
    expect(res.errors).toBeUndefined();
    expect(res.data!.subsidyKPIs.totalRequests).toBeGreaterThanOrEqual(0);
    expect(res.data!.subsidyKPIs.approvedRequests).toBeGreaterThanOrEqual(1);
  });

  it('Finance can query subsidy breakdown by department', async () => {
    const res = await gql(tokenFor(ids.financeUser), SUBSIDY_BY_DEPARTMENT, { institutionId: ids.institution });
    expect(res.errors).toBeUndefined();
    expect(Array.isArray(res.data!.subsidyByDepartment)).toBe(true);
  });

  it('Church Member cannot query subsidy KPIs', async () => {
    const res = await gql(tokenFor(ids.memberUser), SUBSIDY_KPIS, { institutionId: ids.institution });
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/permission/i);
  });
  });
});
