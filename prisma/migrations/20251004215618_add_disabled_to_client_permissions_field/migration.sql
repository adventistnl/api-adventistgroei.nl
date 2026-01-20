-- AlterTable
ALTER TABLE "public"."Permission" ADD COLUMN     "disabled_to_client" BOOLEAN NOT NULL DEFAULT false;
