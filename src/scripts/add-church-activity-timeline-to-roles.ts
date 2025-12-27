import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  console.log('Adding churchActivityTimeline permission to roles...');

  // Find the permission
  const permission = await prisma.permission.findUnique({
    where: { key_code: 'CHURCH_ACTIVITY_TIMELINE_ACCESS' },
  });

  if (!permission) {
    console.error('Permission CHURCH_ACTIVITY_TIMELINE_ACCESS not found!');
    return;
  }

  console.log(`Found permission: ${permission.name} (${permission.id})`);

  // Find roles that should have access to church activity timeline
  // These are the same roles that have access to churches
  const churchesPermission = await prisma.permission.findUnique({
    where: { key_code: 'CHURCHES_ACCESS' },
    include: {
      role_permissions: {
        include: {
          role: true,
        },
      },
    },
  });

  if (!churchesPermission) {
    console.error('CHURCHES_ACCESS permission not found!');
    return;
  }

  const rolesWithChurchAccess = churchesPermission.role_permissions.map(rp => rp.role);
  console.log(`Found ${rolesWithChurchAccess.length} roles with church access`);

  // Add the churchActivityTimeline permission to these roles
  let addedCount = 0;
  for (const role of rolesWithChurchAccess) {
    const existingRolePermission = await prisma.rolePermission.findUnique({
      where: {
        id: `${role.id}_${permission.id}`,
      },
    });

    if (existingRolePermission) {
      console.log(`  ✓ Role ${role.name} already has the permission`);
      continue;
    }

    await prisma.rolePermission.create({
      data: {
        id: `${role.id}_${permission.id}`,
        role_id: role.id,
        permission_id: permission.id,
        created_by: 'system',
        updated_by: 'system',
      },
    });

    console.log(`  ✓ Added permission to role: ${role.name}`);
    addedCount++;
  }

  console.log(`\nSuccessfully added churchActivityTimeline permission to ${addedCount} roles!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
