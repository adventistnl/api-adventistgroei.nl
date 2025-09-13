-- AlterTable
ALTER TABLE "public"."Event" ADD COLUMN     "end_at" TIMESTAMP(3),
ADD COLUMN     "is_private" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "required_volunteers" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "start_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "public"."Project" ADD COLUMN     "event_id" TEXT;

-- AddForeignKey
ALTER TABLE "public"."Project" ADD CONSTRAINT "Project_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "public"."Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;
