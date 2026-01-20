/*
  Warnings:

  - A unique constraint covering the columns `[leader_id]` on the table `Church` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `leader_id` to the `Church` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'updateChurchLeader';

-- AlterTable
ALTER TABLE "public"."Church" ADD COLUMN "leader_id" TEXT;

-- Step 2: Set leader_id for existing churches using the first user of the institution
UPDATE "public"."Church" c
SET "leader_id" = (
  SELECT u.id 
  FROM "public"."User" u 
  WHERE u.institution_id = c.institution_id 
  AND u.is_deleted = false
  ORDER BY u.created_at ASC 
  LIMIT 1
)
WHERE c."leader_id" IS NULL;

-- Step 3: Make leader_id NOT NULL
ALTER TABLE "public"."Church" ALTER COLUMN "leader_id" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Church_leader_id_key" ON "public"."Church"("leader_id");

-- AddForeignKey
ALTER TABLE "public"."Church" ADD CONSTRAINT "Church_leader_id_fkey" FOREIGN KEY ("leader_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
