import { PrismaClient, PermissionResolverName, PermissionGroup } from '@prisma/client';
import { Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const permissionsDisabledToClient = [
  { name: 'read communications', description: 'Access to communications', resolver_name: 'communications' as PermissionResolverName, group: 'COMMUNICATION' as PermissionGroup, key_code: 'COMMUNICATIONS_ACCESS', disabled_to_client: true },
  { name: 'read communication', description: 'Access to a single communication', resolver_name: 'communication' as PermissionResolverName, group: 'COMMUNICATION' as PermissionGroup, key_code: 'COMMUNICATION_ACCESS', disabled_to_client: true },
  { name: 'read direct messages', description: 'Access to direct messages', resolver_name: 'directMessages' as PermissionResolverName, group: 'DIRECT_MESSAGE' as PermissionGroup, key_code: 'DIRECT_MESSAGES_ACCESS', disabled_to_client: true },
  { name: 'read direct message', description: 'Access to a single direct message', resolver_name: 'directMessage' as PermissionResolverName, group: 'DIRECT_MESSAGE' as PermissionGroup, key_code: 'DIRECT_MESSAGE_ACCESS', disabled_to_client: true },
  { name: 'read notifications', description: 'Access to notifications', resolver_name: 'notifications' as PermissionResolverName, group: 'NOTIFICATION' as PermissionGroup, key_code: 'NOTIFICATIONS_ACCESS', disabled_to_client: true },
  { name: 'read notification', description: 'Access to a single notification', resolver_name: 'notification' as PermissionResolverName, group: 'NOTIFICATION' as PermissionGroup, key_code: 'NOTIFICATION_ACCESS', disabled_to_client: true },
  { name: 'read settings', description: 'Access to settings', resolver_name: 'settings' as PermissionResolverName, group: 'SETTING' as PermissionGroup, key_code: 'SETTINGS_ACCESS', disabled_to_client: true },
  { name: 'read setting', description: 'Access to a single setting', resolver_name: 'setting' as PermissionResolverName, group: 'SETTING' as PermissionGroup, key_code: 'SETTING_ACCESS', disabled_to_client: true },
  { name: 'read subsidy requests', description: 'Access to subsidy requests', resolver_name: 'subsidyRequests' as PermissionResolverName, group: 'SUBSIDY_REQUEST' as PermissionGroup, key_code: 'SUBSIDY_REQUESTS_ACCESS', disabled_to_client: true },
  { name: 'read subsidy request', description: 'Access to a single subsidy request', resolver_name: 'subsidyRequest' as PermissionResolverName, group: 'SUBSIDY_REQUEST' as PermissionGroup, key_code: 'SUBSIDY_REQUEST_ACCESS', disabled_to_client: true },
  { name: 'read subsidy statuses', description: 'Access to subsidy statuses', resolver_name: 'subsidyStatuses' as PermissionResolverName, group: 'SUBSIDY_STATUS' as PermissionGroup, key_code: 'SUBSIDY_STATUSES_ACCESS', disabled_to_client: true },
  { name: 'read subsidy status', description: 'Access to a single subsidy status', resolver_name: 'subsidyStatus' as PermissionResolverName, group: 'SUBSIDY_STATUS' as PermissionGroup, key_code: 'SUBSIDY_STATUS_ACCESS', disabled_to_client: true },
  { name: 'read project activities', description: 'Access to project activities list', resolver_name: 'projectActivities' as PermissionResolverName, group: 'ACTIVITY' as PermissionGroup, key_code: 'PROJECT_ACTIVITIES_ACCESS', disabled_to_client: true },
  { name: 'read project activity', description: 'Access to a single project activity', resolver_name: 'projectActivity' as PermissionResolverName, group: 'ACTIVITY' as PermissionGroup, key_code: 'ACTIVITY_ACCESS', disabled_to_client: true },
  { name: 'create communication', description: 'Create a communication', resolver_name: 'createCommunication' as PermissionResolverName, group: 'COMMUNICATION' as PermissionGroup, key_code: 'COMMUNICATION_CREATE', disabled_to_client: true },
  { name: 'update communication', description: 'Update a communication', resolver_name: 'updateCommunication' as PermissionResolverName, group: 'COMMUNICATION' as PermissionGroup, key_code: 'COMMUNICATION_UPDATE', disabled_to_client: true },
  { name: 'delete communication', description: 'Delete a communication', resolver_name: 'deleteCommunication' as PermissionResolverName, group: 'COMMUNICATION' as PermissionGroup, key_code: 'COMMUNICATION_DELETE', disabled_to_client: true },
  { name: 'create direct message', description: 'Create a direct message', resolver_name: 'createDirectMessage' as PermissionResolverName, group: 'DIRECT_MESSAGE' as PermissionGroup, key_code: 'DIRECT_MESSAGE_CREATE', disabled_to_client: true },
  { name: 'update direct message', description: 'Update a direct message', resolver_name: 'updateDirectMessage' as PermissionResolverName, group: 'DIRECT_MESSAGE' as PermissionGroup, key_code: 'DIRECT_MESSAGE_UPDATE', disabled_to_client: true },
  { name: 'delete direct message', description: 'Delete a direct message', resolver_name: 'deleteDirectMessage' as PermissionResolverName, group: 'DIRECT_MESSAGE' as PermissionGroup, key_code: 'DIRECT_MESSAGE_DELETE', disabled_to_client: true },
  { name: 'create project', description: 'Create a mission project', resolver_name: 'createProject' as PermissionResolverName, group: 'PROJECT' as PermissionGroup, key_code: 'PROJECT_CREATE', disabled_to_client: true },
  { name: 'update project', description: 'Update a mission project', resolver_name: 'updateProject' as PermissionResolverName, group: 'PROJECT' as PermissionGroup, key_code: 'PROJECT_UPDATE', disabled_to_client: true },
  { name: 'delete project', description: 'Delete a mission project', resolver_name: 'deleteProject' as PermissionResolverName, group: 'PROJECT' as PermissionGroup, key_code: 'PROJECT_DELETE', disabled_to_client: true },
  { name: 'create notification', description: 'Create a notification', resolver_name: 'createNotification' as PermissionResolverName, group: 'NOTIFICATION' as PermissionGroup, key_code: 'NOTIFICATION_CREATE', disabled_to_client: true },
  { name: 'update notification', description: 'Update a notification', resolver_name: 'updateNotification' as PermissionResolverName, group: 'NOTIFICATION' as PermissionGroup, key_code: 'NOTIFICATION_UPDATE', disabled_to_client: true },
  { name: 'delete notification', description: 'Delete a notification', resolver_name: 'deleteNotification' as PermissionResolverName, group: 'NOTIFICATION' as PermissionGroup, key_code: 'NOTIFICATION_DELETE', disabled_to_client: true },
  { name: 'create setting', description: 'Create a setting', resolver_name: 'createSetting' as PermissionResolverName, group: 'SETTING' as PermissionGroup, key_code: 'SETTING_CREATE', disabled_to_client: true },
  { name: 'update setting', description: 'Update a setting', resolver_name: 'updateSetting' as PermissionResolverName, group: 'SETTING' as PermissionGroup, key_code: 'SETTING_UPDATE', disabled_to_client: true },
  { name: 'delete setting', description: 'Delete a setting', resolver_name: 'deleteSetting' as PermissionResolverName, group: 'SETTING' as PermissionGroup, key_code: 'SETTING_DELETE', disabled_to_client: true },
  { name: 'create subsidy request', description: 'Create a subsidy request', resolver_name: 'createSubsidyRequest' as PermissionResolverName, group: 'SUBSIDY_REQUEST' as PermissionGroup, key_code: 'SUBSIDY_REQUEST_CREATE', disabled_to_client: true },
  { name: 'update subsidy request', description: 'Update a subsidy request', resolver_name: 'updateSubsidyRequest' as PermissionResolverName, group: 'SUBSIDY_REQUEST' as PermissionGroup, key_code: 'SUBSIDY_REQUEST_UPDATE', disabled_to_client: true },
  { name: 'delete subsidy request', description: 'Delete a subsidy request', resolver_name: 'deleteSubsidyRequest' as PermissionResolverName, group: 'SUBSIDY_REQUEST' as PermissionGroup, key_code: 'SUBSIDY_REQUEST_DELETE', disabled_to_client: true },
  { name: 'create subsidy status', description: 'Create a subsidy status', resolver_name: 'createSubsidyStatus' as PermissionResolverName, group: 'SUBSIDY_STATUS' as PermissionGroup, key_code: 'SUBSIDY_STATUS_CREATE', disabled_to_client: true },
  { name: 'update subsidy status', description: 'Update a subsidy status', resolver_name: 'updateSubsidyStatus' as PermissionResolverName, group: 'SUBSIDY_STATUS' as PermissionGroup, key_code: 'SUBSIDY_STATUS_UPDATE', disabled_to_client: true },
  { name: 'delete subsidy status', description: 'Delete a subsidy status', resolver_name: 'deleteSubsidyStatus' as PermissionResolverName, group: 'SUBSIDY_STATUS' as PermissionGroup, key_code: 'SUBSIDY_STATUS_DELETE', disabled_to_client: true },
  { name: 'add project voluntary', description: 'Adicionar voluntário ao projeto', resolver_name: 'addProjectVoluntary' as PermissionResolverName, group: 'PROJECT' as PermissionGroup, key_code: 'PROJECT_VOLUNTARY_ADD', disabled_to_client: true },
  { name: 'remove project voluntary', description: 'Remover voluntário do projeto', resolver_name: 'removeProjectVoluntary' as PermissionResolverName, group: 'PROJECT' as PermissionGroup, key_code: 'PROJECT_VOLUNTARY_REMOVE', disabled_to_client: true },
];

const permissionsEnabledToClient = [
  { name: 'read users', description: 'Access to users', resolver_name: 'users' as PermissionResolverName, group: 'USER' as PermissionGroup, key_code: 'USERS_ACCESS', disabled_to_client: false },
  { name: 'read user', description: 'Access to a single user', resolver_name: 'user' as PermissionResolverName, group: 'USER' as PermissionGroup, key_code: 'USER_ACCESS', disabled_to_client: false },
  { name: 'read institutions', description: 'Access to institutions', resolver_name: 'institutions' as PermissionResolverName, group: 'INSTITUTION' as PermissionGroup, key_code: 'INSTITUTIONS_ACCESS', disabled_to_client: false },
  { name: 'read institution', description: 'Access to a single institution', resolver_name: 'institution' as PermissionResolverName, group: 'INSTITUTION' as PermissionGroup, key_code: 'INSTITUTION_ACCESS', disabled_to_client: false },
  { name: 'read regions', description: 'Access to regions', resolver_name: 'regions' as PermissionResolverName, group: 'REGION' as PermissionGroup, key_code: 'REGIONS_ACCESS', disabled_to_client: false },
  { name: 'read region', description: 'Access to a single region', resolver_name: 'region' as PermissionResolverName, group: 'REGION' as PermissionGroup, key_code: 'REGION_ACCESS', disabled_to_client: false },
  { name: 'read churches', description: 'Access to churches', resolver_name: 'churches' as PermissionResolverName, group: 'CHURCH' as PermissionGroup, key_code: 'CHURCHES_ACCESS', disabled_to_client: false },
  { name: 'read church', description: 'Access to a single church', resolver_name: 'church' as PermissionResolverName, group: 'CHURCH' as PermissionGroup, key_code: 'CHURCH_ACCESS', disabled_to_client: false },
  { name: 'read permissions', description: 'Access to permissions', resolver_name: 'permissions' as PermissionResolverName, group: 'PERMISSION' as PermissionGroup, key_code: 'PERMISSIONS_ACCESS', disabled_to_client: false },
  { name: 'read role', description: 'Access to a single role', resolver_name: 'role' as PermissionResolverName, group: 'ROLE' as PermissionGroup, key_code: 'ROLE_ACCESS', disabled_to_client: false },
  { name: 'read roles', description: 'Access to roles', resolver_name: 'roles' as PermissionResolverName, group: 'ROLE' as PermissionGroup, key_code: 'ROLES_ACCESS', disabled_to_client: false },
  { name: 'read departments', description: 'Access to departments', resolver_name: 'departments' as PermissionResolverName, group: 'DEPARTMENT' as PermissionGroup, key_code: 'DEPARTMENTS_ACCESS', disabled_to_client: false },
  { name: 'read department', description: 'Access to a single department', resolver_name: 'department' as PermissionResolverName, group: 'DEPARTMENT' as PermissionGroup, key_code: 'DEPARTMENT_ACCESS', disabled_to_client: false },
  { name: 'read projects', description: 'Access to mission projects', resolver_name: 'projects' as PermissionResolverName, group: 'PROJECT' as PermissionGroup, key_code: 'PROJECTS_ACCESS', disabled_to_client: false },
  { name: 'read project', description: 'Access to a single mission project', resolver_name: 'project' as PermissionResolverName, group: 'PROJECT' as PermissionGroup, key_code: 'PROJECT_ACCESS', disabled_to_client: false },
  { name: 'invite user', description: 'Invite a user by link', resolver_name: 'inviteUser' as PermissionResolverName, group: 'INVITE' as PermissionGroup, key_code: 'INVITE_USER_LINK', disabled_to_client: false },
  { name: 'add role to user', description: 'Add role to user', resolver_name: 'addRoleToUser' as PermissionResolverName, group: 'ROLE' as PermissionGroup, key_code: 'USER_ROLE_ADD', disabled_to_client: false },
  { name: 'remove role from user', description: 'Remove role from user', resolver_name: 'removeRoleFromUser' as PermissionResolverName, group: 'ROLE' as PermissionGroup, key_code: 'USER_ROLE_REMOVE', disabled_to_client: false },
  { name: 'create role', description: 'Create a role', resolver_name: 'createRole' as PermissionResolverName, group: 'ROLE' as PermissionGroup, key_code: 'ROLE_CREATE', disabled_to_client: false },
  { name: 'update role', description: 'Update a role', resolver_name: 'updateRole' as PermissionResolverName, group: 'ROLE' as PermissionGroup, key_code: 'ROLE_UPDATE', disabled_to_client: false },
  { name: 'delete role', description: 'Delete a role', resolver_name: 'deleteRole' as PermissionResolverName, group: 'ROLE' as PermissionGroup, key_code: 'ROLE_DELETE', disabled_to_client: false },
  { name: 'create institution', description: 'Create an institution', resolver_name: 'createInstitution' as PermissionResolverName, group: 'INSTITUTION' as PermissionGroup, key_code: 'INSTITUTION_CREATE', disabled_to_client: false },
  { name: 'create region', description: 'Create a region', resolver_name: 'createRegion' as PermissionResolverName, group: 'REGION' as PermissionGroup, key_code: 'REGION_CREATE', disabled_to_client: false },
  { name: 'create church', description: 'Create a church', resolver_name: 'createChurch' as PermissionResolverName, group: 'CHURCH' as PermissionGroup, key_code: 'CHURCH_CREATE', disabled_to_client: false },
  { name: 'create department', description: 'Create a department', resolver_name: 'createDepartment' as PermissionResolverName, group: 'DEPARTMENT' as PermissionGroup, key_code: 'DEPARTMENT_CREATE', disabled_to_client: false },
  { name: 'update user', description: 'Update a user', resolver_name: 'updateUser' as PermissionResolverName, group: 'USER' as PermissionGroup, key_code: 'USER_UPDATE', disabled_to_client: false },
  { name: 'delete user', description: 'Delete a user', resolver_name: 'deleteUser' as PermissionResolverName, group: 'USER' as PermissionGroup, key_code: 'USER_DELETE', disabled_to_client: false },
  { name: 'update institution', description: 'Update an institution', resolver_name: 'updateInstitution' as PermissionResolverName, group: 'INSTITUTION' as PermissionGroup, key_code: 'INSTITUTION_UPDATE', disabled_to_client: false },
  { name: 'delete institution', description: 'Delete an institution', resolver_name: 'deleteInstitution' as PermissionResolverName, group: 'INSTITUTION' as PermissionGroup, key_code: 'INSTITUTION_DELETE', disabled_to_client: false },
  { name: 'update region', description: 'Update a region', resolver_name: 'updateRegion' as PermissionResolverName, group: 'REGION' as PermissionGroup, key_code: 'REGION_UPDATE', disabled_to_client: false },
  { name: 'delete region', description: 'Delete a region', resolver_name: 'deleteRegion' as PermissionResolverName, group: 'REGION' as PermissionGroup, key_code: 'REGION_DELETE', disabled_to_client: false },
  { name: 'update church', description: 'Update a church', resolver_name: 'updateChurch' as PermissionResolverName, group: 'CHURCH' as PermissionGroup, key_code: 'CHURCH_UPDATE', disabled_to_client: false },
  { name: 'delete church', description: 'Delete a church', resolver_name: 'deleteChurch' as PermissionResolverName, group: 'CHURCH' as PermissionGroup, key_code: 'CHURCH_DELETE', disabled_to_client: false },
  { name: 'update department', description: 'Update a department', resolver_name: 'updateDepartment' as PermissionResolverName, group: 'DEPARTMENT' as PermissionGroup, key_code: 'DEPARTMENT_UPDATE', disabled_to_client: false },
  { name: 'delete department', description: 'Delete a department', resolver_name: 'deleteDepartment' as PermissionResolverName, group: 'DEPARTMENT' as PermissionGroup, key_code: 'DEPARTMENT_DELETE', disabled_to_client: false },
  { name: 'send invite email', description: 'Send an invitation email', resolver_name: 'sendInviteEmail' as PermissionResolverName, group: 'INVITE' as PermissionGroup, key_code: 'INVITE_EMAIL', disabled_to_client: false },
  { name: 'create annual budget', description: 'Create an annual budget', resolver_name: 'createAnnualBudget' as PermissionResolverName, group: 'ANNUAL_BUDGET' as PermissionGroup, key_code: 'ANNUAL_BUDGET_CREATE', disabled_to_client: false },
  { name: 'read annual budgets', description: 'Access to annual budgets list', resolver_name: 'annualBudgets' as PermissionResolverName, group: 'ANNUAL_BUDGET' as PermissionGroup, key_code: 'ANNUAL_BUDGETS_ACCESS', disabled_to_client: false },
  { name: 'read annual budget', description: 'Access to a single annual budget', resolver_name: 'annualBudget' as PermissionResolverName, group: 'ANNUAL_BUDGET' as PermissionGroup, key_code: 'ANNUAL_BUDGET_ACCESS', disabled_to_client: false },
  { name: 'update annual budget', description: 'Update an annual budget', resolver_name: 'updateAnnualBudget' as PermissionResolverName, group: 'ANNUAL_BUDGET' as PermissionGroup, key_code: 'ANNUAL_BUDGET_UPDATE', disabled_to_client: false },
  { name: 'delete annual budget', description: 'Delete an annual budget', resolver_name: 'deleteAnnualBudget' as PermissionResolverName, group: 'ANNUAL_BUDGET' as PermissionGroup, key_code: 'ANNUAL_BUDGET_DELETE', disabled_to_client: false },
  { name: 'approve annual budget', description: 'Approve an annual budget', resolver_name: 'approveAnnualBudget' as PermissionResolverName, group: 'ANNUAL_BUDGET' as PermissionGroup, key_code: 'ANNUAL_BUDGET_APPROVE', disabled_to_client: false },
  { name: 'reject annual budget', description: 'Reject an annual budget', resolver_name: 'rejectAnnualBudget' as PermissionResolverName, group: 'ANNUAL_BUDGET' as PermissionGroup, key_code: 'ANNUAL_BUDGET_REJECT', disabled_to_client: false },
  { name: 'request revision annual budget', description: 'Request revision for an annual budget', resolver_name: 'requestRevisionAnnualBudget' as PermissionResolverName, group: 'ANNUAL_BUDGET' as PermissionGroup, key_code: 'ANNUAL_BUDGET_REQUEST_REVISION', disabled_to_client: false },
  { name: 'toggle budget lock', description: 'Toggle lock status of an annual budget', resolver_name: 'toggleBudgetLock' as PermissionResolverName, group: 'ANNUAL_BUDGET' as PermissionGroup, key_code: 'ANNUAL_BUDGET_TOGGLE_LOCK', disabled_to_client: false },
  { name: 'read budget KPIs', description: 'Access to budget KPIs', resolver_name: 'budgetKPIs' as PermissionResolverName, group: 'ANNUAL_BUDGET' as PermissionGroup, key_code: 'BUDGET_KPIS_ACCESS', disabled_to_client: false },
  { name: 'read churches activity data', description: 'Access to churches activity KPIs', resolver_name: 'churchesActivityData' as PermissionResolverName, group: 'CHURCH' as PermissionGroup, key_code: 'CHURCHES_ACTIVITY_DATA_ACCESS', disabled_to_client: false },
  { name: 'read department spending', description: 'Access to department spending data', resolver_name: 'departmentSpending' as PermissionResolverName, group: 'ANNUAL_BUDGET' as PermissionGroup, key_code: 'DEPARTMENT_SPENDING_ACCESS', disabled_to_client: false },
  { name: 'read spending over time', description: 'Access to spending over time data', resolver_name: 'spendingOverTime' as PermissionResolverName, group: 'ANNUAL_BUDGET' as PermissionGroup, key_code: 'SPENDING_OVER_TIME_ACCESS', disabled_to_client: false },
  { name: 'read entity distribution', description: 'Access to entity distribution data', resolver_name: 'entityDistribution' as PermissionResolverName, group: 'ANNUAL_BUDGET' as PermissionGroup, key_code: 'ENTITY_DISTRIBUTION_ACCESS', disabled_to_client: false },
  { name: 'read budget distribution', description: 'Access to budget distribution data', resolver_name: 'budgetDistribution' as PermissionResolverName, group: 'ANNUAL_BUDGET' as PermissionGroup, key_code: 'BUDGET_DISTRIBUTION_ACCESS', disabled_to_client: false },
];

async function main() {
  for (const permission of [...permissionsDisabledToClient, ...permissionsEnabledToClient]) {
    try {
      await prisma.permission.upsert({
        where: { key_code: permission.key_code },
        update: {
          name: permission.name,
          description: permission.description,
          resolver_name: permission.resolver_name,
          group: permission.group,
          key_code: permission.key_code,
          created_by: 'system',
          updated_by: 'system',
          disabled_to_client: permission.disabled_to_client
        },
        create: {
          name: permission.name,
          description: permission.description,
          resolver_name: permission.resolver_name,
          group: permission.group,
          key_code: permission.key_code,
          created_by: 'system',
          updated_by: 'system',
          disabled_to_client: permission.disabled_to_client
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002' &&
        Array.isArray(error.meta?.target) &&
        error.meta.target.includes('key_code')
      ) {
        console.warn(`Permission with key_code '${permission.key_code}' already exists. Skipping creation.`);
      } else {
        console.error(`Unexpected error for key_code '${permission.key_code}':`, error);
      }
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
