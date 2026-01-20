-- CreateEnum
CREATE TYPE "public"."SubsidyRequestPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "public"."SubsidyHistoryType" AS ENUM ('STATUS_CHANGE', 'PRIORITY_CHANGE', 'COMMENT', 'DOCUMENT_ACTION');

-- AlterTable
ALTER TABLE "public"."SubsidyRequest" ADD COLUMN     "priority" "public"."SubsidyRequestPriority" NOT NULL DEFAULT 'MEDIUM';

-- AlterTable
ALTER TABLE "public"."SubsidyStatusHistory" ADD COLUMN     "type" "public"."SubsidyHistoryType" NOT NULL DEFAULT 'STATUS_CHANGE';
