-- CreateTable
CREATE TABLE "public"."SubsidyStatusHistory" (
    "id" TEXT NOT NULL,
    "subsidy_request_id" TEXT NOT NULL,
    "status_id" TEXT NOT NULL,
    "previous_status_id" TEXT,
    "reason" TEXT,
    "changed_by" TEXT NOT NULL,
    "changed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "SubsidyStatusHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SubsidyStatusHistory_subsidy_request_id_idx" ON "public"."SubsidyStatusHistory"("subsidy_request_id");

-- CreateIndex
CREATE INDEX "SubsidyStatusHistory_status_id_idx" ON "public"."SubsidyStatusHistory"("status_id");

-- CreateIndex
CREATE INDEX "SubsidyStatusHistory_changed_by_idx" ON "public"."SubsidyStatusHistory"("changed_by");

-- CreateIndex
CREATE INDEX "SubsidyStatusHistory_changed_at_idx" ON "public"."SubsidyStatusHistory"("changed_at");

-- AddForeignKey
ALTER TABLE "public"."SubsidyStatusHistory" ADD CONSTRAINT "SubsidyStatusHistory_subsidy_request_id_fkey" FOREIGN KEY ("subsidy_request_id") REFERENCES "public"."SubsidyRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SubsidyStatusHistory" ADD CONSTRAINT "SubsidyStatusHistory_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "public"."SubsidyStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SubsidyStatusHistory" ADD CONSTRAINT "SubsidyStatusHistory_previous_status_id_fkey" FOREIGN KEY ("previous_status_id") REFERENCES "public"."SubsidyStatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SubsidyStatusHistory" ADD CONSTRAINT "SubsidyStatusHistory_changed_by_fkey" FOREIGN KEY ("changed_by") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
