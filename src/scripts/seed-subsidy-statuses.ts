import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding SubsidyStatus...');

  // Buscar o primeiro departamento e usuário para associar aos status
  const department = await prisma.department.findFirst({
    where: { is_deleted: false },
  });

  const user = await prisma.user.findFirst({
    where: { is_deleted: false },
  });

  if (!department) {
    console.error('❌ Nenhum departamento encontrado. Por favor, crie um departamento primeiro.');
    return;
  }

  if (!user) {
    console.error('❌ Nenhum usuário encontrado. Por favor, crie um usuário primeiro.');
    return;
  }

  const statuses = [
    {
      name: 'PENDING',
      description: 'Aguardando aprovação',
      order: 1,
      department_id: department.id,
      assigned_to: user.id,
      created_by: user.id,
      updated_by: user.id,
    },
    {
      name: 'APPROVED',
      description: 'Aprovado',
      order: 2,
      department_id: department.id,
      assigned_to: user.id,
      created_by: user.id,
      updated_by: user.id,
    },
    {
      name: 'REJECTED',
      description: 'Rejeitado',
      order: 3,
      department_id: department.id,
      assigned_to: user.id,
      created_by: user.id,
      updated_by: user.id,
    },
    {
      name: 'IN_REVIEW',
      description: 'Em análise',
      order: 4,
      department_id: department.id,
      assigned_to: user.id,
      created_by: user.id,
      updated_by: user.id,
    },
    {
      name: 'CLOSED',
      description: 'Encerrado',
      order: 5,
      department_id: department.id,
      assigned_to: user.id,
      created_by: user.id,
      updated_by: user.id,
    },
    {
      name: 'ADVANCED_CLOSED',
      description: 'Advance payment completed',
      order: 6,
      department_id: department.id,
      assigned_to: user.id,
      created_by: user.id,
      updated_by: user.id,
    },
    {
      name: 'WAITING_REFUND',
      description: 'Waiting for refund processing',
      order: 7,
      department_id: department.id,
      assigned_to: user.id,
      created_by: user.id,
      updated_by: user.id,
    },
  ];

  for (const status of statuses) {
    const existing = await prisma.subsidyStatus.findFirst({
      where: {
        name: status.name,
        is_deleted: false,
      },
    });

    if (existing) {
      console.log(`✅ Status "${status.name}" já existe`);
      continue;
    }

    await prisma.subsidyStatus.create({
      data: status,
    });

    console.log(`✅ Status "${status.name}" criado com sucesso`);
  }

  console.log('✅ Seed de SubsidyStatus concluído!');
}

main()
  .catch((e) => {
    console.error('❌ Erro ao executar seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
