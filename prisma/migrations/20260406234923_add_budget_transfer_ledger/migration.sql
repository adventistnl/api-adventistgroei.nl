-- CreateEnum
CREATE TYPE "public"."TransferType" AS ENUM ('INITIAL_FUNDING', 'DISTRIBUTION', 'REALLOCATION', 'REDUCTION');

-- CreateTable
CREATE TABLE "public"."BudgetTransfer" (
    "id" TEXT NOT NULL,
    "from_budget_id" TEXT,
    "to_budget_id" TEXT,
    "amount" DECIMAL(65,30) NOT NULL,
    "type" "public"."TransferType" NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "BudgetTransfer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BudgetTransfer_from_budget_id_idx" ON "public"."BudgetTransfer"("from_budget_id");

-- CreateIndex
CREATE INDEX "BudgetTransfer_to_budget_id_idx" ON "public"."BudgetTransfer"("to_budget_id");

-- AddForeignKey
ALTER TABLE "public"."BudgetTransfer" ADD CONSTRAINT "BudgetTransfer_from_budget_id_fkey" FOREIGN KEY ("from_budget_id") REFERENCES "public"."AnnualBudget"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BudgetTransfer" ADD CONSTRAINT "BudgetTransfer_to_budget_id_fkey" FOREIGN KEY ("to_budget_id") REFERENCES "public"."AnnualBudget"("id") ON DELETE SET NULL ON UPDATE CASCADE;
