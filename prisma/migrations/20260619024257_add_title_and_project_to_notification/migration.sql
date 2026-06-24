-- AlterTable
ALTER TABLE "public"."Notification" ADD COLUMN     "project_id" TEXT,
ADD COLUMN     "title" TEXT,
ALTER COLUMN "read_status" SET DEFAULT false;

-- CreateIndex
CREATE INDEX "Notification_user_id_idx" ON "public"."Notification"("user_id");

-- CreateIndex
CREATE INDEX "Notification_user_id_read_status_idx" ON "public"."Notification"("user_id", "read_status");

-- CreateIndex
CREATE INDEX "Notification_created_at_idx" ON "public"."Notification"("created_at");

-- AddForeignKey
ALTER TABLE "public"."Notification" ADD CONSTRAINT "Notification_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
