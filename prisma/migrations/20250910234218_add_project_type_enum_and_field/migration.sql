/*
  Warnings:

  - Added the required column `type` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."EnumProjectType" AS ENUM ('MISSION', 'EVANGELISM', 'SOCIAL', 'OTHER');

-- AlterTable
ALTER TABLE "public"."Project" ADD COLUMN     "type" "public"."EnumProjectType" NOT NULL;
