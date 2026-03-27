# Subsídio — Tipos e CRUD Completo

## Visão Geral

O sistema suporta **3 tipos de subsídio** (`SubsidyRequestType`), cada um com comportamento distinto em relação a documentos e atividades.

| Tipo | Campo `request_type` | Linked a Atividades | Comprovante de Documento | Pendência de Receipt |
|---|---|---|---|---|
| Adiantamento | `ADVANCE` | Não | Não | Sim |
| Sem Documento | `WITHOUT_DOCUMENT` | Sim (≥1) | Não | Sim |
| Com Documento | `WITH_DOCUMENT` | Sim (≥1) | Sim (obrigatório) | Não (documentos validados) |

---

## Regras por Tipo

### `ADVANCE` (Adiantamento)
- **Não** requer `items` de atividade.
- **Não** aceita upload de comprovantes (`SubsidyReceipt`).
- Fica com pendência de receipt até ser fechado pelo gestor financeiro.
- Limitado a **50% do `subsidized_budget`** do projeto.
- Um projeto só pode ter **um** advance ativo por vez (não rejeitado).
- Aprovação **não** exige validação de documentos.
- Usa o status `ADVANCED_CLOSED` como etapa intermediária antes de `CLOSED`.

### `WITHOUT_DOCUMENT` (Sem Documento)
- **Requer** `items` vinculados a `ProjectActivity` (ao menos 1).
- **Não** aceita upload de comprovantes (`SubsidyReceipt`).
- Fica com pendência de receipt — aprovado sem comprovantes.
- Aprovação **não** exige validação de documentos.

### `WITH_DOCUMENT` (Com Documento)
- **Requer** `items` vinculados a `ProjectActivity` (ao menos 1).
- **Aceita** upload de comprovantes (`SubsidyReceipt`).
- Comprovantes devem ser **validados e aprovados** antes da aprovação do subsídio.
- É o tipo **padrão** quando `request_type` não é informado.

---

## Fluxo de Status

```
PENDING → IN_REVIEW → APPROVED → CLOSED
                ↘ REJECTED → CLOSED
                ↘ (ADVANCE only) APPROVED → ADVANCED_CLOSED → CLOSED
```

---

## GraphQL — CRUD Completo

### 1. Criar subsídio `WITH_DOCUMENT` (padrão)

```graphql
mutation CreateSubsidyRequest($data: SubsidyRequestCreateDto!, $language: LanguagePreference) {
  createSubsidyRequest(data: $data, language: $language) {
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
    subsidy_receipts { id filename amount is_validated approved }
  }
}
```

**Variáveis:**
```json
{
  "data": {
    "description": "Subsídio evento de jovens",
    "total_budget": 1200.00,
    "project_id": "uuid-projeto",
    "requester_id": "uuid-usuario",
    "department_id": "uuid-departamento",
    "request_type": "WITH_DOCUMENT",
    "items": [
      {
        "project_activity_id": "uuid-atividade-1",
        "requested_amount": 600.00,
        "linked_activity_document_ids": ["uuid-doc-1"],
        "linked_document_amounts": [600.00]
      },
      {
        "project_activity_id": "uuid-atividade-2",
        "requested_amount": 600.00,
        "linked_activity_document_ids": ["uuid-doc-2"],
        "linked_document_amounts": [600.00]
      }
    ]
  }
}
```

> `linked_activity_document_ids`: IDs de `ActivityDocuments` já existentes na atividade.
> A soma de `linked_document_amounts` deve bater com `requested_amount` de cada item.

---

### 2. Criar subsídio `WITHOUT_DOCUMENT`

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

**Variáveis:**
```json
{
  "data": {
    "description": "Subsídio material sem nota fiscal",
    "total_budget": 800.00,
    "project_id": "uuid-projeto",
    "requester_id": "uuid-usuario",
    "department_id": "uuid-departamento",
    "items": [
      {
        "project_activity_id": "uuid-atividade-1",
        "requested_amount": 500.00
      },
      {
        "project_activity_id": "uuid-atividade-2",
        "requested_amount": 300.00
      }
    ]
  }
}
```

> Não enviar `linked_activity_document_ids` — este tipo não aceita documentos.

---

### 3. Criar subsídio `ADVANCE` (Adiantamento)

