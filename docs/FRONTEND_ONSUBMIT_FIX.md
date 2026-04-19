# Fix: `onSubmit` retornando `undefined` no `RequestSubsidyModal`

## Causa Raiz Confirmada

### Evidência dos Logs
```
createdSubsidyId: undefined
type: undefined
❌ onSubmit returned no ID — backend may have failed silently.
```

### 2 problemas simultâneos

---

### Problema 1 — Permissão ausente no backend para `createSubsidyWithoutDocument`

O backend tinha a mutation no schema e no resolver, **mas não tinha a permissão no banco**.

O decorator `@Permission()` usa o nome do método como chave de verificação:

```typescript
// permissions.decorator.ts
export function Permission(permission?: string) {
  return (target, propertyKey, descriptor) => {
    const value = permission || propertyKey  // → "createSubsidyWithoutDocument"
    SetMetadata(PERMISSIONS_KEY, [value])(...)
  }
}
```

A guard então buscava `createSubsidyWithoutDocument` nas permissões do usuário. Como o valor **não existia** no enum `PermissionResolverName` nem no banco, nenhum usuário tinha essa permissão. A guard lançava `UnauthorizedException`, que o Apollo Client convertia em `data: null` sem erros visíveis na aba Network → `createdSubsidyId === undefined`.

**Fix aplicado no backend (7 mar 2026):**
- `prisma/schema.prisma`: adicionado `createSubsidyWithoutDocument` ao enum `PermissionResolverName`
- Migration: `20260307224739_add_create_subsidy_without_document_permission_resolver`
- `src/scripts/seed-permissions.ts`: adicionada entrada com `key_code: 'SUBSIDY_REQUEST_WITHOUT_DOCUMENT_CREATE'`
- Seed executado com sucesso ✅

> **Ação necessária:** Atribuir a permissão `SUBSIDY_REQUEST_WITHOUT_DOCUMENT_CREATE` aos roles que podem criar subsídios (mesmos roles que têm `SUBSIDY_REQUEST_CREATE`).

---

### Problema 2 — `handleSubsidyRequestSubmit` no `page.tsx` não retornava o ID

A função chamava a mutation mas não tinha `return result.data?.createSubsidyRequest?.id`, entregando `undefined` ao modal em qualquer tipo, inclusive `WITH_DOCUMENT`.

---

## Fix no Frontend (já aplicado)

O time de frontend decidiu simplificar: usar a mutation única `createSubsidyRequest` para todos os tipos, passando `request_type` no payload. O backend suporta isso corretamente.

### As 4 mudanças aplicadas no `page.tsx`

| # | O que | Antes | Depois |
|---|---|---|---|
| 1 | Import `CREATE_SUBSIDY_WITHOUT_DOCUMENT` | Incluído | Removido |
| 2 | Hook `useMutation` para `createSubsidyWithoutDocument` | Declarado | Removido |
| 3 | Branch `WITHOUT_DOCUMENT` | Chamava `createSubsidyWithoutDocument(...)` — mutation que provocava `UnauthorizedException` silencioso | Chama `createSubsidyRequest(...)` com `request_type: 'WITHOUT_DOCUMENT'` e `linked_activity_document_ids: []` |
| 4 | Branch `WITH_DOCUMENT` | Sem verificação de `resultId` | Adicionado `if (!resultId) throw` |

---

## Template correto do `handleSubsidyRequestSubmit`

