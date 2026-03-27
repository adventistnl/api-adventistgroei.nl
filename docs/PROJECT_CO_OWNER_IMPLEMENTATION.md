# Implementação do Co-Owner em Projetos

## Visão Geral

Este documento descreve a implementação completa do campo `co_owner_id` na entidade `Project`, permitindo que projetos tenham um proprietário secundário além do proprietário principal (`owner_id`).

## Alterações no Banco de Dados

### Schema Prisma

#### Model Project
Foi adicionado o campo `co_owner_id` e sua relação com o model `User`:

```prisma
model Project {
  // ... outros campos
  owner_id              String
  owner                 User                    @relation("ProjectOwner", fields: [owner_id], references: [id])
  co_owner_id           String?
  co_owner              User?                   @relation("ProjectCoOwner", fields: [co_owner_id], references: [id])
  // ... outros campos
}
```

#### Model User
Foram adicionadas as relações específicas para distinguir proprietários de co-proprietários:

```prisma
model User {
  // ... outros campos
  Project               Project[]                @relation("ProjectOwner")
  co_owned_projects     Project[]                @relation("ProjectCoOwner")
  // ... outros campos
}
```

### Migrations Criadas

1. **20260222131843_add_co_owner_to_project**: Adiciona a coluna `co_owner_id` à tabela `Project` e cria o índice de chave estrangeira
2. **20260222132457_add_update_project_co_owner_permission**: Adiciona a permissão `updateProjectCoOwner` ao enum `PermissionResolverName`

## Alterações no Código

### 1. DTOs (`src/dto/project.dto.ts`)

#### ProjectCreateDto
Adicionado o campo opcional `co_owner_id`:

```typescript
@Field({ nullable: true })
@IsOptional()
@IsString()
co_owner_id?: string;
```

#### ProjectUpdateDto
Adicionado o campo opcional `co_owner_id`:

```typescript
@Field({ nullable: true })
@IsOptional()
@IsString()
co_owner_id?: string;
```

#### ProjectUpdateCoOwnerDto (NOVO)
Criado um DTO específico para atualizar apenas o co-owner:

```typescript
@InputType()
export class ProjectUpdateCoOwnerDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  co_owner_id?: string;
}
```

### 2. Repository (`src/repositories/project.repository.ts`)

#### Método `create`
- Validação do `co_owner_id` se fornecido
- Conexão do co_owner ao projeto durante a criação

```typescript
// Validar co_owner_id se fornecido
if (data.co_owner_id) {
  await this.userRepository.findById(data.co_owner_id);
}

// Na criação do projeto
co_owner: data.co_owner_id ? { connect: { id: data.co_owner_id } } : undefined,
```

#### Método `update`
- Extração do `co_owner_id` dos dados de atualização
- Validação do `co_owner_id` se fornecido
- Suporte para conectar ou desconectar o co_owner

```typescript
const { institution_id, department_id, owner_id, co_owner_id, church_id, church_department_id, activities, ...rest } = data;

if (co_owner_id) {
  await this.userRepository.findById(co_owner_id);
}

// No update
co_owner: co_owner_id !== undefined ? (co_owner_id ? { connect: { id: co_owner_id } } : { disconnect: true }) : undefined,
```

#### Método `updateCoOwner` (NOVO)
Método específico para atualizar apenas o co_owner:

```typescript
async updateCoOwner(projectId: string, data: ProjectUpdateCoOwnerDto, userId: string): Promise<Project> {
  // Validar se o projeto existe
  const project = await this.findById(projectId);
  if (!project) {
    throw new Error(`Project with id ${projectId} not found`);
  }

  // Validar co_owner_id se fornecido
  if (data.co_owner_id) {
    await this.userRepository.findById(data.co_owner_id);
  }

  return this.prisma.project.update({
    where: { id: projectId },
    data: {
      co_owner: data.co_owner_id ? { connect: { id: data.co_owner_id } } : { disconnect: true },
      updated_by: userId,
    },
  });
}
```

#### Métodos de Busca (`findById`, `findManyByFilters`, `findOneByFilters`, `findAll`, `findByChurchId`)
Todos os métodos de busca foram atualizados para incluir o relacionamento `co_owner`:

```typescript
include: {
  owner: true,
  co_owner: true,  // Adicionado
  // ... outros includes
}
```

### 3. Service (`src/services/project.service.ts`)

#### Método `updateCoOwner` (NOVO)
Método no service que adiciona validações de negócio:

