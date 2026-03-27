# Frontend — Project History: Guia de Implementação

## Visão Geral

O histórico de um projeto (`ProjectHistory`) registra **dois tipos de dados**:

| Tipo | Descrição |
|---|---|
| **Comentário manual** | O usuário digita um texto e salva no histórico |
| **Evento automático** | Gerado pelo sistema ao criar, atualizar, mudar status, etc. |

---

## Enum `ProjectHistoryType`

```typescript
enum ProjectHistoryType {
  COMMENT              // Comentário livre do usuário
  CREATED              // Projeto criado
  UPDATED              // Campo genérico atualizado
  STATUS_CHANGED       // Status do projeto alterado
  BUDGET_UPDATED       // Orçamento alterado
  DEADLINE_UPDATED     // Prazo alterado
  OWNER_CHANGED        // Responsável principal alterado
  CO_OWNER_UPDATED     // Co-responsável atualizado
  DEPARTMENT_CHANGED   // Departamento alterado
  DELETED              // Projeto excluído
  RESTORED             // Projeto restaurado
  ADJUSTMENT_NEEDED    // Ajuste solicitado (com texto e/ou todo list)
}
```

---

## GraphQL — Queries e Mutations

### 1. Listar histórico de um projeto

```graphql
query GetProjectHistory($projectId: ID!) {
  projectHistories(projectId: $projectId) {
    id
    type
    comment
    field_name
    old_value
    new_value
    metadata
    created_at
    user {
      id
      name
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

---

### 2. Salvar comentário do usuário

```graphql
mutation CreateProjectHistory($data: ProjectHistoryCreateDto!) {
  createProjectHistory(data: $data) {
    id
    type
    comment
    created_at
    user {
      id
      name
    }
  }
}
```

**Variáveis — comentário livre:**
```json
{
  "data": {
    "project_id": "uuid-do-projeto",
    "type": "COMMENT",
    "comment": "Reunião realizada com o departamento. Aguardando aprovação de orçamento."
  }
}
```

---

### 3. Deletar entrada do histórico

```graphql
mutation DeleteProjectHistory($id: ID!) {
  deleteProjectHistory(id: $id) {
    id
  }
}
```

**Variáveis:**
```json
{
  "id": "uuid-da-entrada-historico"
}
```

---

## Permissões necessárias

| Operação | Permission Key |
|---|---|
| Listar histórico | `projectHistories` |
| Criar / comentar | `createProjectHistory` |
| Deletar entrada | `deleteProjectHistory` |

---

## Tipos TypeScript sugeridos

```typescript
export enum ProjectHistoryType {
  COMMENT = 'COMMENT',
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  STATUS_CHANGED = 'STATUS_CHANGED',
  BUDGET_UPDATED = 'BUDGET_UPDATED',
  DEADLINE_UPDATED = 'DEADLINE_UPDATED',
  OWNER_CHANGED = 'OWNER_CHANGED',
  CO_OWNER_UPDATED = 'CO_OWNER_UPDATED',
  DEPARTMENT_CHANGED = 'DEPARTMENT_CHANGED',
  DELETED = 'DELETED',
  RESTORED = 'RESTORED',
}

export interface ProjectHistoryUser {
  id: string;
  name: string;
}

export interface ProjectHistoryEntry {
  id: string;
  type: ProjectHistoryType;
  comment?: string | null;
  field_name?: string | null;
  old_value?: string | null;
  new_value?: string | null;
  metadata?: Record<string, any> | null;
  created_at: string;
  user: ProjectHistoryUser;
}

export interface ProjectHistoryCreateInput {
  project_id: string;
  type: ProjectHistoryType;
  comment?: string;
  field_name?: string;
  old_value?: string;
  new_value?: string;
  metadata?: Record<string, any>;
}
```

---

## Exemplo de componente React (Apollo Client)

```tsx
import { useMutation, useQuery } from '@apollo/client';

// ── Queries ──────────────────────────────────────────────
const GET_PROJECT_HISTORY = gql`
  query GetProjectHistory($projectId: ID!) {
    projectHistories(projectId: $projectId) {
      id
      type
      comment
      field_name
      old_value
      new_value
      metadata
      created_at
      user { id name }
    }
  }
`;

const CREATE_PROJECT_HISTORY = gql`
  mutation CreateProjectHistory($data: ProjectHistoryCreateDto!) {
    createProjectHistory(data: $data) {
      id
      type
      comment
      field_name
      old_value
      new_value
      metadata
      created_at
      user { id name }
    }
  }
`;

