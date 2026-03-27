# Subsidy Request — Guia CRUD para o Frontend

## Índice

1. [Visão Geral dos Tipos de Subsídio](#1-visão-geral-dos-tipos-de-subsídio)
2. [Autenticação](#2-autenticação)
3. [Matriz de Permissões](#3-matriz-de-permissões)
4. [Mutations — Criação](#4-mutations--criação)
   - [WITH_DOCUMENT](#41-createsubsidyrequest--with_document)
   - [WITHOUT_DOCUMENT](#42-createsubsidyrequest--without_document)
   - [ADVANCE](#43-createadvancerequest--advance)
5. [Mutations — Atualização e Exclusão](#5-mutations--atualização-e-exclusão)
6. [Mutations — Aprovação e Rejeição](#6-mutations--aprovação-e-rejeição)
7. [Mutations — Reembolso](#7-mutations--reembolso)
8. [Queries](#8-queries)
9. [Upload de Comprovantes (Receipts)](#9-upload-de-comprovantes-receipts)
10. [Histórico de Status](#10-histórico-de-status)
11. [Códigos de Erro e Ações Recomendadas](#11-códigos-de-erro-e-ações-recomendadas)
12. [Fluxo típico por tipo de subsídio](#12-fluxo-típico-por-tipo-de-subsídio)

---

## 1. Visão Geral dos Tipos de Subsídio

| Tipo              | Description                                                       | Mutation de criação          |
|-------------------|-------------------------------------------------------------------|------------------------------|
| `WITH_DOCUMENT`   | Subsídio com comprovante anexado (receipt) por atividade          | `createSubsidyRequest`       |
| `WITHOUT_DOCUMENT`| Subsídio sem comprovante inicial (para casos especiais pré-aprovados) | `createSubsidyRequest`   |
| `ADVANCE`         | Adiantamento financeiro vinculado a um projeto                    | `createAdvanceRequest`       |

> **Nota:** As mutations `createSubsidyRequest` (para `WITH_DOCUMENT` e `WITHOUT_DOCUMENT`) e `createAdvanceRequest` (para `ADVANCE`) são independentes. Use o campo `request_type` para diferenciar os dois primeiros.

---

## 2. Autenticação

Todas as mutations e queries requerem o header `Authorization: Bearer <token>`.

```graphql
mutation Login($input: LoginInput!) {
  login(input: $input) {
    accessToken
    expiresIn
    user {
      id
      name
      email
    }
  }
}
```

**Variáveis:**
```json
{
  "input": {
    "email": "usuario@mail.com",
    "password": "senha123"
  }
}
```

---

## 3. Matriz de Permissões

### Criação de subsídios

| Role                        | WITH_DOCUMENT | WITHOUT_DOCUMENT | ADVANCE |
|-----------------------------|:-------------:|:----------------:|:-------:|
| DEV                         | ✅             | ✅                | ✅       |
| ADMIN                       | ✅             | ✅                | ✅       |
| PROJECT_OWNER               | ✅             | ✅                | ✅       |
| CHURCH_LEADER               | ✅             | ✅                | ✅       |
| INSTITUTIONAL_LEADER        | ✅             | ✅                | ✅       |
| INSTITUTIONAL_DEPT_LEADER   | ✅             | ✅                | ✅       |
| CHURCH_DEPT_LEADER          | ✅             | ✅                | ✅       |
| FINANCIAL_MANAGER           | ❌             | ❌                | ❌       |
| CHURCH_MEMBER               | ❌             | ❌                | ❌       |

### Aprovação / Rejeição

| Role                        | Aprovar | Rejeitar |
|-----------------------------|:-------:|:--------:|
| DEV                         | ✅       | ✅        |
| ADMIN                       | ✅       | ✅        |
| FINANCIAL_MANAGER           | ✅       | ✅        |
| PROJECT_OWNER               | ❌       | ❌        |
| CHURCH_MEMBER               | ❌       | ❌        |

### Upload de comprovantes (receipts)

> Todos os tipos de pedido (`WITH_DOCUMENT`, `WITHOUT_DOCUMENT`, `ADVANCE`) aceitam comprovantes.
> Cada pedido pode ter múltiplos comprovantes. O único bloqueio é status `CLOSED`.

| Role                        | Upload | Validar | Excluir |
|-----------------------------|:------:|:-------:|:-------:|
| DEV                         | ✅      | ✅       | ✅       |
| ADMIN                       | ✅      | ✅       | ✅       |
| PROJECT_OWNER               | ✅      | ❌       | ✅       |
| FINANCIAL_MANAGER           | ✅      | ✅       | ✅       |
| CHURCH_MEMBER               | ❌      | ❌       | ❌       |

---

## 4. Mutations — Criação

### 4.1 `createSubsidyRequest` — WITH_DOCUMENT

Cria um pedido de subsídio com comprovantes por atividade.

```graphql
mutation CreateSubsidyWithDocument($data: SubsidyRequestCreateDto!, $language: LanguagePreference) {
  createSubsidyRequest(data: $data, language: $language) {
    id
    description
    total_budget
    request_type
    priority
    created_at
    project {
      id
      title
    }
    subsidy_status {
      id
      name
    }
    requester {
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

**Variáveis:**
```json
{
  "language": "en",
  "data": {
    "description": "Pedido de subsídio para equipamentos de som",
    "total_budget": 1600.00,
    "project_id": "uuid-do-projeto",
    "department_id": "uuid-do-departamento",
    "requester_id": "uuid-do-usuário-solicitante",
    "institution_id": "uuid-da-instituição",
    "church_id": null,
    "request_type": "WITH_DOCUMENT",
    "notes": "Observações opcionais",
    "items": [
      {
        "project_activity_id": "uuid-da-atividade",
        "requested_amount": 1600.00,
        "notes": "Item de som",
        "linked_activity_document_ids": ["uuid-doc-1"],
        "linked_document_amounts": [1600.00]
      }
    ]
  }
}
```

**Campos do DTO `SubsidyRequestCreateDto`:**

| Campo                      | Tipo                    | Obrigatório | Descrição                                                  |
|----------------------------|-------------------------|:-----------:|------------------------------------------------------------|
| `description`              | `String`                | ✅           | Descrição do pedido de subsídio                            |
| `total_budget`             | `Float`                 | ✅           | Valor total solicitado                                     |
| `project_id`               | `String`                | ✅           | ID do projeto vinculado                                    |
| `department_id`            | `String`                | ✅           | ID do departamento                                         |
| `requester_id`             | `String`                | ✅           | ID do usuário solicitante                                  |
| `institution_id`           | `String`                | ❌           | ID da instituição (opcional, inferido do contexto)         |
| `church_id`                | `String`                | ❌           | ID da igreja (quando aplicável)                            |
| `subsidy_status_id`        | `String`                | ❌           | ID do status inicial (usa o padrão se omitido)             |
| `request_type`             | `SubsidyRequestType`    | ❌           | `WITH_DOCUMENT` (padrão) ou `WITHOUT_DOCUMENT`             |
| `notes`                    | `String`                | ❌           | Notas adicionais                                           |
| `is_for_advance`           | `Boolean`               | ❌           | Indicar se é adiantamento (use `createAdvanceRequest`)     |
| `advance_amount`           | `Float`                 | ❌           | Valor do adiantamento (use `createAdvanceRequest`)         |
| `items`                    | `[SubsidyRequestItemInput!]` | ❌      | Lista de itens vinculados a atividades                     |

**Campos de `SubsidyRequestItemInput`:**

| Campo                          | Tipo         | Obrigatório | Descrição                                          |
|--------------------------------|--------------|:-----------:|----------------------------------------------------|
| `project_activity_id`          | `String`     | ✅           | ID da atividade do projeto                         |
| `requested_amount`             | `Float`      | ✅           | Valor solicitado para esta atividade                |
| `notes`                        | `String`     | ❌           | Notas do item                                      |
| `linked_activity_document_ids` | `[String!]`  | ❌           | IDs de documentos já enviados (receipts)           |
| `linked_document_amounts`      | `[Float!]`   | ❌           | Valores correspondentes a cada documento vinculado  |

---

### 4.2 `createSubsidyRequest` — WITHOUT_DOCUMENT

Usa a **mesma mutation** que WITH_DOCUMENT, apenas mudando `request_type` para `WITHOUT_DOCUMENT`.

```graphql
mutation CreateSubsidyWithoutDocument($data: SubsidyRequestCreateDto!, $language: LanguagePreference) {
  createSubsidyRequest(data: $data, language: $language) {
    id
    description
    total_budget
    request_type
    created_at
    subsidy_status {
      id
      name
    }
  }
}
```

**Variáveis:**
```json
{
  "language": "en",
  "data": {
    "description": "Pedido sem comprovante para material emergencial",
    "total_budget": 800.00,
    "project_id": "uuid-do-projeto",
    "department_id": "uuid-do-departamento",
    "requester_id": "uuid-do-usuário-solicitante",
    "request_type": "WITHOUT_DOCUMENT",
    "notes": "Comprovante será enviado posteriormente",
    "items": [
      {
        "project_activity_id": "uuid-da-atividade",
        "requested_amount": 800.00
      }
    ]
  }
}
```

> **Diferença em relação a WITH_DOCUMENT:** Apenas `request_type: "WITHOUT_DOCUMENT"`. Não é necessário enviar `linked_activity_document_ids`.

---

### 4.3 `createAdvanceRequest` — ADVANCE

Mutation específica para adiantamentos financeiros. Usa argumentos diretos ao invés de DTO.

```graphql
mutation CreateAdvanceRequest($projectId: String!, $advanceAmount: Float!, $language: LanguagePreference) {
  createAdvanceRequest(projectId: $projectId, advanceAmount: $advanceAmount, language: $language) {
    id
    description
    total_budget
    advance_amount
    is_for_advance
    request_type
    created_at
    project {
      id
      title
    }
    subsidy_status {
      id
      name
    }
  }
}
```

**Variáveis:**
```json
{
  "projectId": "uuid-do-projeto",
  "advanceAmount": 5000.00,
  "language": "en"
}
```

**Parâmetros:**

| Parâmetro       | Tipo       | Obrigatório | Descrição                        |
|-----------------|------------|:-----------:|----------------------------------|
| `projectId`     | `String`   | ✅           | ID do projeto para o adiantamento |
| `advanceAmount` | `Float`    | ✅           | Valor do adiantamento             |
| `language`      | `LanguagePreference` | ❌ | Idioma para notificações (`en` ou `nl`) |

> **Nota:** Um projeto pode ter apenas **um** adiantamento ativo. Se já existir um, o backend retornará erro de negócio.

---

## 5. Mutations — Atualização e Exclusão

### Atualizar

```graphql
mutation UpdateSubsidyRequest($id: String!, $data: SubsidyRequestUpdateDto!, $language: LanguagePreference) {
  updateSubsidyRequest(id: $id, data: $data, language: $language) {
    id
    description
    total_budget
    notes
    updated_at
  }
}
```

**Variáveis:**
```json
{
  "id": "uuid-do-subsídio",
  "language": "en",
  "data": {
    "description": "Descrição atualizada",
    "total_budget": 1800.00,
    "notes": "Notas atualizadas"
  }
}
```

**Campos atualizáveis (`SubsidyRequestUpdateDto`):**

| Campo                | Tipo                   | Descrição                               |
|----------------------|------------------------|-----------------------------------------|
| `description`        | `String`               | Nova descrição                          |
| `total_budget`       | `Float`                | Novo valor total                        |
| `institution_id`     | `String`               | ID da instituição                       |
| `requester_id`       | `String`               | ID do solicitante                       |
| `department_id`      | `String`               | ID do departamento                      |
| `church_id`          | `String`               | ID da igreja                            |
| `subsidy_status_id`  | `String`               | Novo status                             |
| `items`              | `[SubsidyRequestItemInput!]` | Novos itens de atividades          |
| `approved_amount`    | `Float`                | Valor aprovado                          |
| `rejection_reason`   | `String`               | Motivo de rejeição                      |
| `notes`              | `String`               | Novas notas                             |
| `priority`           | `SubsidyRequestPriority` | `LOW`, `MEDIUM`, `HIGH`               |

### Excluir (soft delete)

```graphql
mutation DeleteSubsidyRequest($id: String!, $language: LanguagePreference) {
  deleteSubsidyRequest(id: $id, language: $language) {
    id
    is_deleted
  }
}
```

---

## 6. Mutations — Aprovação e Rejeição

### Aprovar

```graphql
mutation ApproveSubsidyRequest($id: String!, $approvedAmount: Float!, $language: LanguagePreference) {
  approveSubsidyRequest(id: $id, approved_amount: $approvedAmount, language: $language) {
    id
    approved_amount
    approved_at
    approved_by
    subsidy_status {
      id
      name
    }
  }
}
```

**Variáveis:**
```json
{
  "id": "uuid-do-subsídio",
  "approvedAmount": 1500.00,
  "language": "en"
}
```

### Rejeitar

```graphql
mutation RejectSubsidyRequest($id: String!, $rejectionReason: String!, $language: LanguagePreference) {
  rejectSubsidyRequest(id: $id, rejection_reason: $rejectionReason, language: $language) {
    id
    rejection_reason
    subsidy_status {
      id
      name
    }
  }
}
```

**Variáveis:**
```json
{
  "id": "uuid-do-subsídio",
  "rejectionReason": "Documentação insuficiente para o valor solicitado.",
  "language": "en"
}
```

---

## 7. Mutations — Reembolso

### Solicitar reembolso

```graphql
mutation RequestSubsidyRefund($id: String!, $refundAmount: Float!, $reason: String!, $language: LanguagePreference) {
  requestSubsidyRefund(id: $id, refundAmount: $refundAmount, reason: $reason, language: $language) {
    id
    have_refund
    refund_amount
    refund_done
  }
}
```

### Confirmar reembolso recebido

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

## 8. Queries

### Listar subsídios de um projeto

```graphql
query SubsidyRequests($projectId: String) {
  subsidyRequests(project_id: $projectId) {
    id
    description
    total_budget
    approved_amount
    request_type
    priority
    is_for_advance
    have_refund
    refund_done
    created_at
    updated_at
    requester {
      id
      name
      email
    }
    subsidy_status {
      id
      name
      order
    }
    items {
      id
      project_activity_id
      requested_amount
      approved_amount
      project_activity {
        id
        name
      }
    }
    _count {
      items
      subsidy_receipts
    }
  }
}
```

**Variáveis:**
```json
{
  "projectId": "uuid-do-projeto"
}
```

> Omitir `project_id` retorna **todos** os subsídios da instituição do usuário autenticado.

### Buscar subsídio por ID

```graphql
query SubsidyRequest($id: String!) {
  subsidyRequest(id: $id) {
    id
    description
    total_budget
    approved_amount
    rejection_reason
    advance_amount
    is_for_advance
    have_refund
    refund_amount
    refund_done
    request_type
    priority
    created_at
    updated_at
    approved_at
    requester {
      id
      name
      email
    }
    department {
      id
      name
    }
    project {
      id
      title
    }
    subsidy_status {
      id
      name
      description
      order
    }
    items {
      id
      requested_amount
      approved_amount
      notes
      project_activity {
        id
        name
        budget_amount
      }
      subsidy_receipts {
        id
        filename
        type
        amount
        approved
        is_validated
      }
    }
    status_history {
      id
      type
      reason
      changed_at
      user {
        id
        name
      }
      status {
        id
        name
      }
    }
    _count {
      items
      subsidy_receipts
      status_history
    }
  }
}
```

### Listar subsídios aguardando reembolso

```graphql
query GetSubsidiesWaitingRefund($institutionId: String) {
  getSubsidiesWaitingRefund(institutionId: $institutionId) {
    id
    description
    total_budget
    refund_amount
    have_refund
    refund_done
    requester {
      id
      name
    }
    project {
      id
      title
    }
  }
}
```

### KPIs de subsídios

```graphql
query SubsidyKPIs($institutionId: String) {
  subsidyKPIs(institutionId: $institutionId) {
    totalRequests
    pendingRequests
    inReviewRequests
    approvedRequests
    rejectedRequests
    closedRequests
    totalRequested
    totalApproved
    approvalRate
  }
}
```

---

## 9. Upload de Comprovantes (Receipts)

O upload de comprovantes usa **multipart/form-data** (não JSON puro). O campo `file` é do tipo `Upload` (GraphQL Upload scalar).

### Fazer upload

```graphql
mutation UploadSubsidyReceipt($input: UploadSubsidyReceiptDto!, $file: Upload!) {
  uploadSubsidyReceipt(input: $input, file: $file) {
    id
    filename
    type
    amount
    file_url
    approved
    is_validated
    uploaded_by
    created_at
  }
}
```

**Campo `UploadSubsidyReceiptDto`** (enviado como `variables.input`):

| Campo                    | Tipo     | Obrigatório | Descrição                                      |
|--------------------------|----------|:-----------:|------------------------------------------------|
| `project_activities_id`  | `String` | ✅           | ID da atividade do projeto                     |
| `subsidy_request_id`     | `String` | ❌           | ID do pedido de subsídio (se já criado)        |
| `subsidy_request_item_id`| `String` | ❌           | ID do item do pedido (se já criado)            |
| `type`                   | `String` | ✅           | Tipo do arquivo (ex.: `invoice`, `receipt`)     |
| `amount`                 | `Float`  | ❌           | Valor do comprovante                           |

**Exemplo de requisição (fetch com FormData):**
```typescript
const operations = JSON.stringify({
  query: `mutation UploadSubsidyReceipt($input: UploadSubsidyReceiptDto!, $file: Upload!) {
    uploadSubsidyReceipt(input: $input, file: $file) {
      id filename file_url amount
    }
  }`,
  variables: {
    input: {
      project_activities_id: 'uuid-da-atividade',
      subsidy_request_id: 'uuid-do-subsídio',
      type: 'invoice',
      amount: 1600,
    },
    file: null,
  },
});

const map = JSON.stringify({ '0': ['variables.file'] });

const formData = new FormData();
formData.append('operations', operations);
formData.append('map', map);
formData.append('0', file); // o File/Blob do input

const response = await fetch('http://localhost:3008/graphql', {
  method: 'POST',
  headers: { Authorization: `Bearer ${token}` },
  body: formData,
});
```

### Validar comprovante

```graphql
mutation ValidateSubsidyReceipt($id: ID!) {
  validateSubsidyReceipt(id: $id) {
    id
    is_validated
    validated_at
  }
}
```

### Excluir comprovante

```graphql
mutation DeleteSubsidyReceipt($id: ID!) {
  deleteSubsidyReceipt(id: $id) {
    id
    is_deleted
  }
}
```

### Baixar comprovante (retorna URL assinada)

```graphql
query DownloadSubsidyReceipt($id: ID!) {
  downloadSubsidyReceipt(id: $id)
}
```

### Listar comprovantes

```graphql
query GetSubsidyReceipts($input: GetSubsidyReceiptsDto!) {
  getSubsidyReceipts(input: $input) {
    id
    filename
    type
    amount
    file_url
    approved
    is_validated
    validated_at
    uploaded_by
    created_at
  }
}
```

**Campos de `GetSubsidyReceiptsDto`** (ao menos um deve ser informado):

| Campo                      | Tipo     | Descrição                                      |
|----------------------------|----------|------------------------------------------------|
| `subsidy_request_id`       | `String` | Todos os comprovantes de um pedido             |
| `subsidy_request_item_id`  | `String` | Comprovantes de um item específico             |
| `project_activity_id`      | `String` | Todos os comprovantes de uma atividade         |

---

## 10. Histórico de Status

### Buscar histórico

```graphql
query GetSubsidyStatusHistory($subsidyRequestId: String!) {
  getSubsidyStatusHistory(subsidyRequestId: $subsidyRequestId) {
    id
    type
    reason
    changed_at
    user {
      id
      name
    }
    status {
      id
      name
    }
    previous_status {
      id
      name
    }
  }
}
```

### Adicionar mensagem/comentário

```graphql
mutation AddSubsidyMessage($id: String!, $message: String!, $language: LanguagePreference) {
  addSubsidyRequestMessage(id: $id, message: $message, language: $language) {
    id
    type
    reason
    changed_at
    user {
      id
      name
    }
  }
}
```

---

## 11. Códigos de Erro e Ações Recomendadas

| Mensagem de erro (parcial)                          | Causa                                               | Ação no frontend                                               |
|-----------------------------------------------------|-----------------------------------------------------|----------------------------------------------------------------|
| `User does not have permission to access this resource` | Role sem permissão para a operação             | Ocultar o botão/formulário ou exibir mensagem de acesso negado |
| `Unauthorized`                                      | Token JWT inválido ou expirado                       | Redirecionar para login                                        |
| `Field "description" of required type "String!" was not provided` | Campo obrigatório ausente no payload   | Validar o formulário antes de enviar                           |
| `Activities already have a pending subsidy request` | Já existe pedido ativo para a atividade              | Exibir aviso e listar pedido existente                         |
| `Project already has an active advance request`     | Já existe adiantamento ativo para o projeto          | Exibir pedido existente e desabilitar novo adiantamento        |
| `Subsidy request not found`                         | ID inválido ou pedido excluído                       | Redirecionar para lista de pedidos                             |
| `Cannot transition to status`                       | Transição de status inválida (fluxo de estados)      | Recarregar o pedido para obter o status atual correto          |
| `File too large` / `Invalid file type`              | Upload de arquivo com problema                       | Validar tamanho (<10MB) e tipo (PDF, JPG, PNG) antes do upload |

---

## 12. Fluxo Típico por Tipo de Subsídio

### WITH_DOCUMENT

```
1. Usuário seleciona projeto e atividades
2. Faz upload dos comprovantes por atividade
   → uploadSubsidyReceipt (retorna IDs dos receipts)
3. Cria o pedido vinculando os IDs dos comprovantes
   → createSubsidyRequest com request_type: WITH_DOCUMENT
      e linked_activity_document_ids: [id_receipt_1, ...]
4. Pedido entra no fluxo de aprovação
5. Aprovador revisa e aprova/rejeita
   → approveSubsidyRequest / rejectSubsidyRequest
```

### WITHOUT_DOCUMENT

```
1. Usuário seleciona projeto e atividades
2. Cria o pedido sem comprovantes obrigatórios
   → createSubsidyRequest com request_type: WITHOUT_DOCUMENT
3. Comprovantes podem ser enviados a qualquer momento (antes ou após aprovação)
   → uploadSubsidyReceipt vinculando ao subsidy_request_id
4. Pedido entra no fluxo de aprovação
5. Aprovador revisa e aprova/rejeita
   → approveSubsidyRequest / rejectSubsidyRequest
6. Se necessário, solicitar reembolso
   → requestSubsidyRefund / confirmRefundDone
```

### ADVANCE

```
1. Usuário solicita adiantamento para o projeto
   → createAdvanceRequest(projectId, advanceAmount)
2. Pedido entra no fluxo de aprovação
3. Aprovador revisa e aprova/rejeita
   → approveSubsidyRequest / rejectSubsidyRequest
4. Após utilização dos recursos, usuário envia comprovantes de gastos
   → uploadSubsidyReceipt vinculando ao subsidy_request_id
5. Se houver saldo a devolver, solicitar reembolso
   → requestSubsidyRefund / confirmRefundDone
```

---

## Enums relevantes

```typescript
enum SubsidyRequestType {
  ADVANCE         // Adiantamento
  WITHOUT_DOCUMENT // Sem comprovante
  WITH_DOCUMENT   // Com comprovante
}

enum SubsidyRequestPriority {
  LOW
  MEDIUM
  HIGH
}

enum LanguagePreference {
  en  // English (padrão)
  nl  // Nederlands
}
```
