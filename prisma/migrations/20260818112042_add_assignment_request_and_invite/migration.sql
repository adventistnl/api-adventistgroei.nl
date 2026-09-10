-- CreateEnum
CREATE TYPE "public"."RequestType" AS ENUM ('PREACHER_REQUESTED', 'CHURCH_INVITED');

-- CreateEnum
CREATE TYPE "public"."RequestStatus" AS ENUM ('PENDING', 'ACCEPTED', 'DECLINED', 'WITHDRAWN', 'SUPERSEDED');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'myAssignmentRequests';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'requestAssignment';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'inviteToAssignment';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'inviteToAssignmentAny';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'respondToAssignmentRequest';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'assignmentInviteTemplates';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'createAssignmentInviteTemplate';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'updateAssignmentInviteTemplate';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'deleteAssignmentInviteTemplate';

-- CreateTable
CREATE TABLE "public"."AssignmentRequest" (
    "id" TEXT NOT NULL,
    "institution_id" TEXT NOT NULL,
    "church_id" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" "public"."RequestType" NOT NULL,
    "status" "public"."RequestStatus" NOT NULL DEFAULT 'PENDING',
    "template_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "decided_at" TIMESTAMP(3),
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "AssignmentRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PreacherRegionAccess" (
    "id" TEXT NOT NULL,
    "institution_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "region_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "PreacherRegionAccess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AssignmentInviteTemplate" (
    "id" TEXT NOT NULL,
    "institution_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "AssignmentInviteTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AssignmentRequest_institution_id_church_id_date_status_idx" ON "public"."AssignmentRequest"("institution_id", "church_id", "date", "status");

-- CreateIndex
CREATE INDEX "AssignmentRequest_user_id_status_idx" ON "public"."AssignmentRequest"("user_id", "status");

-- CreateIndex
CREATE UNIQUE INDEX "PreacherRegionAccess_user_id_region_id_key" ON "public"."PreacherRegionAccess"("user_id", "region_id");

-- CreateIndex
CREATE INDEX "AssignmentInviteTemplate_institution_id_idx" ON "public"."AssignmentInviteTemplate"("institution_id");

-- AddForeignKey
ALTER TABLE "public"."AssignmentRequest" ADD CONSTRAINT "AssignmentRequest_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "public"."Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AssignmentRequest" ADD CONSTRAINT "AssignmentRequest_church_id_fkey" FOREIGN KEY ("church_id") REFERENCES "public"."Church"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AssignmentRequest" ADD CONSTRAINT "AssignmentRequest_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AssignmentRequest" ADD CONSTRAINT "AssignmentRequest_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "public"."AssignmentInviteTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PreacherRegionAccess" ADD CONSTRAINT "PreacherRegionAccess_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "public"."Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PreacherRegionAccess" ADD CONSTRAINT "PreacherRegionAccess_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PreacherRegionAccess" ADD CONSTRAINT "PreacherRegionAccess_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "public"."Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AssignmentInviteTemplate" ADD CONSTRAINT "AssignmentInviteTemplate_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "public"."Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
