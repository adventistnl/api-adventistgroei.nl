import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const roles = [
  {
    name: 'Admin',
    key_code: 'ADMIN',
    description: 'Administrador com acesso total',
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
      { key_code: 'SUBSIDY_REQUESTS_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_STATUSES_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_STATUS_ACCESS', is_essential: true },
      { key_code: 'PROJECT_ACTIVITIES_ACCESS', is_essential: true },
      { key_code: 'ACTIVITY_ACCESS', is_essential: true },
      { key_code: 'NOTIFICATIONS_ACCESS', is_essential: true },
      { key_code: 'NOTIFICATION_ACCESS', is_essential: true },
      { key_code: 'SETTINGS_ACCESS', is_essential: true },
      { key_code: 'SETTING_ACCESS', is_essential: true },
      { key_code: 'COMMUNICATIONS_ACCESS', is_essential: true },
      { key_code: 'COMMUNICATION_ACCESS', is_essential: true },
      { key_code: 'DIRECT_MESSAGES_ACCESS', is_essential: true },
      { key_code: 'DIRECT_MESSAGE_ACCESS', is_essential: true },
      // Permissões de criação/manipulação
      { key_code: 'ROLE_CREATE', is_essential: true },
      { key_code: 'ROLE_UPDATE', is_essential: true },
      { key_code: 'ROLE_DELETE', is_essential: true },
      { key_code: 'USER_ROLE_ADD', is_essential: true },
      { key_code: 'USER_ROLE_REMOVE', is_essential: true },
      { key_code: 'INSTITUTION_CREATE', is_essential: true },
      { key_code: 'REGION_CREATE', is_essential: true },
      { key_code: 'CHURCH_CREATE', is_essential: true },
      { key_code: 'DEPARTMENT_CREATE', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_CREATE', is_essential: true },
      { key_code: 'INVITE_USER_LINK', is_essential: true },
      { key_code: 'INVITE_EMAIL', is_essential: true },
    ],
  },
  {
    name: 'Church Member',
    key_code: 'CHURCH_MEMBER',
    description: 'Membro básico de igreja com acesso limitado',
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
    description: 'Líder de igreja com acesso expandido',
    is_fixed: true,
    permissions: [
      { key_code: 'USERS_ACCESS', is_essential: true },
      { key_code: 'USER_ACCESS', is_essential: true },
      { key_code: 'CHURCHES_ACCESS', is_essential: true },
      { key_code: 'CHURCH_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENTS_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENT_ACCESS', is_essential: true },
      { key_code: 'USER_ROLE_ADD', is_essential: true },
      { key_code: 'USER_ROLE_REMOVE', is_essential: true },
    ],
  },
  {
    name: 'Financial Manager',
    key_code: 'FINANCIAL_MANAGER',
    description: 'Gerente financeiro com acesso ao módulo financeiro',
    is_fixed: true,
    permissions: [
      { key_code: 'USERS_ACCESS', is_essential: true },
      { key_code: 'USER_ACCESS', is_essential: true },
      { key_code: 'PROJECTS_ACCESS', is_essential: true },
      { key_code: 'PROJECT_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_REQUESTS_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_REQUEST_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_STATUSES_ACCESS', is_essential: true },
      { key_code: 'SUBSIDY_STATUS_ACCESS', is_essential: true },
      { key_code: 'ANNUAL_BUDGET_CREATE', is_essential: true },
    ],
  },
  {
    name: 'Institutional Member',
    key_code: 'INSTITUTIONAL_MEMBER',
    description: 'Membro institucional básico',
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
    description: 'Líder institucional com acesso a gerenciar instituição',
    is_fixed: true,
    permissions: [
      { key_code: 'USERS_ACCESS', is_essential: true },
      { key_code: 'USER_ACCESS', is_essential: true },
      { key_code: 'INSTITUTIONS_ACCESS', is_essential: true },
      { key_code: 'INSTITUTION_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENTS_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENT_ACCESS', is_essential: true },
      { key_code: 'USER_ROLE_ADD', is_essential: true },
      { key_code: 'USER_ROLE_REMOVE', is_essential: true },
    ],
  },
  {
    name: 'Institutional Department Leader',
    key_code: 'INSTITUTIONAL_DEPARTMENT_LEADER',
    description: 'Líder de departamento institucional',
    is_fixed: true,
    permissions: [
      { key_code: 'USERS_ACCESS', is_essential: true },
      { key_code: 'USER_ACCESS', is_essential: true },
      { key_code: 'INSTITUTIONS_ACCESS', is_essential: true },
      { key_code: 'INSTITUTION_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENTS_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENT_ACCESS', is_essential: true },
      { key_code: 'USER_ROLE_ADD', is_essential: true },
    ],
  },
  {
    name: 'Institutional Department Member',
    key_code: 'INSTITUTIONAL_DEPARTMENT_MEMBER',
    description: 'Membro de departamento institucional',
    is_fixed: true,
    permissions: [
      { key_code: 'USERS_ACCESS', is_essential: true },
      { key_code: 'USER_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENTS_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENT_ACCESS', is_essential: true },
    ],
  },
  {
    name: 'Church Department Leader',
    key_code: 'CHURCH_DEPARTMENT_LEADER',
    description: 'Líder de departamento de igreja',
    is_fixed: true,
    permissions: [
      { key_code: 'USERS_ACCESS', is_essential: true },
      { key_code: 'USER_ACCESS', is_essential: true },
      { key_code: 'CHURCHES_ACCESS', is_essential: true },
      { key_code: 'CHURCH_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENTS_ACCESS', is_essential: true },
      { key_code: 'DEPARTMENT_ACCESS', is_essential: true },
      { key_code: 'USER_ROLE_ADD', is_essential: true },
    ],
  },
  {
    name: 'Church Department Member',
    key_code: 'CHURCH_DEPARTMENT_MEMBER',
    description: 'Membro de departamento de igreja',
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
    name: 'Volunteer',
    key_code: 'VOLUNTEER',
    description: 'Voluntário com acesso mínimo a projetos',
    is_fixed: true,
    permissions: [
      { key_code: 'USERS_ACCESS', is_essential: true },
      { key_code: 'USER_ACCESS', is_essential: true },
      { key_code: 'PROJECTS_ACCESS', is_essential: true },
      { key_code: 'PROJECT_ACCESS', is_essential: true },
    ],
  },
];

async function main() {
  for (const role of roles) {
    try {
      await prisma.role.upsert({
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