```typescript
async updateCoOwner(projectId: string, data: ProjectUpdateCoOwnerDto, userId: string): Promise<Project> {
  // Validar se o projeto existe e se não está concluído
  const existingProject = await this.findById(projectId);
  if (!existingProject) {
    throw new CustomGraphQLError(
      'Project not found',
      ErrorCode.NOT_FOUND,
      404,
      { additional: { errorCode: 'PROJECT_NOT_FOUND' } }
    );
  }

  // Block modification if project is CONCLUDED
  if (existingProject.status === ProjectStatus.CONCLUDED) {
    throw new CustomGraphQLError(
      'Cannot modify a concluded project',
      ErrorCode.BAD_REQUEST,
      400,
      { additional: { errorCode: 'PROJECT_IS_CONCLUDED' } }
    );
  }

  return this.projectRepository.updateCoOwner(projectId, data, userId);
}
```

### 4. Resolver (`src/graphql/project.resolver.ts`)

#### Mutation `updateProjectCoOwner` (NOVA)
Nova mutation GraphQL para atualizar apenas o co_owner:

```typescript
@Mutation(() => Project)
@UseGuards(PermissionsGuard)
@Permission()
async updateProjectCoOwner(
  @Args('id') id: string,
  @Args('data') data: ProjectUpdateCoOwnerDto,
  @Context() context: { userId: string },
): Promise<Project> {
  return this.projectService.updateCoOwner(id, data, context.userId);
}
```

## Permissões

Foi adicionada a permissão `updateProjectCoOwner` ao enum `PermissionResolverName` no schema Prisma. Esta permissão deve ser atribuída às roles apropriadas através do sistema de permissões da aplicação.

## Uso

### Criar um Projeto com Co-Owner

```graphql
mutation {
  createProject(data: {
    title: "Meu Projeto"
    description: "Descrição do projeto"
    department_id: "dept-id"
    owner_id: "owner-user-id"
    co_owner_id: "co-owner-user-id"
    # ... outros campos
  }) {
    id
    title
    owner {
      id
      name
    }
    co_owner {
      id
      name
    }
  }
}
```

### Atualizar um Projeto com Co-Owner

```graphql
mutation {
  updateProject(
    id: "project-id"
    data: {
      co_owner_id: "new-co-owner-user-id"
      # ... outros campos
    }
  ) {
    id
    title
    owner {
      id
      name
    }
    co_owner {
      id
      name
    }
  }
}
```

### Atualizar Apenas o Co-Owner

```graphql
mutation {
  updateProjectCoOwner(
    id: "project-id"
    data: {
      co_owner_id: "new-co-owner-user-id"
    }
  ) {
    id
    title
    owner {
      id
      name
    }
    co_owner {
      id
      name
    }
  }
}
```

### Remover o Co-Owner

Para remover o co-owner de um projeto, basta passar `null` ou omitir o campo na mutation:

```graphql
mutation {
  updateProjectCoOwner(
    id: "project-id"
    data: {
      co_owner_id: null
    }
  ) {
    id
    title
    owner {
      id
      name
    }
    co_owner {
      id
      name
    }
  }
}
```

## Validações

1. **Validação de Existência**: O `co_owner_id` é validado para garantir que o usuário existe no banco de dados
2. **Validação de Status**: Não é possível modificar o co_owner de um projeto com status `CONCLUDED`
3. **Validação de Projeto**: Verifica se o projeto existe antes de atualizar o co_owner

## Considerações Importantes

- O campo `co_owner_id` é opcional, permitindo projetos sem co-proprietário
- O co-owner é incluído automaticamente em todas as consultas de projetos
- As permissões devem ser configuradas adequadamente para a mutation `updateProjectCoOwner`
- A auditoria é mantida através do campo `updated_by` que registra o usuário que fez a alteração

## Status de Projetos

O enum `ProjectStatus` suporta os seguintes valores:
- **DRAFT**: Rascunho inicial do projeto
- **OPEN_REQUEST**: Solicitação aberta para avaliação
- **IN_REVIEW**: Projeto em revisão/avaliação
- **ADJUSTMENTS_NEEDED**: Correções necessárias
- **IN_PROGRESS**: Projeto em execução ativa
- **PENDING_RECEIPT**: Aguardando recebimento
- **WAITING_REFUND**: Aguardando reembolso
- **OVERDUE**: Prazo expirado/atrasado
- **ON_HOLD**: Em espera (legado)
- **EXPIRED**: Expirado (legado)
- **CONCLUDED**: Projeto totalmente concluído

## Próximos Passos (Opcionais)

1. Implementar lógica de permissões específicas para co-owners (se necessário)
2. Adicionar notificações quando um co-owner é adicionado/removido
3. Considerar adicionar validações para evitar que o mesmo usuário seja owner e co_owner
4. Implementar filtros de busca por co_owner_id se necessário

