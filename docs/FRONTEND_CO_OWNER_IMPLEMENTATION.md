# Implementação Frontend: Campo Co-Owner em Projetos

## Visão Geral

O campo `co_owner_id` permite associar um segundo proprietário a um projeto. É completamente **opcional** em todas as operações. O backend valida automaticamente se o usuário informado existe antes de salvar.

---

## Operações Disponíveis no GraphQL

### 1. Criar projeto COM co_owner_id (opcional)

**Mutation:**
```graphql
mutation CreateProject($data: ProjectCreateDto!) {
  createProject(data: $data) {
    id
    title
    co_owner_id
    co_owner {
      id
      name
      email
    }
  }
}
```

**Variáveis (co_owner_id é opcional — omitir para deixar sem co-proprietário):**
```json
{
  "data": {
    "title": "Projeto Exemplo",
    "description": "Descrição do projeto",
    "language_preference": "nl",
    "budget": 5000,
    "type": "Local",
    "department_id": "<uuid-do-departamento>",
    "start_at": "2026-03-01",
    "end_at": "2026-12-31",
    "is_private": false,
    "required_volunteers": false,
    "is_event": false,
    "co_owner_id": "<uuid-do-usuario>"
  }
}
```

> Se `co_owner_id` for omitido ou `null`, o projeto é criado sem co-proprietário.

---

### 2. Atualizar co_owner_id junto com outros campos

**Mutation:**
```graphql
mutation UpdateProject($id: String!, $data: ProjectUpdateDto!) {
  updateProject(id: $id, data: $data) {
    id
    title
    co_owner_id
    co_owner {
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
  "id": "<uuid-do-projeto>",
  "data": {
    "co_owner_id": "<uuid-do-novo-co-owner>"
  }
}
```

> Para **remover** o co-proprietário via `updateProject`, envie `co_owner_id: null` (se o cliente GraphQL suportar null explícito) ou use a mutation dedicada abaixo.

---

### 3. Atualizar APENAS o co_owner_id (mutation dedicada)

Esta é a forma **recomendada** para alterar o co-proprietário isoladamente, pois exige a permissão `updateProjectCoOwner` separada de `updateProject`.

**Mutation:**
```graphql
mutation UpdateProjectCoOwner($id: String!, $data: ProjectUpdateCoOwnerDto!) {
  updateProjectCoOwner(id: $id, data: $data) {
    id
    co_owner_id
    co_owner {
      id
      name
      email
    }
  }
}
```

**Variáveis — definir co-proprietário:**
```json
{
  "id": "<uuid-do-projeto>",
  "data": {
    "co_owner_id": "<uuid-do-usuario>"
  }
}
```

**Variáveis — remover co-proprietário (disconnect):**
```json
{
  "id": "<uuid-do-projeto>",
  "data": {
    "co_owner_id": null
  }
}
```

---

### 4. Consultar projeto e retornar o co-owner

**Query:**
```graphql
query GetProject($id: String!) {
  project(id: $id) {
    id
    title
    owner_id
    owner {
      id
      name
      email
    }
    co_owner_id
    co_owner {
      id
      name
      email
    }
    collaborators {
      role
      user {
        id
        name
        email
      }
    }
  }
}
```

> O campo `collaborators` retorna todos os colaboradores do projeto (owner, co_owner, assignees) com o papel de cada um.

---

## Listar Usuários para Seleção no Frontend

Para exibir um dropdown/busca de usuários (seleção do co-proprietário), utilize:

```graphql
query GetUsers($institutionId: String) {
  users(institution_id: $institutionId) {
    id
    name
    email
  }
}
```

> Filtre por `institution_id` para limitar a lista apenas ao escopo da instituição do projeto.  
> No front, exiba `name` e `email` e armazene o `id` para enviar como `co_owner_id`.

---

## Tipo TypeScript Sugerido para o Formulário

```typescript
interface ProjectFormData {
  title: string;
  description: string;
  language_preference: 'en' | 'nl';
  budget: number;
  type: 'Local' | 'Global';
  department_id: string;
  start_at: string;   // ISO date string: "YYYY-MM-DD"
  end_at: string;
  is_private: boolean;
  required_volunteers: boolean;
  is_event: boolean;
  co_owner_id?: string | null;  // opcional
  // ... demais campos opcionais
}

interface UpdateCoOwnerData {
  co_owner_id?: string | null;
}
```

---

## Fluxo Recomendado na UI

### No formulário de criação de projeto

1. Adicionar campo de busca/seleção de usuário rotulado como **"Co-proprietário (opcional)"**.
2. Carregar a lista de usuários via query `users(institution_id)`.
3. Ao submeter, incluir `co_owner_id` no payload somente se um usuário for selecionado:

```typescript
const payload = {
  ...formData,
  co_owner_id: selectedCoOwner?.id ?? undefined,
};
```

### Na página de detalhes / edição do projeto

- Exibir o co-owner atual com nome e e-mail (`project.co_owner`).
- Permitir alterar via botão "Editar co-proprietário" que chama `updateProjectCoOwner`.
- Permitir remover passando `co_owner_id: null` na mesma mutation.

---

## Permissões Necessárias (Backend)

| Operação | Permissão requerida |
|---|---|
| Criar projeto com co_owner_id | `createProject` |
| Editar projeto (inclui co_owner_id) | `updateProject` |
| Editar apenas co_owner_id | `updateProjectCoOwner` |
| Consultar projeto | `project` |

---

## Comportamento de Validação no Backend

- Se `co_owner_id` for informado, o backend **valida se o usuário existe** e lança erro `NOT_FOUND` caso contrário.
- Se for `null` ou omitido na criação, o projeto é salvo sem co-proprietário.
- Na mutation `updateProjectCoOwner`, enviar `co_owner_id: null` **desvincula** o co-proprietário atual (`disconnect`).
- Na mutation `updateProject`, enviar `co_owner_id: null` também **desvincula** (`disconnect`); omitir o campo não altera o valor atual.

---

## Exemplo de Componente React (genérico)

```tsx
// Seleção do co-owner no formulário de criação
const [coOwnerId, setCoOwnerId] = useState<string | null>(null);
const { data: usersData } = useQuery(GET_USERS, {
  variables: { institutionId },
});

// Remover co-owner de um projeto existente
const [updateCoOwner] = useMutation(UPDATE_PROJECT_CO_OWNER);

const handleRemoveCoOwner = () => {
  updateCoOwner({
    variables: {
      id: projectId,
      data: { co_owner_id: null },
    },
  });
};

const handleSetCoOwner = (userId: string) => {
  updateCoOwner({
    variables: {
      id: projectId,
      data: { co_owner_id: userId },
    },
  });
};
```
