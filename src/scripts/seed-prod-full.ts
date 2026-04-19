import { PrismaClient, LanguagePreference } from '@prisma/client';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcryptjs';

dotenv.config();

const prisma = new PrismaClient();

const SYS = 'system';
const audit = { created_by: SYS, updated_by: SYS };

async function main() {
  const adminEmail = process.env.SEED_ADMIN_EMAIL;
  const adminPassword = process.env.SEED_ADMIN_PASSWORD;
  const devEmail = process.env.SEED_DEVELOPER_EMAIL;
  const devPassword = process.env.SEED_DEVELOPER_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error('SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD are required.');
  }

  console.log('🌱 Starting full production seed...\n');

  // ─── 1. INSTITUTION ───────────────────────────────────────────────────────
  let institution = await prisma.institution.findFirst({
    where: { is_deleted: false },
  });

  if (!institution) {
    institution = await prisma.institution.create({
      data: {
        name: process.env.SEED_INSTITUTION_NAME ?? 'Adventkerk Nederland',
        denomination: 'Seventh-day Adventist',
        description: 'Adventkerk Nederland — officiële administratie',
        language_preference: LanguagePreference.nl,
        is_deleted: false,
        ...audit,
      },
    });
    console.log(`✅ Institution created: ${institution.name}`);
  } else {
    console.log(`ℹ️  Institution already exists: ${institution.name}`);
  }

  // ─── 2. SYSTEM USER (auditoria interna) ───────────────────────────────────
  const systemEmail = 'system@adventistgroei.nl';
  let systemUser = await prisma.user.findFirst({ where: { email: systemEmail } });

  if (!systemUser) {
    systemUser = await prisma.user.create({
      data: {
        name: 'System',
        email: systemEmail,
        password: bcrypt.hashSync(crypto.randomUUID(), 10), // senha aleatória inacessível
        language_preference: LanguagePreference.nl,
        institution_id: institution.id,
        is_deleted: false,
        ...audit,
      },
    });
    console.log(`✅ System user created: ${systemEmail}`);
  } else {
    console.log(`ℹ️  System user already exists: ${systemEmail}`);
  }

  // ─── 3. ADMIN USER ────────────────────────────────────────────────────────
  const adminHash = bcrypt.hashSync(adminPassword, 10);
  let adminUser = await prisma.user.findFirst({ where: { email: adminEmail } });

  if (!adminUser) {
    adminUser = await prisma.user.create({
      data: {
        name: 'Administrador',
        email: adminEmail,
        password: adminHash,
        language_preference: LanguagePreference.nl,
        institution_id: institution.id,
        is_deleted: false,
        ...audit,
      },
    });
    console.log(`✅ Admin user created: ${adminEmail}`);
  } else {
    await prisma.user.update({
      where: { id: adminUser.id },
      data: { password: adminHash, is_deleted: false, updated_by: SYS },
    });
    console.log(`ℹ️  Admin user already exists, password updated: ${adminEmail}`);
  }

  // ─── 4. REGION ────────────────────────────────────────────────────────────
  let region = await prisma.region.findFirst({
    where: { is_deleted: false },
  });

  if (!region) {
    region = await prisma.region.create({
      data: {
        name: 'Regio Nederland',
        description: 'Regio principal da instituição',
        is_deleted: false,
        ...audit,
      },
    });
    console.log(`✅ Region created: ${region.name}`);
  } else {
    console.log(`ℹ️  Region already exists: ${region.name}`);
  }

  // ─── 5. CHURCH ────────────────────────────────────────────────────────────
  let church = await prisma.church.findFirst({
    where: { institution_id: institution.id, is_deleted: false },
  });

  if (!church) {
    church = await prisma.church.create({
      data: {
        name: 'Gemeente Hoofdkantoor',
        institution_id: institution.id,
        region_id: region.id,
        leader_id: adminUser.id,
        is_deleted: false,
        ...audit,
      },
    });
    console.log(`✅ Church created: ${church.name}`);
  } else {
    console.log(`ℹ️  Church already exists: ${church.name}`);
  }

  // Atualizar admin com church
  await prisma.user.update({
    where: { id: adminUser.id },
    data: { church_id: church.id, updated_by: SYS },
  });

  // ─── 6. INSTITUTIONAL DEPARTMENT ─────────────────────────────────────────
  let institutionalDept = await prisma.department.findFirst({
    where: {
      institution_id: institution.id,
      church_id: null,
      is_deleted: false,
    },
  });

  if (!institutionalDept) {
    institutionalDept = await prisma.department.create({
      data: {
        name: 'Departamento Institucional',
        description: 'Departamento central da instituição adventista',
        institution_id: institution.id,
        leader_id: adminUser.id,
        is_deleted: false,
        ...audit,
      },
    });
    console.log(`✅ Institutional department created: ${institutionalDept.name}`);
  } else {
    console.log(`ℹ️  Institutional department already exists: ${institutionalDept.name}`);
  }

  // ─── 7. CHURCH DEPARTMENT ─────────────────────────────────────────────────
  let churchDept = await prisma.department.findFirst({
    where: {
      institution_id: institution.id,
      church_id: church.id,
      is_deleted: false,
    },
  });

  if (!churchDept) {
    churchDept = await prisma.department.create({
      data: {
        name: 'Departamento da Gemeente',
        description: 'Departamento operacional da gemeente local',
        institution_id: institution.id,
        church_id: church.id,
        leader_id: adminUser.id,
        is_deleted: false,
        ...audit,
      },
    });
    console.log(`✅ Church department created: ${churchDept.name}`);
  } else {
    console.log(`ℹ️  Church department already exists: ${churchDept.name}`);
  }

  // Atualizar admin com department
  await prisma.user.update({
    where: { id: adminUser.id },
    data: { department_id: institutionalDept.id, updated_by: SYS },
  });

  // ─── 8. ROLES ─────────────────────────────────────────────────────────────
  const adminRole = await prisma.role.findUnique({ where: { key_code: 'ADMIN' } });
  if (!adminRole) throw new Error('Role ADMIN not found. Run seed:roles first.');

  await prisma.userRole.upsert({
    where: { id: `${adminUser.id}_${adminRole.id}` },
    update: {},
    create: {
      id: `${adminUser.id}_${adminRole.id}`,
      user_id: adminUser.id,
      role_id: adminRole.id,
      ...audit,
    },
  });
  console.log(`✅ Role ADMIN assigned to ${adminEmail}`);

  // ─── 9. DEVELOPER USER (opcional) ─────────────────────────────────────────
  if (devEmail && devPassword) {
    const devHash = bcrypt.hashSync(devPassword, 10);
    let devUser = await prisma.user.findFirst({ where: { email: devEmail } });

    if (!devUser) {
      devUser = await prisma.user.create({
        data: {
          name: 'Developer',
          email: devEmail,
          password: devHash,
          language_preference: LanguagePreference.nl,
          institution_id: institution.id,
          church_id: church.id,
          department_id: institutionalDept.id,
          is_deleted: false,
          ...audit,
        },
      });
      console.log(`✅ Developer user created: ${devEmail}`);
    } else {
      await prisma.user.update({
        where: { id: devUser.id },
        data: { password: devHash, is_deleted: false, updated_by: SYS },
      });
      console.log(`ℹ️  Developer user already exists, password updated: ${devEmail}`);
    }

    const devRole = await prisma.role.findUnique({ where: { key_code: 'DEV' } });
    if (devRole) {
      await prisma.userRole.upsert({
        where: { id: `${devUser.id}_${devRole.id}` },
        update: {},
        create: {
          id: `${devUser.id}_${devRole.id}`,
          user_id: devUser.id,
          role_id: devRole.id,
          ...audit,
        },
      });
      console.log(`✅ Role DEV assigned to ${devEmail}`);
    }
  }

  // ─── 10. SUBSIDY STATUSES ─────────────────────────────────────────────────
  const subsidyStatuses = [
    { name: 'DRAFT',            description: 'Rascunho — ainda não submetido',                         order: 0 },
    { name: 'PENDING',          description: 'Aguardando aprovação',                                    order: 1 },
    { name: 'APPROVED',         description: 'Aprovado',                                                order: 2 },
    { name: 'REJECTED',         description: 'Rejeitado',                                               order: 3 },
    { name: 'IN_REVIEW',        description: 'Em análise pelo gestor financeiro',                       order: 4 },
    { name: 'CLOSED',           description: 'Encerrado e concluído',                                   order: 5 },
    { name: 'ADVANCED_CLOSED',  description: 'Advance payment completed and closed',                    order: 6 },
    { name: 'WAITING_REFUND',   description: 'Waiting for refund processing',                           order: 7 },
    { name: 'WAITING_DOCUMENTS','description': 'Advance paid — waiting for receipt documents',          order: 8 },
  ];

  console.log('\n🌱 Seeding SubsidyStatuses...');
  for (const status of subsidyStatuses) {
    const existing = await prisma.subsidyStatus.findFirst({
      where: { name: status.name, is_deleted: false },
    });

    if (!existing) {
      await prisma.subsidyStatus.create({
        data: {
          name: status.name,
          description: status.description,
          order: status.order,
          department_id: institutionalDept.id,
          assigned_to: adminUser.id,
          is_deleted: false,
          ...audit,
        },
      });
      console.log(`  ✅ Status "${status.name}" criado`);
    } else {
      console.log(`  ℹ️  Status "${status.name}" já existe`);
    }
  }

  console.log('\n✅ Full production seed completed successfully!');
  console.log(`\n📋 Summary:`);
  console.log(`  Institution : ${institution.name}`);
  console.log(`  Region      : ${region.name}`);
  console.log(`  Church      : ${church.name}`);
  console.log(`  Inst. Dept  : ${institutionalDept.name}`);
  console.log(`  Church Dept : ${churchDept.name}`);
  console.log(`  Admin       : ${adminEmail}`);
  if (devEmail) console.log(`  Developer   : ${devEmail}`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
