-- AlterEnum
ALTER TYPE "public"."ProjectType" ADD VALUE 'CHURCH_PLANTING';

-- DropForeignKey
ALTER TABLE "public"."EventRecipient" DROP CONSTRAINT "EventRecipient_event_id_fkey";

-- AlterTable
ALTER TABLE "public"."SubsidyReceipt" ADD COLUMN     "subsidy_request_id" TEXT;

-- CreateTable
CREATE TABLE "public"."FundingPolicies" (
    "id" TEXT NOT NULL,
    "entity_type" TEXT NOT NULL,
    "entity_id" TEXT NOT NULL,
    "max_percent" DECIMAL(65,30) NOT NULL,
    "annual_cap" DECIMAL(65,30) NOT NULL,
    "year" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "FundingPolicies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ActivityFunding" (
    "id" TEXT NOT NULL,
    "activity_id" TEXT NOT NULL,
    "entity_type" TEXT NOT NULL,
    "entity_id" TEXT NOT NULL,
    "contribution_amount" DECIMAL(65,30) NOT NULL,
    "contribution_percent" DECIMAL(65,30) NOT NULL,
    "validated" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ActivityFunding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ActivityDocuments" (
    "id" TEXT NOT NULL,
    "activity_id" TEXT NOT NULL,
    "file_url" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "is_validated" BOOLEAN NOT NULL DEFAULT false,
    "uploaded_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "validated_at" TIMESTAMP(3),

    CONSTRAINT "ActivityDocuments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SpecialProjects" (
    "id" TEXT NOT NULL,
    "department_id" TEXT NOT NULL,
    "institution_id" TEXT,
    "project_id" TEXT,
    "justification_note" TEXT,
    "budget" DECIMAL(65,30),
    "subsidy_statuses_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "location_church_plant" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "SpecialProjects_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."SubsidyReceipt" ADD CONSTRAINT "SubsidyReceipt_subsidy_request_id_fkey" FOREIGN KEY ("subsidy_request_id") REFERENCES "public"."SubsidyRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EventRecipient" ADD CONSTRAINT "EventRecipient_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "public"."Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SpecialProjects" ADD CONSTRAINT "SpecialProjects_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SpecialProjects" ADD CONSTRAINT "SpecialProjects_subsidy_statuses_id_fkey" FOREIGN KEY ("subsidy_statuses_id") REFERENCES "public"."SubsidyStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
