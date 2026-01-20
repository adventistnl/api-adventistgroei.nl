-- DropForeignKey
ALTER TABLE "public"."Church" DROP CONSTRAINT "Church_region_id_fkey";

-- AlterTable
ALTER TABLE "public"."Church" ALTER COLUMN "region_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Region" ADD COLUMN     "color" TEXT DEFAULT '#9810fa';

-- AddForeignKey
ALTER TABLE "public"."Church" ADD CONSTRAINT "Church_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "public"."Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;
