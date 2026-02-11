# Debug: "Cannot return null for non-nullable field SubsidyRequest.project"

## 🔴 O que significa o erro?

```
Cannot return null for non-nullable field SubsidyRequest.project.
    at path: subsidyRequests[0].project
```

Isso significa:
- Existe um `SubsidyRequest` que **não tem um `Project` associado**
- Mas o schema GraphQL espera que `project` seja **sempre preenchido** (não-nulo)
- Resultado: erro na execução do resolver

## 🔍 Possíveis Causas

### 1. **SubsidyRequest Órfão (sem projeto)**
```sql
-- Verificar subsidyrequests sem projeto
SELECT sr.id, sr.project_id, sr.status
FROM "SubsidyRequest" sr
WHERE sr.project_id IS NULL
OR sr.project_id NOT IN (SELECT id FROM "Project");
```

Se retornar resultados, você tem subsidy requests órfãos.

### 2. **Projeto Foi Deletado**
```sql
-- Verificar se o project foi deletado
SELECT sr.id, sr.project_id
FROM "SubsidyRequest" sr
LEFT JOIN "Project" p ON sr.project_id = p.id
WHERE p.id IS NULL AND sr.project_id IS NOT NULL;
```

### 3. **Query Incompleta no Resolver**
O resolver está usando `include` ou `select` mas não está trazendo o projeto.

---

## 🛠️ Passos para Debugar

### Passo 1: Verificar o Banco de Dados

```sql
-- 1.1 Contar subsidy requests sem projeto
SELECT COUNT(*)
FROM "SubsidyRequest"
WHERE project_id IS NULL;

-- 1.2 Listar todos os problemas
SELECT sr.id, sr.project_id, sr.status, p.id as project_exists
FROM "SubsidyRequest" sr
LEFT JOIN "Project" p ON sr.project_id = p.id
WHERE p.id IS NULL;
```

### Passo 2: Verificar o Resolver

Procure por algo assim no seu `subsidy-request.resolver.ts`:

```typescript
// ❌ ERRADO - Não está trazendo o projeto
@Query(() => [SubsidyRequest])
async subsidyRequests() {
  return this.subsidyRequestService.findAll();
}

// ✅ CORRETO - Está trazendo o projeto
@Query(() => [SubsidyRequest])
async subsidyRequests() {
  return this.subsidyRequestService.findAll();
  // Certifique-se que findAll() inclui o projeto
}
```

### Passo 3: Verificar o Repository/Service

```typescript
// ❌ ERRADO
async findAll() {
  return this.prisma.subsidyRequest.findMany();
  // Falta incluir project!
}

// ✅ CORRETO
async findAll() {
  return this.prisma.subsidyRequest.findMany({
    include: {
      project: true,  // ← IMPORTANTE!
    },
  });
}
```

---

## ✅ Soluções

### Solução 1: Limpar Dados Órfãos

```typescript
// src/scripts/cleanup-orphaned-subsidy-requests.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Encontrar e deletar subsidy requests órfãos
  const orphaned = await prisma.subsidyRequest.findMany({
    where: {
      OR: [
        { project_id: null },
        {
          project: null,
        },
      ],
    },
  });

  console.log(`Found ${orphaned.length} orphaned subsidy requests.`);

  if (orphaned.length > 0) {
    const deleted = await prisma.subsidyRequest.deleteMany({
      where: {
        id: {
          in: orphaned.map((sr) => sr.id),
        },
      },
    });

    console.log(`✅ Deleted ${deleted.count} orphaned records.`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
```

**Executar com:**
```bash
ts-node -r tsconfig-paths/register src/scripts/cleanup-orphaned-subsidy-requests.ts
```

---

### Solução 2: Adicionar Constraint no Banco (SQL)

```sql
-- Garantir que project_id nunca seja NULL
ALTER TABLE "SubsidyRequest"
ALTER COLUMN project_id SET NOT NULL;

-- Se já há NULLs, primeiro limpar
DELETE FROM "SubsidyRequest" WHERE project_id IS NULL;

-- Depois adicionar constraint
ALTER TABLE "SubsidyRequest"
ADD CONSTRAINT fk_subsidy_request_project
FOREIGN KEY (project_id) REFERENCES "Project"(id) ON DELETE CASCADE;
```

---

### Solução 3: Atualizar Prisma Schema

Se usando Prisma, adicionar restrição no schema:

```prisma
// prisma/schema.prisma

model SubsidyRequest {
  id        String   @id @default(dbgenerated("uuid()")) @db.Uuid
  
  // ✅ Certificar que não pode ser null
  project_id String   @db.Uuid  // Remover @default e deixar obrigatório
  project    Project  @relation(fields: [project_id], references: [id], onDelete: Cascade)
  
  // ... outros campos
}
```

