/*
  Warnings:

  - You are about to drop the column `subsidy_request_id` on the `ProjectActivity` table. All the data in the column will be lost.
  - You are about to drop the column `department_project_id` on the `SubsidyRequest` table. All the data in the column will be lost.
  - Added the required column `department_id` to the `SubsidyRequest` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."ProjectActivity" DROP CONSTRAINT "ProjectActivity_subsidy_request_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."SubsidyRequest" DROP CONSTRAINT "SubsidyRequest_department_project_id_fkey";

-- AlterTable
ALTER TABLE "public"."ProjectActivity" DROP COLUMN "subsidy_request_id";

-- AlterTable
ALTER TABLE "public"."SubsidyRequest" DROP COLUMN "department_project_id",
ADD COLUMN     "department_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."_ProjectActivityToSubsidyRequest" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProjectActivityToSubsidyRequest_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjectActivityToSubsidyRequest_B_index" ON "public"."_ProjectActivityToSubsidyRequest"("B");

-- AddForeignKey
ALTER TABLE "public"."SubsidyRequest" ADD CONSTRAINT "SubsidyRequest_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "public"."Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProjectActivityToSubsidyRequest" ADD CONSTRAINT "_ProjectActivityToSubsidyRequest_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."ProjectActivity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProjectActivityToSubsidyRequest" ADD CONSTRAINT "_ProjectActivityToSubsidyRequest_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."SubsidyRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
