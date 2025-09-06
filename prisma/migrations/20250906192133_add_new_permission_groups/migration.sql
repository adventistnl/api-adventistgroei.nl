-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."PermissionGroup" ADD VALUE 'DEPARTMENT';
ALTER TYPE "public"."PermissionGroup" ADD VALUE 'COMMUNICATION';
ALTER TYPE "public"."PermissionGroup" ADD VALUE 'DIRECT_MESSAGE';
ALTER TYPE "public"."PermissionGroup" ADD VALUE 'MISSION_PROJECT';
ALTER TYPE "public"."PermissionGroup" ADD VALUE 'NOTIFICATION';
ALTER TYPE "public"."PermissionGroup" ADD VALUE 'SETTING';
ALTER TYPE "public"."PermissionGroup" ADD VALUE 'SUBSIDY_REQUEST';
