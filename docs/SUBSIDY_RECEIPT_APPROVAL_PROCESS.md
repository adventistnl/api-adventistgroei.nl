# Processo de Aprovação de Comprovantes (Subsidy Receipts)

## Visão Geral

Um comprovante (`SubsidyReceipt`) passa por um ciclo de vida simples de três estados:

```
PENDENTE (is_validated=false, approved=false)
    │
    ├──► APROVADO  (is_validated=true,  approved=true)   ← validateSubsidyReceipt
    │
    └──► REJEITADO (is_validated=true,  approved=false)  ← rejectSubsidyReceipt
```

Após cada aprovação ou rejeição, o sistema recalcula automaticamente o status geral da Solicitação de Subsídio (`SubsidyRequest`) vinculada.

---

## Campos do Modelo `SubsidyReceipt`

| Campo              | Tipo       | Descrição                                                       |
|--------------------|------------|-----------------------------------------------------------------|
| `is_validated`     | `Boolean`  | `false` = pendente; `true` = decisão tomada (aprovado ou rejeit.) |
| `approved`         | `Boolean`  | `true` = aprovado; `false` = rejeitado (só válido quando `is_validated=true`) |
| `validated_at`     | `DateTime` | Timestamp da decisão                                            |
| `validated_by`     | `String`   | ID do usuário que tomou a decisão                               |
| `rejection_reason` | `String?`  | Motivo da rejeição (preenchido somente quando rejeitado)         |
| `note`             | `String?`  | Nota do aprovador (preenchida somente quando aprovado)           |
| `uploaded_by`      | `String`   | ID do usuário que fez o upload                                  |
| `filename`         | `String`   | Nome original do arquivo                                        |
| `file_url`         | `String`   | URL pública no Google Drive                                     |
| `amount`           | `Decimal?` | Valor monetário do comprovante                                  |
| `is_refund_receipt`| `Boolean`  | Indica se é um comprovante de reembolso                         |

---

## Permissões Necessárias

Há **5 permissões** no grupo `SUBSIDY_RECEIPT`. Abaixo a matriz de quais roles possuem cada uma:

| Permission (key_code)       | resolver_name            | ADMIN | FINANCIAL_MANAGER | INSTITUTIONAL_LEADER | INSTITUTIONAL_DEPT_LEADER | PROJECT_OWNER | CHURCH_LEADER | CHURCH_MEMBER |
|-----------------------------|--------------------------|:-----:|:-----------------:|:--------------------:|:-------------------------:|:-------------:|:-------------:|:-------------:|
| `UPLOAD_SUBSIDY_RECEIPT`    | `uploadSubsidyReceipt`   | ✅    | ✅                 | ✅                   | ✅                         | ✅             | ✅             | —             |
| `DOWNLOAD_SUBSIDY_RECEIPT`  | `downloadSubsidyReceipt` | ✅    | ✅                 | ✅                   | ✅                         | ✅             | ✅             | —             |
| `DELETE_SUBSIDY_RECEIPT`    | `deleteSubsidyReceipt`   | ✅    | ✅                 | ✅                   | ✅                         | —              | —              | —             |
| `VALIDATE_SUBSIDY_RECEIPT`  | `validateSubsidyReceipt` | ✅    | ✅                 | ✅                   | —                          | —              | —              | —             |
| `GET_SUBSIDY_RECEIPTS`      | `getSubsidyReceipts`     | ✅    | ✅                 | ✅                   | ✅                         | ✅             | ✅             | —             |

> **Importante:** A mutation `rejectSubsidyReceipt` usa a **mesma permissão** `validateSubsidyReceipt`. Quem pode aprovar pode rejeitar.

### Roles com poder de aprovação/rejeição

- `ADMIN`
- `FINANCIAL_MANAGER`
- `INSTITUTIONAL_LEADER` ← adicionado na migration `20260318000001`

---

## Regras de Negócio

1. **Solicitação CLOSED**: nenhuma ação é permitida (upload, validação, deleção ou rejeição). Retorna erro `STATUS_IS_CLOSED`.
2. **Validação de arquivo**: somente `image/jpeg`, `image/png`, `image/jpg` e `application/pdf` são aceitos, com limite de **10 MB**.
3. **Aprovação limpa rejeição anterior**: ao aprovar um recibo previamente rejeitado, `rejection_reason` é zerado.
4. **Recalculação do status**: após qualquer aprovação ou rejeição, `subsidyRequestService.recalculateStatus()` é chamado automaticamente.
5. **Histórico**: toda ação (upload, validação, rejeição, deleção) gera um registro em `SubsidyStatusHistory` com `type = DOCUMENT_ACTION`.

---

## Mutations GraphQL

### Aprovar comprovante

```graphql
mutation ValidateSubsidyReceipt($id: ID!, $note: String) {
  validateSubsidyReceipt(id: $id, note: $note) {
    id
    filename
    is_validated
    approved
    validated_at
    validated_by
    note
    amount
    file_url
    subsidy_request {
      id
      subsidy_statuses_id
    }
  }
}
```

