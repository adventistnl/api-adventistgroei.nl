/*
  Warnings:

  - You are about to drop the column `contribution_amount` on the `ActivityFunding` table. All the data in the column will be lost.
  - You are about to drop the column `contribution_percent` on the `ActivityFunding` table. All the data in the column will be lost.
  - You are about to drop the column `subsidy_statuses_id` on the `SpecialProjects` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[project_activity_id]` on the table `ActivityFunding` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `entity_contribution_amount` to the `ActivityFunding` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entity_contribution_percent` to the `ActivityFunding` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deadline` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deadline` to the `ProjectActivity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `ProjectActivity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subsidy_status_id` to the `SpecialProjects` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."ActivityTags" AS ENUM ('EQUIPMENT', 'MATERIALS', 'SERVICES', 'TRAVEL', 'EVENT', 'TRANSPORT', 'MARKETING', 'REFORM', 'TRAINING', 'FEEDING', 'ACCOMMODATION');

-- DropForeignKey
ALTER TABLE "public"."SpecialProjects" DROP CONSTRAINT "SpecialProjects_subsidy_statuses_id_fkey";

-- AlterTable
ALTER TABLE "public"."ActivityDocuments" ADD COLUMN     "project_activity_id" TEXT;

-- AlterTable
ALTER TABLE "public"."ActivityFunding" DROP COLUMN "contribution_amount",
DROP COLUMN "contribution_percent",
ADD COLUMN     "entity_contribution_amount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "entity_contribution_percent" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "project_activity_id" TEXT;

-- AlterTable
ALTER TABLE "public"."Project" ADD COLUMN     "deadline" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."ProjectActivity" ADD COLUMN     "deadline" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "owner_id" TEXT NOT NULL,
ADD COLUMN     "tags" "public"."ActivityTags"[];

-- AlterTable
ALTER TABLE "public"."SpecialProjects" DROP COLUMN "subsidy_statuses_id",
ADD COLUMN     "subsidy_status_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ActivityFunding_project_activity_id_key" ON "public"."ActivityFunding"("project_activity_id");

-- AddForeignKey
ALTER TABLE "public"."ProjectActivity" ADD CONSTRAINT "ProjectActivity_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ActivityFunding" ADD CONSTRAINT "ActivityFunding_project_activity_id_fkey" FOREIGN KEY ("project_activity_id") REFERENCES "public"."ProjectActivity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ActivityDocuments" ADD CONSTRAINT "ActivityDocuments_project_activity_id_fkey" FOREIGN KEY ("project_activity_id") REFERENCES "public"."ProjectActivity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SpecialProjects" ADD CONSTRAINT "SpecialProjects_subsidy_status_id_fkey" FOREIGN KEY ("subsidy_status_id") REFERENCES "public"."SubsidyStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
