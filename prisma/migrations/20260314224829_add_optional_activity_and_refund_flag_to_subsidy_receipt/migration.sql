-- DropForeignKey
ALTER TABLE "public"."SubsidyReceipt" DROP CONSTRAINT "SubsidyReceipt_project_activities_id_fkey";

-- AlterTable
ALTER TABLE "public"."SubsidyReceipt" ADD COLUMN     "is_refund_receipt" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "project_activities_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."SubsidyReceipt" ADD CONSTRAINT "SubsidyReceipt_project_activities_id_fkey" FOREIGN KEY ("project_activities_id") REFERENCES "public"."ProjectActivity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
