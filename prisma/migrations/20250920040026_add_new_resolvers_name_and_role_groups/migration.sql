-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."PermissionGroup" ADD VALUE 'EMAIL_SEND';
ALTER TYPE "public"."PermissionGroup" ADD VALUE 'INVITE';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'sendInviteEmail';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'inviteUser';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'validateInviteToken';
