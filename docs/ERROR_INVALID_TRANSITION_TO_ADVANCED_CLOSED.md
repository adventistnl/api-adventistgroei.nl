# Erro: INVALID_TRANSITION_TO_ADVANCED_CLOSED

## 🔴 Erro Recebido

```json
{
  "message": "errors.invalid_transition_to_advanced_closed",
  "extensions": {
    "code": "BAD_REQUEST",
    "status": 400,
    "errorCode": "INVALID_TRANSITION_TO_ADVANCED_CLOSED"
  }
}
```

## 🔍 Causa do Erro

Você está tentando mudar o status de um SubsidyRequest para `ADVANCED_CLOSED`, mas o status atual **NÃO é `APPROVED`**.

### **Regra de Validação:**

```typescript
// Rule: Only APPROVED can go to ADVANCED_CLOSED
if (to === 'ADVANCED_CLOSED' && from !== 'APPROVED') {
    throw new CustomGraphQLError(
        'errors.invalid_transition_to_advanced_closed',
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'INVALID_TRANSITION_TO_ADVANCED_CLOSED' } }
    );
}
```

**Significa:** Apenas subsídios já aprovados podem ser marcados como `ADVANCED_CLOSED` (adiantamento concluído).

---

## 📊 Status Disponíveis

| Status | Descrição | Order |
|--------|-----------|-------|
| `PENDING` | Aguardando aprovação | 1 |
| `IN_REVIEW` | Em análise | 4 |
| `APPROVED` | Aprovado | 2 |
| `REJECTED` | Rejeitado | 3 |
| `ADVANCED_CLOSED` | Advance payment completed | 6 |
| `WAITING_REFUND` | Waiting for refund processing | 7 |
| `CLOSED` | Encerrado | 5 |

---

## 🔄 Regras de Transição de Status

### **Regra 1: PENDING → IN_REVIEW (Proibido Direto)**
```typescript
// ❌ PROIBIDO
PENDING → CLOSED
```
**Motivo:** Um subsídio pendente não pode ser fechado sem passar por aprovação ou rejeição.

---

### **Regra 2: IN_REVIEW → CLOSED (Proibido Direto)**
```typescript
// ❌ PROIBIDO
IN_REVIEW → CLOSED
```
**Motivo:** Precisa ser aprovado ou rejeitado antes de fechar.

---

### **Regra 3: ADVANCED_CLOSED → [Apenas CLOSED]**
```typescript
// ✅ PERMITIDO
ADVANCED_CLOSED → CLOSED

// ❌ PROIBIDO
ADVANCED_CLOSED → APPROVED
ADVANCED_CLOSED → REJECTED
ADVANCED_CLOSED → qualquer outro
```
**Motivo:** Após o adiantamento ser concluído, só pode ser finalizado.

---

### **Regra 4: APPROVED → [CLOSED ou ADVANCED_CLOSED]**
```typescript
// ✅ PERMITIDO
APPROVED → CLOSED
APPROVED → ADVANCED_CLOSED

// ❌ PROIBIDO
APPROVED → PENDING
APPROVED → IN_REVIEW
APPROVED → REJECTED
```
**Motivo:** Aprovado só pode fechar ou processar adiantamento.

---

### **Regra 5: REJECTED → [Apenas CLOSED]**
```typescript
// ✅ PERMITIDO
REJECTED → CLOSED

// ❌ PROIBIDO
REJECTED → APPROVED
REJECTED → qualquer outro
```
**Motivo:** Rejeitado só pode ser fechado.

---

### **Regra 6: Apenas APPROVED → ADVANCED_CLOSED (SUA ERRO)**
```typescript
// ✅ PERMITIDO
APPROVED → ADVANCED_CLOSED

// ❌ PROIBIDO (ESTE É O SEU ERRO!)
PENDING → ADVANCED_CLOSED
IN_REVIEW → ADVANCED_CLOSED
REJECTED → ADVANCED_CLOSED
CLOSED → ADVANCED_CLOSED
WAITING_REFUND → ADVANCED_CLOSED
```

**Motivo:** `ADVANCED_CLOSED` significa que o adiantamento foi pago. Só faz sentido pagar se já foi aprovado!

---

## ✅ Fluxo Correto para ADVANCED_CLOSED

### **Para Subsídios com Adiantamento:**

```
1. Criar subsidy request com is_for_advance = true
   Status: PENDING

2. Revisar
   Status: PENDING → IN_REVIEW

3. Aprovar
   Status: IN_REVIEW → APPROVED

4. Processar adiantamento (pagar)
   Status: APPROVED → ADVANCED_CLOSED
   
5. Finalizar (após prestação de contas)
   Status: ADVANCED_CLOSED → CLOSED
```

### **Diagrama:**
```
┌──────────┐
│ PENDING  │
└────┬─────┘
     │
     ▼
┌──────────┐
│IN_REVIEW │
└────┬─────┘
     │
     ▼
┌──────────┐      ┌─────────────────┐
│ APPROVED │─────►│ADVANCED_CLOSED  │
└────┬─────┘      └────────┬────────┘
     │                     │
     │                     ▼
     │              ┌───────────┐
     └─────────────►│  CLOSED   │
                    └───────────┘
```

