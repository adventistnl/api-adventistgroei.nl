-- CreateEnum
CREATE TYPE "public"."AvailabilityStatus" AS ENUM ('AVAILABLE', 'UNAVAILABLE', 'VACATION');

-- CreateEnum
CREATE TYPE "public"."AvailabilitySource" AS ENUM ('MANUAL', 'RECURRENCE_RULE');

-- CreateEnum
CREATE TYPE "public"."RecurrenceType" AS ENUM ('WEEKLY', 'DATE_RANGE');

-- AlterEnum
ALTER TYPE "public"."PermissionGroup" ADD VALUE 'SCHEDULE';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'myAvailability';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'setAvailability';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'setAvailabilityBulk';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'myAvailabilityRecurrenceRules';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'setAvailabilityRecurrenceRule';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'deleteAvailabilityRecurrenceRule';

-- CreateTable
CREATE TABLE "public"."Availability" (
    "id" TEXT NOT NULL,
    "institution_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "status" "public"."AvailabilityStatus" NOT NULL,
    "source" "public"."AvailabilitySource" NOT NULL DEFAULT 'MANUAL',
    "recurrence_rule_id" TEXT,
    "note" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "Availability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AvailabilityHistory" (
    "id" TEXT NOT NULL,
    "availability_id" TEXT NOT NULL,
    "field_name" TEXT NOT NULL,
    "old_value" TEXT,
    "new_value" TEXT,
    "changed_by" TEXT NOT NULL,
    "changed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AvailabilityHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AvailabilityRecurrenceRule" (
    "id" TEXT NOT NULL,
    "institution_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" "public"."RecurrenceType" NOT NULL,
    "status" "public"."AvailabilityStatus" NOT NULL,
    "day_of_week" INTEGER,
    "start_date" DATE,
    "end_date" DATE,
    "effective_from" DATE NOT NULL,
    "effective_until" DATE,
    "note" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "AvailabilityRecurrenceRule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Availability_institution_id_user_id_date_idx" ON "public"."Availability"("institution_id", "user_id", "date");

-- CreateIndex
CREATE UNIQUE INDEX "Availability_user_id_date_key" ON "public"."Availability"("user_id", "date");

-- CreateIndex
CREATE INDEX "AvailabilityHistory_availability_id_idx" ON "public"."AvailabilityHistory"("availability_id");

-- CreateIndex
CREATE INDEX "AvailabilityRecurrenceRule_institution_id_user_id_idx" ON "public"."AvailabilityRecurrenceRule"("institution_id", "user_id");

-- AddForeignKey
ALTER TABLE "public"."Availability" ADD CONSTRAINT "Availability_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "public"."Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Availability" ADD CONSTRAINT "Availability_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Availability" ADD CONSTRAINT "Availability_recurrence_rule_id_fkey" FOREIGN KEY ("recurrence_rule_id") REFERENCES "public"."AvailabilityRecurrenceRule"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AvailabilityRecurrenceRule" ADD CONSTRAINT "AvailabilityRecurrenceRule_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "public"."Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AvailabilityRecurrenceRule" ADD CONSTRAINT "AvailabilityRecurrenceRule_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
