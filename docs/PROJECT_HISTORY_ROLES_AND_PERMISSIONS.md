# Project History — Roles, Permissões e Implementação

## Visão Geral das Roles

Existem duas roles diretamente relacionadas ao módulo de Project History:

| Role | `key_code` | Descrição |
|---|---|---|
| **Project Owner** | `PROJECT_OWNER` | Dono do projeto — acesso completo ao histórico (ler, comentar, deletar) |
| **Project Collaborator** | `PROJECT_COLLABORATOR` | Colaborador assignee — pode ler histórico, comentar e gerenciar atividades |

---

## Permissões de Project History

| Permission `key_code` | Resolver | Quem tem |
|---|---|---|
| `PROJECT_HISTORIES_ACCESS` | `projectHistories` | Admin, Project Owner, Project Collaborator, Dev |
| `PROJECT_HISTORY_CREATE` | `createProjectHistory` | Admin, Project Owner, Project Collaborator, Dev |
| `PROJECT_HISTORY_DELETE` | `deleteProjectHistory` | Admin, Project Owner, Dev |

> **Regra**: Qualquer colaborador pode **ler e comentar**. Somente Owner e Admin podem **deletar** entradas.

---

## Role: Project Owner (`PROJECT_OWNER`)

Permissões de histórico adicionadas:

```
PROJECT_HISTORIES_ACCESS  — listar histórico do projeto
PROJECT_HISTORY_CREATE    — criar comentário / registrar evento
PROJECT_HISTORY_DELETE    — deletar qualquer entrada do histórico
```

**Como atribuir ao usuário** (via GraphQL):
```graphql
mutation {
  addRoleToUser(userId: "uuid-do-user", roleKeyCode: "PROJECT_OWNER") {
    id
    name
  }
}
```

---

## Role: Project Collaborator (`PROJECT_COLLABORATOR`) — Nova role

Role criada especificamente para usuários que são **assignees** de atividades de um projeto, mas não são donos.

### Permissões completas da role:

#### Leitura básica
| key_code | Descrição |
|---|---|
| `USERS_ACCESS` | Listar usuários |
| `USER_ACCESS` | Ver usuário |
| `USER_OWN_UPDATE` | Editar próprio perfil |
| `ROLES_ACCESS` / `ROLE_ACCESS` | Ver roles |
| `PROJECTS_ACCESS` / `PROJECT_ACCESS` | Ver projetos |
| `MY_PROJECTS_ACCESS` | Ver meus projetos |

#### Atividades
| key_code | Descrição |
|---|---|
| `PROJECT_ACTIVITIES_ACCESS` | Listar atividades |
| `ACTIVITY_ACCESS` | Ver atividade |
| `PROJECT_ACTIVITY_CREATE` | Criar atividade |
| `PROJECT_ACTIVITY_UPDATE` | Atualizar atividade |
| `PROJECT_ACTIVITY_LOGS_ACCESS` | Ver logs de atividade |
| `GET_ACTIVITY_DOCUMENTS` | Listar documentos |
| `DOWNLOAD_ACTIVITY_DOCUMENT` | Baixar documento |
| `UPLOAD_ACTIVITY_DOCUMENT` | Enviar documento |

> **Não inclui**: `PROJECT_ACTIVITY_DELETE`, `PROJECT_ACTIVITIES_BATCH_UPDATE`, `VALIDATE_ACTIVITY_DOCUMENT`, `DELETE_ACTIVITY_DOCUMENT`

#### Project History
| key_code | Descrição |
|---|---|
| `PROJECT_HISTORIES_ACCESS` | Ler histórico do projeto |
| `PROJECT_HISTORY_CREATE` | Commentar no histórico |

> **Não inclui**: `PROJECT_HISTORY_DELETE` — colaboradores não podem deletar entradas

---

## Como usar no frontend

### 1. Verificar se o usuário pode comentar

```typescript
// Checar se a permissão está presente nas permissões do usuário
const canComment = userPermissions.includes('PROJECT_HISTORY_CREATE');
const canDelete  = userPermissions.includes('PROJECT_HISTORY_DELETE');
```

### 2. Listar permissões do usuário atual

```graphql
query GetMyPermissions {
  users(filters: "me") {
    user_roles {
      role {
        role_permissions {
          permission {
            key_code
          }
        }
      }
    }
  }
}
```

### 3. Atribuir role PROJECT_COLLABORATOR ao usuário

```graphql
mutation AssignCollaboratorRole($userId: String!) {
  addRoleToUser(userId: $userId, roleKeyCode: "PROJECT_COLLABORATOR") {
    id
    name
    user_roles {
      role {
        name
        key_code
      }
    }
  }
}
```

### 4. Remover role de um usuário

```graphql
mutation RemoveCollaboratorRole($userId: String!) {
  removeRoleFromUser(userId: $userId, roleKeyCode: "PROJECT_COLLABORATOR") {
    id
    name
  }
}
```

---

## Matriz de Permissões por Role

| Operação | Admin | Project Owner | Project Collaborator | Dev |
|---|:---:|:---:|:---:|:---:|
| Ler histórico | ✅ | ✅ | ✅ | ✅ |
| Comentar (criar) | ✅ | ✅ | ✅ | ✅ |
| Deletar entrada | ✅ | ✅ | ❌ | ✅ |
| Criar atividade | ✅ | ✅ | ✅ | ✅ |
| Atualizar atividade | ✅ | ✅ | ✅ | ✅ |
| Deletar atividade | ✅ | ✅ | ❌ | ✅ |
| Batch update atividades | ✅ | ✅ | ❌ | ✅ |
| Validar documento | ✅ | ✅ | ❌ | ✅ |
| Deletar documento | ✅ | ✅ | ❌ | ✅ |

---

## Scripts de seed

Os scripts já foram executados e as roles/permissões estão no banco. Para reexecutar após um reset:

```bash
# 1. Permissões primeiro
pnpm seed:permissions

# 2. Roles (recria/atualiza todas as roles com suas permissões)
pnpm seed:roles

# Ou ambos juntos
pnpm seed:permissions && pnpm seed:roles
```

---

## Resultado do último seed

```
✅ Role "Admin"                          — 87 permissões
✅ Role "Church Member"                  —  9 permissões
✅ Role "Church Leader"                  — 46 permissões
✅ Role "Financial Manager"              — 49 permissões
✅ Role "Institutional Member"           — 18 permissões
✅ Role "Institutional Leader"           — 66 permissões
✅ Role "Institutional Department Leader" — 54 permissões
✅ Role "Church Department Leader"       — 39 permissões
✅ Role "Project Owner"                  — 47 permissões  (+3 history)
✅ Role "Project Collaborator"           — 18 permissões  (nova role)
✅ Role "Developer"                      — 134 permissões (todas)
```
