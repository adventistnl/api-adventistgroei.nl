-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'requestSubsidyRefund';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'getSubsidiesWaitingRefund';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'confirmRefundDone';

-- AlterTable
ALTER TABLE "public"."SubsidyRequest" ADD COLUMN     "have_refund" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "refund_amount" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "refund_done" BOOLEAN NOT NULL DEFAULT false;
