# Como Obter o Project Owner a partir de um Subsidy Request

## Visão Geral

Quando você tem um `subsidy_request`, muitas vezes precisa acessar o `owner_id` do projeto associado para fins de validação de permissões, auditoria ou lógica de negócio. Este documento explica como fazer isso através de queries SQL e através do código TypeScript.

## Estrutura de Relacionamentos

```
SubsidyRequest
  ├── project_id (FK para Project)
  │
  └── Project
      ├── owner_id (FK para User)
      │
      └── User (Project Owner)
```

## SQL Queries

### 1. **Query Simples - Obter owner_id diretamente**

```sql
SELECT p.owner_id
FROM "SubsidyRequest" sr
INNER JOIN "Project" p ON sr.project_id = p.id
WHERE sr.id = $1;
```

**Parâmetros:**
- `$1`: `subsidy_request_id`

**Retorna:** `owner_id` do projeto

---

### 2. **Query com Informações Completas do Owner**

```sql
SELECT 
  p.owner_id,
  u.id,
  u.name,
  u.email,
  u.avatar_url
FROM "SubsidyRequest" sr
INNER JOIN "Project" p ON sr.project_id = p.id
INNER JOIN "User" u ON p.owner_id = u.id
WHERE sr.id = $1;
```

**Parâmetros:**
- `$1`: `subsidy_request_id`

**Retorna:** Informações completas do owner do projeto

---

### 3. **Query com Todas as Informações do Subsidy + Owner**

```sql
SELECT 
  sr.id as subsidy_id,
  sr.project_id,
  sr.department_id,
  sr.status,
  sr.amount,
  p.id as project_id,
  p.name as project_name,
  p.owner_id,
  u.id as owner_id,
  u.name as owner_name,
  u.email as owner_email
FROM "SubsidyRequest" sr
INNER JOIN "Project" p ON sr.project_id = p.id
INNER JOIN "User" u ON p.owner_id = u.id
WHERE sr.id = $1;
```

---

### 4. **Query para Validar se Usuário é Owner do Projeto**

```sql
SELECT 
  CASE 
    WHEN p.owner_id = $2 THEN true 
    ELSE false 
  END as is_owner
FROM "SubsidyRequest" sr
INNER JOIN "Project" p ON sr.project_id = p.id
WHERE sr.id = $1;
```

**Parâmetros:**
- `$1`: `subsidy_request_id`
- `$2`: `user_id` (usuário a ser verificado)

**Retorna:** `true` se o usuário é owner, `false` caso contrário

---

## Implementação em TypeScript (Repository)

### **Exemplo de Repository Method**

```typescript
// src/repositories/subsidy-request.repository.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SubsidyRequestRepository {
  constructor(private readonly prisma: PrismaService) {}

  // Obter o owner_id do projeto de um subsidy request
  async getProjectOwnerIdBySibsidyRequestId(subsidyRequestId: string): Promise<string | null> {
    const result = await this.prisma.subsidyRequest.findUnique({
      where: { id: subsidyRequestId },
      select: {
        project: {
          select: {
            owner_id: true,
          },
        },
      },
    });

    return result?.project?.owner_id || null;
  }

  // Obter informações completas do project owner
  async getProjectOwnerBySibsidyRequestId(subsidyRequestId: string) {
    return this.prisma.subsidyRequest.findUnique({
      where: { id: subsidyRequestId },
      select: {
        project: {
          select: {
            owner_id: true,
            owner: {
              select: {
                id: true,
                name: true,
                email: true,
                avatar_url: true,
              },
            },
          },
        },
      },
    });
  }

  // Validar se o usuário é owner do projeto
  async isUserProjectOwner(
    subsidyRequestId: string,
    userId: string
  ): Promise<boolean> {
    const result = await this.prisma.subsidyRequest.findUnique({
      where: { id: subsidyRequestId },
      select: {
        project: {
          select: {
            owner_id: true,
          },
        },
      },
    });

    return result?.project?.owner_id === userId;
  }

  // Obter subsidy request com owner info (completo)
  async getSubsidyRequestWithOwner(subsidyRequestId: string) {
    return this.prisma.subsidyRequest.findUnique({
      where: { id: subsidyRequestId },
      include: {
        project: {
          include: {
            owner: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });
  }
}
```

---

## Implementação em TypeScript (Service)

### **Exemplo de Service Method**

