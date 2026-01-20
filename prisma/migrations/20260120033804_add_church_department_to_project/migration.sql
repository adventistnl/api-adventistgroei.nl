-- AlterTable
ALTER TABLE "public"."Project" ADD COLUMN     "church_department_id" TEXT;

-- AddForeignKey
ALTER TABLE "public"."Project" ADD CONSTRAINT "Project_church_department_id_fkey" FOREIGN KEY ("church_department_id") REFERENCES "public"."Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;
