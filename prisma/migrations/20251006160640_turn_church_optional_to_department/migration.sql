-- DropForeignKey
ALTER TABLE "public"."Department" DROP CONSTRAINT "Department_church_id_fkey";

-- AlterTable
ALTER TABLE "public"."Department" ALTER COLUMN "church_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Department" ADD CONSTRAINT "Department_church_id_fkey" FOREIGN KEY ("church_id") REFERENCES "public"."Church"("id") ON DELETE SET NULL ON UPDATE CASCADE;
