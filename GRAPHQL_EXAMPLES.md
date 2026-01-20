# Exemplos de Queries e Mutations - Annual Budget System

## QUERIES IMPLEMENTADAS

### 1. Buscar Orçamentos Anuais
```graphql
query GetAnnualBudgets {
  annualBudgets(where: {
    year: { equals: 2025 }
    status: { equals: DRAFT }
    institution_id: { equals: "institution-id" }
  }) {
    id
    year
    planned_budget
    total_expenses
    balance
    status
    description
    entity_type
    institution {
      id
      name
    }
    church {
      id
      name
    }
    department {
      id
      name
    }
    created_at
    updated_at
  }
}
```

### 2. Buscar Orçamento por ID
```graphql
  annualBudget(id: $id) {
    id
    year
    planned_budget
    total_expenses
    balance
    status
    description
    justification
    requested_amount
    approved_amount
    priority
    category
    entity_type
    is_locked
    institution {
      id
      name
    }
    created_by
    updated_by
    created_at
    updated_at
  }
}
```

### 3. KPIs de Orçamento
```graphql
  budgetKPIs(year: $year) {
    totalInstitutionBudget
    totalAllocated
    totalSpent
    budgetRemaining
    budgetUtilization
    departmentCount
  }
}
```

### 4. Gastos por Departamento
```graphql
  departmentSpending(year: $year) {
    departmentId
    departmentName
    totalBudget
    totalSpent
    utilizationPercentage
  }
}
```

### 5. Gastos ao Longo do Tempo
```graphql
  spendingOverTime(year: $year) {
    month
    totalSpent
    budgetAllocated
  }
}
```

### 6. Distribuição de Orçamento
```graphql
  budgetDistribution(year: $year) {
    entityType
    entityId
    entityName
    planned
    allocated
    spent
    remaining
  }
}
```

### 7. Distribuição por Entidade
```graphql
  entityDistribution(year: $year) {
    institutions {
      id
      name
      totalBudget
      totalSpent
      utilization
    }
    churches {
      id
      name
      totalBudget
      totalSpent
      utilization
    }
    departments {
      id
      name
      totalBudget
      totalSpent
      utilization
    }
  }
}
```

## MUTATIONS IMPLEMENTADAS

### 1. Criar Orçamento Anual
```graphql
  createAnnualBudget(data: $data) {
    id
    year
    planned_budget
    total_expenses
    balance
    status
    description
    entity_type
    created_at
  }
}

# Variables
{
  "data": {
    "year": 2025,
    "planned_budget": 50000.00,
    "description": "Orçamento anual para manutenção",
    "justification": "Necessário para manutenção das instalações",
    "requested_amount": 50000.00,
    "entity_type": "INSTITUTION",
    "entity_id": "institution-id",
    "total_expenses": 0.00
  }
}
```

### 2. Atualizar Orçamento Anual
```graphql
  updateAnnualBudget(id: $id, data: $data) {
    id
    planned_budget
    total_expenses
    balance
    description
    justification
    updated_at
  }
}

# Variables
{
  "id": "budget-id",
  "data": {
    "planned_budget": 55000.00,
    "total_expenses": 5000.00,
    "description": "Orçamento atualizado com novos valores"
  }
}
```

### 3. Excluir Orçamento Anual
```graphql
  deleteAnnualBudget(id: $id) {
    success
    message
  }
}

# Variables
{
  "id": "budget-id"
}
```

### 4. Aprovar Orçamento Anual
```graphql
  approveAnnualBudget(id: $id, data: $data) {
    id
    status
    approved_amount
    approval_date
    approved_by
    notes
    updated_at
  }
}

# Variables
{
  "id": "budget-id",
  "data": {
    "approved_amount": 45000.00,
    "notes": "Aprovado com ajustes no valor"
  }
}
```

