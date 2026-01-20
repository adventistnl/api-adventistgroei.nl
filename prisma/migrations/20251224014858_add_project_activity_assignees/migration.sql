/*
  Warnings:

  - Added the required column `filename` to the `ActivityDocuments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ActivityDocuments" ADD COLUMN     "filename" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."ProjectActivityAssignee" (
    "id" TEXT NOT NULL,
    "activity_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "ProjectActivityAssignee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProjectActivityAssignee_activity_id_idx" ON "public"."ProjectActivityAssignee"("activity_id");

-- CreateIndex
CREATE INDEX "ProjectActivityAssignee_user_id_idx" ON "public"."ProjectActivityAssignee"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectActivityAssignee_activity_id_user_id_key" ON "public"."ProjectActivityAssignee"("activity_id", "user_id");

-- AddForeignKey
ALTER TABLE "public"."ProjectActivityAssignee" ADD CONSTRAINT "ProjectActivityAssignee_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "public"."ProjectActivity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProjectActivityAssignee" ADD CONSTRAINT "ProjectActivityAssignee_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
