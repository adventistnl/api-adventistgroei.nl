-- CreateEnum
CREATE TYPE "public"."InstitutionPositionType" AS ENUM ('PRESIDENT', 'SECRETARY', 'FINANCE_MANAGER');

-- AlterEnum
ALTER TYPE "public"."PermissionGroup" ADD VALUE 'INSTITUTION_POSITION';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'institutionPositions';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'institutionPosition';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'createInstitutionPosition';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'updateInstitutionPosition';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'deleteInstitutionPosition';

-- DropForeignKey
ALTER TABLE "public"."BudgetTransaction" DROP CONSTRAINT "BudgetTransaction_created_by_fkey";

-- DropForeignKey
ALTER TABLE "public"."BudgetTransfer" DROP CONSTRAINT "BudgetTransfer_created_by_fkey";

-- CreateTable
CREATE TABLE "public"."InstitutionPosition" (
    "id" TEXT NOT NULL,
    "institution_id" TEXT NOT NULL,
    "position_type" "public"."InstitutionPositionType" NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "InstitutionPosition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "InstitutionPosition_institution_id_idx" ON "public"."InstitutionPosition"("institution_id");

-- CreateIndex
CREATE INDEX "InstitutionPosition_user_id_idx" ON "public"."InstitutionPosition"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "InstitutionPosition_institution_id_position_type_key" ON "public"."InstitutionPosition"("institution_id", "position_type");

-- AddForeignKey
ALTER TABLE "public"."InstitutionPosition" ADD CONSTRAINT "InstitutionPosition_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "public"."Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InstitutionPosition" ADD CONSTRAINT "InstitutionPosition_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
