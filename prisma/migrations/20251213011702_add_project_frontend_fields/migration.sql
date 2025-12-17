-- AlterEnum: Convert to TEXT first, update values, then create new enum
-- Step 1: Convert column to TEXT
ALTER TABLE "Project" ALTER COLUMN "type" TYPE TEXT USING type::text;

-- Step 2: Drop old enum
DROP TYPE IF EXISTS "ProjectType";

-- Step 3: Update existing values
UPDATE "Project" SET type = 'Local' WHERE type IN ('MISSION', 'EVANGELISM', 'SOCIAL', 'OTHER');
UPDATE "Project" SET type = 'Global' WHERE type = 'CHURCH_PLANTING';
UPDATE "Project" SET type = 'Local' WHERE type NOT IN ('Local', 'Global'); -- Fallback for any other values

-- Step 4: Create new enum
CREATE TYPE "ProjectType" AS ENUM ('Local', 'Global');

-- Step 5: Convert column back to enum
ALTER TABLE "Project" ALTER COLUMN "type" TYPE "ProjectType" USING type::"ProjectType";

-- AlterTable: Add new fields to Project
ALTER TABLE "Project" ADD COLUMN "is_private" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "Project" ADD COLUMN "required_volunteers" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "Project" ADD COLUMN "start_at" TIMESTAMP(3);
ALTER TABLE "Project" ADD COLUMN "end_at" TIMESTAMP(3);

-- Set temporary values for existing records (use created_at as start_at and add 30 days for end_at)
UPDATE "Project" SET "start_at" = "created_at" WHERE "start_at" IS NULL;
UPDATE "Project" SET "end_at" = "created_at" + INTERVAL '30 days' WHERE "end_at" IS NULL;

-- Make start_at and end_at NOT NULL after setting values
ALTER TABLE "Project" ALTER COLUMN "start_at" SET NOT NULL;
ALTER TABLE "Project" ALTER COLUMN "end_at" SET NOT NULL;

-- AlterTable: Make deadline nullable if it isn't already
ALTER TABLE "Project" ALTER COLUMN "deadline" DROP NOT NULL;
