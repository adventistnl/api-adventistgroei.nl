-- CreateEnum
CREATE TYPE "public"."BudgetTransactionType" AS ENUM ('ALLOCATION_RESERVED', 'ALLOCATION_RELEASED', 'EXPENSE_APPROVED', 'REFUND_TOTAL', 'REFUND_PARTIAL', 'MANUAL_ADJUSTMENT');

-- CreateEnum
CREATE TYPE "public"."RefundType" AS ENUM ('TOTAL', 'PARTIAL');

-- AlterTable
ALTER TABLE "public"."SubsidyRequest" ADD COLUMN     "refund_rejected" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "refund_type" "public"."RefundType";

-- CreateTable
CREATE TABLE "public"."BudgetTransaction" (
    "id" TEXT NOT NULL,
    "annual_budget_id" TEXT NOT NULL,
    "type" "public"."BudgetTransactionType" NOT NULL,
    "delta_allocated" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "delta_expenses" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    "project_id" TEXT,
    "subsidy_request_id" TEXT,
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BudgetTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BudgetTransaction_annual_budget_id_idx" ON "public"."BudgetTransaction"("annual_budget_id");

-- CreateIndex
CREATE INDEX "BudgetTransaction_project_id_idx" ON "public"."BudgetTransaction"("project_id");

-- CreateIndex
CREATE INDEX "BudgetTransaction_subsidy_request_id_idx" ON "public"."BudgetTransaction"("subsidy_request_id");

-- AddForeignKey
ALTER TABLE "public"."BudgetTransaction" ADD CONSTRAINT "BudgetTransaction_annual_budget_id_fkey" FOREIGN KEY ("annual_budget_id") REFERENCES "public"."AnnualBudget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BudgetTransaction" ADD CONSTRAINT "BudgetTransaction_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BudgetTransaction" ADD CONSTRAINT "BudgetTransaction_subsidy_request_id_fkey" FOREIGN KEY ("subsidy_request_id") REFERENCES "public"."SubsidyRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
