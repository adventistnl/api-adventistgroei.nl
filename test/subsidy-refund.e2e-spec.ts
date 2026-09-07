import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import type { Server } from "http";
import request from "supertest";
import * as jwt from "jsonwebtoken";
import { AppModule } from "../src/app.module";
import { PrismaService } from "../src/services/prisma.service";

interface GqlResult {
  errors?: Array<{ message: string }>;
  data?: Record<string, any>;
}

/**
 * Subsidy Refund flow:
 *   APPROVED subsidy → requestSubsidyRefund (PARTIAL) → confirmRefundDone → REFUND_PARTIAL txn
 *   APPROVED subsidy → requestSubsidyRefund (TOTAL) → confirmRefundDone → REFUND_TOTAL txn
 *   rejectSubsidyRefund → moves back to APPROVED
 *   getSubsidiesWaitingRefund query
 *
 * We create an APPROVED subsidy directly via Prisma to avoid coupling with the
 * full subsidy flow (already tested in subsidy-request.e2e-spec.ts).
 */
describe("Subsidy Refund (e2e)", () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let httpServer: Server;

  const ids = {
    institution: "",
    department: "",
    annualBudgetId: "",
    project: "",
    activity: "",
    subsidyStatusId: "",
    approvedStatusId: "",
    waitingRefundStatusId: "",
    adminUser: "",
    financeUser: "",
    deptLeader: "",
    memberUser: "",
    partialRefundSubsidyId: "",
    totalRefundSubsidyId: "",
    rejectRefundSubsidyId: "",
  };

  function tokenFor(userId: string): string {
    return jwt.sign({ sub: userId }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
  }

  async function gql(
    token: string | null,
    query: string,
    variables?: Record<string, unknown>,
  ): Promise<GqlResult> {
    const req = request(httpServer).post("/graphql").send({ query, variables });
    if (token) req.set("Authorization", `Bearer ${token}`);
    const res = await req;
    return res.body as GqlResult;
  }

  async function createRole(
    userId: string,
    roleKeyCode: string,
  ): Promise<void> {
    const role = await prisma.role.findUniqueOrThrow({
      where: { key_code: roleKeyCode },
    });
    await prisma.userRole.create({
      data: {
        user_id: userId,
        role_id: role.id,
        created_by: "e2e-test",
        updated_by: "e2e-test",
      },
    });
  }

  /**
   * Create a subsidy directly in APPROVED state (to test refund flow independently)
   */
  async function seedApprovedSubsidy(approvedAmount: number): Promise<string> {
    const subsidy = await prisma.subsidyRequest.create({
      data: {
        request_type: "ADVANCE",
        description: "Approved Subsidy",
        institution_id: ids.institution,
        department_id: ids.department,
        project_id: ids.project,
        requester_id: ids.deptLeader,
        subsidy_statuses_id: ids.approvedStatusId,
        total_budget: approvedAmount,
        approved_amount: approvedAmount,
        created_by: "e2e-test",
        updated_by: "e2e-test",
      },
    });
    // Create the matching EXPENSE_APPROVED transaction so balance math is correct
    await prisma.budgetTransaction.create({
      data: {
        annual_budget_id: ids.annualBudgetId,
        subsidy_request_id: subsidy.id,
        type: "EXPENSE_APPROVED",
        delta_expenses: approvedAmount,
        description: `E2E approved subsidy ${subsidy.id}`,
        created_by: "e2e-test",
      },
    });
    return subsidy.id;
  }

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
    httpServer = app.getHttpServer();
    prisma = app.get(PrismaService);

    const inst = await prisma.institution.create({
      data: {
        name: "E2E Refund Institution",
        denomination: "e2e-test",
        language_preference: "en",
        created_by: "e2e-test",
        updated_by: "e2e-test",
      },
    });
    ids.institution = inst.id;

    const dept = await prisma.department.create({
      data: {
        name: "E2E Refund Dept",
        description: "e2e-test",
        institution_id: inst.id,
        created_by: "e2e-test",
        updated_by: "e2e-test",
      },
    });
    ids.department = dept.id;

    const perms = ["updateSubsidyRequest"];
    const adminRole = await prisma.role.findUnique({
      where: { key_code: "ADMIN" },
    });
    if (adminRole) {
      for (const p of perms) {
        let perm = await prisma.permission.findUnique({
          where: { resolver_name: p as any },
        });
        if (!perm) {
          perm = await prisma.permission.create({
            data: {
              key_code: p,
              name: p,
              description: p,
              resolver_name: p as any,
              created_by: "e2e",
              updated_by: "e2e",
            },
          });
        }
        const existingRp = await prisma.rolePermission.findFirst({
          where: { role_id: adminRole.id, permission_id: perm.id },
        });
        if (!existingRp) {
          await prisma.rolePermission.create({
            data: {
              role_id: adminRole.id,
              permission_id: perm.id,
              created_by: "e2e",
              updated_by: "e2e",
            },
          });
        }
      }
    }

    const ts = Date.now();
    const mkUser = async (name: string) => {
      const u = await prisma.user.create({
        data: {
          name,
          email: `${name.toLowerCase().replace(/\s+/g, ".")}.${ts}@e2e-refund.local`,
          password: "unused",
          language_preference: "en",
          institution_id: inst.id,
          created_by: "e2e-test",
          updated_by: "e2e-test",
        },
      });
      return u.id;
    };

    ids.adminUser = await mkUser("E2E Refund Admin");
    ids.financeUser = await mkUser("E2E Refund Finance");
    ids.deptLeader = await mkUser("E2E Refund DeptLeader");
    ids.memberUser = await mkUser("E2E Refund Member");

    await createRole(ids.adminUser, "ADMIN");
    await createRole(ids.financeUser, "FINANCIAL_MANAGER");
    await createRole(ids.deptLeader, "INSTITUTIONAL_DEPARTMENT_LEADER");
    await createRole(ids.memberUser, "CHURCH_MEMBER");
    await prisma.department.update({
      where: { id: ids.department },
      data: { leader_id: ids.deptLeader },
    });

    const budget = await prisma.annualBudget.create({
      data: {
        institution_id: inst.id,
        year: new Date().getFullYear(),
        planned_budget: 100000,
        entity_type: "INSTITUTION_DEPARTMENT",
        department_id: dept.id,
        status: "APPROVED",
        approved_amount: 100000,
        approved_by: ids.adminUser,
        approval_date: new Date(),
        requested_by: ids.adminUser,
        created_by: "e2e-test",
        updated_by: "e2e-test",
      },
    });
    ids.annualBudgetId = budget.id;

    const project = await prisma.project.create({
      data: {
        language_preference: "en",
        type: "Local",
        title: "E2E Refund Project",
        institution_id: inst.id,
        department_id: dept.id,
        description: "For refund tests",
        start_at: new Date("2099-01-01"),
        end_at: new Date("2099-12-31"),
        budget: 15000,
        subsidized_budget: 15000,
        owner_id: ids.deptLeader,
        created_by: "e2e-test",
        updated_by: "e2e-test",
      },
    });
    ids.project = project.id;

    // Subsidy statuses needed to place subsidies into correct states
    const approvedStatus = await prisma.subsidyStatus.create({
      data: {
        name: "Approved",
        description: "E2E approved column",
        order: 3,
        department_id: ids.department,
        assigned_to: ids.adminUser,
        created_by: "e2e-test",
        updated_by: "e2e-test",
      },
    });
    ids.approvedStatusId = approvedStatus.id;

    const waitingRefundStatus = await prisma.subsidyStatus.create({
      data: {
        name: "Waiting Refund",
        description: "E2E waiting refund column",
        order: 5,
        department_id: ids.department,
        assigned_to: ids.adminUser,
        created_by: "e2e-test",
        updated_by: "e2e-test",
      },
    });
    ids.waitingRefundStatusId = waitingRefundStatus.id;

    // Pre-seed 3 approved subsidies — one per test scenario
    ids.partialRefundSubsidyId = await seedApprovedSubsidy(2000);
    ids.totalRefundSubsidyId = await seedApprovedSubsidy(1500);
    ids.rejectRefundSubsidyId = await seedApprovedSubsidy(800);
  }, 90000);

  afterAll(async () => {
    const userIds = [
      ids.adminUser,
      ids.financeUser,
      ids.deptLeader,
      ids.memberUser,
    ];
    const subsidyIds = [
      ids.partialRefundSubsidyId,
      ids.totalRefundSubsidyId,
      ids.rejectRefundSubsidyId,
    ].filter(Boolean);

    for (const sid of subsidyIds) {
      await prisma.subsidyStatusHistory.deleteMany({
        where: { subsidy_request_id: sid },
      });
    }
    if (subsidyIds.length) {
      await prisma.budgetTransaction.deleteMany({
        where: { subsidy_request_id: { in: subsidyIds } },
      });
      await prisma.subsidyRequest.deleteMany({
        where: { id: { in: subsidyIds } },
      });
    }
    await prisma.subsidyStatus.deleteMany({
      where: { id: { in: [ids.approvedStatusId, ids.waitingRefundStatusId] } },
    });
    await prisma.project.deleteMany({ where: { id: ids.project } });
    await prisma.budgetTransaction.deleteMany({
      where: { annual_budget_id: ids.annualBudgetId },
    });
    await prisma.annualBudget.deleteMany({ where: { id: ids.annualBudgetId } });
    await prisma.department.deleteMany({ where: { id: ids.department } });
    await prisma.userRole.deleteMany({ where: { user_id: { in: userIds } } });
    await prisma.user.deleteMany({ where: { id: { in: userIds } } });
    await prisma.institution.deleteMany({ where: { id: ids.institution } });
    await app.close();
  }, 90000);

  // ─── GQL strings ─────────────────────────────────────────────────────────

  const REQUEST_REFUND = `
    mutation RequestRefund($id: String!, $refundAmount: Float!, $refundType: String!, $reason: String!, $language: LanguagePreference) {
      requestSubsidyRefund(id: $id, refundAmount: $refundAmount, refundType: $refundType, reason: $reason, language: $language) { id }
    }
  `;
  const CONFIRM_REFUND = `
    mutation ConfirmRefund($id: String!, $language: LanguagePreference) {
      confirmRefundDone(id: $id, language: $language) { id }
    }
  `;
  const REJECT_REFUND = `
    mutation RejectRefund($id: String!, $reason: String!, $language: LanguagePreference) {
      rejectSubsidyRefund(id: $id, reason: $reason, language: $language) { id }
    }
  `;
  const WAITING_REFUND_LIST = `
    query WaitingRefund($institutionId: String) {
      getSubsidiesWaitingRefund(institutionId: $institutionId) { id total_budget }
    }
  `;

  describe("Partial Refund Flow", () => {
    it("Finance should be able to request and confirm a PARTIAL refund", async () => {
      // 1. Request Refund
      const reqRes = await gql(tokenFor(ids.financeUser), REQUEST_REFUND, {
        id: ids.partialRefundSubsidyId,
        refundAmount: 500,
        refundType: "PARTIAL",
        reason: "Partially unused funds",
        language: "en",
      });
      expect(reqRes.errors).toBeUndefined();

      // 2. Confirm Refund
      const confRes = await gql(tokenFor(ids.financeUser), CONFIRM_REFUND, {
        id: ids.partialRefundSubsidyId,
        language: "en",
      });
      expect(confRes.errors).toBeUndefined();

      // 3. Assert Transaction
      const txn = await prisma.budgetTransaction.findFirst({
        where: {
          subsidy_request_id: ids.partialRefundSubsidyId,
          type: "REFUND_PARTIAL",
        },
      });
      expect(Number(txn!.delta_allocated)).toBe(500);
      expect(Number(txn!.delta_expenses)).toBe(-500);
    });

    it("Church Member cannot request a refund", async () => {
      const res = await gql(tokenFor(ids.memberUser), REQUEST_REFUND, {
        id: ids.totalRefundSubsidyId,
        refundAmount: 1500,
        refundType: "TOTAL",
        reason: "Unauthorized attempt",
        language: "en",
      });
      expect(res.errors).toBeDefined();
      expect(res.errors![0].message).toMatch(/permission/i);
    });
  });

  describe("Total Refund Flow", () => {
    it("Finance should be able to request and confirm a TOTAL refund", async () => {
      // 1. Request Refund
      const reqRes = await gql(tokenFor(ids.financeUser), REQUEST_REFUND, {
        id: ids.totalRefundSubsidyId,
        refundAmount: 1500,
        refundType: "TOTAL",
        reason: "Fully unused project cancelled",
        language: "en",
      });
      expect(reqRes.errors).toBeUndefined();

      // 2. Confirm Refund
      const confRes = await gql(tokenFor(ids.financeUser), CONFIRM_REFUND, {
        id: ids.totalRefundSubsidyId,
        language: "en",
      });
      expect(confRes.errors).toBeUndefined();

      // 3. Assert Transaction
      const txn = await prisma.budgetTransaction.findFirst({
        where: {
          subsidy_request_id: ids.totalRefundSubsidyId,
          type: "REFUND_TOTAL",
        },
      });
      expect(Number(txn!.delta_allocated)).toBe(1500);
      expect(Number(txn!.delta_expenses)).toBe(-1500);
    });
  });

  describe("Reject Refund Flow", () => {
    it("Finance should be able to reject a refund request (subsidy goes back to APPROVED)", async () => {
      // First request the refund
      await gql(tokenFor(ids.financeUser), REQUEST_REFUND, {
        id: ids.rejectRefundSubsidyId,
        refundAmount: 800,
        refundType: "TOTAL",
        reason: "Dispute",
        language: "en",
      });

      const rejectRes = await gql(tokenFor(ids.financeUser), REJECT_REFUND, {
        id: ids.rejectRefundSubsidyId,
        reason: "Refund denied: documentation insufficient",
        language: "en",
      });
      expect(rejectRes.errors).toBeUndefined();
    });
  });

  describe("Waiting Refund List", () => {
    it("Finance should be able to list subsidies waiting for refund", async () => {
      const res = await gql(tokenFor(ids.financeUser), WAITING_REFUND_LIST, {
        institutionId: ids.institution,
      });
      expect(res.errors).toBeUndefined();
      expect(Array.isArray(res.data!.getSubsidiesWaitingRefund)).toBe(true);
    });

    it("Church Member cannot list subsidies waiting for refund", async () => {
      const res = await gql(tokenFor(ids.memberUser), WAITING_REFUND_LIST, {
        institutionId: ids.institution,
      });
      expect(res.errors).toBeDefined();
      expect(res.errors![0].message).toMatch(/permission/i);
    });
  });
});