```typescript
// src/services/subsidy-request.service.ts

import { Injectable } from '@nestjs/common';
import { SubsidyRequestRepository } from '../repositories/subsidy-request.repository';
import { CustomGraphQLError } from '../common/errors/custom-graphql-error';

@Injectable()
export class SubsidyRequestService {
  constructor(
    private readonly subsidyRequestRepository: SubsidyRequestRepository,
  ) {}

  // Obter o owner_id do projeto
  async getProjectOwnerId(subsidyRequestId: string): Promise<string> {
    const ownerId = await this.subsidyRequestRepository.getProjectOwnerIdBySibsidyRequestId(
      subsidyRequestId,
    );

    if (!ownerId) {
      throw new CustomGraphQLError(
        'Subsidy request or project owner not found',
        'NOT_FOUND',
      );
    }

    return ownerId;
  }

  // Validar se user está autorizado como project owner
  async validateProjectOwner(
    subsidyRequestId: string,
    userId: string,
  ): Promise<void> {
    const isOwner = await this.subsidyRequestRepository.isUserProjectOwner(
      subsidyRequestId,
      userId,
    );

    if (!isOwner) {
      throw new CustomGraphQLError(
        'User is not the project owner',
        'UNAUTHORIZED',
      );
    }
  }

  // Obter subsidy request com informações do owner
  async getSubsidyRequestDetail(subsidyRequestId: string) {
    return this.subsidyRequestRepository.getSubsidyRequestWithOwner(
      subsidyRequestId,
    );
  }
}
```

---

## Uso em Resolvers (GraphQL)

### **Exemplo de Resolver com Validação de Owner**

```typescript
// src/graphql/subsidy-request.resolver.ts

import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '../guards/permissions.guard';
import { Permission } from '../decorators/permission.decorator';
import { SubsidyRequestService } from '../services/subsidy-request.service';

@Resolver()
export class SubsidyRequestResolver {
  constructor(private readonly subsidyRequestService: SubsidyRequestService) {}

  @Permission()
  @UseGuards(PermissionsGuard)
  @Mutation()
  async updateSubsidyRequest(
    @Args('id') subsidyRequestId: string,
    @Args('data') data: SubsidyRequestUpdateDto,
    @Context() context: { userId: string },
  ) {
    // Validar se o usuário é o project owner
    await this.subsidyRequestService.validateProjectOwner(
      subsidyRequestId,
      context.userId,
    );

    // Proceder com a atualização
    return this.subsidyRequestService.updateSubsidyRequest(
      subsidyRequestId,
      data,
      context.userId,
    );
  }

  @Permission()
  @UseGuards(PermissionsGuard)
  @Mutation()
  async deleteSubsidyRequest(
    @Args('id') subsidyRequestId: string,
    @Context() context: { userId: string },
  ) {
    // Obter o owner_id para verificação
    const ownerId = await this.subsidyRequestService.getProjectOwnerId(
      subsidyRequestId,
    );

    // Apenas o owner ou admin pode deletar
    if (context.userId !== ownerId) {
      throw new CustomGraphQLError(
        'Only the project owner can delete this subsidy request',
        'FORBIDDEN',
      );
    }

    return this.subsidyRequestService.deleteSubsidyRequest(subsidyRequestId);
  }
}
```

---

## Fluxo Completo

```
┌──────────────────────────────────────────┐
│   GraphQL Mutation/Query                 │
│   (SubsidyRequestId + UserId)            │
└────────────┬─────────────────────────────┘
             │
             ▼
┌──────────────────────────────────────────┐
│   Resolver                               │
│   - Recebe subsidyRequestId              │
│   - Extrai userId do context             │
│   - Chama service.validateProjectOwner() │
└────────────┬─────────────────────────────┘
             │
             ▼
┌──────────────────────────────────────────┐
│   Service                                │
│   - Chama repository.isUserProjectOwner()│
└────────────┬─────────────────────────────┘
             │
             ▼
┌──────────────────────────────────────────┐
│   Repository                             │
│   - Query: SubsidyRequest JOIN Project   │
│   - Compara project.owner_id com userId  │
└────────────┬─────────────────────────────┘
             │
             ▼
         ✅ / ❌
         AUTORIZADO / NÃO AUTORIZADO
```

---

## Notas Importantes

### **Performance**
- Use `select` no Prisma para buscar apenas os campos necessários
- Evite N+1 queries usando `include` ao buscar múltiplos subsidy requests

### **Segurança**
- Sempre valide se o usuário é o project owner antes de permitir operações
- Use essa validação em conjunto com Guards de Permissão
- Registre ações sensíveis em auditoria

### **Tratamento de Erros**
- Retorne erros consistentes (NOT_FOUND, UNAUTHORIZED, FORBIDDEN)
- Use `CustomGraphQLError` para padronizar as respostas

### **Alternativa com Raw SQL**
Se precisar usar raw SQL direto:

```typescript
async getProjectOwnerIdRaw(subsidyRequestId: string): Promise<string | null> {
  const result = await this.prisma.$queryRaw<{ owner_id: string }[]>`
    SELECT p.owner_id
    FROM "SubsidyRequest" sr
    INNER JOIN "Project" p ON sr.project_id = p.id
    WHERE sr.id = ${subsidyRequestId}
    LIMIT 1
  `;

  return result?.[0]?.owner_id || null;
}
```

---

## Resumo

| Cenário | Método Recomendado |
|---------|-------------------|
| Apenas obter owner_id | `getProjectOwnerIdBySibsidyRequestId()` |
| Validar permissão | `isUserProjectOwner()` |
| Obter dados completos | `getSubsidyRequestWithOwner()` |
| Query específica em SQL puro | Raw SQL com limit 1 |

