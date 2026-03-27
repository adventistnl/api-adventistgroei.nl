-- CreateEnum
CREATE TYPE "public"."AdjustmentStatus" AS ENUM ('OPEN', 'IN_PROGRESS', 'CLOSED');

-- AlterEnum
ALTER TYPE "public"."ProjectHistoryType" ADD VALUE 'ADJUSTMENT_NEEDED';

-- CreateTable
CREATE TABLE "public"."ProjectAdjustment" (
    "id" TEXT NOT NULL,
    "project_history_id" TEXT NOT NULL,
    "status" "public"."AdjustmentStatus" NOT NULL DEFAULT 'OPEN',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,

    CONSTRAINT "ProjectAdjustment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AdjustmentTask" (
    "id" TEXT NOT NULL,
    "adjustment_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "position" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdjustmentTask_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectAdjustment_project_history_id_key" ON "public"."ProjectAdjustment"("project_history_id");

-- CreateIndex
CREATE INDEX "ProjectAdjustment_status_idx" ON "public"."ProjectAdjustment"("status");

-- CreateIndex
CREATE INDEX "AdjustmentTask_adjustment_id_idx" ON "public"."AdjustmentTask"("adjustment_id");

-- AddForeignKey
ALTER TABLE "public"."ProjectAdjustment" ADD CONSTRAINT "ProjectAdjustment_project_history_id_fkey" FOREIGN KEY ("project_history_id") REFERENCES "public"."ProjectHistory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AdjustmentTask" ADD CONSTRAINT "AdjustmentTask_adjustment_id_fkey" FOREIGN KEY ("adjustment_id") REFERENCES "public"."ProjectAdjustment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
