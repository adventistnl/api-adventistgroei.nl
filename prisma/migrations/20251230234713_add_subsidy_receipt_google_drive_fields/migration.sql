/*
  Warnings:

  - You are about to drop the column `file_path` on the `SubsidyReceipt` table. All the data in the column will be lost.
  - Added the required column `file_url` to the `SubsidyReceipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filename` to the `SubsidyReceipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `SubsidyReceipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uploaded_by` to the `SubsidyReceipt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'uploadSubsidyReceipt';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'downloadSubsidyReceipt';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'deleteSubsidyReceipt';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'validateSubsidyReceipt';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'getSubsidyReceipts';

-- AlterTable
ALTER TABLE "public"."SubsidyReceipt" DROP COLUMN "file_path",
ADD COLUMN     "drive_file_id" TEXT,
ADD COLUMN     "file_url" TEXT NOT NULL,
ADD COLUMN     "filename" TEXT NOT NULL,
ADD COLUMN     "is_validated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "subsidy_request_item_id" TEXT,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "uploaded_by" TEXT NOT NULL,
ADD COLUMN     "validated_at" TIMESTAMP(3),
ADD COLUMN     "validated_by" TEXT,
ALTER COLUMN "amount" DROP NOT NULL,
ALTER COLUMN "approved" SET DEFAULT false;

-- AddForeignKey
ALTER TABLE "public"."SubsidyReceipt" ADD CONSTRAINT "SubsidyReceipt_subsidy_request_item_id_fkey" FOREIGN KEY ("subsidy_request_item_id") REFERENCES "public"."SubsidyRequestItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