// ── Componente ────────────────────────────────────────────
export function ProjectHistory({ projectId }: { projectId: string }) {
  const [comment, setComment] = useState('');

  const { data, loading } = useQuery(GET_PROJECT_HISTORY, {
    variables: { projectId },
  });

  const [createHistory, { loading: saving }] = useMutation(CREATE_PROJECT_HISTORY, {
    refetchQueries: [{ query: GET_PROJECT_HISTORY, variables: { projectId } }],
  });

  const handleSubmit = async () => {
    if (!comment.trim()) return;
    await createHistory({
      variables: {
        data: {
          project_id: projectId,
          type: 'COMMENT',
          comment: comment.trim(),
        },
      },
    });
    setComment('');
  };

  if (loading) return <p>Carregando histórico...</p>;

  return (
    <div>
      {/* Lista de entradas */}
      {data?.projectHistories.map((entry: ProjectHistoryEntry) => (
        <div key={entry.id}>
          <strong>{entry.user.name}</strong>
          <span>{new Date(entry.created_at).toLocaleString()}</span>
          {entry.type === 'COMMENT' ? (
            <p>{entry.comment}</p>
          ) : (
            <p>
              <em>[{entry.type}]</em>
              {entry.field_name && ` — ${entry.field_name}`}
              {entry.old_value && ` de "${entry.old_value}"`}
              {entry.new_value && ` para "${entry.new_value}"`}
            </p>
          )}
        </div>
      ))}

      {/* Campo para novo comentário */}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Deixe um comentário de andamento..."
        rows={3}
      />
      <button onClick={handleSubmit} disabled={saving || !comment.trim()}>
        {saving ? 'Salvando...' : 'Adicionar comentário'}
      </button>
    </div>
  );
}
```

---

## Lógica de renderização por tipo

```typescript
// Labels amigáveis para cada tipo de evento automático
export const PROJECT_HISTORY_LABELS: Record<ProjectHistoryType, string> = {
  [ProjectHistoryType.COMMENT]: 'Comentário',
  [ProjectHistoryType.CREATED]: 'Projeto criado',
  [ProjectHistoryType.UPDATED]: 'Projeto atualizado',
  [ProjectHistoryType.STATUS_CHANGED]: 'Status alterado',
  [ProjectHistoryType.BUDGET_UPDATED]: 'Orçamento atualizado',
  [ProjectHistoryType.DEADLINE_UPDATED]: 'Prazo alterado',
  [ProjectHistoryType.OWNER_CHANGED]: 'Responsável alterado',
  [ProjectHistoryType.CO_OWNER_UPDATED]: 'Co-responsável atualizado',
  [ProjectHistoryType.DEPARTMENT_CHANGED]: 'Departamento alterado',
  [ProjectHistoryType.DELETED]: 'Projeto excluído',
  [ProjectHistoryType.RESTORED]: 'Projeto restaurado',
};

// Distinguir se é comentário ou evento automático
export const isManualComment = (entry: ProjectHistoryEntry) =>
  entry.type === ProjectHistoryType.COMMENT;

// Formatar mensagem de um evento automático
export const formatHistoryEvent = (entry: ProjectHistoryEntry): string => {
  const parts: string[] = [PROJECT_HISTORY_LABELS[entry.type]];
  if (entry.field_name) parts.push(`(${entry.field_name})`);
  if (entry.old_value && entry.new_value)
    parts.push(`"${entry.old_value}" → "${entry.new_value}"`);
  return parts.join(' ');
};
```

---

## Notas importantes

- **Comentários manuais** sempre usam `type: "COMMENT"` e preenchem apenas o campo `comment`.
- **Eventos automáticos** são gerados pelo backend (via `logEvent`) e preenchem `type`, `field_name`, `old_value`, `new_value`. O frontend não precisa criar esses registros.
- A lista é ordenada por `created_at DESC` (mais recente primeiro).
- O campo `metadata` é JSON livre — útil para contexto extra, como lista de campos alterados em batch.

---

## WebSocket — Atualização em tempo real (Chat)

O backend expõe uma **GraphQL Subscription** via `graphql-ws`. Ao se conectar, os clientes com o histórico aberto recebem automaticamente cada nova entrada assim que ela é salva.

### Endereço WebSocket

```
ws://localhost:3000/graphql
```

Em produção, substituir por `wss://seudominio.com/graphql`.

