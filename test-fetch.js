const { PrismaClient } = require('/Users/maykel/projects/dan/api-adventistgroei.nl/node_modules/@prisma/client');
const prisma = new PrismaClient();
async function run() {
  const budgets = await prisma.annualBudget.findMany({
    where: { entity_type: 'INSTITUTION_DEPARTMENT' },
    select: { id: true, year: true, institution_id: true, department_id: true },
  });
  console.log("BUDGETS:", budgets);
}
run().finally(() => prisma.$disconnect());
