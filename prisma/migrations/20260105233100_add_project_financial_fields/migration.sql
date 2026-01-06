-- AlterTable
ALTER TABLE "public"."Project" ADD COLUMN     "balance" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "subsidized_budget" DECIMAL(65,30) NOT NULL DEFAULT 0;
