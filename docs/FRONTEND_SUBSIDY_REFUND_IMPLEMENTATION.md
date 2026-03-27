# Frontend — Solicitação de Reembolso (Refund) de Subsídio

## Visão Geral

O fluxo de reembolso permite que o responsável pelo projeto solicite a devolução de valores
de um subsídio após sua conclusão. O processamento final é confirmado pelo gestor financeiro.

| Etapa | Ação | Quem executa |
|---|---|---|
| 1 | Solicitar reembolso | Project Owner / Dept. Leader |
| 2 | Confirmar que recebeu | Gestor Financeiro / Admin |
| 3 | Listar subsidios aguardando | Gestor Financeiro / Admin |

---

---

## Campos relevantes no `SubsidyRequest`

```typescript
interface SubsidyRequest {
  id: string;
  description: string;
  total_budget: number;       // valor original solicitado
  approved_amount: number;    // valor aprovado pelo financeiro
  refund_amount: number;      // valor a ser reembolsado (0 por padrão)
  have_refund: boolean;       // true = reembolso solicitado
  refund_done: boolean;       // true = reembolso já foi processado
  subsidy_status: { id: string; name: string };
  requester: { id: string; name: string; email: string };
  project: { id: string; title: string };
}
```

---

## GraphQL — Operações de Refund

### 1. Solicitar reembolso

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
    description
    refund_amount
    have_refund
    refund_done
    subsidy_status { id name }
    requester { id name email }
    project { id title }
  }
}
```

**Variáveis:**
```json
{
  "id": "uuid-do-subsidio",
  "refundAmount": 500.00,
  "reason": "Valor não utilizado na execução do projeto.",
  "language": "nl"
}
```

> `language` aceita `"en"` ou `"nl"`. Se omitido, padrão é `"en"`.
> O backend envia um e-mail de notificação ao solicitante automaticamente.

---

### 2. Confirmar que recebeu o reembolso

> Reservado para **Gestor Financeiro** / **Admin**.

```graphql
mutation ConfirmRefundDone($id: String!, $language: LanguagePreference) {
  confirmRefundDone(id: $id, language: $language) {
    id
    description
    refund_amount
    have_refund
    refund_done
    subsidy_status { id name }
  }
}
```

**Variáveis:**
```json
{
  "id": "uuid-do-subsidio",
  "language": "nl"
}
```

> O backend reverte o valor de `refund_amount` do orçamento (de *spent* para *allocated*) e envia e-mail ao solicitante.

---

### 3. Listar subsídios aguardando reembolso

> Reservado para **Gestor Financeiro** / **Admin**.

```graphql
query GetSubsidiesWaitingRefund($institutionId: String) {
  getSubsidiesWaitingRefund(institutionId: $institutionId) {
    id
    description
    refund_amount
    have_refund
    refund_done
    created_at
    subsidy_status { id name }
    requester { id name email }
    department { id name }
    church { id name }
    project { id title }
  }
}
```

**Variáveis (opcional filtrar por instituição):**
```json
{ "institutionId": "uuid-da-instituicao" }
```

---

## Permissões necessárias

| Operação | `key_code` |
|---|---|
| Solicitar reembolso | `REQUEST_SUBSIDY_REFUND` |
| Confirmar reembolso | `CONFIRM_REFUND_DONE` |
| Listar aguardando | `GET_SUBSIDIES_WAITING_REFUND` |

**Roles com permissão por padrão:**

| Role | Solicitar | Confirmar | Listar |
|---|---|---|---|
| Admin | ✅ | ✅ | ✅ |
| Institutional Leader | - | - | - |
| Institutional Department Leader | ✅ | ✅ | ✅ |
| Church Department Leader | - | - | - |
| Project Owner | ✅ | - | ✅ |
| Financial Manager | - | ✅ | ✅ |

---

## Erros tratáveis

| `errorCode` | Status | Descrição |
|---|---|---|
| `REFUND_AMOUNT_INVALID` | 400 | `refundAmount` ≤ 0 |
| `NO_REFUND_REQUESTED` | 400 | Tentativa de confirmar sem ter solicitado antes |
| `REFUND_ALREADY_DONE` | 400 | Reembolso já foi confirmado |

---

## Hook React — `useSubsidyRefund`

```typescript
import { gql, useMutation, useQuery } from '@apollo/client';

