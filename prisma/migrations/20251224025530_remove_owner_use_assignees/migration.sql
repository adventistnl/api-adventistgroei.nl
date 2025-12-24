/*
  Warnings:

  - You are about to drop the column `owner_id` on the `ProjectActivity` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."ProjectActivity" DROP CONSTRAINT "ProjectActivity_owner_id_fkey";

-- AlterTable
ALTER TABLE "public"."ProjectActivity" DROP COLUMN "owner_id";
