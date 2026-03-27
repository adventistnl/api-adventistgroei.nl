-- CreateEnum
CREATE TYPE "public"."SubsidyRequestType" AS ENUM ('ADVANCE', 'WITHOUT_DOCUMENT', 'WITH_DOCUMENT');

-- AlterTable
ALTER TABLE "public"."SubsidyRequest" ADD COLUMN     "request_type" "public"."SubsidyRequestType" NOT NULL DEFAULT 'WITH_DOCUMENT';
