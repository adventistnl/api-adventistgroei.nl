-- CreateEnum
CREATE TYPE "public"."ProjectStatus" AS ENUM ('DRAFT', 'IN_PROGRESS', 'IN_REVIEW', 'ON_HOLD', 'EXPIRED', 'CONCLUDED');

-- AlterTable
ALTER TABLE "public"."Project" ADD COLUMN     "status" "public"."ProjectStatus" NOT NULL DEFAULT 'DRAFT';