---

## 🛠️ Como Corrigir o Erro

### **Opção 1: Aprovar Primeiro**

Se você quer marcar como `ADVANCED_CLOSED`, primeiro aprove:

```graphql
# 1. Aprovar
mutation ApproveSubsidy {
  approveSubsidyRequest(
    id: "seu-subsidy-id"
    approvedAmount: 1000.00
  ) {
    id
    subsidy_status {
      name
    }
  }
}

# 2. Depois mude para ADVANCED_CLOSED
mutation MarkAdvanceClosed {
  updateSubsidyRequest(
    id: "seu-subsidy-id"
    data: {
      subsidy_status_id: "advanced-closed-status-id"
    }
  ) {
    id
    subsidy_status {
      name
    }
  }
}
```

---

### **Opção 2: Usar Mutation Específica**

Se existe uma mutation para processar adiantamento:

```graphql
mutation CompleteAdvance {
  completeAdvancePayment(
    id: "seu-subsidy-id"
  ) {
    id
    subsidy_status {
      name
    }
    advance_amount
  }
}
```

---

### **Opção 3: Verificar Status Atual**

Antes de atualizar, verifique qual é o status atual:

```graphql
query CheckSubsidyStatus {
  subsidyRequest(id: "seu-subsidy-id") {
    id
    subsidy_status {
      id
      name
      description
    }
    is_for_advance
    advance_amount
  }
}
```

**Se retornar status diferente de `APPROVED`, você precisa aprovar primeiro!**

---

## 🔍 Debug: Como Saber Qual é o Meu Status Atual?

### **No Backend (Service):**
```typescript
const subsidy = await this.subsidyRequestRepository.findById(id);
console.log('Current status:', subsidy?.subsidy_status?.name);
```

### **No Frontend:**
```graphql
query GetSubsidyWithStatus($id: String!) {
  subsidyRequest(id: $id) {
    id
    description
    subsidy_status {
      name  # ← Verifique este campo
    }
  }
}
```

**Exemplo de retorno:**
```json
{
  "data": {
    "subsidyRequest": {
      "id": "123",
      "description": "Materials for project",
      "subsidy_status": {
        "name": "PENDING"  // ← Você está em PENDING, não pode ir direto para ADVANCED_CLOSED!
      }
    }
  }
}
```

---

## 📋 Checklist de Resolução

- [ ] **Verificar status atual** - Query para ver qual status está agora
- [ ] **Verificar se é adiantamento** - `is_for_advance = true`?
- [ ] **Status é APPROVED?** - Se não, aprovar primeiro
- [ ] **Aprovar subsídio** - Usar `approveSubsidyRequest` mutation
- [ ] **Aguardar aprovação** - Status mudará para APPROVED
- [ ] **Então mudar para ADVANCED_CLOSED** - Agora sim pode usar esta transição
- [ ] **Finalizar com CLOSED** - Quando prestação de contas estiver pronta

---

## 💡 Resumo

### **O que deu errado:**
Você tentou ir de `STATUS_ATUAL` → `ADVANCED_CLOSED`, mas o `STATUS_ATUAL` não era `APPROVED`.

### **O que fazer:**
1. Verificar qual é o status atual
2. Se não for `APPROVED`, aprovar primeiro usando `approveSubsidyRequest`
3. Depois que estiver `APPROVED`, aí sim pode mudar para `ADVANCED_CLOSED`

### **Por que essa regra existe:**
`ADVANCED_CLOSED` significa "adiantamento foi pago". Não faz sentido pagar um adiantamento que ainda não foi aprovado! Precisa aprovar → depois pagar → depois marcar como `ADVANCED_CLOSED`.

---

## 🚀 Exemplo Completo de Fluxo

### **Frontend/GraphQL:**

```graphql
# Passo 1: Criar subsidy request com adiantamento
mutation CreateAdvanceRequest {
  createAdvanceRequest(
    projectId: "project-123"
    advanceAmount: 500.00
  ) {
    id
    subsidy_status {
      name  # PENDING
    }
  }
}

# Passo 2: Aprovar (apenas FINANCIAL_MANAGER)
mutation ApproveAdvance {
  approveSubsidyRequest(
    id: "subsidy-123"
    approvedAmount: 500.00
  ) {
    id
    subsidy_status {
      name  # APPROVED ✅
    }
  }
}

# Passo 3: Marcar como pago (ADVANCED_CLOSED)
mutation MarkAsPaid {
  updateSubsidyRequest(
    id: "subsidy-123"
    data: {
      subsidy_status_id: "advanced-closed-status-id"
    }
  ) {
    id
    subsidy_status {
      name  # ADVANCED_CLOSED ✅
    }
  }
}

# Passo 4: Após prestação de contas, fechar
mutation CloseAdvance {
  updateSubsidyRequest(
    id: "subsidy-123"
    data: {
      subsidy_status_id: "closed-status-id"
    }
  ) {
    id
    subsidy_status {
      name  # CLOSED ✅
    }
  }
}
```

---

A regra protege a integridade do sistema: **só pode marcar um adiantamento como concluído se ele já foi aprovado primeiro**! 🔐

