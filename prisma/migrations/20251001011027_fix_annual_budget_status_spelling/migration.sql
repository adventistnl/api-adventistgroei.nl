/*
  Warnings:

  - The values [APROVED] on the enum `AnnualBudgetStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."AnnualBudgetStatus_new" AS ENUM ('PLANNED', 'APPROVED', 'IN_PROGRESS', 'CLOSED');
ALTER TABLE "public"."AnnualBudget" ALTER COLUMN "status" DROP DEFAULT;
-- Update existing records from APROVED to APPROVED during type conversion
ALTER TABLE "public"."AnnualBudget" ALTER COLUMN "status" TYPE "public"."AnnualBudgetStatus_new" USING (
  CASE 
    WHEN "status"::text = 'APROVED' THEN 'APPROVED'::"public"."AnnualBudgetStatus_new"
    ELSE "status"::text::"public"."AnnualBudgetStatus_new"
  END
);
ALTER TYPE "public"."AnnualBudgetStatus" RENAME TO "AnnualBudgetStatus_old";
ALTER TYPE "public"."AnnualBudgetStatus_new" RENAME TO "AnnualBudgetStatus";
DROP TYPE "public"."AnnualBudgetStatus_old";
ALTER TABLE "public"."AnnualBudget" ALTER COLUMN "status" SET DEFAULT 'PLANNED';
COMMIT;
