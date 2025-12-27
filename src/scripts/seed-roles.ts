import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const roles = [
  {
    name: 'Admin',
    key_code: 'ADMIN',
    description: 'Administrator with full access to all system features',
    is_fixed: true,
    permissions: [
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
      { key_code: 'INSTITUTION_BUDGET_CREATE', is_essential: true },
      { key_code: 'INSTITUTION_BUDGET_UPDATE', is_essential: true },
      { key_code: 'DEPARTMENT_BUDGET_CREATE', is_essential: true },
      { key_code: 'DEPARTMENT_BUDGET_UPDATE', is_essential: true },
      { key_code: 'INVITE_USER_LINK', is_essential: true },
      { key_code: 'INVITE_EMAIL', is_essential: true },
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
      { key_code: 'ANNUAL_BUDGET_DELETE', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_APPROVE', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_REJECT', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_REQUEST_REVISION', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_TOGGLE_LOCK', is_essential: true },
      { key_code: 'INSTITUTION_BUDGET_CREATE', is_essential: true },
      { key_code: 'INSTITUTION_BUDGET_UPDATE', is_essential: true },
      { key_code: 'DEPARTMENT_BUDGET_CREATE', is_essential: true },
      { key_code: 'DEPARTMENT_BUDGET_UPDATE', is_essential: true },
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
      const createdRole = await prisma.role.upsert({
        where: { key_code: role.key_code },
        update: {},
        create: {
          name: role.name,
          key_code: role.key_code,
          description: role.description,
          is_fixed: role.is_fixed,
          created_by: 'system',
          updated_by: 'system',
          role_permissions: {
            create: role.permissions.map(permission => ({
              permission: { connect: { key_code: permission.key_code } },
              is_essential: permission.is_essential,
              created_by: 'system',
              updated_by: 'system',
            })),
          },
        },
      });

      // For DEV role, assign all permissions
      if (role.key_code === 'DEV') {
        const permissions = await prisma.permission.findMany();
        for (const permission of permissions) {
          await prisma.rolePermission.upsert({
            where: { id: `${createdRole.id}_${permission.id}` },
            update: {},
            create: {
              id: `${createdRole.id}_${permission.id}`,
              role_id: createdRole.id,
              permission_id: permission.id,
              is_essential: true,
              created_by: 'system',
              updated_by: 'system',
            },
          });
        }
      }
    } catch (error) {
      console.error(`Error creating role ${role.name}:`, error);
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
