-- AlterTable
ALTER TABLE "public"."SubsidyRequest" ADD COLUMN     "advance_amount" DECIMAL(65,30),
ADD COLUMN     "is_for_advance" BOOLEAN NOT NULL DEFAULT false;