```typescript
const handleSubsidyRequestSubmit = async (
  data: SubsidyRequestData
): Promise<string | undefined> => {
  const language = i18n.language === 'nl' ? 'nl' : 'en'

  // ── WITHOUT_DOCUMENT ─────────────────────────────────────────────────────
  if (data.request_type === 'WITHOUT_DOCUMENT') {
    const result = await createSubsidyRequest({
      variables: {
        language,
        data: {
          project_id:       data.project_id,
          department_id:    data.department_id,
          church_id:        data.church_id || undefined,
          institution_id:   data.institution_id || undefined, // backend auto-deriva do projeto
          requester_id:     data.requester_id,
          total_budget:     data.total_budget,
          requested_amount: data.requested_amount,
          notes:            data.notes || undefined,
          request_type:     'WITHOUT_DOCUMENT',
          items: data.items.map(item => ({
            project_activity_id:          item.activity_id,
            requested_amount:             item.requested_amount,
            linked_activity_document_ids: [],  // ← vazio, sem documentos
            linked_document_amounts:      [],  // ← vazio
          })),
        },
      },
    })
    const resultId = result.data?.createSubsidyRequest?.id
    if (!resultId) throw new Error('No ID returned (WITHOUT_DOCUMENT)')
    return resultId  // ✅ RETORNAR
  }

  // ── WITH_DOCUMENT ─────────────────────────────────────────────────────────
  const result = await createSubsidyRequest({
    variables: {
      language,
      data: {
        project_id:       data.project_id,
        department_id:    data.department_id,
        church_id:        data.church_id || undefined,
        institution_id:   data.institution_id,
        requester_id:     data.requester_id,
        total_budget:     data.total_budget,
        requested_amount: data.requested_amount,
        notes:            data.notes || undefined,
        request_type:     'WITH_DOCUMENT',
        items: data.items.map(item => ({
          project_activity_id:          item.activity_id,
          requested_amount:             item.requested_amount,
          linked_activity_document_ids: item.activity_documents.map(d => d.id),
          linked_document_amounts:      item.activity_documents.map(d => d.amount),
        })),
      },
    },
  })
  const resultId = result.data?.createSubsidyRequest?.id
  if (!resultId) throw new Error('No ID returned (WITH_DOCUMENT)')
  return resultId  // ✅ RETORNAR
}
```

---

## Por que o backend aceita `WITHOUT_DOCUMENT` via `createSubsidyRequest`

O `SubsidyRequestCreateDto` tem `request_type` como campo opcional:

```typescript
@Field(() => SubsidyRequestType, { nullable: true, defaultValue: SubsidyRequestType.WITH_DOCUMENT })
@IsOptional()
@IsEnum(SubsidyRequestType)
request_type?: SubsidyRequestType;
```

O service respeita o tipo e **pula o processamento de documentos** para não-`WITH_DOCUMENT`:

```typescript
// Processar documentos linkados apenas para WITH_DOCUMENT
if (resolvedType === SubsidyRequestType.WITH_DOCUMENT && data.items?.length > 0) {
  // ...somente aqui
}
```

O repository também considera o tipo para itens:
```typescript
const isAdvance = resolvedType === SubsidyRequestType.ADVANCE
// WITHOUT_DOCUMENT: isAdvance = false → itens são requeridos e criados normalmente
```

---

## Comportamento esperado após o fix

**Browser console:**
```
🚀 [RequestSubsidyModal] handleSubmit → onSubmit call
requestType (modal state): without_document
submitPayload.request_type: WITHOUT_DOCUMENT

📬 [RequestSubsidyModal] onSubmit returned
createdSubsidyId: "clxxxxxxxxxxxx"   ← ID real
type: string

✅ [RequestSubsidyModal] Subsidy created successfully! ID: clxxxxxxxxxxxx
```

**Terminal NestJS:**
```
⚡ [SubsidyRequestResolver.createSubsidyRequest] Received: { request_type: 'WITHOUT_DOCUMENT', items_count: 1 ... }
🔵 [SubsidyRequestRepository.create] START { resolvedType: 'WITHOUT_DOCUMENT', isAdvance: false ... }
🔵 [SubsidyRequestRepository.create] Duplicate check passed
🟢 [SubsidyRequestRepository.create] Prisma create OK — id: clxxxxxxxxxxxx
🟢 [SubsidyRequestService.create] DONE — returning id: clxxxxxxxxxxxx request_type: WITHOUT_DOCUMENT
⚡ [SubsidyRequestResolver.createSubsidyRequest] OK — id: clxxxxxxxxxxxx
```

---

## Checklist pós-fix

- [x] `PermissionResolverName` enum atualizado + migration aplicada
- [x] Seed de permissões executado
- [ ] Permissão `SUBSIDY_REQUEST_WITHOUT_DOCUMENT_CREATE` atribuída aos roles no painel admin
- [x] Frontend usa `createSubsidyRequest` com `request_type: WITHOUT_DOCUMENT` para without_document
- [x] `handleSubsidyRequestSubmit` retorna `Promise<string>` em todos os paths
- [x] `if (!resultId) throw` adicionado em ambos os branches
