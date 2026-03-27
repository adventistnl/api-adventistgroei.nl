-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'projectAdjustments';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'projectAdjustment';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'createAdjustment';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'updateAdjustmentStatus';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'addAdjustmentTask';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'toggleAdjustmentTask';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'removeAdjustmentTask';