---

## Colaboradores do Projeto (`collaborators`)

### Visão Geral

O campo `collaborators` é um `@ResolveField` no `ProjectResolver` que retorna automaticamente **todos os usuários vinculados a um projeto**, consolidados em uma lista sem duplicatas. São considerados colaboradores:

| Origem | Role retornada |
|--------|----------------|
| `owner_id` do projeto | `owner` |
| `co_owner_id` do projeto | `co_owner` |
| Assignees das atividades | `assignee` |

> Se um usuário for `owner` e também estiver atribuído em uma atividade, ele é retornado **apenas uma vez** com o role mais relevante (`owner`). A prioridade é: `owner` > `co_owner` > `assignee`.

### Model (`src/models/project-collaborator.model.ts`)

```typescript
export enum CollaboratorRole {
  owner    = 'owner',
  co_owner = 'co_owner',
  assignee = 'assignee',
}

@ObjectType()
export class ProjectCollaborator {
  @Field(() => User)
  user: User;

  @Field(() => CollaboratorRole)
  role: CollaboratorRole;

  // IDs das atividades às quais este colaborador está atribuído
  @Field(() => [String], { nullable: true })
  activity_ids?: string[];
}
```

### Repository (`findCollaboratorsByProjectId`)

```typescript
// src/repositories/project.repository.ts
async findCollaboratorsByProjectId(projectId: string): Promise<ProjectCollaborator[]>
```

**Lógica de deduplicação:**
1. Busca o projeto com `owner`, `co_owner` e `activities.assignees` em uma única query Prisma
2. Itera na ordem de prioridade: owner → co_owner → assignees
3. Usa um `Map<userId, ProjectCollaborator>` para garantir unicidade
4. Para assignees que já são owner/co_owner, acumula os `activity_ids` sem alterar o role
5. Retorna `Array.from(map.values())`

### Service (`getProjectCollaborators`)

```typescript
// src/services/project.service.ts
async getProjectCollaborators(projectId: string): Promise<ProjectCollaborator[]> {
  return this.projectRepository.findCollaboratorsByProjectId(projectId);
}
```

### Resolver (`@ResolveField collaborators`)

```typescript
// src/graphql/project.resolver.ts
@ResolveField(() => [ProjectCollaborator], { name: 'collaborators' })
async getCollaborators(@Parent() project: Project): Promise<ProjectCollaborator[]> {
  return this.projectService.getProjectCollaborators(project.id);
}
```

> É um `@ResolveField`, portanto **não requer guard nem permissão própria** — é resolvido automaticamente sempre que `collaborators` for solicitado dentro de uma query `project` ou `projects` já autenticada.

### Uso no GraphQL

#### Via query `project` (um projeto)

```graphql
query {
  project(id: "project-id") {
    id
    title
    collaborators {
      role
      activity_ids
      user {
        id
        name
        email
      }
    }
  }
}
```

#### Via query `projects` (lista)

```graphql
query {
  projects(institutionId: "inst-id") {
    id
    title
    collaborators {
      role
      user {
        id
        name
      }
    }
  }
}
```

### Exemplo de Resposta

```json
{
  "collaborators": [
    {
      "role": "owner",
      "activity_ids": ["act-001", "act-003"],
      "user": { "id": "u1", "name": "João Silva", "email": "joao@exemplo.com" }
    },
    {
      "role": "co_owner",
      "activity_ids": [],
      "user": { "id": "u2", "name": "Maria Santos", "email": "maria@exemplo.com" }
    },
    {
      "role": "assignee",
      "activity_ids": ["act-001", "act-002"],
      "user": { "id": "u3", "name": "Pedro Oliveira", "email": "pedro@exemplo.com" }
    }
  ]
}
```

### Considerações de Performance

- A query ao banco é feita com um único `findUnique` com `include` aninhado
- O processamento de deduplicação acontece em memória via `Map`
- Para projetos com muitas atividades e assignees, considere adicionar cache via `DataLoader` se necessário

---

## Meus Projetos (`myProjects`)

### Visão Geral

A query `myProjects` retorna **todos os projetos onde o usuário autenticado tem algum vínculo**, seja como:

| Vínculo | Campo verificado |
|---------|-----------------|
| Proprietário principal | `Project.owner_id = userId` |
| Co-proprietário | `Project.co_owner_id = userId` |
| Responsável por atividade | `activities.assignees.user_id = userId` |

O filtro é feito diretamente no banco via `OR` do Prisma — sem processamento em memória — e já retorna os dados completos de cada projeto (departamento, church, atividades, etc.).