```graphql
mutation CreateAdvanceRequest(
  $projectId: String!
  $advanceAmount: Float!
  $language: LanguagePreference
) {
  createAdvanceRequest(
    projectId: $projectId
    advanceAmount: $advanceAmount
    language: $language
  ) {
    id
    description
    total_budget
    advance_amount
    request_type
    is_for_advance
    subsidy_status { id name }
  }
}
```

**Variáveis:**
```json
{
  "projectId": "uuid-projeto",
  "advanceAmount": 2500.00,
  "language": "nl"
}
```

> `advanceAmount` máximo = 50% do `subsidized_budget` do projeto.
> Apenas um advance ativo por projeto é permitido.

---

### 4. Listar subsídios

```graphql
query SubsidyRequests($project_id: String) {
  subsidyRequests(project_id: $project_id) {
    id
    description
    total_budget
    approved_amount
    request_type
    is_for_advance
    have_refund
    refund_done
    subsidy_status { id name }
    project { id title }
    requester { id name email }
    items {
      id
      requested_amount
      approved_amount
      project_activity { id name }
    }
    subsidy_receipts {
      id
      filename
      amount
      is_validated
      approved
    }
  }
}
```

---

### 5. Buscar subsídio por ID

```graphql
query SubsidyRequest($id: String!) {
  subsidyRequest(id: $id) {
    id
    description
    total_budget
    approved_amount
    request_type
    subsidy_status { id name }
    items {
      id
      requested_amount
      project_activity { id name }
    }
    subsidy_receipts {
      id
      filename
      amount
      is_validated
      approved
    }
    status_history {
      id
      reason
      changed_at
      status { name }
    }
  }
}
```

---

### 6. Atualizar subsídio

```graphql
mutation UpdateSubsidyRequest(
  $id: String!
  $data: SubsidyRequestUpdateDto!
  $language: LanguagePreference
) {
  updateSubsidyRequest(id: $id, data: $data, language: $language) {
    id
    description
    total_budget
    request_type
    subsidy_status { id name }
  }
}
```

**Variáveis:**
```json
{
  "id": "uuid-subsidio",
  "data": {
    "description": "Descrição atualizada",
    "total_budget": 1400.00,
    "priority": "HIGH"
  }
}
```

> Não é possível alterar o `request_type` após a criação.

---

### 7. Aprovar subsídio

> Apenas **Gestor Financeiro** pode aprovar.
> Para `WITH_DOCUMENT`: todos os documentos devem estar validados e aprovados antes.
> Para `ADVANCE` e `WITHOUT_DOCUMENT`: aprovação sem validação de documentos.

```graphql
mutation ApproveSubsidyRequest(
  $id: String!
  $approved_amount: Float!
  $language: LanguagePreference
) {
  approveSubsidyRequest(id: $id, approved_amount: $approved_amount, language: $language) {
    id
    approved_amount
    subsidy_status { id name }
  }
}
```

---

### 8. Rejeitar subsídio

```graphql
mutation RejectSubsidyRequest(
  $id: String!
  $rejection_reason: String!
  $language: LanguagePreference
) {
  rejectSubsidyRequest(id: $id, rejection_reason: $rejection_reason, language: $language) {
    id
    rejection_reason
    subsidy_status { id name }
  }
}
```

---

### 9. Upload de comprovante (apenas `WITH_DOCUMENT`)

> Esta operação usa **multipart/form-data** (REST endpoint ou GraphQL Upload).

```graphql
mutation UploadSubsidyReceipt(
  $subsidyRequestId: String!
  $projectActivityId: String!
  $type: String!
  $amount: Float
  $file: Upload!
) {
  uploadSubsidyReceipt(
    subsidyRequestId: $subsidyRequestId
    projectActivityId: $projectActivityId
    type: $type
    amount: $amount
    file: $file
  ) {
    id
    filename
    file_url
    amount
    is_validated
    approved
  }
}
```

> **Erro esperado** para `ADVANCE` e `WITHOUT_DOCUMENT`:
> ```json
> { "errorCode": "RECEIPT_UPLOAD_NOT_ALLOWED_FOR_TYPE" }
> ```

---

### 10. Validar/Aprovar comprovante (apenas `WITH_DOCUMENT`)

