/*
  Warnings:

  - The values [createMissionProject,updateMissionProject,deleteMissionProject] on the enum `PermissionResolverName` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `MissionProject` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."PermissionResolverName_new" AS ENUM ('users', 'user', 'createUser', 'updateUser', 'deleteUser', 'createInstitution', 'institutions', 'institution', 'updateInstitution', 'deleteInstitution', 'regions', 'region', 'createRegion', 'updateRegion', 'deleteRegion', 'churches', 'church', 'createChurch', 'updateChurch', 'deleteChurch', 'permissions', 'createRole', 'updateRole', 'deleteRole', 'roles', 'role', 'auth', 'departments', 'department', 'createDepartment', 'updateDepartment', 'deleteDepartment', 'communications', 'communication', 'createCommunication', 'updateCommunication', 'deleteCommunication', 'directMessages', 'directMessage', 'createDirectMessage', 'updateDirectMessage', 'deleteDirectMessage', 'missionProjects', 'missionProject', 'createProject', 'updateProject', 'deleteProject', 'notifications', 'notification', 'createNotification', 'updateNotification', 'deleteNotification', 'settings', 'setting', 'createSetting', 'updateSetting', 'deleteSetting', 'subsidyRequests', 'subsidyRequest', 'createSubsidyRequest', 'updateSubsidyRequest', 'deleteSubsidyRequest', 'subsidyStatuses', 'subsidyStatus', 'createSubsidyStatus', 'updateSubsidyStatus', 'deleteSubsidyStatus');
ALTER TABLE "public"."Permission" ALTER COLUMN "resolver_name" TYPE "public"."PermissionResolverName_new" USING ("resolver_name"::text::"public"."PermissionResolverName_new");
ALTER TYPE "public"."PermissionResolverName" RENAME TO "PermissionResolverName_old";
ALTER TYPE "public"."PermissionResolverName_new" RENAME TO "PermissionResolverName";
DROP TYPE "public"."PermissionResolverName_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "public"."MissionProject" DROP CONSTRAINT "MissionProject_department_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."MissionProject" DROP CONSTRAINT "MissionProject_institution_id_fkey";

-- DropTable
DROP TABLE "public"."MissionProject";

-- CreateTable
CREATE TABLE "public"."Project" (
    "id" TEXT NOT NULL,
    "department_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "budget" DECIMAL(65,30) NOT NULL,
    "media_link" TEXT NOT NULL,
    "language_preference" "public"."LanguagePreference" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,
    "institution_id" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Project" ADD CONSTRAINT "Project_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "public"."Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Project" ADD CONSTRAINT "Project_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "public"."Institution"("id") ON DELETE SET NULL ON UPDATE CASCADE;