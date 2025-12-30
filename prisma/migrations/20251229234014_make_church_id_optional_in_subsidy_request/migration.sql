-- DropForeignKey
ALTER TABLE "public"."SubsidyRequest" DROP CONSTRAINT "SubsidyRequest_church_id_fkey";

-- AlterTable
ALTER TABLE "public"."SubsidyRequest" ALTER COLUMN "church_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."SubsidyRequest" ADD CONSTRAINT "SubsidyRequest_church_id_fkey" FOREIGN KEY ("church_id") REFERENCES "public"."Church"("id") ON DELETE SET NULL ON UPDATE CASCADE;
