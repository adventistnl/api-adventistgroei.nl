-- AlterEnum
ALTER TYPE "public"."PermissionGroup" ADD VALUE 'SUBSIDY_STATUS';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'subsidyStatuses';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'subsidyStatus';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'createSubsidyStatus';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'updateSubsidyStatus';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'deleteSubsidyStatus';
