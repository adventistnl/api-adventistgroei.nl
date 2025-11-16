/*
  Warnings:

  - Added the required column `updated_at` to the `ActivityDocuments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by` to the `VoluntariesOnProjects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `VoluntariesOnProjects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_by` to the `VoluntariesOnProjects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ActivityDocuments" ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "deleted_by" TEXT,
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_by" TEXT;

-- AlterTable
ALTER TABLE "public"."ActivityFunding" ADD COLUMN     "created_by" TEXT,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "deleted_by" TEXT,
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updated_by" TEXT;

-- AlterTable
ALTER TABLE "public"."VoluntariesOnProjects" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" TEXT NOT NULL,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "deleted_by" TEXT,
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_by" TEXT NOT NULL;
