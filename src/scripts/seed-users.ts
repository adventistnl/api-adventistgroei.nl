import { PrismaClient, LanguagePreference } from '@prisma/client';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcryptjs';

dotenv.config();

const prisma = new PrismaClient();
const audit = { created_by: 'system', updated_by: 'system' };

type DevUser = {
  email: string;
  name: string;
  roleKey: string;
  deptId: string | null;
  churchId: string | null;
};

/**
 * seed-users.ts
 *
 * Single responsibility: create users and assign roles.
 * Assumes seed-structure has already run (institution, church, departments must exist).
 *
 * Always creates:
 *   - 11 dev test users (email/password: 123123) — unless SEED_ENV=production
 *
 * Optional (via env vars):
 *   - SEED_ADMIN_EMAIL + SEED_ADMIN_PASSWORD  → creates production admin user
 *   - SEED_DEVELOPER_EMAIL + SEED_DEVELOPER_PASSWORD → creates production developer user
 *
 * Idempotent: safe to run multiple times.
 */
async function main() {
  console.log('🌱 Seeding users...\n');

  // ─── Resolve structure dependencies ───────────────────────────────────────
  const institution = await prisma.institution.findFirst({ where: { is_deleted: false } });
  if (!institution) throw new Error('No institution found. Run seed:structure first.');

  const church = await prisma.church.findFirst({
    where: { institution_id: institution.id, is_deleted: false },
  });
  if (!church) throw new Error('No church found. Run seed:structure first.');

  const instDept = await prisma.department.findFirst({
    where: { institution_id: institution.id, church_id: null, is_deleted: false },
  });
  if (!instDept) throw new Error('No institutional department found. Run seed:structure first.');

  const churchDept = await prisma.department.findFirst({
    where: { institution_id: institution.id, church_id: church.id, is_deleted: false },
  });
  if (!churchDept) throw new Error('No church department found. Run seed:structure first.');

  const isProduction = process.env.SEED_ENV === 'production';

  // ─── Dev test users (skipped in production) ───────────────────────────────
  if (isProduction) {
    console.log('ℹ️  SEED_ENV=production — skipping dev test users\n');
  } else {
    const devUsers: DevUser[] = [
      { email: 'admin@mail.com',           name: 'Admin',              roleKey: 'ADMIN',                           deptId: null,           churchId: null      },
      { email: 'dev@mail.com',             name: 'Developer',          roleKey: 'DEV',                             deptId: null,           churchId: null      },
      { email: 'finance@mail.com',         name: 'Finance Manager',    roleKey: 'FINANCIAL_MANAGER',               deptId: null,           churchId: null      },
      { email: 'instleader@mail.com',      name: 'Inst Leader',        roleKey: 'INSTITUTIONAL_LEADER',            deptId: instDept.id,    churchId: null      },
      { email: 'instdeptleader@mail.com',  name: 'Inst Dept Leader',   roleKey: 'INSTITUTIONAL_DEPARTMENT_LEADER', deptId: instDept.id,    churchId: null      },
      { email: 'instdeptmember@mail.com',  name: 'Inst Dept Member',   roleKey: 'INSTITUTIONAL_MEMBER',            deptId: instDept.id,    churchId: null      },
      { email: 'instmember@mail.com',      name: 'Inst Member',        roleKey: 'INSTITUTIONAL_MEMBER',            deptId: null,           churchId: null      },
      { email: 'churchleader@mail.com',    name: 'Church Leader',      roleKey: 'CHURCH_LEADER',                   deptId: churchDept.id,  churchId: church.id },
      { email: 'deptchurchleader@mail.com',name: 'Dept Church Leader', roleKey: 'DEPARTMENT_CHURCH_LEADER',        deptId: churchDept.id,  churchId: church.id },
      { email: 'deptchurchmember@mail.com',name: 'Dept Church Member', roleKey: 'CHURCH_MEMBER',                   deptId: churchDept.id,  churchId: church.id },
      { email: 'churchmember@mail.com',    name: 'Church Member',      roleKey: 'CHURCH_MEMBER',                   deptId: null,           churchId: church.id },
    ];

    const devPassword = bcrypt.hashSync('123123', 10);

    for (const u of devUsers) {
      const role = await prisma.role.findUnique({ where: { key_code: u.roleKey } });
      if (!role) {
        console.warn(`⚠️  Role ${u.roleKey} not found — skipping ${u.email}`);
        continue;
      }

      let user = await prisma.user.findFirst({ where: { email: u.email } });
      if (!user) {
        user = await prisma.user.create({
          data: {
            email: u.email,
            password: devPassword,
            name: u.name,
            language_preference: LanguagePreference.en,
            institution_id: institution.id,
            department_id: u.deptId,
            church_id: u.churchId,
            is_deleted: false,
            ...audit,
          },
        });
        console.log(`✅ Created: ${u.email} (${u.roleKey})`);
      } else {
        console.log(`ℹ️  Exists:  ${u.email}`);
      }

      await prisma.userRole.upsert({
        where: { id: `${user.id}_${role.id}` },
        update: {},
        create: { id: `${user.id}_${role.id}`, user_id: user.id, role_id: role.id, ...audit },
      });
    }

    // Fix department leaders to appropriate test users
    const instDeptLeader = await prisma.user.findFirst({ where: { email: 'instdeptleader@mail.com' } });
    if (instDeptLeader) {
      await prisma.department.update({ where: { id: instDept.id }, data: { leader_id: instDeptLeader.id } });
    }

    const churchDeptLeader = await prisma.user.findFirst({ where: { email: 'deptchurchleader@mail.com' } });
    if (churchDeptLeader) {
      await prisma.department.update({ where: { id: churchDept.id }, data: { leader_id: churchDeptLeader.id } });
    }
  }

  // ─── Production admin user (optional) ────────────────────────────────────
  const adminEmail = process.env.SEED_ADMIN_EMAIL;
  const adminPassword = process.env.SEED_ADMIN_PASSWORD;

  if (adminEmail && adminPassword) {
    const adminRole = await prisma.role.findUnique({ where: { key_code: 'ADMIN' } });
    if (!adminRole) throw new Error('Role ADMIN not found. Run seed:roles first.');

    const hash = bcrypt.hashSync(adminPassword, 10);
    let adminUser = await prisma.user.findFirst({ where: { email: adminEmail } });

    if (!adminUser) {
      adminUser = await prisma.user.create({
        data: {
          name: 'Administrador',
          email: adminEmail,
          password: hash,
          language_preference: LanguagePreference.nl,
          institution_id: institution.id,
          department_id: instDept.id,
          church_id: church.id,
          is_deleted: false,
          ...audit,
        },
      });
      console.log(`✅ Admin user created: ${adminEmail}`);
    } else {
      await prisma.user.update({ where: { id: adminUser.id }, data: { password: hash, updated_by: 'system' } });
      console.log(`ℹ️  Admin user updated: ${adminEmail}`);
    }

    await prisma.userRole.upsert({
      where: { id: `${adminUser.id}_${adminRole.id}` },
      update: {},
      create: { id: `${adminUser.id}_${adminRole.id}`, user_id: adminUser.id, role_id: adminRole.id, ...audit },
    });
  }

  // ─── Production developer user (optional) ────────────────────────────────
  const devUserEmail = process.env.SEED_DEVELOPER_EMAIL;
  const devUserPassword = process.env.SEED_DEVELOPER_PASSWORD;

  if (devUserEmail && devUserPassword) {
    const devRole = await prisma.role.findUnique({ where: { key_code: 'DEV' } });
    if (devRole) {
      const hash = bcrypt.hashSync(devUserPassword, 10);
      let devUser = await prisma.user.findFirst({ where: { email: devUserEmail } });

      if (!devUser) {
        devUser = await prisma.user.create({
          data: {
            name: 'Developer',
            email: devUserEmail,
            password: hash,
            language_preference: LanguagePreference.nl,
            institution_id: institution.id,
            department_id: instDept.id,
            church_id: church.id,
            is_deleted: false,
            ...audit,
          },
        });
        console.log(`✅ Developer user created: ${devUserEmail}`);
      } else {
        await prisma.user.update({ where: { id: devUser.id }, data: { password: hash, updated_by: 'system' } });
        console.log(`ℹ️  Developer user updated: ${devUserEmail}`);
      }

      await prisma.userRole.upsert({
        where: { id: `${devUser.id}_${devRole.id}` },
        update: {},
        create: { id: `${devUser.id}_${devRole.id}`, user_id: devUser.id, role_id: devRole.id, ...audit },
      });
    }
  }

  console.log('\n✅ Users seeding complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());