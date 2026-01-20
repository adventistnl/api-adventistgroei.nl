/*
  Warnings:

  - The values [createAnnualBudget,updateAnnualBudget] on the enum `PermissionResolverName` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `_ProjectActivityToSubsidyRequest` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."PermissionResolverName_new" AS ENUM ('users', 'user', 'createUser', 'updateUser', 'deleteUser', 'addRoleToUser', 'removeRoleFromUser', 'createInstitution', 'institutions', 'institution', 'updateInstitution', 'deleteInstitution', 'regions', 'region', 'createRegion', 'updateRegion', 'deleteRegion', 'churches', 'church', 'createChurch', 'updateChurch', 'deleteChurch', 'churchActivityTimeline', 'permissions', 'createRole', 'updateRole', 'deleteRole', 'roles', 'role', 'auth', 'departments', 'department', 'createDepartment', 'updateDepartment', 'deleteDepartment', 'communications', 'communication', 'createCommunication', 'updateCommunication', 'deleteCommunication', 'directMessages', 'directMessage', 'createDirectMessage', 'updateDirectMessage', 'deleteDirectMessage', 'projects', 'project', 'createProject', 'updateProject', 'deleteProject', 'notifications', 'notification', 'createNotification', 'updateNotification', 'deleteNotification', 'settings', 'setting', 'createSetting', 'updateSetting', 'deleteSetting', 'subsidyRequests', 'subsidyRequest', 'createSubsidyRequest', 'updateSubsidyRequest', 'deleteSubsidyRequest', 'subsidyStatuses', 'subsidyStatus', 'createSubsidyStatus', 'updateSubsidyStatus', 'deleteSubsidyStatus', 'addProjectVoluntary', 'removeProjectVoluntary', 'projectActivities', 'projectActivity', 'createProjectActivity', 'updateProjectActivity', 'deleteProjectActivity', 'batchUpdateProjectActivities', 'projectActivityLogs', 'sendInviteEmail', 'inviteUser', 'validateInviteToken', 'annualBudgets', 'annualBudget', 'deleteAnnualBudget', 'approveAnnualBudget', 'rejectAnnualBudget', 'requestRevisionAnnualBudget', 'toggleBudgetLock', 'budgetKPIs', 'departmentSpending', 'spendingOverTime', 'entityDistribution', 'budgetDistribution', 'institutionalDepartmentsKPIs', 'recalculateInstitutionAllocatedAmounts', 'createInstitutionBudget', 'updateInstitutionBudget', 'createDepartmentBudget', 'updateDepartmentBudget', 'churchesActivityData', 'projectKPIs', 'projectsByDepartment', 'subsidyStatusDistribution', 'projectsTimeline', 'departmentKPIs', 'departmentActivityData', 'departmentBudgetTimeline', 'uploadActivityDocument', 'downloadActivityDocument', 'deleteActivityDocument', 'validateActivityDocument', 'getActivityDocuments');
ALTER TABLE "public"."Permission" ALTER COLUMN "resolver_name" TYPE "public"."PermissionResolverName_new" USING ("resolver_name"::text::"public"."PermissionResolverName_new");
ALTER TYPE "public"."PermissionResolverName" RENAME TO "PermissionResolverName_old";
ALTER TYPE "public"."PermissionResolverName_new" RENAME TO "PermissionResolverName";
DROP TYPE "public"."PermissionResolverName_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "public"."_ProjectActivityToSubsidyRequest" DROP CONSTRAINT "_ProjectActivityToSubsidyRequest_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_ProjectActivityToSubsidyRequest" DROP CONSTRAINT "_ProjectActivityToSubsidyRequest_B_fkey";

-- AlterTable
ALTER TABLE "public"."SubsidyRequest" ADD COLUMN     "approved_amount" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "approved_at" TIMESTAMP(3),
ADD COLUMN     "approved_by" TEXT,
ADD COLUMN     "rejection_reason" TEXT;

-- DropTable
DROP TABLE "public"."_ProjectActivityToSubsidyRequest";

-- CreateTable
CREATE TABLE "public"."SubsidyRequestItem" (
    "id" TEXT NOT NULL,
    "subsidy_request_id" TEXT NOT NULL,
    "project_activity_id" TEXT NOT NULL,
    "requested_amount" DECIMAL(65,30) NOT NULL,
    "approved_amount" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" TEXT,

    CONSTRAINT "SubsidyRequestItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SubsidyRequestItem_subsidy_request_id_idx" ON "public"."SubsidyRequestItem"("subsidy_request_id");

-- CreateIndex
CREATE INDEX "SubsidyRequestItem_project_activity_id_idx" ON "public"."SubsidyRequestItem"("project_activity_id");

-- AddForeignKey
ALTER TABLE "public"."SubsidyRequestItem" ADD CONSTRAINT "SubsidyRequestItem_subsidy_request_id_fkey" FOREIGN KEY ("subsidy_request_id") REFERENCES "public"."SubsidyRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SubsidyRequestItem" ADD CONSTRAINT "SubsidyRequestItem_project_activity_id_fkey" FOREIGN KEY ("project_activity_id") REFERENCES "public"."ProjectActivity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
