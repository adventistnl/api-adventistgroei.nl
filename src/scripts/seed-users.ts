import { PrismaClient, LanguagePreference } from '@prisma/client';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcryptjs';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const basePassword = '123123';
  const hash = bcrypt.hashSync(basePassword, 10);

  const createAndUpdateUser = {
    created_by: 'system',
    updated_by: 'system',
  };

  // Dados base para instituição e igreja
  const institutions = {
    dev: {
      name: 'dev Institution',
      denomination: 'Test',
      language_preference: 'en',
      is_deleted: false,
    },
  };

  const churches = {
    dev: {
      name: 'dev Church',
      created_by: 'system',
      updated_by: 'system',
      is_deleted: false,
    },
  };

  const institutionDepartments = {
    dev: {
      name: 'dev institutional Department',
      description: 'Departamento para testes',
      contact_id: null,
      created_by: 'system',
      updated_by: 'system',
      is_deleted: false,
    },
  };

  const churchDepartments = {
    dev: {
      name: 'dev church Department',
      description: 'Departamento para testes',
      contact_id: null,
      is_deleted: false,
    },
  };

  // Criar ou encontrar instituição
  let institution = await prisma.institution.findFirst({ where: { name: institutions.dev.name } });
  if (!institution) {
    institution = await prisma.institution.create({
      data: {
        ...institutions.dev,
        language_preference: 'en' as const,
        ...createAndUpdateUser,
      },
    });
  }

  // Criar usuário system temporário para ser o líder inicial dos departamentos e churches
  let systemUser = await prisma.user.findFirst({ where: { email: 'system@adventistgroei.nl' } });
  if (!systemUser) {
    systemUser = await prisma.user.create({
      data: {
        email: 'system@adventistgroei.nl',
        password: hash,
        name: 'System User',
        language_preference: LanguagePreference.en,
        institution_id: institution.id,
        is_deleted: false,
        ...createAndUpdateUser,
      },
    });
  }

  // Criar ou encontrar igreja
  let church = await prisma.church.findFirst({ where: { name: churches.dev.name } });
  if (!church) {
    church = await prisma.church.create({
      data: {
        ...churches.dev,
        institution_id: institution.id,
        leader_id: systemUser.id,
        ...createAndUpdateUser,
      },
    });
  }

  // Criar ou encontrar departamento institucional
  let institutionDepartment = await prisma.department.findFirst({ where: { name: institutionDepartments.dev.name } });
  if (!institutionDepartment) {
    institutionDepartment = await prisma.department.create({
      data: {
        name: institutionDepartments.dev.name,
        description: institutionDepartments.dev.description,
        institution_id: institution.id,
        leader_id: systemUser.id,
        contact_id: institutionDepartments.dev.contact_id,
        is_deleted: institutionDepartments.dev.is_deleted,
        ...createAndUpdateUser,
      },
    });
  }

  // Criar ou encontrar departamento de igreja
  let churchDepartment = await prisma.department.findFirst({ where: { name: churchDepartments.dev.name } });
  if (!churchDepartment) {
    churchDepartment = await prisma.department.create({
      data: {
        name: churchDepartments.dev.name,
        description: churchDepartments.dev.description,
        institution_id: institution.id,
        church_id: church.id,
        leader_id: systemUser.id,
        contact_id: null,
        is_deleted: churchDepartments.dev.is_deleted,
        ...createAndUpdateUser,
      },
    });
  }

  // Lista de usuários a serem criados
  const usersData = [
    {
      email: 'admin@mail.com',
      name: 'Admin',
      roleKey: 'ADMIN',
      department: null,
      church: null,
    },
    {
      email: 'dev@mail.com',
      name: 'Default User',
      roleKey: 'DEV',
      department: null,
      church: null,
    },
    {
      email: 'finance@mail.com',
      name: 'Finance Manager',
      roleKey: 'FINANCIAL_MANAGER',
      department: null,
      church: null,
    },
    {
      email: 'instleader@mail.com',
      name: 'Inst Leader',
      roleKey: 'INSTITUTIONAL_LEADER',
      department: institutionDepartment,
      church: null, // Não precisa de church específica
    },
    {
      email: 'instdeptleader@mail.com',
      name: 'Dept Inst Leader',
      roleKey: 'INSTITUTIONAL_DEPARTMENT_LEADER',
      department: institutionDepartment,
      church: null, // Não precisa de church específica
    },
    {
      email: 'instdeptmember@mail.com',
      name: 'Dept Inst Member',
      roleKey: 'INSTITUTIONAL_MEMBER',
      department: institutionDepartment,
      church: null,
    },
    {
      email: 'instmember@mail.com',
      name: 'Inst Member',
      roleKey: 'INSTITUTIONAL_MEMBER',
      department: null,
      church: null,
    },
    {
      email: 'churchleader@mail.com',
      name: 'Church Leader',
      roleKey: 'CHURCH_LEADER',
      department: churchDepartment,
      church: church,
    },
    {
      email: 'deptchurchleader@mail.com',
      name: 'Dept Church Leader',
      roleKey: 'DEPARTMENT_CHURCH_LEADER',
      department: churchDepartment,
      church: church,
    },
    {
      email: 'deptchurchmember@mail.com',
      name: 'Dept Church Member',
      roleKey: 'CHURCH_MEMBER',
      department: churchDepartment,
      church: church,
    },
    {
      email: 'churchmember@mail.com',
      name: 'Church Member',
      roleKey: 'CHURCH_MEMBER',
      department: null,
      church: church,
    },
  ];

  for (const userData of usersData) {
    // Encontrar a role
    const role = await prisma.role.findUnique({ where: { key_code: userData.roleKey } });
    if (!role) {
      console.error(`Role ${userData.roleKey} not found. Skipping user ${userData.name}.`);
      continue;
    }

    // Criar ou atualizar usuário
    let user = await prisma.user.findFirst({ where: { email: userData.email } });
    if (!user) {
      user = await prisma.user.create({
        data: {
          email: userData.email,
          password: hash,
          name: userData.name,
          language_preference: LanguagePreference.en,
          institution_id: institution.id,
          department_id: userData.department ? userData.department.id : null,
          church_id: userData.church ? userData.church.id : null,
          is_deleted: false,
          ...createAndUpdateUser,
        },
      });
    }

    // Associar role ao usuário
    await prisma.userRole.upsert({
      where: {
        id: `${user.id}_${role.id}`,
      },
      update: {},
      create: {
        id: `${user.id}_${role.id}`,
        user_id: user.id,
        role_id: role.id,
        ...createAndUpdateUser,
      },
    });
  }

  // Atualizar líderes dos departamentos com usuários apropriados
  const instDeptLeader = await prisma.user.findFirst({ where: { email: 'instdeptleader@mail.com' } });
  if (instDeptLeader && institutionDepartment) {
    await prisma.department.update({
      where: { id: institutionDepartment.id },
      data: { leader_id: instDeptLeader.id },
    });
  }

  const churchDeptLeader = await prisma.user.findFirst({ where: { email: 'deptchurchleader@mail.com' } });
  if (churchDeptLeader && churchDepartment) {
    await prisma.department.update({
      where: { id: churchDepartment.id },
      data: { leader_id: churchDeptLeader.id },
    });
  }

  console.log('Seeding users completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });