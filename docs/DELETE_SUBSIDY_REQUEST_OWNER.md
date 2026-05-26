# Delete Subsidy Request — Project Owner & Co-Owner

## Quem pode deletar

| Papel              | key_code            | Pode deletar? |
|--------------------|---------------------|---------------|
| Project Owner      | `PROJECT_OWNER`     | ✅ Sim        |
| Project Co-Owner   | `PROJECT_CO_OWNER`  | ✅ Sim        |
| Solicitante (requester) | _qualquer role_ | ✅ Sim (quem criou) |
| Admin / Dev        | `ADMIN` / `DEV`     | ✅ Sim        |
| Outros papéis      | —                   | ❌ Não        |

> A verificação é dupla: o guard de permissão exige a role correta e o service valida se o usuário é owner, co-owner ou requester do subsídio.

---

## Restrições de status

Um subsídio **não pode ser deletado** se estiver nos seguintes status:

| Status     | Pode deletar? |
|------------|---------------|
| `DRAFT`    | ✅ Sim        |
| `PENDING`  | ✅ Sim        |
| `IN_REVIEW`| ✅ Sim        |
| `APPROVED` | ❌ Não        |
| `CLOSED`   | ❌ Não        |

O erro retornado quando o status bloqueia a operação:

```json
{
  "extensions": {
    "code": "BAD_REQUEST",
    "status": 400,
    "context": {
      "additional": {
        "errorCode": "SUBSIDY_IS_APPROVED_OR_CLOSED"
      }
    }
  }
}
```

---

## Mutation GraphQL

```graphql
mutation DeleteSubsidyRequest($id: ID!, $language: LanguagePreference) {
  deleteSubsidyRequest(id: $id, language: $language) {
    id
    is_deleted
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
  "id": "uuid-do-subsidio",
  "language": "nl"
}
```

**Parâmetros:**

| Campo      | Tipo                 | Obrigatório | Descrição                              |
|------------|----------------------|-------------|----------------------------------------|
| `id`       | `ID!`                | ✅          | UUID do subsídio a deletar             |
| `language` | `LanguagePreference` | ❌          | `en` ou `nl` — default: `en`           |

---

## Resposta de sucesso

O objeto retornado é o subsídio com `is_deleted: true` e o status final mantido para histórico:

```json
{
  "data": {
    "deleteSubsidyRequest": {
      "id": "uuid-do-subsidio",
      "is_deleted": true,
      "subsidy_status": {
        "id": "uuid-status",
        "name": "PENDING"
      }
    }
  }
}
```

---

## Erros possíveis

### Sem permissão (role não tem `deleteSubsidyRequest`)

```json
{
  "errors": [{
    "message": "User does not have permission to access this resource",
    "extensions": { "code": "UNAUTHORIZED", "status": 401 }
  }]
}
```

### Usuário autenticado mas não é owner/co-owner/requester do subsídio

```json
{
  "errors": [{
    "message": "You do not have permission to delete this subsidy request.",
    "extensions": { "code": "FORBIDDEN", "status": 403 }
  }]
}
```

### Subsídio já aprovado ou fechado

```json
{
  "errors": [{
    "extensions": {
      "code": "BAD_REQUEST",
      "status": 400,
      "context": {
        "additional": {
          "errorCode": "SUBSIDY_IS_APPROVED_OR_CLOSED"
        }
      }
    }
  }]
}
```

### Subsídio não encontrado ou já deletado

```json
{
  "errors": [{
    "extensions": { "code": "NOT_FOUND", "status": 404 }
  }]
}
```

---

## Como o frontend deve integrar

### 1. Verificar se o botão de delete deve ser exibido

Antes de renderizar o botão, checar duas condições:

```ts
const BLOCKED_STATUSES = ['APPROVED', 'CLOSED'];

function canDeleteSubsidy(subsidy, currentUser, project) {
  if (BLOCKED_STATUSES.includes(subsidy.subsidy_status?.name)) return false;

  const isOwnerOrCoOwner =
    project.owner_id === currentUser.id ||
    project.co_owner_id === currentUser.id;

  const isRequester =
    subsidy.requester_id === currentUser.id ||
    subsidy.created_by === currentUser.id;

  return isOwnerOrCoOwner || isRequester;
}
```

> Use `project.owner_id` e `project.co_owner_id` retornados pela query `project(id)`. Ambos os campos já estão disponíveis no tipo `Project`.

### 2. Executar a mutation e tratar retorno

```ts
async function deleteSubsidy(subsidyId: string) {
  try {
    const result = await client.mutate({
      mutation: DELETE_SUBSIDY_REQUEST,
      variables: { id: subsidyId, language: 'nl' },
    });
    // Remover o card/item da lista local após sucesso
    return result.data.deleteSubsidyRequest;
  } catch (error) {
    const ext = error?.graphQLErrors?.[0]?.extensions?.context?.additional;

    if (ext?.errorCode === 'SUBSIDY_IS_APPROVED_OR_CLOSED') {
      showError('Subsídios aprovados ou fechados não podem ser deletados.');
      return;
    }
    showError(error.graphQLErrors?.[0]?.message ?? 'Erro ao deletar subsídio.');
  }
}
```

### 3. Refetch após deleção (recomendado)

Após a mutation, invalide o cache da query `subsidyRequests` para o projeto ou remova o item manualmente da lista:

```ts
// Apollo Client — invalidar query após mutation
const [deleteSubsidy] = useMutation(DELETE_SUBSIDY_REQUEST, {
  refetchQueries: [
    { query: SUBSIDY_REQUESTS_QUERY, variables: { project_id: projectId } }
  ],
});
```

---

## Fluxo completo

```
Frontend verifica canDeleteSubsidy()
    ↓
Exibe botão "Deletar" apenas se: owner/co-owner/requester + status não bloqueado
    ↓
Usuário confirma (modal de confirmação recomendado)
    ↓
mutation deleteSubsidyRequest(id, language)
    ↓
API valida: guard de permissão → service valida ownership → valida status
    ↓
Soft delete em cascata (subsídio + itens + recibos)
    ↓
Retorna subsídio com is_deleted: true
    ↓
Frontend remove da lista / refetch
```
