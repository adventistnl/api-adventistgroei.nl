# Documentação Frontend: Query Completa de Detalhes do Projeto

## Visão Geral

A query `project(id)` retorna um projeto com **todos os dados aninhados** em uma única requisição GraphQL. Ela carrega automaticamente:

- Dados base do projeto (owner, co_owner, department, church, institution)
- **Atividades** registradas no projeto (com assignees, documentos e funding)
- **Subsidy Requests** do projeto (via `@ResolveField` separado)
- **Colaboradores** do projeto (owner + co_owner + assignees, sem duplicatas)
- **KPIs** calculados do projeto

> **Como funciona internamente:**
> - `activities`, `owner`, `co_owner`, `department`, `Institution`, `church` e `special_projects` são carregados em uma única query Prisma via `findById` no repository.
> - `subsidies` é um `@ResolveField` que executa uma segunda query para buscar pedidos de subsídio via `SubsidyRequestRepository.findManyByFilters({ project_id })`.
> - `collaborators` é um `@ResolveField` que consolida owner + co_owner + assignees sem duplicatas, atribuindo o papel (`owner`, `co_owner`, `assignee`) a cada usuário.
> - `kpis` é um `@ResolveField` que calcula métricas sob demanda — **inclua somente se necessário**, pois executa cálculos adicionais.

---

## Permissões Necessárias

| Campo solicitado | Permissão |
|---|---|
| `project(id)` | `project` |
| `kpis` | `getSpecificProjectKPIs` |
| Demais campos (`activities`, `subsidies`, `collaborators`) | Incluídos automaticamente com `project` |

---

## Query Completa (todos os dados)

```graphql
query GetProjectDetail($id: String!) {
  project(id: $id) {
    # === DADOS BASE DO PROJETO ===
    id
    title
    description
    status
    type
    language_preference
    budget
    subsidized_budget
    balance
    is_private
    required_volunteers
    start_at
    end_at
    deadline
    created_at
    updated_at

    # === PROPRIETÁRIOS ===
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

    # === DEPARTAMENTO E LOCALIZAÇÃO ===
    department_id
    department {
      id
      name
      description
      church {
        id
        name
      }
    }
    institution_id
    Institution {
      id
      name
    }
    church_id
    church {
      id
      name
      type
    }

    # === ATIVIDADES ===
    activities {
      id
      name
      description
      status
      priority
      budget_amount
      deadline
      tags
      custom_tags
      is_subsidized
      created_at
      updated_at

      # Responsáveis pela atividade
      assignees {
        id
        user_id
        user {
          id
          name
          email
        }
      }

      # Financiamento da atividade
      activity_funding {
        id
        entity_type
        entity_id
        entity_contribution_amount
        entity_contribution_percent
        validated
      }

      # Documentos da atividade
      activity_documents {
        id
        filename
        file_url
        type
        is_validated
        validated_at
        uploaded_by
        created_at
      }
    }

    # === SUBSIDY REQUESTS (pedidos de subsídio) ===
    subsidies {
      id
      description
      total_budget
      approved_amount
      rejection_reason
      priority
      is_for_advance
      advance_amount
      refund_amount
      have_refund
      refund_done
      created_at
      updated_at
      approved_at

      # Status atual do subsídio
      subsidy_status {
        id
        name
        description
        order
      }

      # Solicitante
      requester {
        id
        name
        email
      }

      # Instituição vinculada
      institution {
        id
        name
      }

      # Departamento vinculado
      department {
        id
        name
      }

      # Igreja vinculada (opcional)
      church {
        id
        name
      }

      # Itens do pedido (atividades vinculadas ao subsídio)
      items {
        id
        requested_amount
        approved_amount
        notes
        project_activity {
          id
          name
          status
          budget_amount
          activity_documents {
            id
            filename
            is_validated
          }
        }
      }

      # Comprovantes de subsídio
      subsidy_receipts {
        id
        filename
        file_url
        type
        amount
        approved
        is_validated
        validated_at
      }
    }

    # === COLABORADORES (owner + co_owner + assignees sem duplicatas) ===
    collaborators {
      role       # "owner" | "co_owner" | "assignee"
      activity_ids  # IDs das atividades onde este usuário é assignee
      user {
        id
        name
        email
      }
    }

    # === KPIs DO PROJETO (opcional — executa cálculo adicional) ===
    kpis {
      totalActivities
      completedActivities
      inProgressActivities
      completionRate
      projectBudget
      allocatedBudget
      subsidizedBudget
      balance
      subsidizedBudgetPercentage
      budgetUtilization
      subsidizedActivities
      subsidyRate
      totalSubsidyAmount
      subsidyRequestsCount
      approvedSubsidyRequestsCount
      daysRemaining
      endDate
      projectStatus
    }
  }
}
```

