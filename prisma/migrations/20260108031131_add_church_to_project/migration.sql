-- AlterTable
ALTER TABLE "public"."Project" ADD COLUMN     "church_id" TEXT;

-- AddForeignKey
ALTER TABLE "public"."Project" ADD CONSTRAINT "Project_church_id_fkey" FOREIGN KEY ("church_id") REFERENCES "public"."Church"("id") ON DELETE SET NULL ON UPDATE CASCADE;
