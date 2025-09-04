-- CreateEnum
CREATE TYPE "public"."PermissionGroup" AS ENUM ('USER', 'INSTITUTION', 'CHURCH', 'REGION', 'CONTACT', 'ROLE', 'PERMISSION');

-- AlterTable
ALTER TABLE "public"."Permission" ADD COLUMN     "group" "public"."PermissionGroup";