---

### Subscription GraphQL

> **Importante**: o selection set da subscription **deve ser idêntico** ao da query `GET_PROJECT_HISTORY`,
> incluindo o campo `metadata`. Caso contrário o Apollo Client (erro #13) não consegue
> fazer merge do objeto no cache e lança `Missing field 'metadata'`.

```graphql
subscription OnProjectHistoryAdded($projectId: ID!) {
  projectHistoryAdded(projectId: $projectId) {
    id
    type
    comment
    field_name
    old_value
    new_value
    metadata
    created_at
    user {
      id
      name
    }
  }
}
```

O backend filtra automaticamente pelo `projectId` — cada cliente só recebe mensagens do projeto que está assistindo.

---

### Configuração do Apollo Client (React)

#### 1. Instalar dependências

```bash
npm install @apollo/client graphql graphql-ws
```

#### 2. Configurar o ApolloClient com split entre HTTP e WebSocket

```typescript
// src/lib/apollo-client.ts
import { ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token') ?? ''}`,
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://localhost:3000/graphql',
    connectionParams: () => ({
      // JWT enviado no handshake WebSocket
      // O backend aceita os dois formatos abaixo — use este (nested headers):
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token') ?? ''}`,
      },
    }),
  }),
);

// Queries/Mutations → HTTP | Subscriptions → WebSocket
const splitLink = split(
  ({ query }) => {
    const def = getMainDefinition(query);
    return def.kind === 'OperationDefinition' && def.operation === 'subscription';
  },
  wsLink,
  httpLink,
);

export const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
```

---

#### 3. Componente completo com chat em tempo real

```tsx
// src/components/ProjectHistory.tsx
import { useState } from 'react';
import { gql, useMutation, useQuery, useSubscription } from '@apollo/client';

// Fragment compartilhado — garante que query, mutation e subscription
// sempre pedem os mesmos campos. Evita o Apollo erro #13 (Missing field).
const HISTORY_ENTRY_FIELDS = gql`
  fragment HistoryEntryFields on ProjectHistory {
    id
    type
    comment
    field_name
    old_value
    new_value
    metadata
    created_at
    user { id name }
  }
`;

const GET_PROJECT_HISTORY = gql`
  ${HISTORY_ENTRY_FIELDS}
  query GetProjectHistory($projectId: ID!) {
    projectHistories(projectId: $projectId) {
      ...HistoryEntryFields
    }
  }
`;

// A mutation retorna os mesmos campos para o Apollo normalizar corretamente
const CREATE_PROJECT_HISTORY = gql`
  ${HISTORY_ENTRY_FIELDS}
  mutation CreateProjectHistory($data: ProjectHistoryCreateDto!) {
    createProjectHistory(data: $data) {
      ...HistoryEntryFields
    }
  }
`;

const ON_PROJECT_HISTORY_ADDED = gql`
  ${HISTORY_ENTRY_FIELDS}
  subscription OnProjectHistoryAdded($projectId: ID!) {
    projectHistoryAdded(projectId: $projectId) {
      ...HistoryEntryFields
    }
  }
`;

