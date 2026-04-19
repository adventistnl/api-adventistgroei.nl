# Frontend — Project Adjustment: Guia de Implementação

## Visão Geral

Um **ProjectAdjustment** é uma solicitação formal de ajuste vinculada ao histórico de um projeto.
Ao ser criado, gera automaticamente uma entrada `ADJUSTMENT_NEEDED` no `ProjectHistory` e
dispara notificações em tempo real para todos os colaboradores do projeto via WebSocket.

| Característica | Detalhe |
|---|---|
| Um projeto pode ter | Múltiplos adjustments em momentos distintos |
| Um adjustment pode conter | Texto livre, todo list, ou ambos |
| Status independente | Cada adjustment tem seu próprio ciclo `OPEN → IN_PROGRESS → CLOSED` |
| Notificação automática | Ao criar, todos os colaboradores recebem via `userProjectHistoryAdded` |
| Aparece no histórico | A entrada `type = ADJUSTMENT_NEEDED` é listada junto com comentários e eventos |

---

## Enum `AdjustmentStatus`

```typescript
enum AdjustmentStatus {
  OPEN         // Ajuste criado, ainda não iniciado
  IN_PROGRESS  // Em andamento
  CLOSED       // Concluído / fechado
}
```

---

## Tipos TypeScript

```typescript
export enum AdjustmentStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  CLOSED = 'CLOSED',
}

export interface AdjustmentTask {
  id: string;
  adjustment_id: string;
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
    project_id: string;
    comment?: string | null;
    created_at: string;
    user: {
      id: string;
      name: string;
    };
  };
  tasks?: AdjustmentTask[];
}

export interface CreateAdjustmentInput {
  project_id: string;
  comment?: string;
  tasks?: { title: string; position?: number }[];
}

export interface UpdateAdjustmentStatusInput {
  id: string;
  status: AdjustmentStatus;
}

export interface AddAdjustmentTaskInput {
  adjustment_id: string;
  title: string;
  position?: number;
}

export interface ToggleAdjustmentTaskInput {
  task_id: string;
  completed: boolean;
}
```

---

## GraphQL — Fragments

Defina um fragment compartilhado para evitar inconsistências entre queries e mutations:

```graphql
fragment AdjustmentTaskFields on AdjustmentTask {
  id
  title
  completed
  position
  created_at
  updated_at
}

fragment ProjectAdjustmentFields on ProjectAdjustment {
  id
  status
  created_at
  updated_at
  project_history {
    id
    project_id
    comment
    created_at
    user { id name }
  }
  tasks {
    ...AdjustmentTaskFields
  }
}
```

---

## GraphQL — Queries

### Listar todos os adjustments de um projeto

```graphql
query GetProjectAdjustments($projectId: ID!) {
  projectAdjustments(projectId: $projectId) {
    ...ProjectAdjustmentFields
  }
}
```

**Variáveis:**
```json
{ "projectId": "uuid-do-projeto" }
```

---

### Buscar um adjustment por ID

```graphql
query GetProjectAdjustment($id: ID!) {
  projectAdjustment(id: $id) {
    ...ProjectAdjustmentFields
  }
}
```

**Variáveis:**
```json
{ "id": "uuid-do-adjustment" }
```

---

## GraphQL — Mutations

### 1. Criar adjustment (texto livre)

```graphql
mutation CreateAdjustment($data: CreateAdjustmentDto!) {
  createAdjustment(data: $data) {
    ...ProjectAdjustmentFields
  }
}
```

**Variáveis:**
```json
{
  "data": {
    "project_id": "uuid-do-projeto",
    "comment": "O orçamento precisa ser revisado antes de avançar para a próxima fase."
  }
}
```

---

### 2. Criar adjustment com todo list

```graphql
mutation CreateAdjustment($data: CreateAdjustmentDto!) {
  createAdjustment(data: $data) {
    ...ProjectAdjustmentFields
  }
}
```

**Variáveis:**
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

