/*
  Warnings:

  - The values [missionProjects,missionProject] on the enum `PermissionResolverName` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."PermissionResolverName_new" AS ENUM ('users', 'user', 'createUser', 'updateUser', 'deleteUser', 'createInstitution', 'institutions', 'institution', 'updateInstitution', 'deleteInstitution', 'regions', 'region', 'createRegion', 'updateRegion', 'deleteRegion', 'churches', 'church', 'createChurch', 'updateChurch', 'deleteChurch', 'permissions', 'createRole', 'updateRole', 'deleteRole', 'roles', 'role', 'auth', 'departments', 'department', 'createDepartment', 'updateDepartment', 'deleteDepartment', 'communications', 'communication', 'createCommunication', 'updateCommunication', 'deleteCommunication', 'directMessages', 'directMessage', 'createDirectMessage', 'updateDirectMessage', 'deleteDirectMessage', 'projects', 'project', 'createProject', 'updateProject', 'deleteProject', 'notifications', 'notification', 'createNotification', 'updateNotification', 'deleteNotification', 'settings', 'setting', 'createSetting', 'updateSetting', 'deleteSetting', 'subsidyRequests', 'subsidyRequest', 'createSubsidyRequest', 'updateSubsidyRequest', 'deleteSubsidyRequest', 'subsidyStatuses', 'subsidyStatus', 'createSubsidyStatus', 'updateSubsidyStatus', 'deleteSubsidyStatus');
ALTER TABLE "public"."Permission" ALTER COLUMN "resolver_name" TYPE "public"."PermissionResolverName_new" USING ("resolver_name"::text::"public"."PermissionResolverName_new");
ALTER TYPE "public"."PermissionResolverName" RENAME TO "PermissionResolverName_old";
ALTER TYPE "public"."PermissionResolverName_new" RENAME TO "PermissionResolverName";
DROP TYPE "public"."PermissionResolverName_old";
COMMIT;
