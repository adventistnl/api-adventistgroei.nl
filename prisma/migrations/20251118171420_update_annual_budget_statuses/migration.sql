/*
  Warnings:

  - The values [PENDING,UNDER_REVIEW,REQUIRES_REVISION] on the enum `AnnualBudgetStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."AnnualBudgetStatus_new" AS ENUM ('DRAFT', 'SUBMITTED', 'APPROVED', 'REJECTED', 'REVISION_REQUESTED', 'IN_PROGRESS', 'CLOSED');
ALTER TABLE "public"."AnnualBudget" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "public"."AnnualBudget" ALTER COLUMN "status" TYPE "public"."AnnualBudgetStatus_new" USING ("status"::text::"public"."AnnualBudgetStatus_new");
ALTER TYPE "public"."AnnualBudgetStatus" RENAME TO "AnnualBudgetStatus_old";
ALTER TYPE "public"."AnnualBudgetStatus_new" RENAME TO "AnnualBudgetStatus";
DROP TYPE "public"."AnnualBudgetStatus_old";
ALTER TABLE "public"."AnnualBudget" ALTER COLUMN "status" SET DEFAULT 'DRAFT';
COMMIT;

-- AlterTable
ALTER TABLE "public"."AnnualBudget" ALTER COLUMN "status" SET DEFAULT 'DRAFT';
