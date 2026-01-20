-- CreateEnum
CREATE TYPE "public"."GenderType" AS ENUM ('MALE', 'FEMALE');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "gender" "public"."GenderType" DEFAULT 'MALE';
