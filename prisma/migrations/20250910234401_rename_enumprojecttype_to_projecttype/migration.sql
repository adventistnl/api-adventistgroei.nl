/*
  Warnings:

  - Changed the type of `type` on the `Project` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."ProjectType" AS ENUM ('MISSION', 'EVANGELISM', 'SOCIAL', 'OTHER');

-- AlterTable
ALTER TABLE "public"."Project" DROP COLUMN "type",
ADD COLUMN     "type" "public"."ProjectType" NOT NULL;

-- DropEnum
DROP TYPE "public"."EnumProjectType";