### 5. Rejeitar Orçamento Anual
```graphql
  rejectAnnualBudget(id: $id, data: $data) {
    id
    status
    review_date
    reviewed_by
    notes
    updated_at
  }
}

# Variables
{
  "id": "budget-id",
  "data": {
    "reason": "Valor solicitado excede o orçamento disponível"
  }
}
```

### 6. Solicitar Revisão de Orçamento
```graphql
  requestRevisionAnnualBudget(id: $id, data: $data) {
    id
    status
    review_date
    reviewed_by
    notes
    updated_at
  }
}

# Variables
{
  "id": "budget-id",
  "data": {
    "revision_notes": "Por favor, ajustar o valor para R$ 40.000,00"
  }
}
```

### 7. Toggle Lock/Unlock Orçamento
```graphql
  toggleBudgetLock(id: $id) {
    id
    is_locked
    updated_at
  }
}

# Variables
{
  "id": "budget-id"
}
```

## EXEMPLOS PRÁTICOS DE USO

### Workflow Completo de Aprovação

```graphql
# 1. Criar orçamento
mutation CreateBudget {
  createAnnualBudget(data: {
    year: 2025
    planned_budget: 100000.00
    description: "Orçamento para evangelismo"
    requested_amount: 100000.00
    entity_type: INSTITUTION
    entity_id: "institution-id"
    total_expenses: 0.00
  }) {
    id
    status
  }
}

# 2. Atualizar valores
  updateAnnualBudget(id: $id, data: {
    total_expenses: 15000.00
  }) {
    id
    balance
    total_expenses
  }
}

# 3. Submeter para aprovação (não implementado ainda)
#   submitAnnualBudget(id: $id) {
#     id
#     status
#     submitted_date
#   }
# }

# 4. Aprovar orçamento
  approveAnnualBudget(id: $id, data: {
    approved_amount: 85000.00
    notes: "Aprovado com redução de 15%"
  }) {
    id
    status
    approved_amount
    approval_date
  }
}

# 5. Bloquear edição
  toggleBudgetLock(id: $id) {
    id
    is_locked
  }
}
```

### Consultas de Relatórios

```graphql
# Dashboard de orçamento
  kpis: budgetKPIs(year: $year) {
    totalInstitutionBudget
    budgetUtilization
    departmentCount
  }
  
  departmentSpending: departmentSpending(year: $year) {
    departmentName
    totalBudget
    utilizationPercentage
  }
  
  distribution: budgetDistribution(year: $year) {
    entityType
    entityName
    planned
    spent
    remaining
  }
}

# Variables
{
  "year": 2025
}
```

### Gestão de Orçamentos por Status

```graphql
# Orçamentos pendentes de aprovação
query PendingBudgets {
  annualBudgets(where: {
    status: { equals: SUBMITTED }
    year: { equals: 2025 }
  }) {
    id
    description
    requested_amount
    entity_type
    institution {
      name
    }
    church {
      name
    }
    created_by
    created_at
  }
}

# Orçamentos rejeitados
query RejectedBudgets {
  annualBudgets(where: {
    status: { equals: REJECTED }
    year: { equals: 2025 }
  }) {
    id
    description
    notes
    review_date
    reviewed_by
  }
}
```

## TIPOS DE DADOS

### AnnualBudgetStatus
- DRAFT: Rascunho
- SUBMITTED: Submetido para aprovação
- APPROVED: Aprovado
- REJECTED: Rejeitado
- REVISION_REQUESTED: Revisão solicitada
- IN_PROGRESS: Em andamento
- CLOSED: Fechado

### AnnualBudgetEntityType
- INSTITUTION: Instituição
- CHURCH: Igreja
- INSTITUTION_DEPARTMENT: Departamento institucional
- CHURCH_DEPARTMENT: Departamento de igreja

### AnnualBudgetPriority
- LOW: Baixa
- MEDIUM: Média
- HIGH: Alta
- URGENT: Urgente

### AnnualBudgetCategory
- OPERATIONAL: Operacional
- PROJECT: Projeto
- MAINTENANCE: Manutenção
- EMERGENCY: Emergência
- EXPANSION: Expansão
```
