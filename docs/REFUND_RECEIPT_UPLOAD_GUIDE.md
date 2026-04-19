# Upload de Comprovante de Reembolso (Refund Receipt)

## Visão Geral

Desde a migration `20260314224829_add_optional_activity_and_refund_flag_to_subsidy_receipt`,
o campo `project_activities_id` em `SubsidyReceipt` é **opcional**. Isso permite registrar
comprovantes de pagamento de reembolso diretamente no `SubsidyRequest`, sem necessitar de
uma `ProjectActivity` vinculada.

O campo `is_refund_receipt: boolean` identifica esses documentos e os distingue dos
comprovantes de atividade normais.

---

## Modelo de dados relevante

```
SubsidyRequest
  ├── have_refund: Boolean         → true após requestSubsidyRefund
  ├── refund_done: Boolean         → true após confirmRefundDone
  ├── refund_amount: Decimal       → valor a devolver
  └── subsidy_receipts: SubsidyReceipt[]
        ├── is_refund_receipt: Boolean   → true = comprovante de reembolso
        ├── project_activities_id: String? → null para comprovantes de reembolso
        ├── is_validated: Boolean        → false ao criar; true após validação ou rejeição
        ├── approved: Boolean            → true = validado; false = rejeitado
        ├── validated_at: DateTime?      → data da decisão
        ├── validated_by: String?        → userId de quem validou/rejeitou
        ├── rejection_reason: String?    → motivo quando rejeitado
        ├── note: String?                → nota livre (uploader ou revisor)
        └── amount: Decimal?             → valor declarado no comprovante
```

---

## Ciclo de vida completo

```
1. requestSubsidyRefund(id, refundAmount, reason)
      SubsidyRequest.have_refund  = true
      SubsidyRequest.refund_amount = refundAmount
      E-mail enviado ao solicitante

2. (Upload do comprovante — ver seção abaixo)
      POST /subsidy-receipts/upload
      is_refund_receipt = true
      project_activity_id = omitido

3. POST /subsidy-receipts/:id/validate
      SubsidyReceipt.is_validated = true
      Histórico registrado

4. confirmRefundDone(id)
      SubsidyRequest.refund_done = true
      Orçamento revertido (spent → allocated)
      E-mail de confirmação enviado ao solicitante
```

---

## Upload do comprovante

### REST — `POST /subsidy-receipts/upload`

Permissão necessária: `uploadSubsidyReceipt`

```
Content-Type: multipart/form-data

file                 = <arquivo PDF ou imagem>   [obrigatório]
subsidy_request_id   = "uuid-do-subsidio"        [obrigatório]
is_refund_receipt    = "true"                    [obrigatório para reembolso]
type                 = "pdf" | "image"           [obrigatório]
amount               = "500.00"                  [opcional — valor do comprovante]
note                 = "Comprovante TED banco X" [opcional — nota do upload]
subsidy_request_item_id = "uuid"                 [opcional]
project_activity_id  = omitir                    [dispensado para reembolso]
```

> O campo `is_refund_receipt` deve ser enviado como **string** `"true"` — o controller converte para boolean.

---

### GraphQL — `mutation uploadSubsidyReceipt`

Permissão necessária: `uploadSubsidyReceipt`

```graphql
mutation UploadRefundReceipt($input: UploadSubsidyReceiptDto!, $file: Upload!) {
  uploadSubsidyReceipt(input: $input, file: $file) {
    id
    filename
    file_url
    is_refund_receipt
    is_validated
    amount
    subsidy_request_id
  }
}
```

**Variáveis:**

```json
{
  "input": {
    "subsidy_request_id": "uuid-do-subsidio",
    "is_refund_receipt": true,
    "type": "pdf",
    "amount": 500.00,
    "note": "Comprovante TED banco X"
  }
}
```

> `project_activity_id` é `nullable` no DTO. Omiti-lo quando `is_refund_receipt = true`.

---

## Validação e Rejeição do comprovante

Após o upload, o gestor financeiro/admin valida ou rejeita o comprovante.
Ambas as ações definem `is_validated = true`; a diferença está em `approved`.

| Campo após ação | Validado | Rejeitado |
|---|---|---|
| `is_validated` | `true` | `true` |
| `approved` | `true` | `false` |
| `validated_by` | userId | userId |
| `validated_at` | agora | agora |
| `rejection_reason` | `null` (limpo) | motivo fornecido |
| `note` | nota opcional | — |

### Validar — REST

