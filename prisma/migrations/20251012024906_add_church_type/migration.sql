-- CreateEnum
CREATE TYPE "public"."ChurchClassification" AS ENUM ('PLANT', 'COMPANY', 'DEFAULT');

-- AlterTable
ALTER TABLE "public"."Church" ADD COLUMN     "type" "public"."ChurchClassification" NOT NULL DEFAULT 'DEFAULT';
