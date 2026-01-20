-- AlterTable
ALTER TABLE "public"."Role" ADD COLUMN     "is_fixed" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "public"."RolePermission" ADD COLUMN     "is_essential" BOOLEAN NOT NULL DEFAULT false;