**Depois rodar:**
```bash
pnpm run prisma:migrate
```

---

### Solução 4: Corrigir o Resolver (Mais Simples)

Modifique seu resolver para **sempre** incluir o projeto:

```typescript
// src/graphql/subsidy-request.resolver.ts

import { Resolver, Query, Args } from '@nestjs/graphql';
import { SubsidyRequestService } from '../services/subsidy-request.service';
import { SubsidyRequest } from '../models/subsidy-request.model';

@Resolver(() => SubsidyRequest)
export class SubsidyRequestResolver {
  constructor(private readonly subsidyRequestService: SubsidyRequestService) {}

  @Query(() => [SubsidyRequest])
  async subsidyRequests() {
    // Certificar que inclui project
    return this.subsidyRequestService.findAll();
  }

  @Query(() => SubsidyRequest, { nullable: true })
  async subsidyRequest(@Args('id') id: string) {
    return this.subsidyRequestService.findById(id);
  }
}
```

Correspondente no service:

```typescript
// src/services/subsidy-request.service.ts

import { Injectable } from '@nestjs/common';
import { SubsidyRequestRepository } from '../repositories/subsidy-request.repository';

@Injectable()
export class SubsidyRequestService {
  constructor(
    private readonly subsidyRequestRepository: SubsidyRequestRepository,
  ) {}

  async findAll() {
    const requests = await this.subsidyRequestRepository.findAll();
    
    // ✅ Validar se todos têm projeto antes de retornar
    const valid = requests.filter((sr) => sr.project !== null);
    
    if (valid.length !== requests.length) {
      console.warn(
        `⚠️  Found ${requests.length - valid.length} subsidy requests without project`
      );
    }
    
    return valid;
  }

  async findById(id: string) {
    return this.subsidyRequestRepository.findById(id);
  }
}
```

E no repository:

```typescript
// src/repositories/subsidy-request.repository.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SubsidyRequestRepository {
  constructor(private readonly prisma: PrismaService) {}

  // ✅ SEMPRE incluir project
  async findAll() {
    return this.prisma.subsidyRequest.findMany({
      include: {
        project: true,  // ← OBRIGATÓRIO
      },
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  // ✅ SEMPRE incluir project
  async findById(id: string) {
    return this.prisma.subsidyRequest.findUnique({
      where: { id },
      include: {
        project: true,  // ← OBRIGATÓRIO
      },
    });
  }
}
```

---

## 🔍 Query de Debug

Se não tiver certeza onde está o problema:

```typescript
// Como debug query
@Query(() => [SubsidyRequest])
async subsidyRequestsDebug() {
  const requests = await this.prisma.subsidyRequest.findMany({
    include: {
      project: true,
    },
  });

  // Log para ver o que está vindo
  console.log('Total requests:', requests.length);
  
  const withoutProject = requests.filter((r) => r.project === null);
  console.log('Requests without project:', withoutProject.length);
  
  if (withoutProject.length > 0) {
    console.log('IDs:', withoutProject.map((r) => r.id));
  }

  return requests;
}
```

---

## 🗂️ Checklist de Resolução

- [ ] **Verificar banco de dados** - Há subsidy requests órfãs?
- [ ] **Limpar dados** - Deletar registros problemáticos
- [ ] **Atualizar schema** - Adicionar constraint NOT NULL (opcional)
- [ ] **Verificar resolver** - Está usando `include: { project: true }`?
- [ ] **Validar service** - Está retornando projeto para todos?
- [ ] **Testar query** - Query GraphQL está funcionando?

---

## 📊 Exemplo Completo de Fix

### Cenário
Você tem subsidy requests sem projeto relacionado.

### Fix Rápido
1. **Deletar registros órfãos:**
```sql
DELETE FROM "SubsidyRequest" 
WHERE project_id IS NULL 
OR project_id NOT IN (SELECT id FROM "Project");
```

2. **Adicionar constraint:**
```sql
ALTER TABLE "SubsidyRequest" 
ADD CONSTRAINT fk_project_not_null 
CHECK (project_id IS NOT NULL);
```

3. **Atualizar código** (usar `include: { project: true }`):
```typescript
async findAll() {
  return this.prisma.subsidyRequest.findMany({
    include: { project: true },
  });
}
```

4. **Testar** - Rodar query GraphQL novamente

---

## 📋 Resumo

| Problema | Solução |
|----------|---------|
| Subsidy request sem projeto no BD | Deletar registros órfãos |
| Resolver não incluindo projeto | Adicionar `include: { project: true }` |
| Schema permite NULL | Adicionar constraint NOT NULL |
| N+1 queries | Usar `include` ao invés de lazy loading |

O erro é de **integridade de dados**. A solução mais rápida é limpara os dados e garantir que o resolver sempre traga o projeto.

