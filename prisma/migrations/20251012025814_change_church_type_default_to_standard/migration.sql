/*
  Warnings:

  - The `type` column on the `Church` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "public"."ChurchType" AS ENUM ('PLANT', 'COMPANY', 'STANDARD');

-- AlterTable
ALTER TABLE "public"."Church" DROP COLUMN "type",
ADD COLUMN     "type" "public"."ChurchType" NOT NULL DEFAULT 'STANDARD';

-- Atualizar todas as igrejas existentes para o tipo padrão 'STANDARD'
UPDATE "public"."Church"
SET "type" = 'STANDARD'
WHERE "type"::TEXT ILIKE 'DEFAULT';

-- DropEnum
DROP TYPE "public"."ChurchClassification";
