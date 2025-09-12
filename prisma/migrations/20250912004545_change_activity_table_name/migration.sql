/*
  Warnings:

  - You are about to drop the column `subsidy_activities_id` on the `SubsidyReceipt` table. All the data in the column will be lost.
  - You are about to drop the `SubsidyActivity` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `project_activities_id` to the `SubsidyReceipt` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."SubsidyActivity" DROP CONSTRAINT "SubsidyActivity_subsidy_request_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."SubsidyReceipt" DROP CONSTRAINT "SubsidyReceipt_subsidy_activities_id_fkey";

-- AlterTable
ALTER TABLE "public"."SubsidyReceipt" DROP COLUMN "subsidy_activities_id",
ADD COLUMN     "project_activities_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."SubsidyActivity";

-- CreateTable
CREATE TABLE "public"."ProjectActivity" (
    "id" TEXT NOT NULL,
    "subsidy_request_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "budget_amount" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "ProjectActivity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."ProjectActivity" ADD CONSTRAINT "ProjectActivity_subsidy_request_id_fkey" FOREIGN KEY ("subsidy_request_id") REFERENCES "public"."SubsidyRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SubsidyReceipt" ADD CONSTRAINT "SubsidyReceipt_project_activities_id_fkey" FOREIGN KEY ("project_activities_id") REFERENCES "public"."ProjectActivity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
