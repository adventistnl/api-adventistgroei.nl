/*
  Warnings:

  - The values [PLANNED,IN_PROGRESS,CLOSED] on the enum `AnnualBudgetStatus` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `entity_type` to the `AnnualBudget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requested_amount` to the `AnnualBudget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requested_by` to the `AnnualBudget` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."AnnualBudgetPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'URGENT');

-- CreateEnum
CREATE TYPE "public"."AnnualBudgetCategory" AS ENUM ('OPERATIONAL', 'PROJECT', 'MAINTENANCE', 'EMERGENCY', 'EXPANSION');

-- AlterEnum
BEGIN;
CREATE TYPE "public"."AnnualBudgetStatus_new" AS ENUM ('PENDING', 'UNDER_REVIEW', 'APPROVED', 'REJECTED', 'REQUIRES_REVISION');
ALTER TABLE "public"."AnnualBudget" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "public"."AnnualBudget" ALTER COLUMN "status" TYPE "public"."AnnualBudgetStatus_new" USING ("status"::text::"public"."AnnualBudgetStatus_new");
ALTER TYPE "public"."AnnualBudgetStatus" RENAME TO "AnnualBudgetStatus_old";
ALTER TYPE "public"."AnnualBudgetStatus_new" RENAME TO "AnnualBudgetStatus";
DROP TYPE "public"."AnnualBudgetStatus_old";
ALTER TABLE "public"."AnnualBudget" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- AlterTable
ALTER TABLE "public"."AnnualBudget" ADD COLUMN     "approval_date" TIMESTAMP(3),
ADD COLUMN     "approved_amount" DECIMAL(65,30),
ADD COLUMN     "category" "public"."AnnualBudgetCategory" NOT NULL DEFAULT 'OPERATIONAL',
ADD COLUMN     "documents" JSONB,
ADD COLUMN     "entity_type" TEXT NOT NULL,
ADD COLUMN     "has_budget_record" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "is_locked" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priority" "public"."AnnualBudgetPriority" NOT NULL DEFAULT 'MEDIUM',
ADD COLUMN     "requested_amount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "requested_by" TEXT NOT NULL,
ADD COLUMN     "review_date" TIMESTAMP(3),
ADD COLUMN     "reviewed_by" TEXT,
ADD COLUMN     "submitted_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "status" SET DEFAULT 'PENDING';
