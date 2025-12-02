/*
  Warnings:

  - You are about to drop the column `requested_amount` on the `AnnualBudget` table. All the data in the column will be lost.
  - Added the required column `allocated_amount` to the `AnnualBudget` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable: Add the new column as nullable first
ALTER TABLE "public"."AnnualBudget" ADD COLUMN "allocated_amount" DECIMAL(65,30);

-- Copy data from requested_amount to allocated_amount
UPDATE "public"."AnnualBudget" SET "allocated_amount" = "requested_amount";

-- Make the new column NOT NULL
ALTER TABLE "public"."AnnualBudget" ALTER COLUMN "allocated_amount" SET NOT NULL;

-- Drop the old column
ALTER TABLE "public"."AnnualBudget" DROP COLUMN "requested_amount";
