/*
  Warnings:

  - You are about to drop the column `allocated_amount` on the `AnnualBudget` table. All the data in the column will be lost.
  - You are about to drop the column `balance` on the `AnnualBudget` table. All the data in the column will be lost.
  - You are about to drop the column `total_expenses` on the `AnnualBudget` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."AnnualBudget" DROP COLUMN "allocated_amount",
DROP COLUMN "balance",
DROP COLUMN "total_expenses";
