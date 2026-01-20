/*
  Warnings:

  - Added the required column `leader_id` to the `Department` table without a default value. This is not possible if the table is not empty.

*/
-- Step 1: Add leader_id column as nullable
ALTER TABLE "public"."Department" ADD COLUMN "leader_id" TEXT;

-- Step 2: Set leader_id for existing departments using the first user of the institution
UPDATE "public"."Department" d
SET "leader_id" = (
  SELECT u.id 
  FROM "public"."User" u 
  WHERE u.institution_id = d.institution_id 
  AND u.is_deleted = false
  ORDER BY u.created_at ASC 
  LIMIT 1
)
WHERE d.leader_id IS NULL;

-- Step 3: Make leader_id NOT NULL
ALTER TABLE "public"."Department" ALTER COLUMN "leader_id" SET NOT NULL;

-- Step 4: Add foreign key constraint
ALTER TABLE "public"."Department" ADD CONSTRAINT "Department_leader_id_fkey" FOREIGN KEY ("leader_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
