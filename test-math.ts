import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function run() {
  const departmentBudgets = await prisma.annualBudget.findMany({
    where: { year: 2026, entity_type: 'INSTITUTION_DEPARTMENT', is_deleted: false },
    include: { department: true }
  });
  
  const validBudgets = departmentBudgets.filter(b => b.department);
  const budgetIds = validBudgets.map(b => b.id);
  
  const txs = await prisma.budgetTransaction.findMany({
    where: { annual_budget_id: { in: budgetIds } },
    select: { annual_budget_id: true, delta_expenses: true, created_at: true }
  });
  
  const monthlyData: Record<number, Record<string, number>> = {};
  for(let i=0; i<12; i++) monthlyData[i] = {};
  
  txs.forEach(tx => {
     const txYear = tx.created_at.getFullYear();
     console.log('tx.created_at:', tx.created_at, 'txYear:', txYear);
     if(txYear === 2026) {
        const m = tx.created_at.getMonth();
        const amt = Number(tx.delta_expenses);
        monthlyData[m][tx.annual_budget_id] = (monthlyData[m][tx.annual_budget_id] || 0) + amt;
     }
  });

  const cumulativeSpent: Record<string, number> = {};
  validBudgets.forEach(b => cumulativeSpent[b.id] = 0);

  const months = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  
  const result = months.map((month, idx) => {
     const departments = validBudgets.map(budget => {
        const monthAmount = monthlyData[idx][budget.id] || 0;
        cumulativeSpent[budget.id] += monthAmount;
        return {
           departmentId: budget.department_id || '',
           departmentName: budget.department?.name || 'Unknown',
           amount: cumulativeSpent[budget.id]
        };
     });
     return { date: `2026-${String(idx+1).padStart(2,'0')}-01`, month, departments };
  });

  console.log(JSON.stringify(result, null, 2));
}
run().finally(() => prisma.$disconnect());
