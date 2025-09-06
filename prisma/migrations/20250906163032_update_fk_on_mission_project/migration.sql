/*
  Warnings:

  - You are about to drop the column `institutionId` on the `MissionProject` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."MissionProject" DROP CONSTRAINT "MissionProject_institutionId_fkey";

-- AlterTable
ALTER TABLE "public"."MissionProject" DROP COLUMN "institutionId",
ADD COLUMN     "institution_id" TEXT;

-- AddForeignKey
ALTER TABLE "public"."MissionProject" ADD CONSTRAINT "MissionProject_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "public"."Institution"("id") ON DELETE SET NULL ON UPDATE CASCADE;