**Variáveis:**
```json
{
  "id": "<uuid-do-projeto>"
}
```

---

## Queries por Seção (uso modular)

Use estas versões reduzidas quando o frontend só precisar de parte dos dados.

### Apenas dados base + proprietários

```graphql
query GetProjectBase($id: String!) {
  project(id: $id) {
    id
    title
    description
    status
    type
    budget
    subsidized_budget
    balance
    start_at
    end_at
    deadline
    is_private
    required_volunteers
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
    department {
      id
      name
    }
    Institution {
      id
      name
    }
    church {
      id
      name
    }
  }
}
```

---

### Apenas atividades do projeto

```graphql
query GetProjectActivities($id: String!) {
  project(id: $id) {
    id
    activities {
      id
      name
      description
      status
      priority
      budget_amount
      deadline
      tags
      custom_tags
      is_subsidized
      assignees {
        user_id
        user {
          id
          name
          email
        }
      }
      activity_funding {
        entity_type
        entity_contribution_amount
        entity_contribution_percent
        validated
      }
      activity_documents {
        id
        filename
        file_url
        type
        is_validated
      }
    }
  }
}
```

---

### Apenas subsidy requests do projeto

```graphql
query GetProjectSubsidies($id: String!) {
  project(id: $id) {
    id
    subsidies {
      id
      description
      total_budget
      approved_amount
      priority
      is_for_advance
      advance_amount
      refund_amount
      have_refund
      refund_done
      created_at
      subsidy_status {
        id
        name
        order
      }
      requester {
        id
        name
        email
      }
      items {
        id
        requested_amount
        approved_amount
        notes
        project_activity {
          id
          name
          status
        }
      }
      subsidy_receipts {
        id
        filename
        amount
        approved
        is_validated
      }
    }
  }
}
```

---

### Apenas colaboradores do projeto

```graphql
query GetProjectCollaborators($id: String!) {
  project(id: $id) {
    id
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

> **Sobre `role`:** O enum `CollaboratorRole` possui três valores:
> - `owner` — proprietário principal
> - `co_owner` — co-proprietário
> - `assignee` — responsável por uma ou mais atividades

> **Sobre `activity_ids`:** Para o `role = assignee`, este campo lista os IDs das atividades às quais o usuário está vinculado. Para `owner` e `co_owner`, pode conter IDs se eles também forem assignees de atividades.

---

## Comportamentos Importantes

### Filtragem automática de dados deletados

O backend **exclui automaticamente** dados deletados:
- `activities`: apenas `is_deleted = false`
- `activity_documents`: apenas `is_deleted = false`
- `subsidies`: apenas `is_deleted = false` E `requester.is_deleted = false`
- `items` dos subsídios: apenas `is_deleted = false`

O frontend **não precisa filtrar** — os dados já chegam limpos.

### Subsídios via ResolveField

O campo `subsidies` usa um `@ResolveField` que executa uma **segunda query ao banco** por `project_id`. Isso significa que se você buscar uma lista de projetos com `subsidies`, será disparada uma consulta de subsídios para **cada projeto** da lista (problema N+1). Para listas, prefira **não solicitar `subsidies`** — use apenas na tela de detalhe de um projeto.

### Collaborators sem duplicatas

O campo `collaborators` consolida owner + co_owner + assignees removendo duplicatas. A prioridade é:
1. `owner` tem precedência sobre todos
2. `co_owner` tem precedência sobre `assignee`
3. Um usuário que é owner E assignee aparece apenas uma vez com o papel `owner`, mas seu `activity_ids` acumula os IDs das atividades

---

## Tipos TypeScript Sugeridos

```typescript
// Resultado da query project
interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  type: 'Local' | 'Global';
  budget: number;
  subsidized_budget: number;
  balance: number;
  is_private: boolean;
  required_volunteers: boolean;
  start_at: string;
  end_at: string;
  deadline?: string;
  created_at: string;
  updated_at: string;
  owner_id: string;
  owner: UserBasic;
  co_owner_id?: string;
  co_owner?: UserBasic;
  department: Department;
  Institution?: Institution;
  church?: Church;
  activities: ProjectActivity[];
  subsidies: SubsidyRequest[];
  collaborators: ProjectCollaborator[];
  kpis?: ProjectKPIs;
}

