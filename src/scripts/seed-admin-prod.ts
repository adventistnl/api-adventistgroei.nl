import { PrismaClient, LanguagePreference } from '@prisma/client';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcryptjs';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL;
  const password = process.env.SEED_ADMIN_PASSWORD;

  if (!email) {
    throw new Error('Please provide SEED_ADMIN_EMAIL environment variable to seed the admin user.');
  }

  if (!password) {
    throw new Error('Please provide SEED_ADMIN_PASSWORD environment variable to seed the admin user.');
  }
  console.log(`Seeding admin user ${email}...`);
  console.log(`Password: ${password}`);
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

  // Find Admin Role
  const adminRole = await prisma.role.findUnique({
    where: { key_code: 'ADMIN' },
  });

  if (!adminRole) {
    throw new Error('Role ADMIN not found. Please run seed:roles first.');
  }

  // Create or Update Admin User
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
        name: 'Admin User',
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
      id: `${user.id}_${adminRole.id}`,
    },
    update: {},
    create: {
      id: `${user.id}_${adminRole.id}`,
      user_id: user.id,
      role_id: adminRole.id,
      ...createAndUpdateUser,
    },
  });

  console.log(`✅ Admin user ${email} seeded successfully.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
