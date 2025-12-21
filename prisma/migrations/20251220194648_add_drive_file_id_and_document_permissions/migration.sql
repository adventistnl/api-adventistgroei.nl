-- CreateEnum
CREATE TYPE "public"."ActivityStatus" AS ENUM ('TODO', 'IN_PROGRESS', 'COMPLETED', 'ON_HOLD');

-- CreateEnum
CREATE TYPE "public"."ActivityPriority" AS ENUM ('URGENT', 'HIGH', 'MEDIUM', 'LOW');

-- CreateEnum
CREATE TYPE "public"."ProjectActivityLogAction" AS ENUM ('CREATED', 'UPDATED', 'DELETED', 'STATUS_CHANGED', 'PRIORITY_CHANGED', 'ASSIGNED', 'UNASSIGNED', 'BUDGET_UPDATED', 'DEADLINE_UPDATED', 'TAG_ADDED', 'TAG_REMOVED', 'SUBSIDIZED_CHANGED');

-- AlterEnum
ALTER TYPE "public"."PermissionGroup" ADD VALUE 'ACTIVITY_DOCUMENT';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'batchUpdateProjectActivities';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'projectActivityLogs';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'recalculateInstitutionAllocatedAmounts';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'projectKPIs';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'projectsByDepartment';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'subsidyStatusDistribution';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'projectsTimeline';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'uploadActivityDocument';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'downloadActivityDocument';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'deleteActivityDocument';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'validateActivityDocument';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'getActivityDocuments';

-- AlterTable
ALTER TABLE "public"."ActivityDocuments" ADD COLUMN     "drive_file_id" TEXT;

-- AlterTable
ALTER TABLE "public"."ProjectActivity" ADD COLUMN     "activity_tag" "public"."ActivityTags",
ADD COLUMN     "custom_tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "is_subsidized" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priority" "public"."ActivityPriority" NOT NULL DEFAULT 'MEDIUM',
ADD COLUMN     "status" "public"."ActivityStatus" NOT NULL DEFAULT 'TODO';

-- CreateTable
CREATE TABLE "public"."ProjectActivityLog" (
    "id" TEXT NOT NULL,
    "activity_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "action" "public"."ProjectActivityLogAction" NOT NULL,
    "field_name" TEXT,
    "old_value" TEXT,
    "new_value" TEXT,
    "metadata" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectActivityLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProjectActivityLog_activity_id_idx" ON "public"."ProjectActivityLog"("activity_id");

-- CreateIndex
CREATE INDEX "ProjectActivityLog_user_id_idx" ON "public"."ProjectActivityLog"("user_id");

-- CreateIndex
CREATE INDEX "ProjectActivityLog_created_at_idx" ON "public"."ProjectActivityLog"("created_at");

-- AddForeignKey
ALTER TABLE "public"."ProjectActivityLog" ADD CONSTRAINT "ProjectActivityLog_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "public"."ProjectActivity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProjectActivityLog" ADD CONSTRAINT "ProjectActivityLog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