> **Importante:** Projetos excluídos (`is_deleted = true`) e atividades excluídas são automaticamente filtrados.

---

### Arquivos Alterados

#### 1. Schema — Nova Permissão (`prisma/schema.prisma`)

```prisma
enum PermissionResolverName {
  // ...
  myProjects   // ← ADICIONADO
  projects
  project
  // ...
}
```

Migration criada: `20260222150614_add_my_projects_permission`

---

#### 2. Repository (`src/repositories/project.repository.ts`)

```typescript
async findMyProjects(userId: string): Promise<Project[]> {
  return this.prisma.project.findMany({
    where: {
      is_deleted: false,
      OR: [
        { owner_id: userId },
        { co_owner_id: userId },
        {
          activities: {
            some: {
              is_deleted: false,
              assignees: { some: { user_id: userId } },
            },
          },
        },
      ],
    },
    include: {
      owner: true,
      co_owner: true,
      department: { include: { church: true } },
      Institution: true,
      church: true,
      activities: {
        where: { is_deleted: false },
        include: {
          assignees: { include: { user: true } },
          activity_funding: true,
          activity_documents: { where: { is_deleted: false } },
        },
      },
    },
    orderBy: { created_at: 'desc' },
  });
}
```

---

#### 3. Service (`src/services/project.service.ts`)

```typescript
async getMyProjects(userId: string): Promise<Project[]> {
  return this.projectRepository.findMyProjects(userId);
}
```

---

#### 4. Resolver (`src/graphql/project.resolver.ts`)

```typescript
@Query(() => [Project])
@UseGuards(PermissionsGuard)
@Permission()
async myProjects(
  @Context() context: { userId: string },
): Promise<Project[]> {
  return this.projectService.getMyProjects(context.userId);
}
```

> O `userId` é extraído automaticamente do JWT pelo contexto do GraphQL — nenhum argumento precisa ser passado pelo cliente.

---

### Uso no GraphQL

#### Query básica

```graphql
query {
  myProjects {
    id
    title
    status
    owner {
      id
      name
    }
    co_owner {
      id
      name
    }
  }
}
```

#### Com colaboradores (combinando `myProjects` + `collaborators`)

```graphql
query {
  myProjects {
    id
    title
    status
    start_at
    end_at
    deadline
    budget
    owner {
      id
      name
      email
    }
    co_owner {
      id
      name
      email
    }
    collaborators {
      role
      activity_ids
      user {
        id
        name
        email
      }
    }
  }
}
```

#### Com atividades completas

```graphql
query {
  myProjects {
    id
    title
    status
    activities {
      id
      name
      status
      deadline
      assignees {
        user {
          id
          name
        }
      }
    }
  }
}
```

---

### Exemplo de Resposta

```json
{
  "myProjects": [
    {
      "id": "proj-001",
      "title": "Evangelismo Regional 2026",
      "status": "IN_PROGRESS",
      "start_at": "2026-03-01T00:00:00.000Z",
      "end_at": "2026-06-30T00:00:00.000Z",
      "owner": { "id": "u1", "name": "João Silva" },
      "co_owner": null,
      "collaborators": [
        { "role": "owner",    "user": { "id": "u1", "name": "João Silva" }, "activity_ids": ["act-1"] },
        { "role": "assignee", "user": { "id": "u3", "name": "Pedro Lima" }, "activity_ids": ["act-1", "act-2"] }
      ]
    },
    {
      "id": "proj-002",
      "title": "Construção Sede",
      "status": "OPEN_REQUEST",
      "owner": { "id": "u5", "name": "Ana Souza" },
      "co_owner": { "id": "u1", "name": "João Silva" },
      "collaborators": [
        { "role": "co_owner", "user": { "id": "u1", "name": "João Silva" }, "activity_ids": [] }
      ]
    }
  ]
}
```

> No segundo projeto, `João Silva` (`u1`) aparece como `co_owner` — ele não é owner, mas está listado em `myProjects` porque `co_owner_id = u1`.

---

### Regras de Negócio

1. **Sem argumentos:** O filtro usa exclusivamente o `userId` do token JWT — o client não passa nenhum parâmetro
2. **Ordenação:** Os projetos são retornados do mais recente para o mais antigo (`created_at DESC`)
3. **Projetos excluídos:** `is_deleted = true` é sempre excluído da query
4. **Atividades excluídas:** Atividades com `is_deleted = true` não geram vínculo e não aparecem nos includes
5. **Permissão:** Requer a permissão `myProjects` atribuída à role do usuário no sistema de permissões
