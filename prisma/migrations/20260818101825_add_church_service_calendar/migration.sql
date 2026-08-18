-- CreateEnum
CREATE TYPE "public"."ServiceCalendarSource" AS ENUM ('BULK_DEFAULT', 'CHURCH_CONFIRMED');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'churchServiceCalendar';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'setChurchServiceCalendar';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'setChurchServiceCalendarBulk';

-- CreateTable
CREATE TABLE "public"."ChurchServiceCalendar" (
    "id" TEXT NOT NULL,
    "institution_id" TEXT NOT NULL,
    "church_id" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "has_service" BOOLEAN NOT NULL,
    "source" "public"."ServiceCalendarSource" NOT NULL DEFAULT 'CHURCH_CONFIRMED',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,

    CONSTRAINT "ChurchServiceCalendar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ChurchServiceCalendar_institution_id_church_id_date_idx" ON "public"."ChurchServiceCalendar"("institution_id", "church_id", "date");

-- CreateIndex
CREATE UNIQUE INDEX "ChurchServiceCalendar_church_id_date_key" ON "public"."ChurchServiceCalendar"("church_id", "date");

-- AddForeignKey
ALTER TABLE "public"."ChurchServiceCalendar" ADD CONSTRAINT "ChurchServiceCalendar_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "public"."Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ChurchServiceCalendar" ADD CONSTRAINT "ChurchServiceCalendar_church_id_fkey" FOREIGN KEY ("church_id") REFERENCES "public"."Church"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
