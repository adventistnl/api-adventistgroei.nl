# Frontend — Correção: Subsídio por Tipo (`request_type`)

## Diagnóstico

O erro abaixo indica que a mutation **nunca chegou ao backend**:

```
createdSubsidyId: undefined
type: undefined   ← se a mutation tivesse rodado, type viria do response
❌ onSubmit returned no ID — backend may have failed silently
```

A causa real está na função `validateActivity` do `request-subsidy-modal.tsx` (~linha 441):

```
{ isComplete: false, docTotal: 0, documentsMatchOrExceedRequest: false }
```

Como `isComplete === false`, o `handleSubmit` bloqueia a chamada à mutation antes mesmo de ir ao backend.

---

## Causa Raiz

A função `validateActivity` considera uma atividade "completa" apenas quando `docTotal >= requestedAmount`. Isso é correto para o tipo `WITH_DOCUMENT`, mas **errado** para `WITHOUT_DOCUMENT` e `ADVANCE`, que não possuem documentos vinculados.

---

## Correções Necessárias

### 1. `validateActivity` — ignorar documentos para tipos sem documento

Localize a função `validateActivity` (~linha 441) e adicione a verificação de tipo:

```typescript
// ANTES (comportamento atual — quebra WITHOUT_DOCUMENT)
const isComplete =
  documentsMatchOrExceedRequest &&
  documentsDoNotExceedRequest;

// DEPOIS — respeitar o tipo do subsídio
const isComplete =
  requestType === 'WITHOUT_DOCUMENT' || requestType === 'ADVANCE'
    ? true  // sem documento → atividade sempre válida
    : documentsMatchOrExceedRequest && documentsDoNotExceedRequest;
```

A variável `requestType` representa o `request_type` selecionado no modal (`'WITH_DOCUMENT' | 'WITHOUT_DOCUMENT' | 'ADVANCE'`). Passe-a como parâmetro da função:

```typescript
// Assinatura atualizada
function validateActivity(
  activity: ActivityItem,
  requestType: 'WITH_DOCUMENT' | 'WITHOUT_DOCUMENT' | 'ADVANCE',
): ActivityValidation {
  const docTotal = /* ... seu cálculo atual ... */;
  const requestedAmount = activity.requestedAmount;

  const documentsMatchOrExceedRequest = docTotal >= requestedAmount;
  const documentsDoNotExceedRequest   = docTotal <= requestedAmount;
  const documentsMatchRequest         = docTotal === requestedAmount;

  // Atividade completa apenas se o tipo precisar de documento
  const requiresDocs = requestType === 'WITH_DOCUMENT';
  const isComplete   = requiresDocs
    ? documentsMatchOrExceedRequest && documentsDoNotExceedRequest
    : true;

  return {
    activityName:                  activity.name,
    requestedAmount,
    docTotal,
    documentsMatchOrExceedRequest,
    documentsDoNotExceedRequest,
    documentsMatchRequest,
    isComplete,
  };
}
```

---

### 2. `handleSubmit` — passar `requestType` para cada `validateActivity`

Localize onde `validateActivity` é chamada (~linha 873) e adicione o tipo:

```typescript
// ANTES
const validations = activities.map(act => validateActivity(act));

// DEPOIS
const validations = activities.map(act => validateActivity(act, requestType));
```

---

### 3. `handleSubmit` — montar o payload correto por tipo

O payload enviado à mutation deve ser **diferente por tipo**:

```typescript
// WITH_DOCUMENT — envia documents linkados
if (requestType === 'WITH_DOCUMENT') {
  await createSubsidyRequest({
    variables: {
      data: {
        ...baseData,
        request_type: 'WITH_DOCUMENT',
        items: activities.map(act => ({
          project_activity_id: act.id,
          requested_amount:    act.requestedAmount,
          linked_activity_document_ids: act.selectedDocumentIds,   // obrigatório
          linked_document_amounts:      act.selectedDocumentAmounts,
        })),
      },
    },
  });
}

// WITHOUT_DOCUMENT — envia items SEM documentos, usa mutation dedicada
if (requestType === 'WITHOUT_DOCUMENT') {
  await createSubsidyWithoutDocument({
    variables: {
      data: {
        description:    baseData.description,
        total_budget:   baseData.total_budget,
        project_id:     baseData.project_id,
        requester_id:   baseData.requester_id,
        department_id:  baseData.department_id,
        church_id:      baseData.church_id,
        items: activities.map(act => ({
          project_activity_id: act.id,
          requested_amount:    act.requestedAmount,
          // NÃO enviar linked_activity_document_ids
        })),
      },
    },
  });
}

// ADVANCE — usa mutation dedicada, sem items
if (requestType === 'ADVANCE') {
  await createAdvanceRequest({
    variables: {
      projectId:     baseData.project_id,
      advanceAmount: baseData.total_budget,
      language,
    },
  });
}
```

---

### 4. Nova mutation a adicionar no Apollo/GraphQL client

```graphql
mutation CreateSubsidyWithoutDocument(
  $data: CreateWithoutDocumentSubsidyRequestDto!
  $language: LanguagePreference
) {
  createSubsidyWithoutDocument(data: $data, language: $language) {
    id
    description
    total_budget
    request_type
    subsidy_status { id name }
    items {
      id
      requested_amount
      project_activity { id name }
    }
  }
}
```

---

### 5. Ocultar seleção de documentos para `WITHOUT_DOCUMENT`

Na UI, quando `requestType === 'WITHOUT_DOCUMENT'`, esconder o seletor de documentos para evitar confusão:

```tsx
{requestType === 'WITH_DOCUMENT' && (
  <DocumentSelector
    activity={activity}
    onSelectDocument={handleSelectDocument}
  />
)}

{requestType !== 'WITH_DOCUMENT' && (
  <p className="text-sm text-muted-foreground">
    Nenhum comprovante necessário para este tipo de subsídio.
  </p>
)}
```

---

## Resumo das Mudanças

| Arquivo | O que mudar |
|---|---|
| `validateActivity()` | Aceitar `requestType`; retornar `isComplete: true` para `WITHOUT_DOCUMENT`/`ADVANCE` |
| `handleSubmit()` | Passar `requestType` para `validateActivity`; separar payload por tipo |
| Mutations GraphQL | Adicionar `CREATE_SUBSIDY_WITHOUT_DOCUMENT` |
| UI / JSX | Ocultar seletor de documentos para `WITHOUT_DOCUMENT` e `ADVANCE` |

---

## Enum de tipos (referência)

```typescript
// Valores aceitos pelo backend
type SubsidyRequestType = 'WITH_DOCUMENT' | 'WITHOUT_DOCUMENT' | 'ADVANCE';
```
