import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔍 Checking for orphaned SubsidyRequests...\n');

  // 1. Encontrar subsidy requests sem projeto
  const orphanedNoProject = await prisma.$queryRaw<any[]>`
    SELECT sr.id, sr.description, sr.project_id, sr.created_at
    FROM "SubsidyRequest" sr
    WHERE sr.is_deleted = false
      AND sr.project_id IS NULL
  `;

  // 2. Encontrar subsidy requests com projeto deletado
  const orphanedDeletedProject = await prisma.$queryRaw<any[]>`
    SELECT sr.id, sr.description, sr.project_id, sr.created_at
    FROM "SubsidyRequest" sr
    LEFT JOIN "Project" p ON sr.project_id = p.id
    WHERE sr.is_deleted = false
      AND sr.project_id IS NOT NULL
      AND p.id IS NULL
  `;

  const totalOrphaned = orphanedNoProject.length + orphanedDeletedProject.length;

  console.log(`📊 Results:`);
  console.log(`   - Subsidy requests without project_id: ${orphanedNoProject.length}`);
  console.log(`   - Subsidy requests with deleted project: ${orphanedDeletedProject.length}`);
  console.log(`   - Total orphaned records: ${totalOrphaned}\n`);

  if (totalOrphaned === 0) {
    console.log('✅ No orphaned subsidy requests found! Database is clean.');
    return;
  }

  // Mostrar detalhes
  if (orphanedNoProject.length > 0) {
    console.log('⚠️  Subsidy requests WITHOUT project_id:');
    console.table(orphanedNoProject.map(r => ({
      id: r.id,
      description: r.description?.substring(0, 50) || 'N/A',
      project_id: 'NULL',
      created_at: r.created_at,
    })));
    console.log('');
  }

  if (orphanedDeletedProject.length > 0) {
    console.log('⚠️  Subsidy requests with DELETED project:');
    console.table(orphanedDeletedProject.map(r => ({
      id: r.id,
      description: r.description?.substring(0, 50) || 'N/A',
      project_id: r.project_id,
      created_at: r.created_at,
    })));
    console.log('');
  }

  // Perguntar confirmação antes de deletar
  console.log('❓ Do you want to SOFT DELETE these orphaned records?');
  console.log('   This will mark them as deleted (is_deleted = true)');
  console.log('   Run with --confirm flag to proceed\n');

  const shouldDelete = process.argv.includes('--confirm');

  if (!shouldDelete) {
    console.log('ℹ️  To delete these records, run:');
    console.log('   pnpm ts-node src/scripts/cleanup-orphaned-subsidy-requests.ts --confirm\n');
    return;
  }

  // 3. Soft delete dos registros órfãos
  const allOrphanedIds = [
    ...orphanedNoProject.map(r => r.id),
    ...orphanedDeletedProject.map(r => r.id),
  ];

  const updated = await prisma.subsidyRequest.updateMany({
    where: {
      id: {
        in: allOrphanedIds,
      },
    },
    data: {
      is_deleted: true,
      updated_at: new Date(),
      updated_by: 'system_cleanup_orphaned',
    },
  });

  console.log(`✅ Successfully soft deleted ${updated.count} orphaned subsidy requests`);
  console.log('   These records are now marked as is_deleted = true\n');

  // 4. Verificação final
  const remainingOrphaned = await prisma.$queryRaw<any[]>`
    SELECT COUNT(*) as count
    FROM "SubsidyRequest" sr
    LEFT JOIN "Project" p ON sr.project_id = p.id
    WHERE sr.is_deleted = false
      AND (sr.project_id IS NULL OR p.id IS NULL)
  `;

  const remaining = remainingOrphaned[0]?.count || 0;
  
  if (remaining === 0) {
    console.log('✅ Cleanup complete! No orphaned records remaining.');
  } else {
    console.log(`⚠️  Warning: ${remaining} orphaned records still exist.`);
  }
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