export function ProjectHistory({ projectId }: { projectId: string }) {
  const [comment, setComment] = useState('');

  // Carregamento inicial
  const { data, loading } = useQuery(GET_PROJECT_HISTORY, {
    variables: { projectId },
  });

  const [createHistory, { loading: saving }] = useMutation(CREATE_PROJECT_HISTORY);

  // ─── REGRA FUNDAMENTAL ────────────────────────────────────────────────────
  // A subscription é a ÚNICA fonte que escreve no cache para TODOS os usuários,
  // incluindo quem enviou o comentário.
  // A mutation NÃO tem update/refetchQueries — ela apenas dispara e retorna.
  //
  // Por quê? Race condition:
  //   1. mutation HTTP dispara
  //   2. servidor salva e publica no PubSub
  //   3. subscription WS chega ANTES do response HTTP da mutation
  //   4. onData checa cache → não encontra → insere → 31 entradas
  //   5. mutation response chega → se tiver update callback → insere de novo → 32 DUPLICATA
  // ─────────────────────────────────────────────────────────────────────────
  useSubscription(ON_PROJECT_HISTORY_ADDED, {
    variables: { projectId },
    onData: ({ client, data: subData }) => {
      const newEntry = subData.data?.projectHistoryAdded;
      if (!newEntry) return;

      const cached = client.readQuery({
        query: GET_PROJECT_HISTORY,
        variables: { projectId },
      });

      // Dedup: subscription pode chegar enquanto outro writeQuery já inseriu
      if (cached?.projectHistories?.some((e: any) => e.id === newEntry.id)) return;

      client.writeQuery({
        query: GET_PROJECT_HISTORY,
        variables: { projectId },
        data: {
          projectHistories: [newEntry, ...(cached?.projectHistories ?? [])],
        },
      });
    },
  });

  const handleSubmit = async () => {
    if (!comment.trim()) return;
    // ✅ SEM update callback — subscription cuida do cache para todos
    await createHistory({
      variables: {
        data: { project_id: projectId, type: 'COMMENT', comment: comment.trim() },
      },
    });
    setComment('');
  };

  if (loading) return <p>Charging History...</p>;

  return (
    <div>
      {/* Lista de entradas — mais recente no topo */}
      {data?.projectHistories.map((entry: any) => (
        <div key={entry.id} style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
          <strong>{entry.user.name}</strong>
          <span style={{ marginLeft: 8, color: '#888', fontSize: 12 }}>
            {new Date(entry.created_at).toLocaleString()}
          </span>
          {entry.type === 'COMMENT' ? (
            <p style={{ margin: '4px 0 0' }}>{entry.comment}</p>
          ) : (
            <p style={{ margin: '4px 0 0', fontStyle: 'italic', color: '#555' }}>
              [{entry.type}]
              {entry.field_name && ` — ${entry.field_name}`}
              {entry.old_value && ` de "${entry.old_value}"`}
              {entry.new_value && ` para "${entry.new_value}"`}
            </p>
          )}
        </div>
      ))}

      {/* Campo de comentário */}
      <div style={{ marginTop: 16 }}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Deixe um comentário de andamento..."
          rows={3}
          style={{ width: '100%' }}
          onKeyDown={(e) => {
            // Ctrl+Enter para enviar
            if (e.key === 'Enter' && e.ctrlKey) handleSubmit();
          }}
        />
        <button onClick={handleSubmit} disabled={saving || !comment.trim()}>
          {saving ? 'Enviando...' : 'Comentar'}
        </button>
      </div>
    </div>
  );
}
```

---

### Como funciona o fluxo tempo real

```
Usuário A digita e envia comentário
        │
        ▼
  mutation createProjectHistory (HTTP/POST)
        │
        ▼
  Backend salva no banco (PostgreSQL)
        │
        ▼
  PubSubService.publish('projectHistoryAdded', { entry, projectId })
        │
        ▼
  Todos os clientes conectados com a subscription
  projectHistoryAdded(projectId: "mesmo-id") recebem o evento via WebSocket
        │
        ▼
  onData atualiza o cache Apollo → componente re-renderiza automaticamente
```

---

### Autenticação WebSocket

O token JWT é enviado no `connectionParams` durante o handshake. Use o formato **nested `headers`** — o backend lê de ambos os formatos mas este é o padrão:

```typescript
createClient({
  url: 'ws://localhost:3000/graphql',
  connectionParams: () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }),
});
```

O backend extrai e valida o `userId` no `onConnect` do `graphql-ws` configurado no `AppModule`. Formatos aceitos pelo backend:
- `connectionParams.headers.Authorization` (recomendado)
- `connectionParams.headers.authorization`
- `connectionParams.Authorization` (legado, flat)
- `connectionParams.authorization` (legado, flat)

> **Importante**: o código `4500` no fechamento do WebSocket indica crash no servidor durante o handshake. Causa típica: `req` é `undefined` em conexões WS — já corrigido no backend.

---

### Múltiplos usuários simultaneamente

Cada usuário com o histórico aberto:
- Assina `projectHistoryAdded(projectId: "X")`
- Recebe **apenas** eventos do projeto X (filtro no backend)
- A atualização é **imediata** sem necessidade de polling ou refetch

---

## Notificações Globais — Usuário fora do modal

Para usuários que **não estão com o histórico aberto**, o backend expõe uma segunda subscription filtrada por `userId`. Ela fica ativa durante toda a sessão e dispara sempre que qualquer projeto onde o usuário é colaborador recebe uma nova entrada.

### Quem recebe a notificação

| Papel | Recebe? |
|---|---|
| Owner do projeto | ✅ |
| Co-owner do projeto | ✅ |
| Voluntário ativo no projeto | ✅ |
| Usuário sem vínculo com o projeto | ❌ |

O backend busca automaticamente todos os colaboradores via `getCollaboratorIds()` (owner + co_owner + voluntary_users) e publica um evento `USER_PROJECT_HISTORY_ADDED` por usuário após cada nova entrada.

---

### Subscription GraphQL — por usuário

```graphql
subscription OnUserProjectHistoryAdded($userId: ID!) {
  userProjectHistoryAdded(userId: $userId) {
    id
    type
    comment
    field_name
    old_value
    new_value
    metadata
    created_at
    project_id
    user {
      id
      name
    }
  }
}
```

---

### Hook global React — `use-global-project-notifications.ts`

```typescript
// Monta este hook UMA VEZ, no layout raiz, enquanto o usuário estiver logado.
// Ele NÃO gerencia o cache do histórico — apenas gera notificações.