---

### 3. Atualizar status do adjustment

```graphql
mutation UpdateAdjustmentStatus($data: UpdateAdjustmentStatusDto!) {
  updateAdjustmentStatus(data: $data) {
    id
    status
    updated_at
    tasks { ...AdjustmentTaskFields }
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

Valores aceitos para `status`: `"OPEN"`, `"IN_PROGRESS"`, `"CLOSED"`.

---

### 4. Adicionar tarefa a um adjustment existente

```graphql
mutation AddAdjustmentTask($data: AddAdjustmentTaskDto!) {
  addAdjustmentTask(data: $data) {
    ...AdjustmentTaskFields
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

> Se `position` for omitido, a task é inserida ao final da lista automaticamente.

---

### 5. Marcar / desmarcar tarefa como concluída

```graphql
mutation ToggleAdjustmentTask($data: ToggleAdjustmentTaskDto!) {
  toggleAdjustmentTask(data: $data) {
    id
    title
    completed
    updated_at
  }
}
```

**Variáveis — marcar como concluída:**
```json
{
  "data": {
    "task_id": "uuid-da-task",
    "completed": true
  }
}
```

**Variáveis — desfazer conclusão:**
```json
{
  "data": {
    "task_id": "uuid-da-task",
    "completed": false
  }
}
```

---

### 6. Remover tarefa

```graphql
mutation RemoveAdjustmentTask($taskId: ID!) {
  removeAdjustmentTask(taskId: $taskId) {
    id
    title
  }
}
```

**Variáveis:**
```json
{ "taskId": "uuid-da-task" }
```

---

## Hook React — `use-project-adjustments.ts`

```typescript
import { gql, useMutation, useQuery, useApolloClient } from '@apollo/client';
import { AdjustmentStatus, ProjectAdjustment, AdjustmentTask } from './types';

// ─── Fragments ────────────────────────────────────────────────────────────────
const ADJUSTMENT_TASK_FIELDS = gql`
  fragment AdjustmentTaskFields on AdjustmentTask {
    id
    title
    completed
    position
    created_at
    updated_at
  }
`;

const PROJECT_ADJUSTMENT_FIELDS = gql`
  ${ADJUSTMENT_TASK_FIELDS}
  fragment ProjectAdjustmentFields on ProjectAdjustment {
    id
    status
    created_at
    updated_at
    project_history {
      id
      project_id
      comment
      created_at
      user { id name }
    }
    tasks { ...AdjustmentTaskFields }
  }
`;

// ─── Operations ───────────────────────────────────────────────────────────────
const GET_PROJECT_ADJUSTMENTS = gql`
  ${PROJECT_ADJUSTMENT_FIELDS}
  query GetProjectAdjustments($projectId: ID!) {
    projectAdjustments(projectId: $projectId) {
      ...ProjectAdjustmentFields
    }
  }
`;

const CREATE_ADJUSTMENT = gql`
  ${PROJECT_ADJUSTMENT_FIELDS}
  mutation CreateAdjustment($data: CreateAdjustmentDto!) {
    createAdjustment(data: $data) {
      ...ProjectAdjustmentFields
    }
  }
`;

const UPDATE_ADJUSTMENT_STATUS = gql`
  ${ADJUSTMENT_TASK_FIELDS}
  mutation UpdateAdjustmentStatus($data: UpdateAdjustmentStatusDto!) {
    updateAdjustmentStatus(data: $data) {
      id
      status
      updated_at
      tasks { ...AdjustmentTaskFields }
    }
  }
`;

const ADD_ADJUSTMENT_TASK = gql`
  ${ADJUSTMENT_TASK_FIELDS}
  mutation AddAdjustmentTask($data: AddAdjustmentTaskDto!) {
    addAdjustmentTask(data: $data) {
      ...AdjustmentTaskFields
    }
  }
`;

const TOGGLE_ADJUSTMENT_TASK = gql`
  mutation ToggleAdjustmentTask($data: ToggleAdjustmentTaskDto!) {
    toggleAdjustmentTask(data: $data) {
      id
      title
      completed
      updated_at
    }
  }
`;

const REMOVE_ADJUSTMENT_TASK = gql`
  mutation RemoveAdjustmentTask($taskId: ID!) {
    removeAdjustmentTask(taskId: $taskId) {
      id
      title
    }
  }
`;

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useProjectAdjustments(projectId: string) {
  const client = useApolloClient();

  const { data, loading, error } = useQuery(GET_PROJECT_ADJUSTMENTS, {
    variables: { projectId },
    skip: !projectId,
  });

  // ── Helpers de cache ────────────────────────────────────────────────────────
  const readCache = () =>
    client.readQuery<{ projectAdjustments: ProjectAdjustment[] }>({
      query: GET_PROJECT_ADJUSTMENTS,
      variables: { projectId },
    });

  const writeCache = (adjustments: ProjectAdjustment[]) =>
    client.writeQuery({
      query: GET_PROJECT_ADJUSTMENTS,
      variables: { projectId },
      data: { projectAdjustments: adjustments },
    });

  // ── Mutations ────────────────────────────────────────────────────────────────

  /** Cria um adjustment com texto, tasks ou ambos. Atualiza o cache localmente. */
  const [createAdjustmentMutation, { loading: creating }] = useMutation(CREATE_ADJUSTMENT, {
    update(_, { data: result }) {
      const cached = readCache();
      const newItem: ProjectAdjustment = result.createAdjustment;
      writeCache([newItem, ...(cached?.projectAdjustments ?? [])]);
    },
  });

  const createAdjustment = (input: {
    comment?: string;
    tasks?: { title: string; position?: number }[];
  }) =>
    createAdjustmentMutation({
      variables: {
        data: { project_id: projectId, ...input },
      },
    });

  /** Troca o status de um adjustment (OPEN / IN_PROGRESS / CLOSED). */
  const [updateStatusMutation, { loading: updatingStatus }] = useMutation(UPDATE_ADJUSTMENT_STATUS, {
    update(cache, { data: result }) {
      const updated = result.updateAdjustmentStatus;
      cache.modify({
        id: cache.identify({ __typename: 'ProjectAdjustment', id: updated.id }),
        fields: {
          status: () => updated.status,
          updated_at: () => updated.updated_at,
        },
      });
    },
  });

  const updateStatus = (id: string, status: AdjustmentStatus) =>
    updateStatusMutation({ variables: { data: { id, status } } });

  /** Adiciona uma task ao final (ou com position específica). */
  const [addTaskMutation, { loading: addingTask }] = useMutation(ADD_ADJUSTMENT_TASK, {
    update(cache, { data: result }, { variables }) {
      const adjustmentId = variables?.data?.adjustment_id;
      const newTask: AdjustmentTask = result.addAdjustmentTask;
      cache.modify({
        id: cache.identify({ __typename: 'ProjectAdjustment', id: adjustmentId }),
        fields: {
          tasks(existing = []) {
            return [...existing, newTask];
          },
        },
      });
    },
  });

  const addTask = (adjustment_id: string, title: string, position?: number) =>
    addTaskMutation({ variables: { data: { adjustment_id, title, position } } });

  /** Marca ou desmarca uma task. Atualização otimista no cache. */
  const [toggleTaskMutation] = useMutation(TOGGLE_ADJUSTMENT_TASK, {
    update(cache, { data: result }) {
      const updated = result.toggleAdjustmentTask;
      cache.modify({
        id: cache.identify({ __typename: 'AdjustmentTask', id: updated.id }),
        fields: { completed: () => updated.completed },
      });
    },
  });

  const toggleTask = (task_id: string, completed: boolean) =>
    toggleTaskMutation({ variables: { data: { task_id, completed } } });

  /** Remove uma task pelo ID. */
  const [removeTaskMutation] = useMutation(REMOVE_ADJUSTMENT_TASK, {
    update(cache, { data: result }) {
      const removed = result.removeAdjustmentTask;
      cache.evict({ id: cache.identify({ __typename: 'AdjustmentTask', id: removed.id }) });
      cache.gc();
    },
  });

  const removeTask = (taskId: string) =>
    removeTaskMutation({ variables: { taskId } });

  return {
    adjustments: data?.projectAdjustments ?? [],
    loading,
    error,
    creating,
    updatingStatus,
    addingTask,
    createAdjustment,
    updateStatus,
    addTask,
    toggleTask,
    removeTask,
  };
}
```

---

## Componente de exemplo — `AdjustmentPanel.tsx`

```tsx
import { useState } from 'react';
import { useProjectAdjustments } from './use-project-adjustments';
import { AdjustmentStatus, ProjectAdjustment } from './types';

// ── Badge de status ────────────────────────────────────────────────────────────
const STATUS_LABEL: Record<AdjustmentStatus, string> = {
  OPEN: 'Em aberto',
  IN_PROGRESS: 'Em andamento',
  CLOSED: 'Concluído',
};

const STATUS_NEXT: Record<AdjustmentStatus, AdjustmentStatus | null> = {
  OPEN: 'IN_PROGRESS',
  IN_PROGRESS: 'CLOSED',
  CLOSED: null,
};

// ── Card de um adjustment ──────────────────────────────────────────────────────
function AdjustmentCard({
  adjustment,
  onStatusChange,
  onToggleTask,
  onAddTask,
  onRemoveTask,
}: {
  adjustment: ProjectAdjustment;
  onStatusChange: (id: string, status: AdjustmentStatus) => void;
  onToggleTask: (taskId: string, completed: boolean) => void;
  onAddTask: (adjustmentId: string, title: string) => void;
  onRemoveTask: (taskId: string) => void;
}) {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const next = STATUS_NEXT[adjustment.status];

  const completedCount = adjustment.tasks?.filter((t) => t.completed).length ?? 0;
  const totalCount = adjustment.tasks?.length ?? 0;

  const handleAddTask = () => {
    if (!newTaskTitle.trim()) return;
    onAddTask(adjustment.id, newTaskTitle.trim());
    setNewTaskTitle('');
  };

  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 16, marginBottom: 12 }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <strong style={{ fontSize: 13 }}>{adjustment.project_history?.user.name}</strong>
          <span style={{ marginLeft: 8, color: '#888', fontSize: 12 }}>
            {new Date(adjustment.created_at).toLocaleString()}
          </span>
        </div>
        <span
          style={{
            padding: '2px 10px',
            borderRadius: 12,
            fontSize: 12,
            background:
              adjustment.status === 'CLOSED'
                ? '#d1fae5'
                : adjustment.status === 'IN_PROGRESS'
                ? '#fef3c7'
                : '#fee2e2',
            color:
              adjustment.status === 'CLOSED'
                ? '#065f46'
                : adjustment.status === 'IN_PROGRESS'
                ? '#92400e'
                : '#991b1b',
          }}
        >
          {STATUS_LABEL[adjustment.status]}
        </span>
      </div>

      {/* Texto do ajuste */}
      {adjustment.project_history?.comment && (
        <p style={{ margin: '8px 0', color: '#374151' }}>{adjustment.project_history.comment}</p>
      )}

      {/* Todo list */}
      {totalCount > 0 && (
        <div style={{ marginTop: 8 }}>
          <p style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>
            Tarefas: {completedCount}/{totalCount}
          </p>
          {[...(adjustment.tasks ?? [])]
            .sort((a, b) => a.position - b.position)
            .map((task) => (
              <div key={task.id} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={(e) => onToggleTask(task.id, e.target.checked)}
                  disabled={adjustment.status === 'CLOSED'}
                />
                <span
                  style={{
                    fontSize: 14,
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? '#9ca3af' : '#111827',
                    flex: 1,
                  }}
                >
                  {task.title}
                </span>
                {adjustment.status !== 'CLOSED' && (
                  <button
                    onClick={() => onRemoveTask(task.id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', fontSize: 12 }}
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
        </div>
      )}

      {/* Adicionar task */}
      {adjustment.status !== 'CLOSED' && (
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <input
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Adicionar tarefa..."
            style={{ flex: 1, padding: '4px 8px', borderRadius: 4, border: '1px solid #d1d5db', fontSize: 13 }}
            onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
          />
          <button
            onClick={handleAddTask}
            disabled={!newTaskTitle.trim()}
            style={{ padding: '4px 12px', borderRadius: 4, fontSize: 13, cursor: 'pointer' }}
          >
            +
          </button>
        </div>
      )}

      {/* Avançar status */}
      {next && (
        <button
          onClick={() => onStatusChange(adjustment.id, next)}
          style={{ marginTop: 10, fontSize: 12, cursor: 'pointer', padding: '4px 12px', borderRadius: 4 }}
        >
          Mover para → {STATUS_LABEL[next]}
        </button>
      )}
    </div>
  );
}

// ── Painel principal ──────────────────────────────────────────────────────────
export function AdjustmentPanel({ projectId }: { projectId: string }) {
  const [comment, setComment] = useState('');
  const [taskInputs, setTaskInputs] = useState<string[]>([]);
  const [showForm, setShowForm] = useState(false);

  const {
    adjustments,
    loading,
    creating,
    createAdjustment,
    updateStatus,
    toggleTask,
    addTask,
    removeTask,
  } = useProjectAdjustments(projectId);

  const handleCreate = async () => {
    if (!comment.trim() && taskInputs.filter(Boolean).length === 0) return;
    await createAdjustment({
      comment: comment.trim() || undefined,
      tasks: taskInputs.filter(Boolean).map((title, idx) => ({ title, position: idx })),
    });
    setComment('');
    setTaskInputs([]);
    setShowForm(false);
  };

  const addTaskInput = () => setTaskInputs((prev) => [...prev, '']);
  const updateTaskInput = (idx: number, value: string) =>
    setTaskInputs((prev) => prev.map((t, i) => (i === idx ? value : t)));
  const removeTaskInput = (idx: number) =>
    setTaskInputs((prev) => prev.filter((_, i) => i !== idx));

  if (loading) return <p>Carregando ajustes...</p>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h3 style={{ margin: 0 }}>Ajustes solicitados ({adjustments.length})</h3>
        <button onClick={() => setShowForm((v) => !v)}>
          {showForm ? 'Cancelar' : '+ Novo ajuste'}
        </button>
      </div>

      {/* Formulário de criação */}
      {showForm && (
        <div style={{ border: '1px dashed #d1d5db', borderRadius: 8, padding: 16, marginBottom: 16 }}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Descreva o ajuste necessário..."
            rows={3}
            style={{ width: '100%', marginBottom: 8, padding: 8, borderRadius: 4, border: '1px solid #d1d5db' }}
          />

          {/* Tarefas opcionais */}
          {taskInputs.map((title, idx) => (
            <div key={idx} style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
              <input
                value={title}
                onChange={(e) => updateTaskInput(idx, e.target.value)}
                placeholder={`Tarefa ${idx + 1}`}
                style={{ flex: 1, padding: '4px 8px', borderRadius: 4, border: '1px solid #d1d5db' }}
              />
              <button onClick={() => removeTaskInput(idx)} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}>
                ✕
              </button>
            </div>
          ))}

          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <button onClick={addTaskInput} style={{ fontSize: 13 }}>
              + Adicionar tarefa
            </button>
            <button
              onClick={handleCreate}
              disabled={creating || (!comment.trim() && taskInputs.filter(Boolean).length === 0)}
              style={{ marginLeft: 'auto', padding: '6px 16px', cursor: 'pointer' }}
            >
              {creating ? 'Salvando...' : 'Salvar ajuste'}
            </button>
          </div>
        </div>
      )}

      {/* Lista de adjustments */}
      {adjustments.length === 0 ? (
        <p style={{ color: '#9ca3af', textAlign: 'center' }}>Nenhum ajuste registrado.</p>
      ) : (
        adjustments.map((adj) => (
          <AdjustmentCard
            key={adj.id}
            adjustment={adj}
            onStatusChange={updateStatus}
            onToggleTask={toggleTask}
            onAddTask={addTask}
            onRemoveTask={removeTask}
          />
        ))
      )}
    </div>
  );
}
```

---

## Integração com o ProjectHistory Feed

Ao listar o `ProjectHistory` de um projeto, entradas com `type === 'ADJUSTMENT_NEEDED'`
possuem o campo `adjustment` preenchido. Use-o para renderizar o card dentro do feed:

```typescript
// No componente que renderiza o feed de histórico:
{entry.type === 'ADJUSTMENT_NEEDED' && entry.adjustment ? (
  <AdjustmentCard
    adjustment={entry.adjustment}
    onStatusChange={updateStatus}
    onToggleTask={toggleTask}
    onAddTask={addTask}
    onRemoveTask={removeTask}
  />
) : entry.type === 'COMMENT' ? (
  <p>{entry.comment}</p>
) : (
  <p><em>[{entry.type}]</em> {/* evento automático */}</p>
)}
```

Para que o campo `adjustment` seja retornado pela query do histórico, inclua-o no selection set:

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
    user { id name }
    adjustment {
      id
      status
      tasks {
        id
        title
        completed
        position
      }
    }
  }
}
```

---

## Notificações em tempo real

Quando qualquer colaborador cria um adjustment, o backend publica dois eventos via PubSub:

1. **`projectHistoryAdded(projectId)`** — atualiza o feed de quem está com a tela do projeto aberta
2. **`userProjectHistoryAdded(userId)`** — notifica individualmente cada colaborador (owner, co-owner, voluntários)

O frontend não precisa de nenhuma configuração extra: a subscription `userProjectHistoryAdded`
já montada no `GlobalNotificationsWatcher` recebe essas notificações automaticamente.

> Ver `FRONTEND_PROJECT_HISTORY_IMPLEMENTATION.md` — seção *Notificações Globais* para detalhes
> da configuração do `GlobalNotificationsWatcher`.

---

## Ciclo de vida de um Adjustment

```
createAdjustment()
      │
      ▼
 status: OPEN  ──── updateStatus('IN_PROGRESS') ──▶  IN_PROGRESS
      │                                                    │
      │                                           updateStatus('CLOSED')
      │                                                    │
      └──────────────────────────────────────────▶  CLOSED
```

**Regras de negócio (a serem aplicadas no frontend):**
- Tasks podem ser marcadas como concluídas em qualquer status exceto `CLOSED`
- Ao atingir `CLOSED`, desabilitar checkboxes e input de nova task
- Não há rollback de status via UI (apenas a API aceita qualquer transição)
- O texto (`comment`) não pode ser editado após criação — se necessário, fechar e criar um novo adjustment

---

## Resumo das operações

| Operação | GraphQL | Argumento |
|---|---|---|
| Listar por projeto | `query projectAdjustments` | `projectId: ID!` |
| Buscar por ID | `query projectAdjustment` | `id: ID!` |
| Criar | `mutation createAdjustment` | `data: CreateAdjustmentDto!` |
| Atualizar status | `mutation updateAdjustmentStatus` | `data: UpdateAdjustmentStatusDto!` |
| Adicionar tarefa | `mutation addAdjustmentTask` | `data: AddAdjustmentTaskDto!` |
| Marcar/desmarcar tarefa | `mutation toggleAdjustmentTask` | `data: ToggleAdjustmentTaskDto!` |
| Remover tarefa | `mutation removeAdjustmentTask` | `taskId: ID!` |
