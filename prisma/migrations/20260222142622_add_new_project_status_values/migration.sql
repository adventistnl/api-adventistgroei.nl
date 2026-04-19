-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."ProjectStatus" ADD VALUE 'OPEN_REQUEST';
ALTER TYPE "public"."ProjectStatus" ADD VALUE 'ADJUSTMENTS_NEEDED';
ALTER TYPE "public"."ProjectStatus" ADD VALUE 'PENDING_RECEIPT';
ALTER TYPE "public"."ProjectStatus" ADD VALUE 'WAITING_REFUND';
ALTER TYPE "public"."ProjectStatus" ADD VALUE 'OVERDUE';
