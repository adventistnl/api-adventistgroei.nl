# Análise da Query GraphQL - GET_SUBSIDY_REQUESTS

## ✅ O que está Correto

1. **Estrutura geral** - Bem organizada e legível
2. **Relacionamentos principais** - Traz subsidy_status, institution, department, church, project
3. **Dados aninhados** - Items com project_activity e receipts
4. **Alias de campo** - `receipts: subsidy_receipts` é válido
5. **Comentário explicativo** - Documentação sobre o problema de `project.department`

---

## ⚠️ Problemas Identificados

### 1. **CRÍTICO: Falta campo `status` do SubsidyRequest**

**Problema:**
```graphql
# ❌ Falta aqui! Qual é o status atual?
subsidy_status {
  id
  name
  description
}
```

Você está buscando o relacionamento `subsidy_status`, mas e o campo `subsidy_status_id` ou `status`?

**Solução:**
```graphql
✅ Adicionar especificamente qual é o status ID:
subsidy_status_id
subsidy_status {
  id
  name
  description
}
```

---

### 2. **Problema de Performance: Trazendo TODOS os usuários da instituição**

**Problema:**
```graphql
institution {
  id
  name
  users {  # ← Isto traz TODOS os users da instituição!
    id
    name
    email
    language_preference
    is_deleted
    user_roles {
      id
      role {
        id
        key_code
      }
    }
  }
}
```

Para uma instituição com 500+ usuários, isso é extremamente pesado.

**Solução: Remover ou fazer filtro**
```graphql
✅ OPÇÃO 1 - Remover users (você não precisa dela)
institution {
  id
  name
}

✅ OPÇÃO 2 - Se precisa de algum user específico, criar um campo dedicado
institution {
  id
  name
  leader {  # ← Apenas o líder
    id
    name
    email
  }
}
```

---

### 3. **Falta o usuário que criou (created_by)**

**Problema:**
```graphql
created_by  # ← Isto é apenas um ID string, não é um User object
```

Você está trazendo apenas o ID, mas não os dados do usuário. Precisará fazer JOIN depois no front.

**Solução:**
```graphql
✅ Se o backend supports:
creator {  # ← Relacionamento para User
  id
  name
  email
  language_preference
}

# Ou como fallback, pegar do institution.users
```

---

### 4. **Falta campo de aprovação (approved_by)**

Similar ao `created_by`:

**Problema:**
```graphql
approved_by  # ← Apenas ID
```

**Solução:**
```graphql
✅ Se o backend supports:
approver {  # ← Relacionamento para User
  id
  name
  email
}
```

---

### 5. **Risco: Problema com `project.department` comentado**

**Problema:**
```graphql
# REMOVED: department field causes error when project.department_id is NULL
```

Isto é um sintoma de problema no backend. Se o schema define `department` como não-nulo mas pode ser NULL, é um bug no backend.

**Solução:**
```graphql
✅ Você pode tentar incluir assim:
project {
  id
  title
  department_id
  owner_id
  owner {
    id
    name
    email
  }
  # Tentar adicionar department de novo, mas em nullable
  department {
    id
    name
  }
}
```

Se der erro 400, o backend precisa ser corrigido.

---

### 6. **Falta `department_id` em department**

**Problema:**
```graphql
department {
  id
  name
  leader_id  # ← Traz ID isolado
  leader {
    id
    name
    email
    language_preference
  }
}
```

Se você traz `leader_id`, por que não traz direto do leader?

**Solução:**
```graphql
✅ Remover field redundante ou reformular:
department {
  id
  name
  leader {
    id
    name
    email
  }
}
```

---

### 7. **Falta validação das datas**

**Problema:**
```graphql
created_at
updated_at
approved_at
```

Não está claro se o backend retorna em ISO 8601. Pode causar problemas no front ao parsear.

**Verificar:**
- Formato esperado (ISO 8601: `2026-02-11T10:30:00Z`)
- Timezone (UTC ou local?)

---

### 8. **Items: Falta `activity_document_id`?**

**Problema:**
```graphql
items {
  id
  subsidy_request_id  # ← Redundante (já sabemos de qual subsidyRequest vem)
  project_activity_id
  requested_amount
  approved_amount
  notes
  created_at
  updated_at
  project_activity {
    id
    name
    description
    budget_amount
    status
    priority
    is_subsidized
  }
}
```

Você está trazendo `subsidy_request_id` em cada item (redundante). Deveria trazer documentos/recibos?