```
POST /subsidy-receipts/:id/validate
Content-Type: application/json

{ "note": "Comprovante aceite" }   ← opcional
```

Permissão: `validateSubsidyReceipt`

### Validar — GraphQL

```graphql
mutation ValidateRefundReceipt($id: ID!, $note: String) {
  validateSubsidyReceipt(id: $id, note: $note) {
    id
    is_validated
    approved
    validated_at
    validated_by
    note
  }
}
```

### Rejeitar — REST

```
POST /subsidy-receipts/:id/reject
Content-Type: application/json

{ "reason": "Comprovante ilegível / valor divergente" }
```

Permissão: `validateSubsidyReceipt`

### Rejeitar — GraphQL

```graphql
mutation RejectRefundReceipt($id: ID!, $reason: String) {
  rejectSubsidyReceipt(id: $id, reason: $reason) {
    id
    is_validated
    approved
    validated_at
    validated_by
    rejection_reason
  }
}
```

Efeitos colaterais de ambas as ações:
- Grava entrada de histórico (`DOCUMENT_ACTION`) no `SubsidyStatusHistory`
- Dispara `recalculateStatus` no subsídio correspondente
- No caso de **validação**, limpa `rejection_reason` (caso o comprovante tenha sido previamente rejeitado)

---

## Listagem dos comprovantes de um subsídio

### REST

```
GET /subsidy-receipts/by-request/:subsidyRequestId
GET /subsidy-receipts?subsidy_request_id=<uuid>
```

### GraphQL

```graphql
query GetRefundReceipts($subsidyRequestId: ID!) {
  getSubsidyReceiptsByRequestId(subsidyRequestId: $subsidyRequestId) {
    id
    filename
    file_url
    is_refund_receipt
    is_validated
    validated_at
    amount
    type
    created_at
  }
}
```

> Filtre `is_refund_receipt = true` no frontend para exibir apenas os comprovantes de reembolso.

---

## Download do comprovante

### REST

```
GET /subsidy-receipts/:id/download
```

Responde com o arquivo como `Content-Disposition: attachment`.

### GraphQL

```graphql
query DownloadRefundReceipt($id: ID!) {
  downloadSubsidyReceipt(id: $id)  # retorna Base64
}
```

---

## Deleção

```
DELETE /subsidy-receipts/:id
```

Permissão: `deleteSubsidyReceipt`

- Soft delete no banco
- Arquivo removido do Google Drive
- Histórico registrado (`DOCUMENT_ACTION`)
- Bloqueado se o subsídio estiver com status `CLOSED`

---

## Permissões

| Operação | `key_code` / `resolver_name` |
|---|---|
| Upload | `uploadSubsidyReceipt` |
| Download | `downloadSubsidyReceipt` |
| Deletar | `deleteSubsidyReceipt` |
| Validar | `validateSubsidyReceipt` |
| Rejeitar | `validateSubsidyReceipt` (mesma permissão) |
| Listar | `getSubsidyReceipts` |

---

## Regras de negócio

| Regra | Detalhe |
|---|---|
| Status `CLOSED` | Upload, delete e validação são **bloqueados** |
| `is_refund_receipt = true` | `project_activities_id` deve ser **omitido** |
| `is_refund_receipt = false` | `project_activity_id` é validada no banco antes do upload |
| `is_validated` | Começa sempre `false`; definido para `true` tanto na validação quanto na rejeição |
| `approved` | `true` ao validar; `false` ao rejeitar |
| `rejection_reason` | Persiste no banco no momento da rejeição; zerado quando reaprovado |
| `note` | Campo livre — pode ser preenchido no upload ou na validação |
| Rollback Drive | Se o INSERT no banco falhar após o upload, o arquivo é deletado do Google Drive automaticamente |

---

## Erros tratáveis

| `errorCode` | Status | Quando ocorre |
|---|---|---|
| `STATUS_IS_CLOSED` | 400 | Tentativa de upload/validação em subsídio fechado |
| `NOT_FOUND` (receipt) | 404 | Receipt não encontrado ou soft-deleted |
| `NOT_FOUND` (subsidy) | 404 | `subsidy_request_id` inválido |
| `NOT_FOUND` (activity) | 404 | `project_activity_id` fornecido mas não encontrado |

---

## Onde o comprovante é armazenado no Google Drive

```
Institution > Department > Project > Subsidies > SubsidyRequest_<id> > <filename>
```

A pasta é criada (ou reutilizada) automaticamente pelo service no momento do upload.
