# Frontend — Implementação de Subsídio `WITHOUT_DOCUMENT`

## Visão Geral

O tipo `WITHOUT_DOCUMENT` representa um subsídio vinculado a **atividades do projeto** mas que **não exige comprovantes de documento**. O pagamento fica pendente de confirmação manual pelo gestor financeiro.

Diferença dos outros tipos:

| | `WITH_DOCUMENT` | `WITHOUT_DOCUMENT` | `ADVANCE` |
|---|---|---|---|
| Atividades obrigatórias | ✅ | ✅ | ❌ |
| Upload de comprovante | ✅ obrigatório | ❌ bloqueado | ❌ bloqueado |
| Validação de docs antes de aprovar | ✅ | ❌ | ❌ |
| institution_id | Obrigatório | Opcional (derivado do projeto) | Auto |

---

## Mutation GraphQL

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
    is_for_advance
    have_refund
    refund_done
    subsidy_status {
      id
      name
    }
    project {
      id
      title
    }
    requester {
      id
      name
      email
    }
    department {
      id
      name
    }
    items {
      id
      requested_amount
      approved_amount
      project_activity {
        id
        name
        budget_amount
      }
    }
  }
}
```

---

## Payload — `CreateWithoutDocumentSubsidyRequestDto`

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `description` | `String` | ✅ | Descrição do subsídio |
| `total_budget` | `Float` | ✅ | Valor total solicitado |
| `project_id` | `String` | ✅ | UUID do projeto |
| `requester_id` | `String` | ✅ | UUID do usuário solicitante (`currentUser.id`) |
| `department_id` | `String` | ✅ | UUID do departamento do projeto |
| `institution_id` | `String` | ❌ | Se omitido, é derivado automaticamente do projeto |
| `church_id` | `String` | ❌ | UUID da igreja (quando aplicável) |
| `notes` | `String` | ❌ | Observações adicionais |
| `items` | `SubsidyRequestItemInput[]` | ✅ mín. 1 | Lista de atividades vinculadas |

### Estrutura de cada `item`

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `project_activity_id` | `String` | ✅ | UUID da atividade |
| `requested_amount` | `Float` | ✅ | Valor solicitado para esta atividade |
| `notes` | `String` | ❌ | Observação do item |
| `linked_activity_document_ids` | `String[]` | ❌ | **Não enviar** — backend ignora para este tipo |
| `linked_document_amounts` | `Float[]` | ❌ | **Não enviar** |

---

## Exemplo de Variáveis

```json
{
  "data": {
    "description": "Subsídio equipamentos sem nota",
    "total_budget": 1600.00,
    "project_id": "uuid-do-projeto",
    "requester_id": "uuid-do-usuario-logado",
    "department_id": "uuid-do-departamento",
    "items": [
      {
        "project_activity_id": "uuid-atividade-sound-equipment",
        "requested_amount": 1600.00
      }
    ]
  },
  "language": "nl"
}
```

---

## Hook React — `useCreateSubsidyWithoutDocument`

```typescript
// hooks/use-subsidy-without-document.ts
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';

const CREATE_SUBSIDY_WITHOUT_DOCUMENT = gql`
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
`;

export interface SubsidyWithoutDocumentItem {
  project_activity_id: string;
  requested_amount: number;
  notes?: string;
}

export interface CreateSubsidyWithoutDocumentInput {
  description: string;
  total_budget: number;
  project_id: string;
  requester_id: string;
  department_id: string;
  institution_id?: string;
  church_id?: string;
  notes?: string;
  items: SubsidyWithoutDocumentItem[];
}

