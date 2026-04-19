import { PrismaClient, InstitutionPositionType } from '@prisma/client';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const SYS = 'system';

/**
 * Seed de cargos institucionais (InstitutionPosition).
 *
 * Estratégia de atribuição:
 *   PRESIDENT       → usuário com role INSTITUTIONAL_LEADER (fallback: ADMIN)
 *   SECRETARY       → usuário com role ADMIN (excluindo já atribuído)
 *   FINANCE_MANAGER → usuário com role FINANCIAL_MANAGER (fallback: ADMIN)
 *
 * Cada combinação institution_id + position_type é única (constraint no DB).
 * O seed usa upsert baseado no unique compound key para ser idempotente.
 */
async function main() {
  console.log('🌱 Seeding institution positions...\n');

  const institution = await prisma.institution.findFirst({
    where: { is_deleted: false },
    orderBy: { created_at: 'asc' },
  });

  if (!institution) {
    console.log('⚠️  No institution found. Run seed:prod:full first.');
    return;
  }

  console.log(`📌 Institution: ${institution.name} (${institution.id})`);

  // Buscar usuários por roles
  const usersWithRoles = await prisma.user.findMany({
    where: { institution_id: institution.id, is_deleted: false },
    include: {
      user_roles: {
        include: { role: { select: { key_code: true } } },
      },
    },
  });

  const getUserByRole = (roleKey: string, excludeIds: string[] = []) =>
    usersWithRoles.find(
      (u) =>
        !excludeIds.includes(u.id) &&
        u.user_roles.some((ur) => ur.role.key_code === roleKey),
    );

  const getAdminUser = (excludeIds: string[] = []) =>
    usersWithRoles.find(
      (u) =>
        !excludeIds.includes(u.id) &&
        u.user_roles.some((ur) => ['ADMIN', 'DEV'].includes(ur.role.key_code)),
    );

  const assignedIds: string[] = [];

  const assignments: { position_type: InstitutionPositionType; label: string; user_id: string | undefined }[] = [];

  // PRESIDENT → INSTITUTIONAL_LEADER ou ADMIN
  const presidentUser =
    getUserByRole('INSTITUTIONAL_LEADER', assignedIds) ?? getAdminUser(assignedIds);
  if (presidentUser) {
    assignedIds.push(presidentUser.id);
    assignments.push({ position_type: 'PRESIDENT', label: 'President', user_id: presidentUser.id });
  }

  // FINANCE_MANAGER → FINANCIAL_MANAGER ou ADMIN
  const financeUser =
    getUserByRole('FINANCIAL_MANAGER', assignedIds) ?? getAdminUser(assignedIds);
  if (financeUser) {
    assignedIds.push(financeUser.id);
    assignments.push({ position_type: 'FINANCE_MANAGER', label: 'Finance Manager', user_id: financeUser.id });
  }

  // SECRETARY → ADMIN ou qualquer outro usuário não atribuído
  const secretaryUser =
    getAdminUser(assignedIds) ??
    usersWithRoles.find((u) => !assignedIds.includes(u.id));
  if (secretaryUser) {
    assignedIds.push(secretaryUser.id);
    assignments.push({ position_type: 'SECRETARY', label: 'Secretary', user_id: secretaryUser.id });
  }

  if (assignments.length === 0) {
    console.log('⚠️  No users found to assign positions. Positions will be empty.');
    return;
  }

  for (const assignment of assignments) {
    if (!assignment.user_id) continue;

    // Verificar se já existe um position ativo para esse cargo
    const existing = await prisma.institutionPosition.findFirst({
      where: {
        institution_id: institution.id,
        position_type: assignment.position_type,
        is_deleted: false,
      },
    });

    const user = usersWithRoles.find((u) => u.id === assignment.user_id);

    if (existing) {
      // Atualizar se o user mudou
      if (existing.user_id !== assignment.user_id) {
        await prisma.institutionPosition.update({
          where: { id: existing.id },
          data: { user_id: assignment.user_id, updated_by: SYS },
        });
        console.log(`🔄 ${assignment.label}: updated → ${user?.name} (${user?.email})`);
      } else {
        console.log(`✅ ${assignment.label}: already assigned → ${user?.name} (${user?.email})`);
      }
    } else {
      await prisma.institutionPosition.create({
        data: {
          institution_id: institution.id,
          position_type: assignment.position_type,
          user_id: assignment.user_id,
          created_by: SYS,
          updated_by: SYS,
        },
      });
      console.log(`✅ ${assignment.label}: assigned → ${user?.name} (${user?.email})`);
    }
  }

  // Atribuir role INSTITUTION_MANAGER aos usuários com cargo
  const institutionManagerRole = await prisma.role.findUnique({
    where: { key_code: 'INSTITUTION_MANAGER' },
  });

  if (institutionManagerRole) {
    for (const id of assignedIds) {
      const alreadyHasRole = await prisma.userRole.findUnique({
        where: { id: `${id}_${institutionManagerRole.id}` },
      });
      if (!alreadyHasRole) {
        await prisma.userRole.create({
          data: {
            id: `${id}_${institutionManagerRole.id}`,
            user_id: id,
            role_id: institutionManagerRole.id,
            created_by: SYS,
            updated_by: SYS,
          },
        });
        const u = usersWithRoles.find((u) => u.id === id);
        console.log(`🏷️  INSTITUTION_MANAGER role assigned to: ${u?.name}`);
      }
    }
  } else {
    console.log('⚠️  INSTITUTION_MANAGER role not found. Run seed:roles first.');
  }

  console.log('\n✅ Institution positions seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
