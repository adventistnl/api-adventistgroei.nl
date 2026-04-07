async function run() {
  const req = await fetch('http://localhost:3008/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query { spendingOverTime(year: 2026, institutionId: "f87689af-b484-496a-9c9d-54ceb5790fbd") { date month departments { departmentId } } }`
    })
  });
  const text = await req.text();
  console.log(text.substring(0, 500));
}
run();
