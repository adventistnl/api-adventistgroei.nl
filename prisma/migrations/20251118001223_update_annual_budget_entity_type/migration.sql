/*
  Warnings:

  - Changed the type of `entity_type` on the `AnnualBudget` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."AnnualBudgetEntityType" AS ENUM ('INSTITUTION', 'CHURCH', 'INSTITUTION_DEPARTMENT', 'CHURCH_DEPARTMENT');

-- AlterTable
ALTER TABLE "public"."AnnualBudget" DROP COLUMN "entity_type",
ADD COLUMN     "entity_type" "public"."AnnualBudgetEntityType" NOT NULL;