```graphql
mutation ValidateSubsidyReceipt($id: String!) {
  validateSubsidyReceipt(id: $id) {
    id
    is_validated
    approved
    validated_at
  }
}
```

---

### 11. Solicitar reembolso

> Aplicável a qualquer tipo após aprovação.

```graphql
mutation RequestSubsidyRefund(
  $id: String!
  $refundAmount: Float!
  $reason: String!
  $language: LanguagePreference
) {
  requestSubsidyRefund(
    id: $id
    refundAmount: $refundAmount
    reason: $reason
    language: $language
  ) {
    id
    refund_amount
    have_refund
    refund_done
    subsidy_status { id name }
  }
}
```

---

### 12. Confirmar reembolso recebido

> Reservado para **Gestor Financeiro** / **Admin**.

```graphql
mutation ConfirmRefundDone($id: String!, $language: LanguagePreference) {
  confirmRefundDone(id: $id, language: $language) {
    id
    refund_done
    have_refund
  }
}
```

---

### 13. Deletar subsídio (soft delete)

```graphql
mutation DeleteSubsidyRequest($id: String!, $language: LanguagePreference) {
  deleteSubsidyRequest(id: $id, language: $language) {
    id
    is_deleted
  }
}
```

> Não é possível deletar subsídios com status `APPROVED` ou `CLOSED`.

---

## Matriz de Permissões por Operação

| Operação | Usuário Comum | Dept. Leader | Gestor Financeiro | Admin |
|---|---|---|---|---|
| Criar (qualquer tipo) | ✅ | ✅ | ✅ | ✅ |
| Listar / Buscar | ✅ | ✅ | ✅ | ✅ |
| Atualizar (PENDING) | ✅ | ✅ | ✅ | ✅ |
| Aprovar | ❌ | ❌ | ✅ | ✅ |
| Rejeitar | ❌ | ❌ | ✅ | ✅ |
| Upload de Comprovante | ✅ | ✅ | ✅ | ✅ |
| Validar Comprovante | ❌ | ❌ | ✅ | ✅ |
| Fechar (CLOSED) | ❌ | ❌ | ✅ | ✅ |
| Deletar | ✅ | ✅ | ✅ | ✅ |
| Confirmar Reembolso | ❌ | ❌ | ✅ | ✅ |

---

## Resumo dos Campos do `SubsidyRequest`

```typescript
interface SubsidyRequest {
  id: string;
  description: string;
  total_budget: number;
  approved_amount: number;
  advance_amount?: number;
  rejection_reason?: string;
  request_type: 'ADVANCE' | 'WITHOUT_DOCUMENT' | 'WITH_DOCUMENT';
  is_for_advance: boolean;           // true quando request_type === ADVANCE
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  refund_amount: number;
  have_refund: boolean;
  refund_done: boolean;
  subsidy_status: { id: string; name: string };
  items: SubsidyRequestItem[];       // vazio para ADVANCE
  subsidy_receipts: SubsidyReceipt[]; // vazio para ADVANCE e WITHOUT_DOCUMENT
  project: { id: string; title: string };
  requester: { id: string; name: string; email: string };
  department: { id: string; name: string };
  institution: { id: string; name: string };
  church?: { id: string; name: string };
}
```

---

## Erros Comuns

| Código de Erro | Descrição |
|---|---|
| `RECEIPT_UPLOAD_NOT_ALLOWED_FOR_TYPE` | Tentativa de upload para `ADVANCE` ou `WITHOUT_DOCUMENT` |
| `ADVANCE_EXCEEDS_LIMIT` | Valor de adiantamento acima de 50% do orçamento subsidiado |
| `ADVANCE_ALREADY_EXISTS` | Projeto já tem um adiantamento ativo |
| `DOCUMENTS_NOT_VALIDATED` | Tentativa de aprovar `WITH_DOCUMENT` com documentos pendentes |
| `DOCUMENTS_REJECTED` | Tentativa de aprovar com documentos rejeitados |
| `STATUS_IS_CLOSED` | Operação em subsídio já fechado |
| `INVALID_TRANSITION_TO_ADVANCED_CLOSED` | Somente `APPROVED` pode ir para `ADVANCED_CLOSED` |
| `ONLY_FINANCIAL_CAN_CLOSE` | Somente gestor financeiro pode fechar |