// ─── Fragments ────────────────────────────────────────────────────────────────
const REFUND_FIELDS = gql`
  fragment RefundFields on SubsidyRequest {
    id
    description
    refund_amount
    have_refund
    refund_done
    subsidy_status { id name }
    requester { id name email }
    project { id title }
  }
`;

// ─── Operations ───────────────────────────────────────────────────────────────
const REQUEST_REFUND = gql`
  ${REFUND_FIELDS}
  mutation RequestSubsidyRefund(
    $id: String!
    $refundAmount: Float!
    $reason: String!
    $language: LanguagePreference
  ) {
    requestSubsidyRefund(id: $id, refundAmount: $refundAmount, reason: $reason, language: $language) {
      ...RefundFields
    }
  }
`;

const CONFIRM_REFUND = gql`
  ${REFUND_FIELDS}
  mutation ConfirmRefundDone($id: String!, $language: LanguagePreference) {
    confirmRefundDone(id: $id, language: $language) {
      ...RefundFields
    }
  }
`;

const GET_WAITING_REFUND = gql`
  ${REFUND_FIELDS}
  query GetSubsidiesWaitingRefund($institutionId: String) {
    getSubsidiesWaitingRefund(institutionId: $institutionId) {
      ...RefundFields
      created_at
      department { id name }
      church { id name }
    }
  }
`;

// ─── Hook: Solicitar reembolso ─────────────────────────────────────────────────
export function useRequestRefund() {
  const [mutate, { loading, error }] = useMutation(REQUEST_REFUND, {
    update(cache, { data }) {
      const updated = data?.requestSubsidyRefund;
      if (!updated) return;
      cache.modify({
        id: cache.identify({ __typename: 'SubsidyRequest', id: updated.id }),
        fields: {
          have_refund: () => updated.have_refund,
          refund_amount: () => updated.refund_amount,
        },
      });
    },
  });

  const requestRefund = (
    subsidyId: string,
    refundAmount: number,
    reason: string,
    language = 'nl'
  ) =>
    mutate({
      variables: { id: subsidyId, refundAmount, reason, language },
    });

  return { requestRefund, loading, error };
}

// ─── Hook: Confirmar reembolso ─────────────────────────────────────────────────
export function useConfirmRefund() {
  const [mutate, { loading, error }] = useMutation(CONFIRM_REFUND, {
    update(cache, { data }) {
      const updated = data?.confirmRefundDone;
      if (!updated) return;
      cache.modify({
        id: cache.identify({ __typename: 'SubsidyRequest', id: updated.id }),
        fields: {
          refund_done: () => updated.refund_done,
        },
      });
    },
  });

  const confirmRefund = (subsidyId: string, language = 'nl') =>
    mutate({ variables: { id: subsidyId, language } });

  return { confirmRefund, loading, error };
}

// ─── Hook: Listar aguardando reembolso ────────────────────────────────────────
export function useSubsidiesWaitingRefund(institutionId?: string) {
  const { data, loading, error } = useQuery(GET_WAITING_REFUND, {
    variables: { institutionId },
  });

  return {
    subsidies: data?.getSubsidiesWaitingRefund ?? [],
    loading,
    error,
  };
}
```

---

## Componente de exemplo — `RefundRequestButton.tsx`

```tsx
import { useState } from 'react';
import { useRequestRefund } from './use-subsidy-refund';

interface Props {
  subsidyId: string;
  statusName: string;
  haveRefund: boolean;
  refundDone: boolean;
  /** Língua do utilizador ('nl' | 'en') */
  language?: string;
}

