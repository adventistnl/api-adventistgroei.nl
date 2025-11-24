import { LanguagePreference, PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcryptjs';
// import removido: AnnualBudget não é utilizado

 
dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const basePassword = '123123';
  const hash = bcrypt.hashSync(basePassword, 10);

  const createAndUpdateUser = {
    created_by: 'system',
    updated_by: 'system',
  };

  // Verifica se a role "dev" já existe ou cria uma nova
  let devRole = await prisma.role.findUnique({ where: { key_code: 'DEV' } });
  if (!devRole) {
    devRole = await prisma.role.create({
      data: {
        name: 'dev',
        description: 'Role with all permissions in the platform',
        key_code: 'DEV',
        ...createAndUpdateUser,
      },
    });
    console.log('Role "Developer" criada com sucesso.');
  } else {
    console.log('Role "Developer" já existe.');
  }

  const permissions = await prisma.permission.findMany();

  for (const permission of permissions) {
    await prisma.rolePermission.upsert({
      where: { id: `${devRole.id}_${permission.id}` },
      update: {},
      create: {
        id: `${devRole.id}_${permission.id}`,
        role_id: devRole.id,
        permission_id: permission.id,
        ...createAndUpdateUser,
      },
    });
  }

  const users = {
    one: {
      email: 'dev@mail.com',
      password: hash,
      name: 'Default User',
      language_preference: LanguagePreference.en,
    },
    two: {
      email: 'contact@adventistgroei.nl',
      password: hash,
      name: 'Default User',
      language_preference: LanguagePreference.en,
    },
  };

  const institutions = {
    one: {
      name: 'dev Institution',
      denomination: 'Test',
      language_preference: 'en',
      is_deleted: false,
    },
  };

  const institutionDepartments = {
    one: {
      name: 'dev institutional Department',
      description: 'Departamento para testes',
      contact_id: null,
      created_by: 'system',
      updated_by: 'system',
      is_deleted: false,
    },
  };

  const regions = {
    one: {
      name: 'dev Region',
      is_deleted: false,
    },
  };

  const churches = {
    one: {
      name: 'dev Church',
      created_by: 'system',
      updated_by: 'system',
      is_deleted: false,
    },
  };

  const churchDepartments = {
    one: {
      name: 'dev church Department',
      description: 'Departamento para testes',
      contact_id: null,
      is_deleted: false,
    },
  };

  const seeds = [
    {
      user: users.one,
      institution: institutions.one,
      institutionDepartment: institutionDepartments.one,
      region: regions.one,
      church: churches.one,
      churchDepartment: churchDepartments.one,
    },
    {
      user: users.two,
      institution: institutions.one,
      institutionDepartment: institutionDepartments.one,
      region: regions.one,
      church: churches.one,
      churchDepartment: churchDepartments.one,
    },
  ];

  for (const seed of seeds) {
    // Criação da institution caso não exista
    let institution = await prisma.institution.findFirst({ where: { name: seed.institution.name } });
    if (!institution) {
      institution = await prisma.institution.create({
        data: {
          ...seed.institution,
          language_preference: 'en' as const, // Ajuste para tipo correto
          ...createAndUpdateUser,
        },
      });
    }

    // Criação da region caso não exista
    let region = await prisma.region.findFirst({ where: { name: seed.region.name } });
    if (!region) {
      region = await prisma.region.create({
        data: {
          ...seed.region,
          ...createAndUpdateUser,
        },
      });
    }

    // Criação da church caso não exista
    let church = await prisma.church.findFirst({ where: { name: seed.church.name } });
    if (!church) {
      church = await prisma.church.create({
        data: {
          ...seed.church,
          institution_id: institution.id,
          region_id: region.id,
          ...createAndUpdateUser,
        },
      });
    }

    // Criação do institutionDepartment caso não exista
    let institutionDepartment = await prisma.department.findFirst({ where: { name: seed.institutionDepartment.name } });
    if (!institutionDepartment) {
      institutionDepartment = await prisma.department.create({
        data: {
          ...seed.institutionDepartment,
          institution_id: institution.id,
          ...createAndUpdateUser,
        },
      });
    }

    // Criação do churchDepartment caso não exista
    let churchDepartment = await prisma.department.findFirst({ where: { name: seed.churchDepartment.name } });
    if (!churchDepartment) {
      churchDepartment = await prisma.department.create({
        data: {
          ...seed.churchDepartment,
          institution_id: institution.id,
          church_id: church.id,
          ...createAndUpdateUser,
        },
      });
    }

    // Criação do usuário caso não exista
    let user = await prisma.user.findFirst({ where: { email: seed.user.email } });
    if (!user) {
      user = await prisma.user.create({
        data: {
          ...seed.user,
          institution_id: institution.id,
          department_id: institutionDepartment.id,
          church_id: church.id,
          is_deleted: false,
          ...createAndUpdateUser,
        },
      });
    }

    // Associação do usuário à role admin
    await prisma.userRole.upsert({
      where: {
        id: `${user.id}_${devRole.id}`,
      },
      update: {},
      create: {
        id: `${user.id}_${devRole.id}`,
        user_id: user.id,
        role_id: devRole.id,
        ...createAndUpdateUser,
      },
    });
  }

  console.log('Seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
