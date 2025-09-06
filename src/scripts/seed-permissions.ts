import { PrismaClient, PermissionResolverName, PermissionGroup } from '@prisma/client';

const prisma = new PrismaClient();

const permissions = [
  { name: 'users', description: 'Access to users', resolver_name: 'users' as PermissionResolverName, group: 'USER' as PermissionGroup, key_code: 'USERS_ACCESS' },
  { name: 'user', description: 'Access to a single user', resolver_name: 'user' as PermissionResolverName, group: 'USER' as PermissionGroup, key_code: 'USER_ACCESS' },
  { name: 'createUser', description: 'Create a user', resolver_name: 'createUser' as PermissionResolverName, group: 'USER' as PermissionGroup, key_code: 'USER_CREATE' },
  { name: 'updateUser', description: 'Update a user', resolver_name: 'updateUser' as PermissionResolverName, group: 'USER' as PermissionGroup, key_code: 'USER_UPDATE' },
  { name: 'deleteUser', description: 'Delete a user', resolver_name: 'deleteUser' as PermissionResolverName, group: 'USER' as PermissionGroup, key_code: 'USER_DELETE' },
  { name: 'createInstitution', description: 'Create an institution', resolver_name: 'createInstitution' as PermissionResolverName, group: 'INSTITUTION' as PermissionGroup, key_code: 'INSTITUTION_CREATE' },
  { name: 'institutions', description: 'Access to institutions', resolver_name: 'institutions' as PermissionResolverName, group: 'INSTITUTION' as PermissionGroup, key_code: 'INSTITUTIONS_ACCESS' },
  { name: 'institution', description: 'Access to a single institution', resolver_name: 'institution' as PermissionResolverName, group: 'INSTITUTION' as PermissionGroup, key_code: 'INSTITUTION_ACCESS' },
  { name: 'updateInstitution', description: 'Update an institution', resolver_name: 'updateInstitution' as PermissionResolverName, group: 'INSTITUTION' as PermissionGroup, key_code: 'INSTITUTION_UPDATE' },
  { name: 'deleteInstitution', description: 'Delete an institution', resolver_name: 'deleteInstitution' as PermissionResolverName, group: 'INSTITUTION' as PermissionGroup, key_code: 'INSTITUTION_DELETE' },
  { name: 'regions', description: 'Access to regions', resolver_name: 'regions' as PermissionResolverName, group: 'REGION' as PermissionGroup, key_code: 'REGIONS_ACCESS' },
  { name: 'region', description: 'Access to a single region', resolver_name: 'region' as PermissionResolverName, group: 'REGION' as PermissionGroup, key_code: 'REGION_ACCESS' },
  { name: 'createRegion', description: 'Create a region', resolver_name: 'createRegion' as PermissionResolverName, group: 'REGION' as PermissionGroup, key_code: 'REGION_CREATE' },
  { name: 'updateRegion', description: 'Update a region', resolver_name: 'updateRegion' as PermissionResolverName, group: 'REGION' as PermissionGroup, key_code: 'REGION_UPDATE' },
  { name: 'deleteRegion', description: 'Delete a region', resolver_name: 'deleteRegion' as PermissionResolverName, group: 'REGION' as PermissionGroup, key_code: 'REGION_DELETE' },
  { name: 'churches', description: 'Access to churches', resolver_name: 'churches' as PermissionResolverName, group: 'CHURCH' as PermissionGroup, key_code: 'CHURCHES_ACCESS' },
  { name: 'church', description: 'Access to a single church', resolver_name: 'church' as PermissionResolverName, group: 'CHURCH' as PermissionGroup, key_code: 'CHURCH_ACCESS' },
  { name: 'createChurch', description: 'Create a church', resolver_name: 'createChurch' as PermissionResolverName, group: 'CHURCH' as PermissionGroup, key_code: 'CHURCH_CREATE' },
  { name: 'updateChurch', description: 'Update a church', resolver_name: 'updateChurch' as PermissionResolverName, group: 'CHURCH' as PermissionGroup, key_code: 'CHURCH_UPDATE' },
  { name: 'deleteChurch', description: 'Delete a church', resolver_name: 'deleteChurch' as PermissionResolverName, group: 'CHURCH' as PermissionGroup, key_code: 'CHURCH_DELETE' },
  { name: 'permissions', description: 'Access to permissions', resolver_name: 'permissions' as PermissionResolverName, group: 'PERMISSION' as PermissionGroup, key_code: 'PERMISSIONS_ACCESS' },
  { name: 'createRole', description: 'Create a role', resolver_name: 'createRole' as PermissionResolverName, group: 'ROLE' as PermissionGroup, key_code: 'ROLE_CREATE' },
  { name: 'updateRole', description: 'Update a role', resolver_name: 'updateRole' as PermissionResolverName, group: 'ROLE' as PermissionGroup, key_code: 'ROLE_UPDATE' },
  { name: 'deleteRole', description: 'Delete a role', resolver_name: 'deleteRole' as PermissionResolverName, group: 'ROLE' as PermissionGroup, key_code: 'ROLE_DELETE' },
  { name: 'roles', description: 'Access to roles', resolver_name: 'roles' as PermissionResolverName, group: 'ROLE' as PermissionGroup, key_code: 'ROLES_ACCESS' },
  { name: 'role', description: 'Access to a single role', resolver_name: 'role' as PermissionResolverName, group: 'ROLE' as PermissionGroup, key_code: 'ROLE_ACCESS' },
  { name: 'auth', description: 'Authentication operations', resolver_name: 'auth' as PermissionResolverName, group: 'USER' as PermissionGroup, key_code: 'AUTH_ACCESS' },
  { name: 'departments', description: 'Access to departments', resolver_name: 'departments' as PermissionResolverName, group: 'DEPARTMENT' as PermissionGroup, key_code: 'DEPARTMENTS_ACCESS' },
  { name: 'department', description: 'Access to a single department', resolver_name: 'department' as PermissionResolverName, group: 'DEPARTMENT' as PermissionGroup, key_code: 'DEPARTMENT_ACCESS' },
  { name: 'createDepartment', description: 'Create a department', resolver_name: 'createDepartment' as PermissionResolverName, group: 'DEPARTMENT' as PermissionGroup, key_code: 'DEPARTMENT_CREATE' },
  { name: 'updateDepartment', description: 'Update a department', resolver_name: 'updateDepartment' as PermissionResolverName, group: 'DEPARTMENT' as PermissionGroup, key_code: 'DEPARTMENT_UPDATE' },
  { name: 'deleteDepartment', description: 'Delete a department', resolver_name: 'deleteDepartment' as PermissionResolverName, group: 'DEPARTMENT' as PermissionGroup, key_code: 'DEPARTMENT_DELETE' },
  { name: 'communications', description: 'Access to communications', resolver_name: 'communications' as PermissionResolverName, group: 'COMMUNICATION' as PermissionGroup, key_code: 'COMMUNICATIONS_ACCESS' },
  { name: 'communication', description: 'Access to a single communication', resolver_name: 'communication' as PermissionResolverName, group: 'COMMUNICATION' as PermissionGroup, key_code: 'COMMUNICATION_ACCESS' },
  { name: 'createCommunication', description: 'Create a communication', resolver_name: 'createCommunication' as PermissionResolverName, group: 'COMMUNICATION' as PermissionGroup, key_code: 'COMMUNICATION_CREATE' },
  { name: 'updateCommunication', description: 'Update a communication', resolver_name: 'updateCommunication' as PermissionResolverName, group: 'COMMUNICATION' as PermissionGroup, key_code: 'COMMUNICATION_UPDATE' },
  { name: 'deleteCommunication', description: 'Delete a communication', resolver_name: 'deleteCommunication' as PermissionResolverName, group: 'COMMUNICATION' as PermissionGroup, key_code: 'COMMUNICATION_DELETE' },
  { name: 'directMessages', description: 'Access to direct messages', resolver_name: 'directMessages' as PermissionResolverName, group: 'DIRECT_MESSAGE' as PermissionGroup, key_code: 'DIRECT_MESSAGES_ACCESS' },
  { name: 'directMessage', description: 'Access to a single direct message', resolver_name: 'directMessage' as PermissionResolverName, group: 'DIRECT_MESSAGE' as PermissionGroup, key_code: 'DIRECT_MESSAGE_ACCESS' },
  { name: 'createDirectMessage', description: 'Create a direct message', resolver_name: 'createDirectMessage' as PermissionResolverName, group: 'DIRECT_MESSAGE' as PermissionGroup, key_code: 'DIRECT_MESSAGE_CREATE' },
  { name: 'updateDirectMessage', description: 'Update a direct message', resolver_name: 'updateDirectMessage' as PermissionResolverName, group: 'DIRECT_MESSAGE' as PermissionGroup, key_code: 'DIRECT_MESSAGE_UPDATE' },
  { name: 'deleteDirectMessage', description: 'Delete a direct message', resolver_name: 'deleteDirectMessage' as PermissionResolverName, group: 'DIRECT_MESSAGE' as PermissionGroup, key_code: 'DIRECT_MESSAGE_DELETE' },
  { name: 'missionProjects', description: 'Access to mission projects', resolver_name: 'missionProjects' as PermissionResolverName, group: 'MISSION_PROJECT' as PermissionGroup, key_code: 'MISSION_PROJECTS_ACCESS' },
  { name: 'missionProject', description: 'Access to a single mission project', resolver_name: 'missionProject' as PermissionResolverName, group: 'MISSION_PROJECT' as PermissionGroup, key_code: 'MISSION_PROJECT_ACCESS' },
  { name: 'createMissionProject', description: 'Create a mission project', resolver_name: 'createMissionProject' as PermissionResolverName, group: 'MISSION_PROJECT' as PermissionGroup, key_code: 'MISSION_PROJECT_CREATE' },
  { name: 'updateMissionProject', description: 'Update a mission project', resolver_name: 'updateMissionProject' as PermissionResolverName, group: 'MISSION_PROJECT' as PermissionGroup, key_code: 'MISSION_PROJECT_UPDATE' },
  { name: 'deleteMissionProject', description: 'Delete a mission project', resolver_name: 'deleteMissionProject' as PermissionResolverName, group: 'MISSION_PROJECT' as PermissionGroup, key_code: 'MISSION_PROJECT_DELETE' },
  { name: 'notifications', description: 'Access to notifications', resolver_name: 'notifications' as PermissionResolverName, group: 'NOTIFICATION' as PermissionGroup, key_code: 'NOTIFICATIONS_ACCESS' },
  { name: 'notification', description: 'Access to a single notification', resolver_name: 'notification' as PermissionResolverName, group: 'NOTIFICATION' as PermissionGroup, key_code: 'NOTIFICATION_ACCESS' },
  { name: 'createNotification', description: 'Create a notification', resolver_name: 'createNotification' as PermissionResolverName, group: 'NOTIFICATION' as PermissionGroup, key_code: 'NOTIFICATION_CREATE' },
  { name: 'updateNotification', description: 'Update a notification', resolver_name: 'updateNotification' as PermissionResolverName, group: 'NOTIFICATION' as PermissionGroup, key_code: 'NOTIFICATION_UPDATE' },
  { name: 'deleteNotification', description: 'Delete a notification', resolver_name: 'deleteNotification' as PermissionResolverName, group: 'NOTIFICATION' as PermissionGroup, key_code: 'NOTIFICATION_DELETE' },
  { name: 'settings', description: 'Access to settings', resolver_name: 'settings' as PermissionResolverName, group: 'SETTING' as PermissionGroup, key_code: 'SETTINGS_ACCESS' },
  { name: 'setting', description: 'Access to a single setting', resolver_name: 'setting' as PermissionResolverName, group: 'SETTING' as PermissionGroup, key_code: 'SETTING_ACCESS' },
  { name: 'createSetting', description: 'Create a setting', resolver_name: 'createSetting' as PermissionResolverName, group: 'SETTING' as PermissionGroup, key_code: 'SETTING_CREATE' },
  { name: 'updateSetting', description: 'Update a setting', resolver_name: 'updateSetting' as PermissionResolverName, group: 'SETTING' as PermissionGroup, key_code: 'SETTING_UPDATE' },
  { name: 'deleteSetting', description: 'Delete a setting', resolver_name: 'deleteSetting' as PermissionResolverName, group: 'SETTING' as PermissionGroup, key_code: 'SETTING_DELETE' },
  { name: 'subsidyRequests', description: 'Access to subsidy requests', resolver_name: 'subsidyRequests' as PermissionResolverName, group: 'SUBSIDY_REQUEST' as PermissionGroup, key_code: 'SUBSIDY_REQUESTS_ACCESS' },
  { name: 'subsidyRequest', description: 'Access to a single subsidy request', resolver_name: 'subsidyRequest' as PermissionResolverName, group: 'SUBSIDY_REQUEST' as PermissionGroup, key_code: 'SUBSIDY_REQUEST_ACCESS' },
  { name: 'createSubsidyRequest', description: 'Create a subsidy request', resolver_name: 'createSubsidyRequest' as PermissionResolverName, group: 'SUBSIDY_REQUEST' as PermissionGroup, key_code: 'SUBSIDY_REQUEST_CREATE' },
  { name: 'updateSubsidyRequest', description: 'Update a subsidy request', resolver_name: 'updateSubsidyRequest' as PermissionResolverName, group: 'SUBSIDY_REQUEST' as PermissionGroup, key_code: 'SUBSIDY_REQUEST_UPDATE' },
  { name: 'deleteSubsidyRequest', description: 'Delete a subsidy request', resolver_name: 'deleteSubsidyRequest' as PermissionResolverName, group: 'SUBSIDY_REQUEST' as PermissionGroup, key_code: 'SUBSIDY_REQUEST_DELETE' },
];

async function main() {
  for (const permission of permissions) {
    await prisma.permission.upsert({
      where: { resolver_name: permission.resolver_name },
      update: {},
      create: {
        name: permission.name,
        description: permission.description,
        resolver_name: permission.resolver_name,
        group: permission.group,
        key_code: permission.key_code,
        created_by: 'system',
        updated_by: 'system',
      },
    });
  }
  console.log('Permissions seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