import { gql, useSubscription } from '@apollo/client';

const ON_USER_PROJECT_HISTORY_ADDED = gql`
  subscription OnUserProjectHistoryAdded($userId: ID!) {
    userProjectHistoryAdded(userId: $userId) {
      id
      type
      comment
      project_id
      created_at
      user { id name }
    }
  }
`;

export function useGlobalProjectNotifications(currentUserId: string) {
  useSubscription(ON_USER_PROJECT_HISTORY_ADDED, {
    variables: { userId: currentUserId },
    skip: !currentUserId,
    onData: ({ data: subData }) => {
      const entry = subData.data?.userProjectHistoryAdded;
      if (!entry) return;

      // Descarta entradas do próprio usuário (ele já vê via cache local)
      if (entry.user.id === currentUserId) return;

      // Empurra para o sistema de notificações da aplicação
      // Exemplo: NotificationsContext.push({ entry, projectId: entry.project_id })
      console.log('[GlobalNotification] novo evento no projeto', entry.project_id, entry.type);
    },
  });
}
```

---

### Componente nulo — `GlobalNotificationsWatcher.tsx`

```tsx
// Sem UI — só monta o hook. Monte dentro do layout raiz, após autenticação.
export function GlobalNotificationsWatcher({ userId }: { userId: string }) {
  useGlobalProjectNotifications(userId);
  return null;
}
```

---

### Arquitetura das duas subscriptions

```
SUBSCRIPTION 1 — projectHistoryAdded(projectId)
  → Ativa: somente quando o modal/tela de histórico está aberta
  → Propósito: atualizar o cache Apollo em tempo real (chat)
  → Filtro: projectId

SUBSCRIPTION 2 — userProjectHistoryAdded(userId)
  → Ativa: durante TODA a sessão do usuário logado
  → Propósito: notificações globais (badge, toast, sino)
  → Filtro: userId
  → O frontend descarta entradas do próprio usuário (entry.user.id === currentUserId)

Backend publica AMBOS os eventos a cada nova entrada de histórico:
  1. publishAll(entry)
     ├── publish('projectHistoryAdded',     { entry, projectId })      → Subscription 1
     └── publish('userProjectHistoryAdded', { entry, userId: colabId }) → Subscription 2
         (uma publicação por colaborador: owner + co_owner + voluntários)
