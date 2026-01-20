/*
  Warnings:

  - You are about to drop the column `project_activity_id` on the `ActivityFunding` table. All the data in the column will be lost.
  - You are about to alter the column `entity_contribution_percent` on the `ActivityFunding` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to drop the column `media_link` on the `Project` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[activity_id]` on the table `ActivityFunding` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."ActivityFunding" DROP CONSTRAINT "ActivityFunding_project_activity_id_fkey";

-- DropIndex
DROP INDEX "public"."ActivityFunding_project_activity_id_key";

-- AlterTable
ALTER TABLE "public"."ActivityFunding" DROP COLUMN "project_activity_id",
ALTER COLUMN "entity_contribution_percent" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "public"."Project" DROP COLUMN "media_link";

-- CreateIndex
CREATE UNIQUE INDEX "ActivityFunding_activity_id_key" ON "public"."ActivityFunding"("activity_id");

-- AddForeignKey
ALTER TABLE "public"."ActivityFunding" ADD CONSTRAINT "ActivityFunding_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "public"."ProjectActivity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
