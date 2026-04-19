# Institution Position — Documentação de Implementação Frontend

## Visão Geral

A tabela `InstitutionPosition` registra os **cargos formais** de uma instituição, vinculando cada cargo a um usuário específico.

**Cargos disponíveis (`position_type`):**
| Enum                | Label Frontend          |
|---------------------|-------------------------|
| `PRESIDENT`         | Presidente              |
| `SECRETARY`         | Secretário              |
| `FINANCE_MANAGER`   | Gestor Financeiro       |

**Regras de negócio:**
- Cada cargo é **único por instituição** — não é possível ter dois `PRESIDENT` na mesma institution.
- Um usuário pode ocupar apenas **um cargo** (recomendação de UX, não enforçado no backend).
- Soft delete — registros deletados ficam com `is_deleted: true` e não aparecem nas listagens.
- Apenas usuários com a role `INSTITUTION_MANAGER` ou `ADMIN`/`DEV` podem criar/editar/deletar cargos.

---

## Permissions necessárias por operação

| Operação        | `key_code` da permission          |
|-----------------|-----------------------------------|
| Listar cargos   | `INSTITUTION_POSITIONS_ACCESS`    |
| Ver um cargo    | `INSTITUTION_POSITION_ACCESS`     |
| Criar cargo     | `INSTITUTION_POSITION_CREATE`     |
| Editar cargo    | `INSTITUTION_POSITION_UPDATE`     |
| Deletar cargo   | `INSTITUTION_POSITION_DELETE`     |

---

## Queries GraphQL

### Listar todos os cargos de uma instituição

```graphql
query GetInstitutionPositions($institution_id: String!) {
  institutionPositions(institution_id: $institution_id) {
    id
    position_type
    institution_id
    user_id
    is_deleted
    created_at
    updated_at
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
  "institution_id": "uuid-da-instituicao"
}
```

**Resposta esperada:**
```json
{
  "data": {
    "institutionPositions": [
      {
        "id": "uuid",
        "position_type": "PRESIDENT",
        "institution_id": "uuid-da-instituicao",
        "user_id": "uuid-do-user",
        "is_deleted": false,
        "created_at": "2026-04-19T16:01:21.000Z",
        "updated_at": "2026-04-19T16:01:21.000Z",
        "user": {
          "id": "uuid-do-user",
          "name": "Rob Jansen",
          "email": "rob@mail.com"
        }
      }
    ]
  }
}
```

---

### Buscar um cargo por ID

```graphql
query GetInstitutionPosition($id: String!) {
  institutionPosition(id: $id) {
    id
    position_type
    institution_id
    user_id
    created_at
    updated_at
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
  "id": "uuid-do-position"
}
```

---

## Mutations GraphQL

### Criar um cargo

```graphql
mutation CreateInstitutionPosition($data: InstitutionPositionCreateDto!) {
  createInstitutionPosition(data: $data) {
    id
    position_type
    institution_id
    user_id
    created_at
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
  "data": {
    "institution_id": "uuid-da-instituicao",
    "position_type": "PRESIDENT",
    "user_id": "uuid-do-user"
  }
}
```

**Erros possíveis:**
| Código | Mensagem                                                      | Causa                              |
|--------|---------------------------------------------------------------|------------------------------------|
| 409    | `Position PRESIDENT already assigned in this institution`     | Cargo já está atribuído            |
| 404    | `Institution not found`                                       | `institution_id` inválido          |
| 404    | `User not found`                                              | `user_id` inválido                 |
| 401    | `Unauthorized`                                                | Sem permission `INSTITUTION_POSITION_CREATE` |

---

### Atualizar um cargo (trocar o usuário ou o tipo)

```graphql
mutation UpdateInstitutionPosition($id: String!, $data: InstitutionPositionUpdateDto!) {
  updateInstitutionPosition(id: $id, data: $data) {
    id
    position_type
    institution_id
    user_id
    updated_at
    user {
      id
      name
      email
    }
  }
}
```

**Variáveis — trocar o usuário de um cargo:**
```json
{
  "id": "uuid-do-position",
  "data": {
    "user_id": "uuid-do-novo-user"
  }
}
```

**Variáveis — trocar o tipo de cargo:**
```json
{
  "id": "uuid-do-position",
  "data": {
    "position_type": "SECRETARY"
  }
}
```

> Todos os campos do `data` são opcionais — envie apenas o que deseja alterar.

---

### Deletar um cargo (soft delete)

```graphql
mutation DeleteInstitutionPosition($id: String!) {
  deleteInstitutionPosition(id: $id) {
    id
    position_type
    is_deleted
    deleted_at
  }
}
```

**Variáveis:**
```json
{
  "id": "uuid-do-position"
}
```

> O registro não é apagado fisicamente. O campo `is_deleted` é definido como `true` e o cargo deixa de aparecer nas listagens.

---

## Enum `InstitutionPositionType`

Valores aceitos pelo campo `position_type`:

```
PRESIDENT
SECRETARY
FINANCE_MANAGER
```

---

## Fluxo recomendado no Frontend

### Tela de gestão de cargos da instituição

1. **Listar** — Ao abrir a tela, chamar `institutionPositions(institution_id)` e exibir os 3 cargos (mesmo os não preenchidos, comparando com o enum).
2. **Atribuir** — Para cargos sem user, exibir botão "Atribuir". Ao clicar, abrir modal com seletor de usuário da instituição e chamar `createInstitutionPosition`.
3. **Trocar** — Para cargos já atribuídos, exibir botão "Substituir". Ao confirmar, chamar `updateInstitutionPosition` com o novo `user_id`.
4. **Remover** — Para cargos atribuídos, exibir botão "Remover". Ao confirmar, chamar `deleteInstitutionPosition`.

### Estado completo esperado (3 cargos sempre exibidos)

```ts
const ALL_POSITIONS = ['PRESIDENT', 'SECRETARY', 'FINANCE_MANAGER'];

// Construir lista combinada para exibição:
const positionsList = ALL_POSITIONS.map((type) => ({
  position_type: type,
  record: institutionPositions.find((p) => p.position_type === type) ?? null,
}));
```

---

## Roles com acesso

| Role                        | Leitura | Criar | Editar | Deletar |
|-----------------------------|---------|-------|--------|---------|
| `ADMIN`                     | ✅      | ✅    | ✅     | ✅      |
| `DEV`                       | ✅      | ✅    | ✅     | ✅      |
| `INSTITUTION_MANAGER`       | ✅      | ✅    | ✅     | ✅      |
| Outras roles                | ❌      | ❌    | ❌     | ❌      |
