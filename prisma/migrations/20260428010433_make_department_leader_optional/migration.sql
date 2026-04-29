-- DropForeignKey
ALTER TABLE "public"."Department" DROP CONSTRAINT "Department_leader_id_fkey";

-- AlterTable
ALTER TABLE "public"."Department" ALTER COLUMN "leader_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Department" ADD CONSTRAINT "Department_leader_id_fkey" FOREIGN KEY ("leader_id") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
