-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."ProjectHistoryType" ADD VALUE 'ACTIVITY_CREATED';
ALTER TYPE "public"."ProjectHistoryType" ADD VALUE 'ACTIVITY_UPDATED';
ALTER TYPE "public"."ProjectHistoryType" ADD VALUE 'ACTIVITY_DELETED';
ALTER TYPE "public"."ProjectHistoryType" ADD VALUE 'SUBSIDY_CREATED';
ALTER TYPE "public"."ProjectHistoryType" ADD VALUE 'SUBSIDY_UPDATED';
ALTER TYPE "public"."ProjectHistoryType" ADD VALUE 'SUBSIDY_APPROVED';
ALTER TYPE "public"."ProjectHistoryType" ADD VALUE 'SUBSIDY_REJECTED';
ALTER TYPE "public"."ProjectHistoryType" ADD VALUE 'SUBSIDY_DELETED';