```

---

## Adjustments — Ajustes solicitados no projeto

Um **Adjustment** é uma solicitação formal de ajuste vinculada ao histórico do projeto. Cada adjustment gera automaticamente uma entrada `ADJUSTMENT_NEEDED` no `ProjectHistory` e pode conter:

- Um **texto livre** (`comment`) explicando o ajuste
- Uma **todo list** (`tasks`) com itens a serem concluídos
- Ou **ambos simultaneamente**

Um projeto pode ter múltiplos adjustments ao longo do tempo. Cada um tem um status independente.

### Enum `AdjustmentStatus`

```typescript
enum AdjustmentStatus {
  OPEN         // Ajuste em aberto
  IN_PROGRESS  // Em andamento
  CLOSED       // Concluído / fechado
}
```

---

### GraphQL — Queries e Mutations de Adjustment

#### Listar todos os adjustments de um projeto

```graphql
query GetProjectAdjustments($projectId: ID!) {
  projectAdjustments(projectId: $projectId) {
    id
    status
    created_at
    updated_at
    project_history {
      id
      comment
      created_at
      user { id name }
    }
    tasks {
      id
      title
      completed
      position
    }
  }
}
```

#### Criar um adjustment (texto + todo list)

```graphql
mutation CreateAdjustment($data: CreateAdjustmentDto!) {
  createAdjustment(data: $data) {
    id
    status
    project_history {
      id
      comment
      created_at
      user { id name }
    }
    tasks {
      id
      title
      completed
      position
    }
  }
}
```

**Variáveis — somente texto:**
```json
{
  "data": {
    "project_id": "uuid-do-projeto",
    "comment": "O orçamento precisa ser revisado antes de avançar para a próxima fase."
  }
}
```

**Variáveis — todo list:**
```json
{
  "data": {
    "project_id": "uuid-do-projeto",
    "comment": "Pendências antes da aprovação:",
    "tasks": [
      { "title": "Revisar orçamento", "position": 0 },
      { "title": "Confirmar data de início", "position": 1 },
      { "title": "Obter assinatura do responsável", "position": 2 }
    ]
  }
}
```

#### Atualizar status do adjustment

```graphql
mutation UpdateAdjustmentStatus($data: UpdateAdjustmentStatusDto!) {
  updateAdjustmentStatus(data: $data) {
    id
    status
    updated_at
  }
}
```

**Variáveis:**
```json
{
  "data": {
    "id": "uuid-do-adjustment",
    "status": "IN_PROGRESS"
  }
}
```

#### Adicionar tarefa a um adjustment existente

```graphql
mutation AddAdjustmentTask($data: AddAdjustmentTaskDto!) {
  addAdjustmentTask(data: $data) {
    id
    title
    completed
    position
  }
}
```

**Variáveis:**
```json
{
  "data": {
    "adjustment_id": "uuid-do-adjustment",
    "title": "Enviar documentação complementar"
  }
}
```

#### Marcar/desmarcar tarefa como concluída

```graphql
mutation ToggleAdjustmentTask($data: ToggleAdjustmentTaskDto!) {
  toggleAdjustmentTask(data: $data) {
    id
    title
    completed
  }
}
```

**Variáveis:**
```json
{
  "data": {
    "task_id": "uuid-da-task",
    "completed": true
  }
}
```

#### Remover tarefa

```graphql
mutation RemoveAdjustmentTask($taskId: ID!) {
  removeAdjustmentTask(taskId: $taskId) {
    id
    title
  }
}
```

---

### Relação com ProjectHistory

Ao criar um adjustment, o backend **automaticamente** cria uma entrada no `ProjectHistory` com `type = ADJUSTMENT_NEEDED`. Isso significa que:

- O adjustment aparece no feed do histórico do projeto como qualquer outro evento
- O campo `adjustment` da entrada `ProjectHistory` contém o objeto completo do adjustment
- As **notificações em tempo real** (subscription `userProjectHistoryAdded`) são disparadas para todos os colaboradores do projeto, mesmo sem o modal aberto

Para exibir os adjustments **dentro do feed de histórico**, basta verificar `entry.type === 'ADJUSTMENT_NEEDED'` e ler `entry.adjustment`:

```typescript
// No componente de histórico, ao renderizar cada entrada:
if (entry.type === 'ADJUSTMENT_NEEDED' && entry.adjustment) {
  return (
    <AdjustmentCard
      adjustment={entry.adjustment}
      author={entry.user}
      createdAt={entry.created_at}
    />
  );
}
```

---

### Tipos TypeScript sugeridos

```typescript
export enum AdjustmentStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  CLOSED = 'CLOSED',
}

export interface AdjustmentTask {
  id: string;
  title: string;
  completed: boolean;
  position: number;
  created_at: string;
  updated_at: string;
}

export interface ProjectAdjustment {
  id: string;
  status: AdjustmentStatus;
  created_at: string;
  updated_at: string;
  project_history?: {
    id: string;
    comment?: string | null;
    created_at: string;
    user: { id: string; name: string };
  };
  tasks?: AdjustmentTask[];
}
```

---

### Notas importantes

- Um projeto pode ter **múltiplos adjustments** em momentos diferentes — sem limite.
- O status de cada adjustment é **independente** dos demais e do status do projeto.
- Ao criar o adjustment, o backend publica o evento via PubSub → colaboradores recebem notificação em tempo real via `userProjectHistoryAdded`.
- `tasks` é opcional — um adjustment pode ser apenas texto, apenas tarefas, ou ambos.
- A ordem das tasks na listagem é por `position` (crescente).
- Ao fechar um adjustment (`CLOSED`), as tasks não são automaticamente marcadas — o frontend deve decidir esse comportamento.