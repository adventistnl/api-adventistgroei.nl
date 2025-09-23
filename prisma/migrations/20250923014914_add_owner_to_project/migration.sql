/*
  Warnings:

  - Added the required column `owner_id` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Project" ADD COLUMN     "owner_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Project" ADD CONSTRAINT "Project_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
