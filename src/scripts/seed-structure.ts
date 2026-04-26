import { PrismaClient, LanguagePreference, Prisma } from '@prisma/client';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcryptjs';

dotenv.config();

const prisma = new PrismaClient();
const SYS = 'system';
const audit = { created_by: SYS, updated_by: SYS };

/**
 * seed-structure.ts
 *
 * Single responsibility: create the organizational hierarchy.
 *   Institution → Region → Church → Institutional Department → Church Department
 *
 * Also creates the system user required as a placeholder leader_id.
 *
 * Env vars (all optional, defaults to dev values):
 *   SEED_INSTITUTION_NAME   — default: "dev Institution"
 *   SEED_INSTITUTION_LANG   — default: "en"
 *
 * Idempotent: safe to run multiple times.
 */
async function main() {
  console.log('🌱 Seeding organizational structure...\n');

  const institutionName = process.env.SEED_INSTITUTION_NAME ?? 'dev Institution';
  const institutionLang = (process.env.SEED_INSTITUTION_LANG ?? 'en') as LanguagePreference;

  // ─── 1. INSTITUTION ────────────────────────────────────────────────────────
  let institution = await prisma.institution.findFirst({
    where: { name: institutionName, is_deleted: false },
  });

  if (!institution) {
    institution = await prisma.institution.create({
      data: {
        name: institutionName,
        denomination: process.env.SEED_INSTITUTION_DENOMINATION ?? 'Seventh-day Adventist',
        description: process.env.SEED_INSTITUTION_DESCRIPTION ?? '',
        language_preference: institutionLang,
        is_deleted: false,
        ...audit,
      },
    });
    console.log(`✅ Institution: ${institution.name}`);
  } else {
    console.log(`ℹ️  Institution already exists: ${institution.name}`);
  }

  // ─── 2. SYSTEM USER (required as leader placeholder) ──────────────────────
  const systemEmail = 'system@adventistgroei.nl';
  let systemUser = await prisma.user.findFirst({ where: { email: systemEmail } });

  if (!systemUser) {
    systemUser = await prisma.user.create({
      data: {
        name: 'System',
        email: systemEmail,
        password: bcrypt.hashSync(crypto.randomUUID(), 10),
        language_preference: institutionLang,
        institution_id: institution.id,
        is_deleted: false,
        ...audit,
      },
    });
    console.log(`✅ System user: ${systemEmail}`);
  } else {
    console.log(`ℹ️  System user already exists`);
  }

  // ─── 3. REGION ─────────────────────────────────────────────────────────────
  const regionName = process.env.SEED_REGION_NAME ?? 'dev Region';
  let region = await prisma.region.findFirst({ where: { name: regionName, is_deleted: false } });

  if (!region) {
    region = await prisma.region.create({
      data: { name: regionName, is_deleted: false, ...audit },
    });
    console.log(`✅ Region: ${region.name}`);
  } else {
    console.log(`ℹ️  Region already exists: ${region.name}`);
  }

  // ─── 4. CHURCH ─────────────────────────────────────────────────────────────
  const churchName = process.env.SEED_CHURCH_NAME ?? 'dev Church';
  let church = await prisma.church.findFirst({
    where: { name: churchName, institution_id: institution.id, is_deleted: false },
  });

  if (!church) {
    church = await prisma.church.create({
      data: {
        name: churchName,
        institution_id: institution.id,
        region_id: region.id,
        leader_id: systemUser.id,
        is_deleted: false,
        ...audit,
      } as Prisma.ChurchUncheckedCreateInput,
    });
    console.log(`✅ Church: ${church.name}`);
  } else {
    console.log(`ℹ️  Church already exists: ${church.name}`);
  }

  // ─── 5. INSTITUTIONAL DEPARTMENT ──────────────────────────────────────────
  const instDeptName = process.env.SEED_INST_DEPT_NAME ?? 'dev Institutional Department';
  let instDept = await prisma.department.findFirst({
    where: { name: instDeptName, institution_id: institution.id, church_id: null, is_deleted: false },
  });

  if (!instDept) {
    instDept = await prisma.department.create({
      data: {
        name: instDeptName,
        description: 'Departamento institucional principal',
        institution_id: institution.id,
        leader_id: systemUser.id,
        is_deleted: false,
        ...audit,
      } as Prisma.DepartmentUncheckedCreateInput,
    });
    console.log(`✅ Institutional department: ${instDept.name}`);
  } else {
    console.log(`ℹ️  Institutional department already exists: ${instDept.name}`);
  }

  // ─── 6. CHURCH DEPARTMENT ─────────────────────────────────────────────────
  const churchDeptName = process.env.SEED_CHURCH_DEPT_NAME ?? 'dev Church Department';
  let churchDept = await prisma.department.findFirst({
    where: { name: churchDeptName, institution_id: institution.id, church_id: church.id, is_deleted: false },
  });

  if (!churchDept) {
    churchDept = await prisma.department.create({
      data: {
        name: churchDeptName,
        description: 'Departamento operacional da igreja local',
        institution_id: institution.id,
        church_id: church.id,
        leader_id: systemUser.id,
        is_deleted: false,
        ...audit,
      } as Prisma.DepartmentUncheckedCreateInput,
    });
    console.log(`✅ Church department: ${churchDept.name}`);
  } else {
    console.log(`ℹ️  Church department already exists: ${churchDept.name}`);
  }

  console.log('\n✅ Structure seeding complete!');
  console.log(`   Institution : ${institution.name}`);
  console.log(`   Region      : ${region.name}`);
  console.log(`   Church      : ${church.name}`);
  console.log(`   Inst. Dept  : ${instDept.name}`);
  console.log(`   Church Dept : ${churchDept.name}`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
