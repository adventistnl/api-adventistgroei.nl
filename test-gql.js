async function test() {
  const query = `
    query GetAnnualBudgetKPIs($year: Int!, $institutionId: String!) {
      budgetKPIs(year: $year, institutionId: $institutionId) {
        totalInstitutionBudget
      }
      spendingOverTime(year: $year, institutionId: $institutionId) {
        date
        month
        departments {
          departmentId
          departmentName
          amount
        }
      }
    }
  `;
  // I need to get the institution ID from the DB first to make a valid request!
}
test();
