-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'auth';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'departments';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'department';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'createDepartment';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'updateDepartment';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'deleteDepartment';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'communications';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'communication';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'createCommunication';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'updateCommunication';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'deleteCommunication';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'directMessages';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'directMessage';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'createDirectMessage';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'updateDirectMessage';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'deleteDirectMessage';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'missionProjects';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'missionProject';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'createMissionProject';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'updateMissionProject';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'deleteMissionProject';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'notifications';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'notification';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'createNotification';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'updateNotification';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'deleteNotification';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'settings';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'setting';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'createSetting';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'updateSetting';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'deleteSetting';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'subsidyRequests';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'subsidyRequest';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'createSubsidyRequest';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'updateSubsidyRequest';
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'deleteSubsidyRequest';
