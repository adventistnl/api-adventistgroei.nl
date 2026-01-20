/*
  Warnings:

  - The values [DEPARTMENT] on the enum `EntityType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `annual_budget_id` on the `Church` table. All the data in the column will be lost.
  - You are about to drop the column `annual_budget_id` on the `Department` table. All the data in the column will be lost.
  - You are about to drop the column `annual_budget_id` on the `Institution` table. All the data in the column will be lost.
  - You are about to drop the column `annual_budget_id` on the `Region` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."EntityType_new" AS ENUM ('INSTITUTION', 'REGION', 'CHURCH', 'INSTITUTION_DEPARTMENT', 'CHURCH_DEPARTMENT', 'USER');
ALTER TABLE "public"."FundingPolicies" ALTER COLUMN "entity_type" TYPE "public"."EntityType_new" USING ("entity_type"::text::"public"."EntityType_new");
ALTER TABLE "public"."ActivityFunding" ALTER COLUMN "entity_type" TYPE "public"."EntityType_new" USING ("entity_type"::text::"public"."EntityType_new");
ALTER TYPE "public"."EntityType" RENAME TO "EntityType_old";
ALTER TYPE "public"."EntityType_new" RENAME TO "EntityType";
DROP TYPE "public"."EntityType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "public"."Church" DROP CONSTRAINT "Church_annual_budget_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Department" DROP CONSTRAINT "Department_annual_budget_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Institution" DROP CONSTRAINT "Institution_annual_budget_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Region" DROP CONSTRAINT "Region_annual_budget_id_fkey";

-- AlterTable
ALTER TABLE "public"."AnnualBudget" ADD COLUMN     "church_id" TEXT,
ADD COLUMN     "department_id" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "institution_id" TEXT,
ADD COLUMN     "justification" TEXT,
ADD COLUMN     "region_id" TEXT;

-- Migrar dados de Church.annual_budget_id para AnnualBudget.church_id
INSERT INTO "public"."AnnualBudget" (id, year, planned_budget, total_expenses, balance, notes, status, created_at, updated_at, created_by, updated_by, is_deleted, deleted_at, deleted_by, church_id)
SELECT
  gen_random_uuid(),
  EXTRACT(YEAR FROM CURRENT_DATE)::INT,
  ab.planned_budget,
  ab.total_expenses,
  ab.balance,
  ab.notes,
  ab.status,
  ab.created_at,
  ab.updated_at,
  ab.created_by,
  ab.updated_by,
  ab.is_deleted,
  ab.deleted_at,
  ab.deleted_by,
  c.id
FROM "public"."Church" c
JOIN "public"."AnnualBudget" ab ON c.annual_budget_id = ab.id;

-- Migrar dados de Department.annual_budget_id para AnnualBudget.department_id
INSERT INTO "public"."AnnualBudget" (id, year, planned_budget, total_expenses, balance, notes, status, created_at, updated_at, created_by, updated_by, is_deleted, deleted_at, deleted_by, department_id)
SELECT
  gen_random_uuid(),
  EXTRACT(YEAR FROM CURRENT_DATE)::INT,
  ab.planned_budget,
  ab.total_expenses,
  ab.balance,
  ab.notes,
  ab.status,
  ab.created_at,
  ab.updated_at,
  ab.created_by,
  ab.updated_by,
  ab.is_deleted,
  ab.deleted_at,
  ab.deleted_by,
  d.id
FROM "public"."Department" d
JOIN "public"."AnnualBudget" ab ON d.annual_budget_id = ab.id;

-- Migrar dados de Institution.annual_budget_id para AnnualBudget.institution_id
INSERT INTO "public"."AnnualBudget" (id, year, planned_budget, total_expenses, balance, notes, status, created_at, updated_at, created_by, updated_by, is_deleted, deleted_at, deleted_by, institution_id)
SELECT
  gen_random_uuid(),
  EXTRACT(YEAR FROM CURRENT_DATE)::INT,
  ab.planned_budget,
  ab.total_expenses,
  ab.balance,
  ab.notes,
  ab.status,
  ab.created_at,
  ab.updated_at,
  ab.created_by,
  ab.updated_by,
  ab.is_deleted,
  ab.deleted_at,
  ab.deleted_by,
  i.id
FROM "public"."Institution" i
JOIN "public"."AnnualBudget" ab ON i.annual_budget_id = ab.id;

-- Migrar dados de Region.annual_budget_id para AnnualBudget.region_id
INSERT INTO "public"."AnnualBudget" (id, year, planned_budget, total_expenses, balance, notes, status, created_at, updated_at, created_by, updated_by, is_deleted, deleted_at, deleted_by, region_id)
SELECT
  gen_random_uuid(),
  EXTRACT(YEAR FROM CURRENT_DATE)::INT,
  ab.planned_budget,
  ab.total_expenses,
  ab.balance,
  ab.notes,
  ab.status,
  ab.created_at,
  ab.updated_at,
  ab.created_by,
  ab.updated_by,
  ab.is_deleted,
  ab.deleted_at,
  ab.deleted_by,
  r.id
FROM "public"."Region" r
JOIN "public"."AnnualBudget" ab ON r.annual_budget_id = ab.id;

-- AlterTable
ALTER TABLE "public"."Church" DROP COLUMN "annual_budget_id";

-- AlterTable
ALTER TABLE "public"."Department" DROP COLUMN "annual_budget_id";

-- AlterTable
ALTER TABLE "public"."Institution" DROP COLUMN "annual_budget_id";

-- AlterTable
ALTER TABLE "public"."Region" DROP COLUMN "annual_budget_id";

-- AddForeignKey
ALTER TABLE "public"."AnnualBudget" ADD CONSTRAINT "AnnualBudget_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "public"."Institution"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AnnualBudget" ADD CONSTRAINT "AnnualBudget_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "public"."Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AnnualBudget" ADD CONSTRAINT "AnnualBudget_church_id_fkey" FOREIGN KEY ("church_id") REFERENCES "public"."Church"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AnnualBudget" ADD CONSTRAINT "AnnualBudget_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "public"."Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;
