# Fix Aplicado: "Cannot return null for non-nullable field SubsidyRequest.project"

## 🔴 Problema Identificado

### **Erro Recebido:**
```json
{
  "message": "Cannot return null for non-nullable field SubsidyRequest.project.",
  "path": ["subsidyRequests", 0, "project"],
  "extensions": {
    "code": "INTERNAL_SERVER_ERROR"
  }
}
```

### **Causa Raiz:**
O repository **NÃO estava incluindo o campo `project`** nas queries:

```typescript
// ❌ ANTES (ERRADO)
async findAll(): Promise<SubsidyRequest[]> {
  return this.prisma.subsidyRequest.findMany({
    include: {
      institution: true,
      requester: true,
      department: true,
      church: true,
      subsidy_status: true,
      items: { ... },
      // ❌ FALTAVA: project
    },
  });
}
```

**Resultado:** Quando o GraphQL schema espera `project` como campo obrigatório (`non-nullable`), mas o Prisma retorna `project: null`, o GraphQL falha.

---

## ✅ Correção Aplicada

### **Arquivos Modificados:**
- `src/repositories/subsidy-request.repository.ts`

### **Métodos Corrigidos:**

#### 1. **`findAll()`** - Query de listagem
```typescript
✅ DEPOIS (CORRETO)
async findAll(): Promise<SubsidyRequest[]> {
  return this.prisma.subsidyRequest.findMany({
    include: {
      institution: true,
      requester: true,
      department: {
        include: {
          church: true,
        },
      },
      church: true,
      project: {           // ✅ ADICIONADO
        include: {
          owner: true,     // ✅ ADICIONADO
          department: true, // ✅ ADICIONADO
        },
      },
      subsidy_status: true,
      items: { ... },
      subsidy_receipts: true, // ✅ ADICIONADO
    },
  });
}
```

#### 2. **`findById()`** - Query de item único
```typescript
✅ Atualizado para incluir owner e department do projeto:
project: {
  include: {
    owner: true,
    department: true,
  },
}
```

#### 3. **`findManyByFilters()`** - Query com filtros (usado por `findByProjectId`)
```typescript
✅ Mesmo fix aplicado:
project: {
  include: {
    owner: true,
    department: true,
  },
}
```

---

## 📊 O que foi adicionado?

| Campo | Descrição | Por quê? |
|-------|-----------|----------|
| `project` | Relacionamento com Project | **Obrigatório** no schema GraphQL |
| `project.owner` | Usuário dono do projeto | Necessário para validações de permissão |
| `project.department` | Departamento do projeto | Usado em fallback quando subsidy.department_id é NULL |
| `subsidy_receipts` | Recibos do subsídio | Usado na query GraphQL do frontend |

---

## 🔍 Verificação de Dados Órfãos

Apesar da correção no código, **pode haver dados órfãos no banco**. Execute esta query para verificar:

### **SQL de Verificação:**
```sql
-- Verificar subsidy requests sem projeto
SELECT 
  sr.id,
  sr.description,
  sr.project_id,
  sr.created_at,
  p.id as project_exists
FROM "SubsidyRequest" sr
LEFT JOIN "Project" p ON sr.project_id = p.id
WHERE sr.is_deleted = false
  AND (sr.project_id IS NULL OR p.id IS NULL);
```

**Se retornar resultados:**
- Há subsidy requests sem projeto associado
- O GraphQL continuará falhando até que esses dados sejam corrigidos

---

## 🛠️ Script de Limpeza (se necessário)

Caso encontre dados órfãos, use este script:

### **Opção 1: Deletar Subsidy Requests Órfãos**
```sql
-- ⚠️ CUIDADO: Isso deleta permanentemente!
DELETE FROM "SubsidyRequest"
WHERE project_id IS NULL
   OR project_id NOT IN (SELECT id FROM "Project");
```