**Variáveis de exemplo:**
```json
{
  "id": "<receipt-uuid>",
  "note": "Comprovante conferido e aprovado."
}
```

---

### Rejeitar comprovante

```graphql
mutation RejectSubsidyReceipt($id: ID!, $reason: String) {
  rejectSubsidyReceipt(id: $id, reason: $reason) {
    id
    filename
    is_validated
    approved
    validated_at
    validated_by
    rejection_reason
    amount
    file_url
    subsidy_request {
      id
      subsidy_statuses_id
    }
  }
}
```

**Variáveis de exemplo:**
```json
{
  "id": "<receipt-uuid>",
  "reason": "Valor no comprovante não corresponde ao solicitado."
}
```

---

## Queries GraphQL

### Listar comprovantes de uma Solicitação de Subsídio

```graphql
query GetSubsidyReceipts($subsidyRequestId: ID!) {
  getSubsidyReceiptsByRequestId(subsidyRequestId: $subsidyRequestId) {
    id
    filename
    type
    amount
    file_url
    is_refund_receipt
    is_validated
    approved
    validated_at
    validated_by
    rejection_reason
    note
    uploaded_by
    created_at
    project_activity {
      id
      name
    }
    subsidy_request_item {
      id
    }
  }
}
```

### Listar comprovantes por filtro (múltiplos critérios)

```graphql
query GetSubsidyReceiptsFiltered(
  $subsidyRequestId: ID
  $subsidyRequestItemId: ID
  $projectActivityId: ID
) {
  getSubsidyReceipts(input: {
    subsidy_request_id: $subsidyRequestId
    subsidy_request_item_id: $subsidyRequestItemId
    project_activity_id: $projectActivityId
  }) {
    id
    filename
    type
    amount
    file_url
    is_refund_receipt
    is_validated
    approved
    validated_at
    validated_by
    rejection_reason
    note
    uploaded_by
    created_at
  }
}
```

---

## Upload de Comprovante (multipart)

O upload usa `multipart/form-data` via `graphql-upload-minimal`.

```graphql
mutation UploadSubsidyReceipt($input: UploadSubsidyReceiptDto!, $file: Upload!) {
  uploadSubsidyReceipt(input: $input, file: $file) {
    id
    filename
    type
    amount
    file_url
    drive_file_id
    is_validated
    approved
    is_refund_receipt
    created_at
  }
}
```

**Variáveis (via operação multipart):**
```json
{
  "input": {
    "subsidy_request_id": "<uuid>",
    "subsidy_request_item_id": "<uuid>",
    "project_activity_id": "<uuid>",
    "type": "pdf",
    "amount": 150.00,
    "is_refund_receipt": false,
    "note": "Comprovante de pagamento do fornecedor"
  }
}
```

---

## Deletar comprovante

```graphql
mutation DeleteSubsidyReceipt($id: ID!) {
  deleteSubsidyReceipt(id: $id) {
    id
    filename
    is_deleted
    deleted_at
  }
}
```

---

## Download de comprovante (retorna Base64)

```graphql
query DownloadSubsidyReceipt($id: ID!) {
  downloadSubsidyReceipt(id: $id)
}
```

O retorno é uma `String` em **Base64**. O frontend deve decodificar e criar um `Blob` para exibir ou fazer download.

```typescript
// Exemplo no frontend (TypeScript)
const base64 = data.downloadSubsidyReceipt;
const blob = new Blob(
  [Uint8Array.from(atob(base64), c => c.charCodeAt(0))],
  { type: 'application/pdf' } // ou image/jpeg, image/png
);
const url = URL.createObjectURL(blob);
window.open(url);
```

---

## Fluxo Completo (Diagrama de Sequência)

```
Frontend          Resolver               Service               Repository          GoogleDrive / DB
   │                  │                     │                      │                      │
   │─uploadReceipt──► │                     │                      │                      │
   │                  │─uploadReceipt()────►│                      │                      │
   │                  │                     │─validateFile()        │                      │
   │                  │                     │─ensureNotClosed()     │                      │
   │                  │                     │─createOrGetSubsidy    │                      │
   │                  │                     │  Folder()────────────────────────────────────►│
   │                  │                     │─uploadFile()──────────────────────────────────►│
   │                  │                     │─repository.create()──►│                      │
   │                  │                     │─historyRepository     │                      │
   │                  │                     │  .create()───────────►│                      │
   │◄─SubsidyReceipt──│◄────────────────────│                       │                      │
   │                  │                     │                        │                      │
   │─validateReceipt─►│                     │                        │                      │
   │                  │─validateReceipt()──►│                        │                      │
   │                  │                     │─ensureNotClosed()      │                      │
   │                  │                     │─repository             │                      │
   │                  │                     │  .validateReceipt()───►│                      │
   │                  │                     │─historyRepository      │                      │
   │                  │                     │  .create()────────────►│                      │
   │                  │                     │─recalculateStatus()    │                      │
   │◄─SubsidyReceipt──│◄────────────────────│                        │                      │
```
