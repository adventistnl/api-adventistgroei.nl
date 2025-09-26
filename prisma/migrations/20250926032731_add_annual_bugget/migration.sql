-- CreateEnum
CREATE TYPE "public"."AnnualBudgetStatus" AS ENUM ('PLANNED', 'APROVED', 'IN_PROGRESS', 'CLOSED');

-- AlterTable
ALTER TABLE "public"."Church" ADD COLUMN     "annual_budget_id" TEXT;

-- AlterTable
ALTER TABLE "public"."Department" ADD COLUMN     "annual_budget_id" TEXT;

-- AlterTable
ALTER TABLE "public"."Institution" ADD COLUMN     "annual_budget_id" TEXT;

-- AlterTable
ALTER TABLE "public"."Region" ADD COLUMN     "annual_budget_id" TEXT;

-- CreateTable
CREATE TABLE "public"."AnnualBudget" (
    "id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "planned_budget" DECIMAL(65,30) NOT NULL,
    "total_expenses" DECIMAL(65,30) NOT NULL,
    "balance" DECIMAL(65,30) NOT NULL,
    "notes" TEXT,
    "approved_by" TEXT,
    "status" "public"."AnnualBudgetStatus" NOT NULL DEFAULT 'PLANNED',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "AnnualBudget_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Institution" ADD CONSTRAINT "Institution_annual_budget_id_fkey" FOREIGN KEY ("annual_budget_id") REFERENCES "public"."AnnualBudget"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Region" ADD CONSTRAINT "Region_annual_budget_id_fkey" FOREIGN KEY ("annual_budget_id") REFERENCES "public"."AnnualBudget"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Church" ADD CONSTRAINT "Church_annual_budget_id_fkey" FOREIGN KEY ("annual_budget_id") REFERENCES "public"."AnnualBudget"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Department" ADD CONSTRAINT "Department_annual_budget_id_fkey" FOREIGN KEY ("annual_budget_id") REFERENCES "public"."AnnualBudget"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AnnualBudget" ADD CONSTRAINT "AnnualBudget_approved_by_fkey" FOREIGN KEY ("approved_by") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