### **Opção 2: Soft Delete (Recomendado)**
```sql
-- Marca como deletado ao invés de remover
UPDATE "SubsidyRequest"
SET is_deleted = true,
    updated_at = NOW(),
    updated_by = 'system_cleanup'
WHERE project_id IS NULL
   OR project_id NOT IN (SELECT id FROM "Project");
```

### **Opção 3: Script TypeScript**
```typescript
// src/scripts/cleanup-orphaned-subsidy-requests.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 1. Encontrar subsidy requests órfãos
  const orphaned = await prisma.$queryRaw<any[]>`
    SELECT sr.id, sr.description, sr.project_id
    FROM "SubsidyRequest" sr
    LEFT JOIN "Project" p ON sr.project_id = p.id
    WHERE sr.is_deleted = false
      AND (sr.project_id IS NULL OR p.id IS NULL)
  `;

  console.log(`📊 Found ${orphaned.length} orphaned subsidy requests`);

  if (orphaned.length === 0) {
    console.log('✅ No orphaned records found!');
    return;
  }

  // Mostrar detalhes
  console.table(orphaned);

  // 2. Soft delete
  const updated = await prisma.subsidyRequest.updateMany({
    where: {
      id: {
        in: orphaned.map(r => r.id),
      },
    },
    data: {
      is_deleted: true,
      updated_at: new Date(),
      updated_by: 'system_cleanup',
    },
  });

  console.log(`✅ Soft deleted ${updated.count} orphaned records`);
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
```

**Executar:**
```bash
pnpm ts-node src/scripts/cleanup-orphaned-subsidy-requests.ts
```

---

## 🧪 Teste a Correção

### **1. Rodar o backend novamente:**
```bash
pnpm run dev
```

### **2. Testar no GraphQL Playground:**
```graphql
query TestSubsidyRequests {
  subsidyRequests {
    id
    description
    project {
      id
      title
      owner {
        id
        name
      }
    }
  }
}
```

**Resultado Esperado:**
- ✅ Sem erros
- ✅ Todos os subsidy requests têm `project` preenchido
- ✅ Frontend recebe os dados corretamente

---

## 📋 Checklist de Resolução

- [x] **Corrigir repository** - Adicionar `project` no include
- [x] **Corrigir findAll()** - ✅ Aplicado
- [x] **Corrigir findById()** - ✅ Aplicado  
- [x] **Corrigir findManyByFilters()** - ✅ Aplicado
- [ ] **Verificar dados órfãos** - Execute SQL de verificação
- [ ] **Limpar dados (se necessário)** - Use script de cleanup
- [ ] **Testar no frontend** - Query GraphQL deve funcionar
- [ ] **Validar schema Prisma** - Considerar adicionar constraint

---

## 🔐 Prevenção Futura

### **Opção 1: Constraint no Banco de Dados**
```sql
-- Garantir que project_id nunca seja NULL
ALTER TABLE "SubsidyRequest"
ALTER COLUMN project_id SET NOT NULL;
```

### **Opção 2: Atualizar Prisma Schema**
```prisma
model SubsidyRequest {
  id         String   @id @default(dbgenerated("uuid()")) @db.Uuid
  project_id String   @db.Uuid  // ✅ Sem ? = obrigatório
  project    Project  @relation(fields: [project_id], references: [id], onDelete: Cascade)
  // ...
}
```

**Depois rodar:**
```bash
pnpm prisma:migrate
```

---

## 📝 Resumo

### **O que causou o erro:**
- Repository não incluía `project` nas queries
- GraphQL schema esperava `project` como não-nulo
- Resultado: erro ao retornar `null` para campo obrigatório

### **Como foi corrigido:**
1. ✅ Adicionado `project` com `owner` e `department` em 3 métodos do repository
2. ✅ Adicionado `subsidy_receipts` para completude
3. ⏳ Pendente: verificar e limpar dados órfãos (se existirem)

### **Próximos passos:**
1. Restart do backend (`pnpm run dev`)
2. Teste da query GraphQL no playground
3. Verificação de dados órfãos (SQL)
4. Cleanup se necessário

**O erro deve estar resolvido agora!** 🎉

