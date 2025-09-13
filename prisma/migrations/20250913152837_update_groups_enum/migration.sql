/*
  Warnings:

  - The values [MISSION_PROJECT] on the enum `PermissionGroup` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."PermissionGroup_new" AS ENUM ('USER', 'INSTITUTION', 'CHURCH', 'REGION', 'CONTACT', 'ROLE', 'PERMISSION', 'DEPARTMENT', 'COMMUNICATION', 'DIRECT_MESSAGE', 'PROJECT', 'ACTIVITY', 'NOTIFICATION', 'SETTING', 'SUBSIDY_REQUEST', 'SUBSIDY_STATUS');
ALTER TABLE "public"."Permission" ALTER COLUMN "group" TYPE "public"."PermissionGroup_new" USING ("group"::text::"public"."PermissionGroup_new");
ALTER TYPE "public"."PermissionGroup" RENAME TO "PermissionGroup_old";
ALTER TYPE "public"."PermissionGroup_new" RENAME TO "PermissionGroup";
DROP TYPE "public"."PermissionGroup_old";
COMMIT;
