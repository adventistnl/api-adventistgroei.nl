/*
  Warnings:

  - You are about to drop the column `region_id` on the `AnnualBudget` table. All the data in the column will be lost.
  - You are about to drop the column `contact_id` on the `Region` table. All the data in the column will be lost.
  - You are about to drop the column `institution_id` on the `Region` table. All the data in the column will be lost.
  - You are about to drop the column `parent_region_id` on the `Region` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."AnnualBudget" DROP CONSTRAINT "AnnualBudget_region_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Region" DROP CONSTRAINT "Region_contact_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Region" DROP CONSTRAINT "Region_institution_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Region" DROP CONSTRAINT "Region_parent_region_id_fkey";

-- AlterTable
ALTER TABLE "public"."AnnualBudget" DROP COLUMN "region_id";

-- AlterTable
ALTER TABLE "public"."Region" DROP COLUMN "contact_id",
DROP COLUMN "institution_id",
DROP COLUMN "parent_region_id";
