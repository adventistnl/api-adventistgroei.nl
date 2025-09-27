-- 1. Para cada departamento com annual_budget preenchido, cria um registro em AnnualBudget
INSERT INTO "AnnualBudget" (
  id, year, planned_budget, total_expenses, balance, status, created_at, updated_at, created_by, updated_by, is_deleted
)
SELECT
  gen_random_uuid(), -- ou use uuid_generate_v4() dependendo do seu Postgres
  EXTRACT(YEAR FROM NOW())::int,
  annual_budget,
  0,
  annual_budget,
  'PLANNED',
  NOW(),
  NOW(),
  created_by,
  updated_by,
  false
FROM "Department"
WHERE annual_budget IS NOT NULL;

-- 2. Atualiza o campo annual_budget_id em Department para apontar para o novo registro criado
UPDATE "Department" d
SET annual_budget_id = ab.id
FROM "AnnualBudget" ab
WHERE ab.planned_budget = d.annual_budget
  AND ab.created_by = d.created_by
  AND ab.created_at = d.created_at
  AND d.annual_budget IS NOT NULL;

/*
  Warnings:

  - You are about to drop the column `annual_budget` on the `Department` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Department" DROP COLUMN "annual_budget";
