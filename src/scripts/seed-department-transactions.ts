import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function run() {
  console.log('🌱 Iniciando Seed de Transações Departamentais (Burn Rate)...');

  // Buscar todos os orçamentos de departamento do ano de 2026
  const departmentBudgets = await prisma.annualBudget.findMany({
    where: {
      year: 2026,
      entity_type: 'INSTITUTION_DEPARTMENT',
      is_deleted: false,
    },
    include: {
      department: true,
    }
  });

  if (departmentBudgets.length === 0) {
    console.log('❌ Nenhum orçamento de departamento encontrado para 2026.');
    console.log('Dica: Crie pelo menos um orçamento para um departamento na interface primeiro.');
    return;
  }

  console.log(`✅ Encontrados ${departmentBudgets.length} orçamentos departamentais em 2026.`);

  let totalTransactions = 0;

  for (const budget of departmentBudgets) {
    console.log(`\n  👉 Gerando gastos simulados para o Departamento: ${budget.department?.name}`);
    
    // Vamos gerar entre 5 e 15 microtransações para cada departamento, espalhadas entre Janeiro e os dias atuais de 2026
    const numTransactions = Math.floor(Math.random() * 10) + 5;
    
    // Meses limites (Janeiro até mês atual)
    const currentMonth = new Date().getMonth(); 
    
    for (let i = 0; i < numTransactions; i++) {
       // Gerar mês de forma que o departamento pareça gastar regularmente
       const randomMonth = Math.floor(Math.random() * (currentMonth + 1));
       const randomDay = Math.floor(Math.random() * 28) + 1;
       const tsDate = new Date(2026, randomMonth, randomDay, 10, 0, 0);

       // Valor numérico aleatório entre 100 e 2000
       const expenseAmount = Math.floor(Math.random() * 1900) + 100;

       await prisma.budgetTransaction.create({
         data: {
           annual_budget_id: budget.id,
           type: 'MANUAL_ADJUSTMENT', // Ajuste arbitrário simulando um gasto
           delta_expenses: expenseAmount,
           delta_allocated: 0,
           description: `Seed: Compra de material/Evento (Automático)`,
           created_by: 'system-seed',
           created_at: tsDate,
         }
       });

       // Note: total_expenses column was removed from AnnualBudget.
       // The BudgetTransaction record above is the source of truth for expenses.
       totalTransactions++;
    }
    
    console.log(`     ✔️ ${numTransactions} transações geradas.`);
  }

  console.log(`\n🎉 Seed finalizado com sucesso! ${totalTransactions} microtransações injetadas nas datas curadas.`);
}

run()
  .catch(e => {
    console.error('❌ Erro durante o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