export function useCreateSubsidyWithoutDocument() {
  const [mutate, { loading, error }] = useMutation(CREATE_SUBSIDY_WITHOUT_DOCUMENT);

  const createSubsidyWithoutDocument = async (
    data: CreateSubsidyWithoutDocumentInput,
    language: 'en' | 'nl' = 'nl',
  ) => {
    const result = await mutate({
      variables: { data, language },
    });
    return result.data?.createSubsidyWithoutDocument ?? null;
  };

  return { createSubsidyWithoutDocument, loading, error };
}
```

---

## Validação no Frontend

Para o tipo `WITHOUT_DOCUMENT`, **não há validação de documentos**. A única validação obrigatória é:

- Ao menos 1 atividade (`items.length >= 1`)
- Cada atividade deve ter `requested_amount > 0`
- A soma dos `requested_amount` dos items deve ser igual ao `total_budget`

```typescript
function validateWithoutDocumentForm(
  items: SubsidyWithoutDocumentItem[],
  totalBudget: number,
): { valid: boolean; error?: string } {
  if (!items || items.length === 0) {
    return { valid: false, error: 'Selecione ao menos uma atividade.' };
  }

  for (const item of items) {
    if (!item.project_activity_id) {
      return { valid: false, error: 'Atividade inválida em um dos itens.' };
    }
    if (!item.requested_amount || item.requested_amount <= 0) {
      return { valid: false, error: 'Valor solicitado deve ser maior que zero.' };
    }
  }

  const sumItems = items.reduce((acc, i) => acc + i.requested_amount, 0);
  const diff = Math.abs(sumItems - totalBudget);
  if (diff > 0.01) {
    return {
      valid: false,
      error: `A soma dos itens (${sumItems}) deve ser igual ao total (${totalBudget}).`,
    };
  }

  return { valid: true };
}
```

---

## Integração com o Modal de Subsídio (`handleSubmit`)

Ajuste o `handleSubmit` do modal para chamar a mutation correta baseado no `request_type`:

```typescript
async function handleSubmit(formData: SubsidyFormData) {
  const { requestType, activities, totalBudget, ...rest } = formData;

  if (requestType === 'WITHOUT_DOCUMENT') {
    // Nenhuma validação de documento necessária
    const items = activities.map(act => ({
      project_activity_id: act.id,
      requested_amount: act.requestedAmount,
      // NÃO incluir linked_activity_document_ids nem linked_document_amounts
    }));

    const validation = validateWithoutDocumentForm(items, totalBudget);
    if (!validation.valid) {
      toast.error(validation.error);
      return;
    }

    const created = await createSubsidyWithoutDocument({
      description:   rest.description,
      total_budget:  totalBudget,
      project_id:    rest.projectId,
      requester_id:  currentUser.id,
      department_id: rest.departmentId,
      church_id:     rest.churchId,
      items,
    });

    if (!created?.id) {
      toast.error('Erro ao criar subsídio. Verifique os dados e tente novamente.');
      return;
    }

    onSuccess(created.id, 'WITHOUT_DOCUMENT');
    return;
  }

  if (requestType === 'WITH_DOCUMENT') {
    // ... lógica existente com validação de documentos
  }

  if (requestType === 'ADVANCE') {
    // ... lógica existente de adiantamento
  }
}
```

---

## Ajuste na Função `validateActivity`

Se o modal usar `validateActivity` para verificar se cada atividade está completa, **pule a validação de documentos** para `WITHOUT_DOCUMENT`:

```typescript
function validateActivity(
  activity: ActivityItem,
  requestType: 'WITH_DOCUMENT' | 'WITHOUT_DOCUMENT' | 'ADVANCE',
): ActivityValidation {
  const docTotal = (activity.selectedDocuments ?? [])
    .reduce((sum, d) => sum + d.amount, 0);

  const requestedAmount = activity.requestedAmount;

  // Para WITHOUT_DOCUMENT e ADVANCE: atividade é válida sem documentos
  const requiresDocs = requestType === 'WITH_DOCUMENT';

  const documentsMatchOrExceedRequest = docTotal >= requestedAmount;
  const documentsDoNotExceedRequest   = docTotal <= requestedAmount;
  const documentsMatchRequest         = docTotal === requestedAmount;

  const isComplete = requiresDocs
    ? documentsMatchOrExceedRequest && documentsDoNotExceedRequest
    : true; // ← sem documento → sempre válida

  return {
    activityName: activity.name,
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

## Erros do Backend a Tratar

| Código HTTP | `errorCode` | Mensagem esperada | Ação no frontend |
|---|---|---|---|
| 400 | — | `At least one item must be associated` | Avisar que itens são obrigatórios |
| 400 | — | `As seguintes atividades já possuem pedido de subsídio: ...` | Mostrar quais atividades já foram usadas |
| 404 | — | `One or more ProjectActivities do not exist` | Recarregar lista de atividades |
| 404 | — | Projeto não encontrado | Redirecionar para projetos |
| 400 | `RECEIPT_UPLOAD_NOT_ALLOWED_FOR_TYPE` | Se tentar fazer upload de recibo | Bloquear UI de upload |

---

## O que NÃO fazer para este tipo

```typescript
// ❌ Não chamar uploadSubsidyReceipt para WITHOUT_DOCUMENT
// O backend retorna RECEIPT_UPLOAD_NOT_ALLOWED_FOR_TYPE

// ❌ Não enviar linked_activity_document_ids nos items
// O backend ignora, mas pode confundir a validação do frontend

// ❌ Não bloquear o submit por docTotal === 0
// Este tipo não precisa de documentos — isComplete deve ser true sem docs
```
