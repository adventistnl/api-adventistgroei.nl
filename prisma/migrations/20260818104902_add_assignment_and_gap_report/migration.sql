-- CreateEnum
CREATE TYPE "public"."AssignmentOrigin" AS ENUM ('ADMIN_ASSIGNED', 'PREACHER_REQUESTED', 'CHURCH_INVITED', 'SELF_FILLED');

-- CreateEnum
CREATE TYPE "public"."AssignmentStatus" AS ENUM ('DRAFT', 'PENDING_CONFIRMATION', 'CONFIRMED', 'DECLINED', 'LOCKED');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'scheduleOverview';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'gapReport';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'setAssignment';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'setAssignmentAny';

-- CreateTable
CREATE TABLE "public"."Assignment" (
    "id" TEXT NOT NULL,
    "institution_id" TEXT NOT NULL,
    "church_id" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "user_id" TEXT,
    "origin" "public"."AssignmentOrigin" NOT NULL,
    "status" "public"."AssignmentStatus" NOT NULL DEFAULT 'DRAFT',
    "locked_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "Assignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AssignmentHistory" (
    "id" TEXT NOT NULL,
    "assignment_id" TEXT NOT NULL,
    "field_name" TEXT NOT NULL,
    "old_value" TEXT,
    "new_value" TEXT,
    "changed_by" TEXT NOT NULL,
    "changed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AssignmentHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."GapReportSnapshot" (
    "id" TEXT NOT NULL,
    "institution_id" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "churches_without_preacher" JSONB NOT NULL,
    "preachers_without_assignment" JSONB NOT NULL,
    "computed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GapReportSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Assignment_institution_id_date_status_idx" ON "public"."Assignment"("institution_id", "date", "status");

-- CreateIndex
CREATE UNIQUE INDEX "Assignment_church_id_date_key" ON "public"."Assignment"("church_id", "date");

-- CreateIndex
CREATE INDEX "AssignmentHistory_assignment_id_idx" ON "public"."AssignmentHistory"("assignment_id");

-- CreateIndex
CREATE UNIQUE INDEX "GapReportSnapshot_institution_id_month_key" ON "public"."GapReportSnapshot"("institution_id", "month");

-- AddForeignKey
ALTER TABLE "public"."Assignment" ADD CONSTRAINT "Assignment_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "public"."Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Assignment" ADD CONSTRAINT "Assignment_church_id_fkey" FOREIGN KEY ("church_id") REFERENCES "public"."Church"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Assignment" ADD CONSTRAINT "Assignment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."GapReportSnapshot" ADD CONSTRAINT "GapReportSnapshot_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "public"."Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
