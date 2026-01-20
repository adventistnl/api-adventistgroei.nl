import { PrismaClient, LanguagePreference } from '@prisma/client';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcryptjs';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const email = process.env.SEED_DEVELOPER_EMAIL;
  const password = process.env.SEED_DEVELOPER_PASSWORD;

  if (!email) {
    throw new Error('Please provide SEED_DEVELOPER_EMAIL environment variable to seed the developer user.');
  }

  if (!password) {
    throw new Error('Please provide SEED_DEVELOPER_PASSWORD environment variable to seed the developer user.');
  }

  console.log(`Seeding developer user ${email}...`);
  const hash = bcrypt.hashSync(password, 10);

  const createAndUpdateUser = {
    created_by: 'system',
    updated_by: 'system',
  };

  // Ensure Institution exists (using the one from seed-users logic or finding first)
  let institution = await prisma.institution.findFirst();
  if (!institution) {
    console.log('No institution found. Creating default institution...');
    institution = await prisma.institution.create({
      data: {
        name: 'Default Institution',
        denomination: 'Adventist',
        language_preference: 'en',
        is_deleted: false,
        ...createAndUpdateUser,
      },
    });
  }

  // Find Developer Role
  const devRole = await prisma.role.findUnique({
    where: { key_code: 'DEV' },
  });

  if (!devRole) {
    throw new Error('Role DEV not found. Please run seed:roles first.');
  }

  // Create or Update Developer User
  let user = await prisma.user.findFirst({ where: { email } });

  if (user) {
    console.log(`User ${email} already exists. Updating password...`);
    user = await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hash,
        is_deleted: false,
        ...createAndUpdateUser,
      },
    });
  } else {
    console.log(`Creating user ${email}...`);
    user = await prisma.user.create({
      data: {
        email,
        password: hash,
        name: 'Developer User',
        language_preference: LanguagePreference.en,
        institution_id: institution.id,
        is_deleted: false,
        ...createAndUpdateUser,
      },
    });
  }

  // Assign Role
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

  console.log(`✅ Developer user ${email} seeded successfully.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
