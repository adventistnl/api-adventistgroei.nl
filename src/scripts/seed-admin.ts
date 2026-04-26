import { PrismaClient, LanguagePreference } from '@prisma/client';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcryptjs';

dotenv.config();

const prisma = new PrismaClient();
const audit = { created_by: 'system', updated_by: 'system' };

/**
 * seed-admin.ts
 *
 * Single responsibility: bootstrap the production admin user.
 *
 * What it does:
 *   1. Creates a minimal placeholder institution if none exists yet
 *      (the admin will update institution details through the UI after login)
 *   2. Creates the admin user with role ADMIN
 *   3. Optionally creates a developer user with role DEV
 *
 * Required env vars:
 *   SEED_ADMIN_EMAIL
 *   SEED_ADMIN_PASSWORD
 *
 * Optional env vars:
 *   SEED_DEVELOPER_EMAIL
 *   SEED_DEVELOPER_PASSWORD
 *   SEED_INSTITUTION_NAME  (default: "Placeholder Institution")
 *
 * Run ONCE after first deploy. Idempotent on repeated runs.
 */
async function main() {
  console.log('🌱 Seeding production admin...\n');

  const adminEmail = process.env.SEED_ADMIN_EMAIL;
  const adminPassword = process.env.SEED_ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error('SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD are required.');
  }

  // ─── 1. Bootstrap institution (placeholder) ────────────────────────────────
  // Required because User.institution_id is non-nullable.
  // Admin should update institution details via the UI after logging in.
  let institution = await prisma.institution.findFirst({ where: { is_deleted: false } });

  if (!institution) {
    const name = process.env.SEED_INSTITUTION_NAME ?? 'Placeholder Institution';
    institution = await prisma.institution.create({
      data: {
        name,
        denomination: 'Seventh-day Adventist',
        language_preference: LanguagePreference.nl,
        is_deleted: false,
        ...audit,
      },
    });
    console.log(`✅ Bootstrap institution created: "${name}"`);
    console.log('   ⚠️  Update institution details in the UI after first login.\n');
  } else {
    console.log(`ℹ️  Institution already exists: ${institution.name}\n`);
  }

  // ─── 2. Admin user ─────────────────────────────────────────────────────────
  const adminRole = await prisma.role.findUnique({ where: { key_code: 'ADMIN' } });
  if (!adminRole) throw new Error('Role ADMIN not found. Run seed:roles first.');

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
      data: { password: adminHash, updated_by: 'system' },
    });
    console.log(`ℹ️  Admin user updated: ${adminEmail}`);
  }

  await prisma.userRole.upsert({
    where: { id: `${adminUser.id}_${adminRole.id}` },
    update: {},
    create: { id: `${adminUser.id}_${adminRole.id}`, user_id: adminUser.id, role_id: adminRole.id, ...audit },
  });
  console.log(`   Role ADMIN assigned ✅`);

  // ─── 3. Developer user (optional) ─────────────────────────────────────────
  const devEmail = process.env.SEED_DEVELOPER_EMAIL;
  const devPassword = process.env.SEED_DEVELOPER_PASSWORD;

  if (devEmail && devPassword) {
    const devRole = await prisma.role.findUnique({ where: { key_code: 'DEV' } });
    if (!devRole) {
      console.warn('⚠️  Role DEV not found — skipping developer user.');
    } else {
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
            is_deleted: false,
            ...audit,
          },
        });
        console.log(`✅ Developer user created: ${devEmail}`);
      } else {
        await prisma.user.update({
          where: { id: devUser.id },
          data: { password: devHash, updated_by: 'system' },
        });
        console.log(`ℹ️  Developer user updated: ${devEmail}`);
      }

      await prisma.userRole.upsert({
        where: { id: `${devUser.id}_${devRole.id}` },
        update: {},
        create: { id: `${devUser.id}_${devRole.id}`, user_id: devUser.id, role_id: devRole.id, ...audit },
      });
      console.log(`   Role DEV assigned ✅`);
    }
  }

  console.log('\n✅ Admin seed complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
