-- AlterTable
ALTER TABLE "public"."Project" ADD COLUMN     "co_owner_id" TEXT;

-- AddForeignKey
ALTER TABLE "public"."Project" ADD CONSTRAINT "Project_co_owner_id_fkey" FOREIGN KEY ("co_owner_id") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
