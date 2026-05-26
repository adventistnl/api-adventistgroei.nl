# Subsidy Request — Activity Budget Cap

## Regra de negócio

Uma atividade (`ProjectActivity`) possui um `budget_amount` (valor total orçado).  
**Múltiplos subsídios podem ser vinculados à mesma atividade**, desde que a soma de todos os `requested_amount` não ultrapasse o `budget_amount` da atividade.

```
Atividade "Temple Renovation" — budget_amount: €2.000

Subsídio A → requested_amount: €1.000  ✅  (alocado: €1.000 / €2.000)
Subsídio B → requested_amount: €1.000  ✅  (alocado: €2.000 / €2.000)
Subsídio C → requested_amount: €100    ❌  (alocado: €2.100 > €2.000)
```

Subsídios com status **REJECTED** não contam para o cálculo.

---

## Quando a validação é executada

| Operação             | Validado? |
|----------------------|-----------|
| `createSubsidyRequest`        | ✅ Sim    |
| `createWithoutDocumentRequest` | ✅ Sim    |
| `updateSubsidyRequest` (com items) | ✅ Sim (exclui o próprio subsídio do cálculo) |

---

## Erros possíveis (com código e contexto)

### `ACTIVITY_BUDGET_CAP_EXCEEDED`
Retornado quando o valor solicitado ultrapassa o orçamento disponível da atividade.

```json
{
  "errors": [{
    "message": "Activity \"Temple Renovation\" budget cap exceeded. Total budget: €2000, already allocated: €2000, requested: €100, remaining: €0",
    "extensions": {
      "code": "BAD_REQUEST",
      "status": 400,
      "context": {
        "additional": {
          "errorCode": "ACTIVITY_BUDGET_CAP_EXCEEDED",
          "activityId": "uuid-da-atividade",
          "activityName": "Temple Renovation",
          "budget": 2000,
          "allocated": 2000,
          "requested": 100,
          "remaining": 0
        }
      }
    }
  }]
}
```

**Campos em `additional`:**

| Campo          | Tipo     | Descrição                                              |
|----------------|----------|--------------------------------------------------------|
| `errorCode`    | string   | Identificador do erro: `ACTIVITY_BUDGET_CAP_EXCEEDED`  |
| `activityId`   | string   | UUID da atividade que ultrapassou o limite             |
| `activityName` | string   | Nome da atividade (para exibir ao usuário)             |
| `budget`       | number   | Orçamento total da atividade                           |
| `allocated`    | number   | Já alocado em outros subsídios ativos                  |
| `requested`    | number   | Valor que o novo subsídio está tentando solicitar      |
| `remaining`    | number   | Valor ainda disponível para novos subsídios            |

---

### `ACTIVITY_NOT_FOUND`
Retornado quando um `project_activity_id` enviado não existe ou foi deletado.

```json
{
  "extensions": {
    "code": "NOT_FOUND",
    "status": 404,
    "context": {
      "additional": {
        "errorCode": "ACTIVITY_NOT_FOUND",
        "activityId": "uuid-da-atividade"
      }
    }
  }
}
```

---

### `ADVANCE_EXCEEDS_LIMIT`
Retornado ao criar um advance request quando o valor excede 50% do `subsidized_budget`.

```json
{
  "extensions": {
    "code": "BAD_REQUEST",
    "status": 400,
    "context": {
      "additional": {
        "errorCode": "ADVANCE_EXCEEDS_LIMIT",
        "requested": 1500,
        "max": 1000,
        "subsidizedBudget": 2000,
        "existing": 0
      }
    }
  }
}
```

---

### `ADVANCE_EXCEEDS_AVAILABLE`
Retornado quando o valor do advance excede o orçamento disponível do projeto.

```json
{
  "extensions": {
    "code": "BAD_REQUEST",
    "status": 400,
    "context": {
      "additional": {
        "errorCode": "ADVANCE_EXCEEDS_AVAILABLE",
        "requested": 500,
        "available": 300,
        "subsidizedBudget": 2000,
        "totalRequested": 1700
      }
    }
  }
}
```

---

## Como o frontend deve integrar

### 1. Query combinada — uma única requisição HTTP

GraphQL permite enviar múltiplas queries no mesmo request usando **aliases**. Para o formulário de subsídio, o frontend precisa de três conjuntos de dados: o projeto, as atividades com seus orçamentos disponíveis, e os subsídios já existentes. Tudo em **uma chamada só**:

```graphql
query SubsidyFormData($projectId: ID!) {
  project(id: $projectId) {
    id
    name
    status
    subsidized_budget
    balance
  }

  projectActivityBudgetSummaries(projectId: $projectId) {
    activity_id
    activity_name
    budget
    allocated
    available
  }

  subsidyRequests(project_id: $projectId) {
    id
    request_type
    requested_amount
    subsidy_status {
      id
      name
    }
    items {
      id
      project_activity_id
      requested_amount
    }
  }
}
```

Com isso, uma única viagem ao servidor entrega tudo que o formulário precisa. Não há waterfall (primeiro buscar projeto, depois atividades, depois subsídios).

