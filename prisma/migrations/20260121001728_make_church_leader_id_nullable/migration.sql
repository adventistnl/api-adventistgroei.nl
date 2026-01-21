-- DropForeignKey
ALTER TABLE "public"."Church" DROP CONSTRAINT "Church_leader_id_fkey";

-- AlterTable
ALTER TABLE "public"."Church" ALTER COLUMN "leader_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Church" ADD CONSTRAINT "Church_leader_id_fkey" FOREIGN KEY ("leader_id") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