export function RefundRequestButton({
  subsidyId,
  statusName,
  haveRefund,
  refundDone,
  language = 'nl',
}: Props) {
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [open, setOpen] = useState(false);
  const { requestRefund, loading, error } = useRequestRefund();

  // Não mostrar se reembolso já solicitado ou já concluído
  if (haveRefund || refundDone) {
    return null;
  }

  const handleSubmit = async () => {
    const parsed = parseFloat(amount);
    if (!parsed || parsed <= 0 || !reason.trim()) return;
    await requestRefund(subsidyId, parsed, reason.trim(), language);
    setOpen(false);
    setAmount('');
    setReason('');
  };

  return (
    <>
      <button onClick={() => setOpen(true)} style={{ padding: '6px 14px', cursor: 'pointer' }}>
        Solicitar reembolso
      </button>

      {open && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50,
          }}
        >
          <div style={{ background: '#fff', borderRadius: 8, padding: 24, minWidth: 360, maxWidth: 480 }}>
            <h3 style={{ margin: '0 0 16px' }}>Solicitar reembolso</h3>

            <label style={{ display: 'block', marginBottom: 12 }}>
              <span style={{ fontSize: 13, color: '#374151' }}>Valor a reembolsar (€)</span>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0,00"
                style={{ display: 'block', width: '100%', marginTop: 4, padding: '6px 10px', borderRadius: 4, border: '1px solid #d1d5db' }}
              />
            </label>

            <label style={{ display: 'block', marginBottom: 16 }}>
              <span style={{ fontSize: 13, color: '#374151' }}>Motivo</span>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={3}
                placeholder="Descreva o motivo do reembolso..."
                style={{ display: 'block', width: '100%', marginTop: 4, padding: '6px 10px', borderRadius: 4, border: '1px solid #d1d5db' }}
              />
            </label>

            {error && (
              <p style={{ color: '#dc2626', fontSize: 13, marginBottom: 12 }}>
                {error.message}
              </p>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
              <button onClick={() => setOpen(false)} disabled={loading} style={{ padding: '6px 14px' }}>
                Cancelar
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading || !amount || !reason.trim()}
                style={{ padding: '6px 16px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}
              >
                {loading ? 'Enviando...' : 'Confirmar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
```

---

## Componente de exemplo — `RefundStatusBadge.tsx`

```tsx
interface Props {
  haveRefund: boolean;
  refundDone: boolean;
  refundAmount: number;
}

export function RefundStatusBadge({ haveRefund, refundDone, refundAmount }: Props) {
  if (refundDone) {
    return (
      <span style={{ background: '#d1fae5', color: '#065f46', padding: '2px 10px', borderRadius: 12, fontSize: 12 }}>
        ✅ Reembolso processado (€ {refundAmount.toFixed(2)})
      </span>
    );
  }
  if (haveRefund) {
    return (
      <span style={{ background: '#fef3c7', color: '#92400e', padding: '2px 10px', borderRadius: 12, fontSize: 12 }}>
        ⏳ Aguardando reembolso (€ {refundAmount.toFixed(2)})
      </span>
    );
  }
  return null;
}
```

---

## Ciclo de vida

```
Subsídio em qualquer status
          │
          ▼
  requestSubsidyRefund(id, refundAmount, reason)
          │
          ├── have_refund = true
          ├── refund_amount = refundAmount
          └── E-mail enviado ao solicitante
                    │
                    ▼
          getSubsidiesWaitingRefund()   ← visível para admin/financeiro
                    │
                    ▼
          confirmRefundDone(id)
          │
          ├── refund_done = true
          ├── Orçamento revertido (spent → allocated)
          └── E-mail confirmação enviado ao solicitante
```

---

## Integração na tela de Projeto

Sugestão de onde usar os componentes na tela de detalhe de um projeto:

```tsx
// Na listagem de subsídios do projeto:
{subsidyRequest.subsidy_status && (
  <RefundStatusBadge
    haveRefund={subsidyRequest.have_refund}
    refundDone={subsidyRequest.refund_done}
    refundAmount={Number(subsidyRequest.refund_amount)}
  />
)}

<RefundRequestButton
  subsidyId={subsidyRequest.id}
  statusName={subsidyRequest.subsidy_status.name}
  haveRefund={subsidyRequest.have_refund}
  refundDone={subsidyRequest.refund_done}
  language={userLanguage}
/>
```

---

## Resumo das operações

| Operação | GraphQL | Argumentos | Permissão |
|---|---|---|---|
| Solicitar reembolso | `mutation requestSubsidyRefund` | `id, refundAmount, reason, language?` | `REQUEST_SUBSIDY_REFUND` |
| Confirmar processado | `mutation confirmRefundDone` | `id, language?` | `CONFIRM_REFUND_DONE` |
| Listar aguardando | `query getSubsidiesWaitingRefund` | `institutionId?` | `GET_SUBSIDIES_WAITING_REFUND` |