**Variáveis:**
```json
{ "projectId": "uuid-do-projeto" }
```

**Resposta consolidada:**
```json
{
  "data": {
    "project": {
      "id": "uuid",
      "status": "IN_PROGRESS",
      "subsidized_budget": 5000,
      "balance": 3000
    },
    "projectActivityBudgetSummaries": [
      {
        "activity_id": "uuid-atividade-1",
        "activity_name": "Temple Renovation",
        "budget": 2000,
        "allocated": 1000,
        "available": 1000
      },
      {
        "activity_id": "uuid-atividade-2",
        "activity_name": "Youth Camp",
        "budget": 3000,
        "allocated": 0,
        "available": 3000
      }
    ],
    "subsidyRequests": [
      {
        "id": "uuid-subsidio-1",
        "request_type": "SUBSIDY",
        "requested_amount": 1000,
        "subsidy_status": { "name": "PENDING" }
      }
    ]
  }
}
```

---

### 2. Ao editar um subsídio existente — refetch cirúrgico

Ao reabrir o formulário para editar um subsídio específico, combine o subsídio com o orçamento atualizado:

```graphql
query SubsidyEditData($projectId: ID!, $subsidyId: ID!) {
  subsidyRequest(id: $subsidyId) {
    id
    requested_amount
    notes
    subsidy_type { id name }
    items {
      id
      project_activity_id
      requested_amount
      notes
    }
  }

  projectActivityBudgetSummaries(projectId: $projectId) {
    activity_id
    activity_name
    budget
    allocated
    available
  }
}
```

> O serviço exclui automaticamente o subsídio sendo editado do cálculo de `allocated`, então `available` já reflete o que está realmente disponível para aquela edição.

---

### 3. Validação inline no formulário

Com `projectActivityBudgetSummaries` em mãos, bloqueie o submit antes de chamar a API:

```ts
function validateSubsidyItems(items, budgetSummaries) {
  for (const item of items) {
    const summary = budgetSummaries.find(s => s.activity_id === item.project_activity_id);
    if (!summary) continue;

    if (item.requested_amount > summary.available) {
      return {
        valid: false,
        activityName: summary.activity_name,
        budget: summary.budget,
        allocated: summary.allocated,
        requested: item.requested_amount,
        remaining: summary.available,
      };
    }
  }
  return { valid: true };
}
```

---

### 4. Tratar o erro da API (fallback)

```ts
function handleSubsidyError(error) {
  const ext = error?.extensions?.context?.additional;

  if (ext?.errorCode === 'ACTIVITY_BUDGET_CAP_EXCEEDED') {
    return `Orçamento da atividade "${ext.activityName}" excedido.\n` +
           `Total: €${ext.budget} | Alocado: €${ext.allocated} | ` +
           `Solicitado: €${ext.requested} | Disponível: €${ext.remaining}`;
  }

  if (ext?.errorCode === 'ADVANCE_EXCEEDS_LIMIT') {
    return `Valor do adiantamento (€${ext.requested}) excede o limite de 50% (€${ext.max}).`;
  }

  if (ext?.errorCode === 'ADVANCE_EXCEEDS_AVAILABLE') {
    return `Valor do adiantamento (€${ext.requested}) excede o disponível (€${ext.available}).`;
  }

  return error.message;
}
```

### 5. Exibir barra de progresso de alocação por atividade

```tsx
// Exemplo React
function ActivityBudgetBar({ summary }) {
  const percent = (summary.allocated / summary.budget) * 100;

  return (
    <div>
      <progress value={percent} max={100} />
      <span>€{summary.allocated} alocado de €{summary.budget} (disponível: €{summary.available})</span>
    </div>
  );
}
```

---

## Resumo dos errorCodes

| errorCode                      | HTTP | Causa                                                      |
|-------------------------------|------|------------------------------------------------------------|
| `ACTIVITY_BUDGET_CAP_EXCEEDED` | 400  | Soma de subsídios ultrapassa orçamento da atividade        |
| `ACTIVITY_NOT_FOUND`           | 404  | Atividade não encontrada ou deletada                       |
| `ADVANCE_EXCEEDS_LIMIT`        | 400  | Advance excede 50% do subsidized_budget                    |
| `ADVANCE_EXCEEDS_AVAILABLE`    | 400  | Advance excede o orçamento disponível do projeto           |
| `ADVANCE_AMOUNT_INVALID`       | 400  | Valor do advance é zero ou negativo                        |
| `EDIT_LOCKED_STATUS`           | 400  | Co-owner tentou editar atividade em status bloqueado       |
| `STATUS_IS_CLOSED`             | 400  | Tentativa de modificar subsídio com status CLOSED          |
| `DOCUMENTS_NOT_VALIDATED`      | 400  | Documentos pendentes de validação                          |
| `DOCUMENTS_REJECTED`           | 400  | Documentos rejeitados bloqueiam aprovação                  |
| `ONLY_FINANCIAL_CAN_CLOSE`     | 403  | Somente FINANCIAL_MANAGER pode fechar/avançar subsídio     |
