/*
  Warnings:

  - Changed the type of `entity_type` on the `ActivityFunding` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `entity_type` on the `FundingPolicies` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."EntityType" AS ENUM ('INSTITUTION', 'REGION', 'CHURCH', 'DEPARTMENT', 'USER');

-- AlterTable
ALTER TABLE "public"."ActivityFunding" DROP COLUMN "entity_type",
ADD COLUMN     "entity_type" "public"."EntityType" NOT NULL;

-- AlterTable
ALTER TABLE "public"."FundingPolicies" DROP COLUMN "entity_type",
ADD COLUMN     "entity_type" "public"."EntityType" NOT NULL;