**Solução:**
```graphql
✅ Remover redundância:
items {
  id
  # subsidy_request_id  # ← REMOVER (já sabemos)
  project_activity_id
  requested_amount
  approved_amount
  notes
  created_at
  project_activity {
    id
    name
    description
    budget_amount
    status
    priority
    is_subsidized
  }
}
```

---

### 9. **Receipts: Info incompleta**

**Problema:**
```graphql
receipts: subsidy_receipts {
  id
  is_validated
}
```

Muito minimalista. Você precisará das URLs dos documentos?

**Solução:**
```graphql
✅ Adicionar mais campos:
receipts: subsidy_receipts {
  id
  is_validated
  file_url
  file_name
  uploaded_by {
    id
    name
  }
  created_at
}
```

---

## 🔧 Query CORRIGIDA - Versão Otimizada

### GET_ALL_SUBSIDY_REQUESTS (Otimizado)

```graphql
query GetAllSubsidyRequests {
  subsidyRequests {
    # Campos básicos
    id
    description
    total_budget
    approved_amount
    rejection_reason
    is_for_advance
    advance_amount
    refund_amount
    have_refund
    refund_done
    
    # Timestamps
    created_at
    updated_at
    approved_at

    # IDs de auditoria (manter como string se não houver relationships)
    created_by
    updated_by
    approved_by

    # IDs de relacionamento
    institution_id
    department_id
    church_id
    project_id
    subsidy_status_id  # ← ADICIONAR!

    # Relacionamentos
    subsidy_status {
      id
      name
      description
    }

    # Apenas instituição básica
    institution {
      id
      name
    }

    # Department com líder
    department {
      id
      name
      leader {
        id
        name
        email
      }
    }

    # Church básica
    church {
      id
      name
    }

    # Project com owner
    project {
      id
      title
      owner_id
      owner {
        id
        name
        email
      }
    }

    # Items sem redundância
    items {
      id
      project_activity_id
      requested_amount
      approved_amount
      notes
      project_activity {
        id
        name
        description
        budget_amount
        status
        priority
        is_subsidized
      }
    }

    # Receipts com mais info
    receipts: subsidy_receipts {
      id
      is_validated
      created_at
    }
  }
}
```

---

### GET_SUBSIDY_REQUEST_BY_ID (Otimizado)

```graphql
query GetSubsidyRequestById($id: String!) {
  subsidyRequest(id: $id) {
    # Campos básicos
    id
    description
    total_budget
    approved_amount
    rejection_reason
    is_for_advance
    advance_amount
    refund_amount
    have_refund
    refund_done

    # Timestamps
    created_at
    updated_at
    approved_at

    # IDs
    created_by
    updated_by
    approved_by
    institution_id
    department_id
    church_id
    project_id
    subsidy_status_id  # ← ADICIONAR!

    # Relacionamentos (completos para detalhe)
    subsidy_status {
      id
      name
      description
    }

    institution {
      id
      name
      leader {
        id
        name
        email
      }
    }

    department {
      id
      name
      leader {
        id
        name
        email
      }
    }

    church {
      id
      name
    }

    project {
      id
      title
      department_id
      owner_id
      owner {
        id
        name
        email
      }
      # Descomentar quando backend for corrigido:
      # department {
      #   id
      #   name
      # }
    }

    items {
      id
      project_activity_id
      requested_amount
      approved_amount
      notes
      created_at
      updated_at
      project_activity {
        id
        name
        description
        budget_amount
        status
        priority
        is_subsidized
      }
    }

    receipts: subsidy_receipts {
      id
      is_validated
      created_at
    }
  }
}
```

---

## 📋 Checklist de Verificação

- [ ] **Backend retorna `subsidy_status_id`?** - Adicionar na query
- [ ] **Por que traz todos os users da instituição?** - Remover se não usar
- [ ] **Há campos `creator` ou `approver` de relacionamento?** - Updatear se existir
- [ ] **Qual é o error quando tenta trazer `project.department`?** - Bug do backend?
- [ ] **Formato das datas em ISO 8601?** - Verificar parsing no front
- [ ] **Quantos items/receipts por request?** - Considerar paginação?
- [ ] **Status do subsidy_request vem via `subsidy_status` ou campo direto?** - Clarificar

---

## 🚀 Próximos Passos

1. **Remover redundâncias** (institution.users, subsidy_request_id nos items)
2. **Adicionar subsidy_status_id** para ter ID direto
3. **Verificar o erro do project.department** no backend
4. **Considerar paginação** se há muitos registros
5. **Testar a query** com dados reais

A query original não está errada, mas pode ser **otimizada em performance e completude de dados**.

