-- CreateEnum
CREATE TYPE "public"."ProjectHistoryType" AS ENUM ('COMMENT', 'CREATED', 'UPDATED', 'STATUS_CHANGED', 'BUDGET_UPDATED', 'DEADLINE_UPDATED', 'OWNER_CHANGED', 'CO_OWNER_UPDATED', 'DEPARTMENT_CHANGED', 'DELETED', 'RESTORED');

-- AlterEnum
ALTER TYPE "public"."PermissionGroup" ADD VALUE 'PROJECT_HISTORY';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'projectHistories';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'createProjectHistory';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'deleteProjectHistory';

-- CreateTable
CREATE TABLE "public"."ProjectHistory" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" "public"."ProjectHistoryType" NOT NULL,
    "comment" TEXT,
    "field_name" TEXT,
    "old_value" TEXT,
    "new_value" TEXT,
    "metadata" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProjectHistory_project_id_idx" ON "public"."ProjectHistory"("project_id");

-- CreateIndex
CREATE INDEX "ProjectHistory_user_id_idx" ON "public"."ProjectHistory"("user_id");

-- CreateIndex
CREATE INDEX "ProjectHistory_created_at_idx" ON "public"."ProjectHistory"("created_at");

-- AddForeignKey
ALTER TABLE "public"."ProjectHistory" ADD CONSTRAINT "ProjectHistory_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProjectHistory" ADD CONSTRAINT "ProjectHistory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
