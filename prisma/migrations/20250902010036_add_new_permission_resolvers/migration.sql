-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'user';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'createUser';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'createInstitution';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'institutions';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'institution';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'updateInstitution';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'deleteInstitution';
