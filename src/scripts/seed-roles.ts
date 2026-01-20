import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const roles = [
  {
    name: 'Admin',
    key_code: 'ADMIN',
    description: 'Administrator with full access to all system features',
    is_fixed: true,
    permissions: [
      // Activity Permissions
      { key_code: 'PROJECT_ACTIVITIES_ACCESS', is_essential: true },
      { key_code: 'ACTIVITY_ACCESS', is_essential: true },
      { key_code: 'PROJECT_ACTIVITY_CREATE', is_essential: true },
      { key_code: 'PROJECT_ACTIVITY_UPDATE', is_essential: true },
      { key_code: 'PROJECT_ACTIVITY_DELETE', is_essential: true },
      { key_code: 'PROJECT_ACTIVITIES_BATCH_UPDATE', is_essential: true },
      { key_code: 'PROJECT_ACTIVITY_LOGS_ACCESS', is_essential: true },
      { key_code: 'UPLOAD_ACTIVITY_DOCUMENT', is_essential: true },
      { key_code: 'DOWNLOAD_ACTIVITY_DOCUMENT', is_essential: true },
      { key_code: 'DELETE_ACTIVITY_DOCUMENT', is_essential: true },
      { key_code: 'VALIDATE_ACTIVITY_DOCUMENT', is_essential: true },
      { key_code: 'GET_ACTIVITY_DOCUMENTS', is_essential: true },
      // Todas as permissões de leitura e criação básicas
      { key_code: 'USERS_ACCESS', is_essential: true },
      { key_code: 'USER_ACCESS', is_essential: true },
      { key_code: 'INSTITUTIONS_ACCESS', is_essential: true },
      { key_code: 'INSTITUTION_ACCESS', is_essential: true },
      { key_code: 'REGIONS_ACCESS', is_essential: true },
      { key_code: 'REGION_ACCESS', is_essential: true },
      { key_code: 'CHURCHES_ACCESS', is_essential: true },
      { key_code: 'CHURCH_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENTS_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENT_ACCESS', is_essential: true },
      { key_code: 'ROLES_ACCESS', is_essential: true },
      { key_code: 'ROLE_ACCESS', is_essential: true },
      { key_code: 'PERMISSIONS_ACCESS', is_essential: true },
      { key_code: 'PROJECTS_ACCESS', is_essential: true },
      { key_code: 'PROJECT_ACCESS', is_essential: true },
      // Permissões de criação/manipulação
      { key_code: 'ROLE_CREATE', is_essential: true },
      { key_code: 'ROLE_UPDATE', is_essential: true },
      { key_code: 'ROLE_DELETE', is_essential: true },
      { key_code: 'USER_UPDATE', is_essential: true },
      { key_code: 'USER_DELETE', is_essential: true },
      { key_code: 'USER_ROLE_ADD', is_essential: true },
      { key_code: 'USER_ROLE_REMOVE', is_essential: true },
      { key_code: 'INSTITUTION_CREATE', is_essential: true },
      { key_code: 'INSTITUTION_UPDATE', is_essential: true },
      { key_code: 'INSTITUTION_DELETE', is_essential: true },
      { key_code: 'REGION_CREATE', is_essential: true },
      { key_code: 'REGION_UPDATE', is_essential: true },
      { key_code: 'REGION_DELETE', is_essential: true },
      { key_code: 'CHURCH_CREATE', is_essential: true },
      { key_code: 'CHURCH_UPDATE', is_essential: true },
      { key_code: 'CHURCH_DELETE', is_essential: true },
      { key_code: 'DEPARTMENT_CREATE', is_essential: true },
      { key_code: 'DEPARTMENT_UPDATE', is_essential: true },
      { key_code: 'DEPARTMENT_DELETE', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_ACCESS', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_DELETE', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_APPROVE', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_REJECT', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_REQUEST_REVISION', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_TOGGLE_LOCK', is_essential: true },
      { key_code: 'ANNUAL_BUDGETS_ACCESS', is_essential: true },
      { key_code: 'BUDGET_KPIS_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENT_SPENDING_ACCESS', is_essential: true },
      { key_code: 'SPENDING_OVER_TIME_ACCESS', is_essential: true },
      { key_code: 'ENTITY_DISTRIBUTION_ACCESS', is_essential: true },
      { key_code: 'BUDGET_DISTRIBUTION_ACCESS', is_essential: true },
      { key_code: 'INSTITUTIONAL_DEPARTMENTS_KPIS_ACCESS', is_essential: true },
      { key_code: 'INSTITUTION_BUDGET_CREATE', is_essential: true },
      { key_code: 'INSTITUTION_BUDGET_UPDATE', is_essential: true },
      { key_code: 'DEPARTMENT_BUDGET_CREATE', is_essential: true },
      { key_code: 'DEPARTMENT_BUDGET_UPDATE', is_essential: true },
      { key_code: 'INVITE_USER_LINK', is_essential: true },
      { key_code: 'INVITE_EMAIL', is_essential: true },
      { key_code: 'SUBSIDY_REQUESTS_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_CREATE', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_UPDATE', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_DELETE', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_APPROVE', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_REJECT', is_essential: true },
      { key_code: 'SPECIFIC_PROJECT_KPIS_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_KPIS_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_BY_DEPARTMENT_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_BY_MONTH_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_BY_STATUS_ACCESS', is_essential: true },
    ],
  },
  {
    name: 'Church Member',
    key_code: 'CHURCH_MEMBER',
    description: 'Basic church member with limited access',
    is_fixed: true,
    permissions: [
      { key_code: 'USERS_ACCESS', is_essential: true },
      { key_code: 'USER_ACCESS', is_essential: true },
      { key_code: 'CHURCHES_ACCESS', is_essential: true },
      { key_code: 'CHURCH_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENTS_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENT_ACCESS', is_essential: true },
    ],
  },
  {
    name: 'Church Leader',
    key_code: 'CHURCH_LEADER',
    description: 'Church leader with expanded access',
    is_fixed: true,
    permissions: [
      { key_code: 'PROJECTS_ACCESS', is_essential: true },
{ key_code: 'PROJECT_ACCESS', is_essential: true },
      { key_code: 'ANNUAL_BUDGETS_ACCESS', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_ACCESS', is_essential: true },
      { key_code: 'BUDGET_KPIS_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENT_SPENDING_ACCESS', is_essential: true },
      { key_code: 'PROJECT_ACTIVITIES_ACCESS', is_essential: true },
      { key_code: 'ACTIVITY_ACCESS', is_essential: true },
      { key_code: 'USERS_ACCESS', is_essential: true },
      { key_code: 'USER_ACCESS', is_essential: true },
      { key_code: 'CHURCHES_ACCESS', is_essential: true },
      { key_code: 'CHURCH_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENTS_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENT_ACCESS', is_essential: true },
      { key_code: 'PROJECTS_ACCESS', is_essential: true },
      { key_code: 'PROJECT_ACCESS', is_essential: true },
      { key_code: 'ANNUAL_BUDGETS_ACCESS', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_ACCESS', is_essential: true },
      { key_code: 'BUDGET_KPIS_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENT_SPENDING_ACCESS', is_essential: true },
      { key_code: 'SPENDING_OVER_TIME_ACCESS', is_essential: true },
      { key_code: 'ENTITY_DISTRIBUTION_ACCESS', is_essential: true },
      { key_code: 'BUDGET_DISTRIBUTION_ACCESS', is_essential: true },
      { key_code: 'INSTITUTIONAL_DEPARTMENTS_KPIS_ACCESS', is_essential: true },
      { key_code: 'USER_ROLE_ADD', is_essential: true },
      { key_code: 'USER_ROLE_REMOVE', is_essential: true },
      { key_code: 'CHURCH_UPDATE', is_essential: true },
      { key_code: 'DEPARTMENT_UPDATE', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_REQUEST_REVISION', is_essential: true },
    ],
  },
  {
    name: 'Financial Manager',
    key_code: 'FINANCIAL_MANAGER',
    description: 'Financial manager with access to the financial module',
    is_fixed: true,
    permissions: [
      { key_code: 'USERS_ACCESS', is_essential: true },
      { key_code: 'USER_ACCESS', is_essential: true },
      { key_code: 'PROJECTS_ACCESS', is_essential: true },
      { key_code: 'PROJECT_ACCESS', is_essential: true },
      { key_code: 'ANNUAL_BUDGETS_ACCESS', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_ACCESS', is_essential: true },
      { key_code: 'BUDGET_KPIS_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENT_SPENDING_ACCESS', is_essential: true },
      { key_code: 'SPENDING_OVER_TIME_ACCESS', is_essential: true },
      { key_code: 'ENTITY_DISTRIBUTION_ACCESS', is_essential: true },
      { key_code: 'BUDGET_DISTRIBUTION_ACCESS', is_essential: true },
      { key_code: 'INSTITUTIONAL_DEPARTMENTS_KPIS_ACCESS', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_DELETE', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_APPROVE', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_REJECT', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_REQUEST_REVISION', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_TOGGLE_LOCK', is_essential: true },
      { key_code: 'INSTITUTION_BUDGET_CREATE', is_essential: true },
      { key_code: 'INSTITUTION_BUDGET_UPDATE', is_essential: true },
      { key_code: 'DEPARTMENT_BUDGET_CREATE', is_essential: true },
      { key_code: 'DEPARTMENT_BUDGET_UPDATE', is_essential: true },
      { key_code: 'SUBSIDY_REQUESTS_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_CREATE', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_UPDATE', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_DELETE', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_APPROVE', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_REJECT', is_essential: true },
      { key_code: 'SUBSIDY_KPIS_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_BY_DEPARTMENT_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_BY_MONTH_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_BY_STATUS_ACCESS', is_essential: true },
    ],
  },
  {
    name: 'Institutional Member',
    key_code: 'INSTITUTIONAL_MEMBER',
    description: 'Basic institutional member',
    is_fixed: true,
    permissions: [
      { key_code: 'USERS_ACCESS', is_essential: true },
      { key_code: 'USER_ACCESS', is_essential: true },
      { key_code: 'INSTITUTIONS_ACCESS', is_essential: true },
      { key_code: 'INSTITUTION_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENTS_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENT_ACCESS', is_essential: true },
    ],
  },
  {
    name: 'Institutional Leader',
    key_code: 'INSTITUTIONAL_LEADER',
    description: 'Institutional leader with access to manage institution',
    is_fixed: true,
    permissions: [
      // Activity Permissions
      { key_code: 'PROJECTS_ACCESS', is_essential: true },
{ key_code: 'PROJECT_ACCESS', is_essential: true },
      { key_code: 'ANNUAL_BUDGETS_ACCESS', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_ACCESS', is_essential: true },
      { key_code: 'BUDGET_KPIS_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENT_SPENDING_ACCESS', is_essential: true },
      { key_code: 'PROJECT_ACTIVITIES_ACCESS', is_essential: true },
      { key_code: 'ACTIVITY_ACCESS', is_essential: true },
      { key_code: 'PROJECT_ACTIVITY_CREATE', is_essential: true },
      { key_code: 'PROJECT_ACTIVITY_UPDATE', is_essential: true },
      { key_code: 'PROJECT_ACTIVITY_DELETE', is_essential: true },
      { key_code: 'PROJECT_ACTIVITIES_BATCH_UPDATE', is_essential: true },
      { key_code: 'PROJECT_ACTIVITY_LOGS_ACCESS', is_essential: true },
      { key_code: 'UPLOAD_ACTIVITY_DOCUMENT', is_essential: true },
      { key_code: 'DOWNLOAD_ACTIVITY_DOCUMENT', is_essential: true },
      { key_code: 'DELETE_ACTIVITY_DOCUMENT', is_essential: true },
      { key_code: 'VALIDATE_ACTIVITY_DOCUMENT', is_essential: true },
      { key_code: 'GET_ACTIVITY_DOCUMENTS', is_essential: true },
      { key_code: 'USERS_ACCESS', is_essential: true },
      { key_code: 'USER_ACCESS', is_essential: true },
      { key_code: 'INSTITUTIONS_ACCESS', is_essential: true },
      { key_code: 'INSTITUTION_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENTS_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENT_ACCESS', is_essential: true },
      { key_code: 'REGIONS_ACCESS', is_essential: true },
      { key_code: 'REGION_ACCESS', is_essential: true },
      { key_code: 'CHURCHES_ACCESS', is_essential: true },
      { key_code: 'CHURCH_ACCESS', is_essential: true },
      { key_code: 'PROJECTS_ACCESS', is_essential: true },
      { key_code: 'PROJECT_ACCESS', is_essential: true },
      { key_code: 'ANNUAL_BUDGETS_ACCESS', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_ACCESS', is_essential: true },
      { key_code: 'BUDGET_KPIS_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENT_SPENDING_ACCESS', is_essential: true },
      { key_code: 'SPENDING_OVER_TIME_ACCESS', is_essential: true },
      { key_code: 'ENTITY_DISTRIBUTION_ACCESS', is_essential: true },
      { key_code: 'BUDGET_DISTRIBUTION_ACCESS', is_essential: true },
      { key_code: 'INSTITUTIONAL_DEPARTMENTS_KPIS_ACCESS', is_essential: true },
      { key_code: 'USER_ROLE_ADD', is_essential: true },
      { key_code: 'USER_ROLE_REMOVE', is_essential: true },
      { key_code: 'INSTITUTION_UPDATE', is_essential: true },
      { key_code: 'REGION_UPDATE', is_essential: true },
      { key_code: 'CHURCH_UPDATE', is_essential: true },
      { key_code: 'DEPARTMENT_UPDATE', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_REQUEST_REVISION', is_essential: true },
      { key_code: 'INSTITUTION_BUDGET_CREATE', is_essential: true },
      { key_code: 'INSTITUTION_BUDGET_UPDATE', is_essential: true },
      { key_code: 'DEPARTMENT_BUDGET_CREATE', is_essential: true },
      { key_code: 'DEPARTMENT_BUDGET_UPDATE', is_essential: true },
      { key_code: 'SUBSIDY_REQUESTS_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_CREATE', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_UPDATE', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_DELETE', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_APPROVE', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_REJECT', is_essential: true },
      { key_code: 'SUBSIDY_KPIS_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_BY_DEPARTMENT_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_BY_MONTH_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_BY_STATUS_ACCESS', is_essential: true },
    ],
  },
  {
    name: 'Institutional Department Leader',
    key_code: 'INSTITUTIONAL_DEPARTMENT_LEADER',
    description: 'Institutional department leader',
    is_fixed: true,
    permissions: [
      { key_code: 'USERS_ACCESS', is_essential: true },
      { key_code: 'USER_ACCESS', is_essential: true },
      { key_code: 'INSTITUTIONS_ACCESS', is_essential: true },
      { key_code: 'INSTITUTION_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENTS_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENT_ACCESS', is_essential: true },
      { key_code: 'PROJECTS_ACCESS', is_essential: true },
      { key_code: 'PROJECT_ACCESS', is_essential: true },
      { key_code: 'USER_ROLE_ADD', is_essential: true },
      { key_code: 'USER_DEPARTMENT_UPDATE', is_essential: true },
      { key_code: 'DEPARTMENT_UPDATE', is_essential: true },
    ],
  },
  {
    name: 'Church Department Leader',
    key_code: 'DEPARTMENT_CHURCH_LEADER',
    description: 'Church department leader',
    is_fixed: true,
    permissions: [
      { key_code: 'USERS_ACCESS', is_essential: true },
      { key_code: 'USER_ACCESS', is_essential: true },
      { key_code: 'CHURCHES_ACCESS', is_essential: true },
      { key_code: 'CHURCH_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENTS_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENT_ACCESS', is_essential: true },
      { key_code: 'PROJECTS_ACCESS', is_essential: true },
      { key_code: 'PROJECT_ACCESS', is_essential: true },
      { key_code: 'USER_ROLE_ADD', is_essential: true },
      { key_code: 'USER_DEPARTMENT_UPDATE', is_essential: true },
      { key_code: 'DEPARTMENT_UPDATE', is_essential: true },
    ],
  },
  {
    name: 'Developer',
    key_code: 'DEV',
    description: 'Role with full permissions in the platform',
    is_fixed: true,
    permissions: [], // Will be populated with all permissions
  },
];

async function main() {
  for (const role of roles) {
    try {
      // First, upsert the role itself
      const createdRole = await prisma.role.upsert({
        where: { key_code: role.key_code },
        update: {
          name: role.name,
          description: role.description,
          updated_by: 'system',
        },
        create: {
          name: role.name,
          key_code: role.key_code,
          description: role.description,
          is_fixed: role.is_fixed,
          created_by: 'system',
          updated_by: 'system',
        },
      });

      // Delete existing permissions for this role to ensure clean update
      await prisma.rolePermission.deleteMany({
        where: { role_id: createdRole.id },
      });

      // For DEV role, assign all permissions
      if (role.key_code === 'DEV') {
        const permissions = await prisma.permission.findMany();
        for (const permission of permissions) {
          await prisma.rolePermission.create({
            data: {
              id: `${createdRole.id}_${permission.id}`,
              role_id: createdRole.id,
              permission_id: permission.id,
              is_essential: true,
              created_by: 'system',
              updated_by: 'system',
            },
          });
        }
        console.log(`✅ Role "${role.name}" updated with ALL permissions (${permissions.length} total)`);
      } else {
        // For other roles, create the specified permissions
        for (const permission of role.permissions) {
          const permissionRecord = await prisma.permission.findUnique({
            where: { key_code: permission.key_code },
          });

          if (permissionRecord) {
            try {
              await prisma.rolePermission.create({
                data: {
                  id: `${createdRole.id}_${permissionRecord.id}`,
                  role_id: createdRole.id,
                  permission_id: permissionRecord.id,
                  is_essential: permission.is_essential,
                  created_by: 'system',
                  updated_by: 'system',
                },
              });
            } catch (error: any) {
              // Skip if already exists (P2002 = unique constraint violation)
              if (error.code !== 'P2002') {
                throw error;
              }
            }
          } else {
            console.warn(`⚠️  Permission "${permission.key_code}" not found for role "${role.name}"`);
          }
        }
        console.log(`✅ Role "${role.name}" updated with ${role.permissions.length} permissions`);
      }
    } catch (error) {
      console.error(`❌ Error creating/updating role ${role.name}:`, error);
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