interface ProjectActivity {
  id: string;
  name: string;
  description: string;
  status: ActivityStatus;
  priority: ActivityPriority;
  budget_amount: number;
  deadline: string;
  tags: ActivityTags[];
  custom_tags: string[];
  is_subsidized: boolean;
  assignees: ActivityAssignee[];
  activity_funding?: ActivityFunding;
  activity_documents: ActivityDocument[];
}

interface SubsidyRequest {
  id: string;
  description: string;
  total_budget: number;
  approved_amount: number;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  is_for_advance: boolean;
  advance_amount?: number;
  refund_amount: number;
  have_refund: boolean;
  refund_done: boolean;
  subsidy_status: SubsidyStatus;
  requester: UserBasic;
  institution: Institution;
  department: Department;
  church?: Church;
  items: SubsidyRequestItem[];
  subsidy_receipts: SubsidyReceipt[];
}

interface ProjectCollaborator {
  role: 'owner' | 'co_owner' | 'assignee';
  activity_ids: string[];
  user: UserBasic;
}

type ProjectStatus =
  | 'DRAFT' | 'OPEN_REQUEST' | 'IN_REVIEW' | 'ADJUSTMENTS_NEEDED'
  | 'IN_PROGRESS' | 'PENDING_RECEIPT' | 'WAITING_REFUND'
  | 'OVERDUE' | 'ON_HOLD' | 'EXPIRED' | 'CONCLUDED';

type ActivityStatus = 'TODO' | 'IN_PROGRESS' | 'COMPLETED' | 'ON_HOLD';
type ActivityPriority = 'URGENT' | 'HIGH' | 'MEDIUM' | 'LOW';
```

---

## Exemplo de Uso com Apollo Client (React)

```typescript
import { gql, useQuery } from '@apollo/client';

const GET_PROJECT_DETAIL = gql`
  query GetProjectDetail($id: String!) {
    project(id: $id) {
      id
      title
      status
      budget
      owner { id name email }
      co_owner { id name email }
      department { id name }
      activities {
        id
        name
        status
        priority
        budget_amount
        deadline
        is_subsidized
        assignees {
          user { id name email }
        }
      }
      subsidies {
        id
        total_budget
        approved_amount
        subsidy_status { name }
        requester { id name }
        items {
          id
          requested_amount
          project_activity { id name }
        }
      }
      collaborators {
        role
        activity_ids
        user { id name email }
      }
    }
  }
`;

function ProjectDetailPage({ projectId }: { projectId: string }) {
  const { data, loading, error } = useQuery(GET_PROJECT_DETAIL, {
    variables: { id: projectId },
  });

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error.message} />;

  const project = data?.project;

  return (
    <div>
      <ProjectHeader project={project} />
      <ActivitiesList activities={project.activities} />
      <SubsidiesList subsidies={project.subsidies} />
      <CollaboratorsList collaborators={project.collaborators} />
    </div>
  );
}
```
