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
 * Annual Budget: create, approve, reject, request revision, toggle lock,
 * delete, and KPI queries — with permission guards verified for each role.
 *
 * Budget isolation: all budgets are created under a dedicated e2e institution
 * and torn down in afterAll. Year 2099 is used to avoid conflicts with
 * any real data in the shared database.
 */
describe('Annual Budget (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let httpServer: Server;

  const TEST_YEAR = 2099;

  const ids = {
    institution: '',
    department: '',
    adminUser: '',
    financeUser: '',
    memberUser: '',
    instBudgetId: '',
    deptBudgetId: '',
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
      data: { name: 'E2E Budget Institution', denomination: 'e2e-test', language_preference: 'en', created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    ids.institution = inst.id;

    const dept = await prisma.department.create({
      data: { name: 'E2E Budget Dept', description: 'e2e-test', institution_id: inst.id, created_by: 'e2e-test', updated_by: 'e2e-test' },
    });
    ids.department = dept.id;

    const ts = Date.now();
    const mkUser = async (name: string) => {
      const u = await prisma.user.create({
        data: {
          name,
          email: `${name.toLowerCase().replace(/\s+/g, '.')}.${ts}@e2e-budget.local`,
          password: 'unused',
          language_preference: 'en',
          institution_id: inst.id,
          created_by: 'e2e-test',
          updated_by: 'e2e-test',
        },
      });
      return u.id;
    };

    ids.adminUser = await mkUser('E2E Budget Admin');
    ids.financeUser = await mkUser('E2E Budget Finance');
    ids.memberUser = await mkUser('E2E Budget Member');

    await createRole(ids.adminUser, 'ADMIN');
    await createRole(ids.financeUser, 'FINANCIAL_MANAGER');
    await createRole(ids.memberUser, 'CHURCH_MEMBER');
  }, 60000);

  afterAll(async () => {
    const userIds = [ids.adminUser, ids.financeUser, ids.memberUser];
    // Transactions cascade from BudgetTransaction → AnnualBudget
    await prisma.budgetTransaction.deleteMany({ where: { annual_budget: { institution_id: ids.institution } } });
    await prisma.annualBudget.deleteMany({ where: { institution_id: ids.institution } });
    await prisma.department.deleteMany({ where: { id: ids.department } });
    await prisma.userRole.deleteMany({ where: { user_id: { in: userIds } } });
    await prisma.user.deleteMany({ where: { id: { in: userIds } } });
    await prisma.institution.deleteMany({ where: { id: ids.institution } });
    await app.close();
  }, 60000);

  // ─── Mutations ───────────────────────────────────────────────────────────

  const CREATE_INST_BUDGET = `
    mutation CreateInstBudget($data: InstitutionBudgetCreateDto!) {
      createInstitutionBudget(data: $data) { id status planned_budget entity_type }
    }
  `;
  const CREATE_DEPT_BUDGET = `
    mutation CreateDeptBudget($data: DepartmentBudgetCreateDto!) {
      createDepartmentBudget(data: $data) { id status planned_budget entity_type }
    }
  `;
  const APPROVE = `
    mutation Approve($id: String!, $data: ApproveAnnualBudgetDto!) {
      approveAnnualBudget(id: $id, data: $data) { id status approved_amount }
    }
  `;
  const REJECT = `
    mutation Reject($id: String!, $data: RejectAnnualBudgetDto!) {
      rejectAnnualBudget(id: $id, data: $data) { id status notes }
    }
  `;
  const REQUEST_REVISION = `
    mutation ReqRevision($id: String!, $data: RequestRevisionAnnualBudgetDto!) {
      requestRevisionAnnualBudget(id: $id, data: $data) { id status notes }
    }
  `;
  const TOGGLE_LOCK = `
    mutation ToggleLock($id: String!) {
      toggleBudgetLock(id: $id) { id is_locked }
    }
  `;
  const DELETE_BUDGET = `
    mutation DeleteBudget($id: String!) {
      deleteAnnualBudget(id: $id) { success message }
    }
  `;

  const BUDGET_KPIS = `
    query BudgetKPIs($year: Int!, $institutionId: String!) {
      budgetKPIs(year: $year, institutionId: $institutionId) {
        totalInstitutionBudget totalAllocated totalSpent budgetRemaining budgetUtilization
      }
    }
  `;
  const LEDGER = `
    query Ledger($filters: LedgerHistoryFilterInput!) {
      ledgerHistory(filters: $filters) {
        items { id type amount description }
        totalCount
      }
    }
  `;

  const DEPARTMENT_SPENDING = `
    query DepartmentSpending($year: Int!, $institutionId: String!) {
      departmentSpending(year: $year, institutionId: $institutionId) {
        name planned approved reserved spent available institution
      }
    }
  `;
  const SPENDING_OVER_TIME = `
    query SpendingOverTime($year: Int!, $institutionId: String!) {
      spendingOverTime(year: $year, institutionId: $institutionId) {
        date month departments { departmentId departmentName amount }
      }
    }
  `;
  const ENTITY_DISTRIBUTION = `
    query EntityDistribution($year: Int!) {
      entityDistribution(year: $year) {
        name amount percentage count
      }
    }
  `;
  const BUDGET_DISTRIBUTION = `
    query BudgetDistribution($year: Int!, $institutionId: String!) {
      budgetDistribution(year: $year, institutionId: $institutionId) {
        total spent allocated available percentageUsed
      }
    }
  `;
  const INSTITUTIONAL_DEPARTMENTS_KPIS = `
    query InstitutionalDepartmentsKPIs($year: Int!, $institutionId: String!) {
      institutionalDepartmentsKPIs(year: $year, institutionId: $institutionId) {
        totalPlanned totalAllocated totalSpent totalAvailable totalDepartments departmentsWithBudget
      }
    }
  `;
  const RECALCULATE_ALLOCATED_AMOUNTS = `
    mutation RecalculateInstitutionAllocatedAmounts {
      recalculateInstitutionAllocatedAmounts { updated message }
    }
  `;

  // ─── Create ──────────────────────────────────────────────────────────────

  it('Finance Manager can create an institution budget', async () => {
    const res = await gql(tokenFor(ids.financeUser), CREATE_INST_BUDGET, {
      data: { institution_id: ids.institution, year: TEST_YEAR, planned_budget: 50000 },
    });
    expect(res.errors).toBeUndefined();
    ids.instBudgetId = res.data!.createInstitutionBudget.id;
    expect(res.data!.createInstitutionBudget.status).toBe('DRAFT');
    expect(res.data!.createInstitutionBudget.entity_type).toBe('INSTITUTION');
  });

  it('Finance Manager can create a department budget', async () => {
    const res = await gql(tokenFor(ids.financeUser), CREATE_DEPT_BUDGET, {
      data: { department_id: ids.department, year: TEST_YEAR, planned_budget: 10000 },
    });
    expect(res.errors).toBeUndefined();
    ids.deptBudgetId = res.data!.createDepartmentBudget.id;
    expect(res.data!.createDepartmentBudget.status).toBe('DRAFT');
  });

  it('Church Member cannot create an institution budget', async () => {
    const res = await gql(tokenFor(ids.memberUser), CREATE_INST_BUDGET, {
      data: { institution_id: ids.institution, year: TEST_YEAR, planned_budget: 1000 },
    });
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/permission/i);
  });

  // ─── Approve ─────────────────────────────────────────────────────────────

  it('Finance Manager can approve an institution budget', async () => {
    // approveAnnualBudget requires SUBMITTED status — set it directly
    await prisma.annualBudget.update({
      where: { id: ids.instBudgetId },
      data: { status: 'SUBMITTED', updated_by: 'e2e-test' },
    });

    const res = await gql(tokenFor(ids.financeUser), APPROVE, {
      id: ids.instBudgetId,
      data: { approved_amount: 50000, notes: 'Approved by e2e' },
    });
    expect(res.errors).toBeUndefined();
    expect(res.data!.approveAnnualBudget.status).toBe('APPROVED');
    expect(res.data!.approveAnnualBudget.approved_amount).toBe(50000);
  });

  it('Church Member cannot approve a budget', async () => {
    const res = await gql(tokenFor(ids.memberUser), APPROVE, {
      id: ids.deptBudgetId,
      data: { approved_amount: 10000 },
    });
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/permission/i);
  });

  // ─── Request Revision ───────────────────────────────────────────────────

  it('Finance Manager can request revision on the dept budget (must be SUBMITTED first)', async () => {
    // requestRevisionAnnualBudget requires REJECTED status
    await prisma.annualBudget.update({
      where: { id: ids.deptBudgetId },
      data: { status: 'REJECTED', updated_by: 'e2e-test' },
    });

    const res = await gql(tokenFor(ids.financeUser), REQUEST_REVISION, {
      id: ids.deptBudgetId,
      data: { revision_notes: 'Please reduce by 20%' },
    });
    expect(res.errors).toBeUndefined();
    expect(res.data!.requestRevisionAnnualBudget.status).toBe('REVISION_REQUESTED');
  });

  // ─── Reject ───────────────────────────────────────────────────────────────

  it('Admin can reject the dept budget (must be SUBMITTED first)', async () => {
    // Move back to SUBMITTED to allow rejection (revision_requested → reject isn't always valid)
    await prisma.annualBudget.update({
      where: { id: ids.deptBudgetId },
      data: { status: 'SUBMITTED', updated_by: 'e2e-test' },
    });

    const res = await gql(tokenFor(ids.adminUser), REJECT, {
      id: ids.deptBudgetId,
      data: { reason: 'Budget too large for this cycle' },
    });
    expect(res.errors).toBeUndefined();
    expect(res.data!.rejectAnnualBudget.status).toBe('REJECTED');
  });

  // ─── Toggle Lock ───────────────────────────────────────────────────
  // Lock/unlock only works on DRAFT/SUBMITTED budgets, not on APPROVED ones.
  // We create a fresh DRAFT institution budget for these toggle tests.

  it('Finance Manager can lock a DRAFT institution budget', async () => {
    // The instBudgetId is now APPROVED (lock on APPROVED = ok, unlock = not ok)
    // Create a fresh DRAFT budget for lock/unlock cycle
    const createRes = await gql(tokenFor(ids.financeUser), CREATE_INST_BUDGET, {
      data: { institution_id: ids.institution, year: TEST_YEAR + 1, planned_budget: 1000 },
    });
    expect(createRes.errors).toBeUndefined();
    const lockBudgetId: string = createRes.data!.createInstitutionBudget.id;

    const lockRes = await gql(tokenFor(ids.financeUser), TOGGLE_LOCK, { id: lockBudgetId });
    expect(lockRes.errors).toBeUndefined();
    expect(lockRes.data!.toggleBudgetLock.is_locked).toBe(true);

    const unlockRes = await gql(tokenFor(ids.financeUser), TOGGLE_LOCK, { id: lockBudgetId });
    expect(unlockRes.errors).toBeUndefined();
    expect(unlockRes.data!.toggleBudgetLock.is_locked).toBe(false);

    // Clean up this extra budget
    await prisma.annualBudget.delete({ where: { id: lockBudgetId } });
  });

  it('Church Member cannot lock a budget', async () => {
    const res = await gql(tokenFor(ids.memberUser), TOGGLE_LOCK, { id: ids.instBudgetId });
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/permission/i);
  });

  // ─── KPIs ────────────────────────────────────────────────────────────────

  it('Finance Manager can query budget KPIs', async () => {
    const res = await gql(tokenFor(ids.financeUser), BUDGET_KPIS, {
      year: TEST_YEAR,
      institutionId: ids.institution,
    });
    expect(res.errors).toBeUndefined();
    expect(res.data!.budgetKPIs.totalInstitutionBudget).toBeGreaterThanOrEqual(0);
  });

  describe('Analytics & Dashboards', () => {
    it('Finance Manager can query department spending', async () => {
      const res = await gql(tokenFor(ids.financeUser), DEPARTMENT_SPENDING, {
        year: TEST_YEAR,
        institutionId: ids.institution,
      });
      expect(res.errors).toBeUndefined();
      expect(Array.isArray(res.data!.departmentSpending)).toBe(true);
    });

    it('Finance Manager can query spending over time', async () => {
      const res = await gql(tokenFor(ids.financeUser), SPENDING_OVER_TIME, {
        year: TEST_YEAR,
        institutionId: ids.institution,
      });
      expect(res.errors).toBeUndefined();
      expect(Array.isArray(res.data!.spendingOverTime)).toBe(true);
      expect(res.data!.spendingOverTime.length).toBe(12); // 12 months
    });

    it('Finance Manager can query entity distribution', async () => {
      const res = await gql(tokenFor(ids.financeUser), ENTITY_DISTRIBUTION, {
        year: TEST_YEAR,
      });
      expect(res.errors).toBeUndefined();
      expect(Array.isArray(res.data!.entityDistribution)).toBe(true);
    });

    it('Finance Manager can query budget distribution', async () => {
      const res = await gql(tokenFor(ids.financeUser), BUDGET_DISTRIBUTION, {
        year: TEST_YEAR,
        institutionId: ids.institution,
      });
      expect(res.errors).toBeUndefined();
      expect(res.data!.budgetDistribution).toBeDefined();
      expect(res.data!.budgetDistribution.total).toBeGreaterThanOrEqual(0);
    });

    it('Finance Manager can query institutional departments KPIs', async () => {
      const res = await gql(tokenFor(ids.financeUser), INSTITUTIONAL_DEPARTMENTS_KPIS, {
        year: TEST_YEAR,
        institutionId: ids.institution,
      });
      expect(res.errors).toBeUndefined();
      expect(res.data!.institutionalDepartmentsKPIs).toBeDefined();
      expect(res.data!.institutionalDepartmentsKPIs.totalDepartments).toBeGreaterThanOrEqual(0);
    });

    it('Admin can recalculate all allocated amounts', async () => {
      const res = await gql(tokenFor(ids.adminUser), RECALCULATE_ALLOCATED_AMOUNTS);
      expect(res.errors).toBeUndefined();
      expect(res.data!.recalculateInstitutionAllocatedAmounts.updated).toBeGreaterThanOrEqual(0);
    });
  });

  it('Finance Manager can query ledger history for the institution', async () => {
    const res = await gql(tokenFor(ids.financeUser), LEDGER, {
      filters: { institutionId: ids.institution, year: TEST_YEAR, page: 1, limit: 50 },
    });
    expect(res.errors).toBeUndefined();
    expect(Array.isArray(res.data!.ledgerHistory.items)).toBe(true);
    expect(res.data!.ledgerHistory.totalCount).toBeGreaterThanOrEqual(0);
  });

  it('Church Member cannot query ledger history', async () => {
    const res = await gql(tokenFor(ids.memberUser), LEDGER, {
      filters: { institutionId: ids.institution, year: TEST_YEAR, page: 1, limit: 10 },
    });
    expect(res.errors).toBeDefined();
    expect(res.errors![0].message).toMatch(/permission/i);
  });

  // ─── Delete ──────────────────────────────────────────────────────────────

  it('Admin can delete an annual budget', async () => {
    const res = await gql(tokenFor(ids.adminUser), DELETE_BUDGET, { id: ids.deptBudgetId });
    expect(res.errors).toBeUndefined();
    expect(res.data!.deleteAnnualBudget.success).toBe(true);
    ids.deptBudgetId = '';
  });
});
