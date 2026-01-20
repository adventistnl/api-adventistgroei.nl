# Implementação da Permissão `updateOwnUser`

## Visão Geral

Sistema de permissão que permite usuários atualizarem apenas seus próprios dados, sem necessidade de permissão administrativa completa (`updateUser`).

## Arquitetura da Solução

### 1. Nova Permissão no Schema

**Localização:** `prisma/schema.prisma`

```prisma
enum PermissionResolverName {
  // ... outras permissões
  updateOwnUser  // Nova permissão adicionada
  // ... outras permissões
}
```

### 2. Seed de Permissões

**Localização:** `src/scripts/seed-permissions.ts`

A permissão está configurada como **fixa do sistema** (não aparece para cliente):

```typescript
const permissionsDisabledToClient = [
  // ... outras permissões
  { 
    name: 'update own user', 
    description: 'Update own user profile', 
    resolver_name: 'updateOwnUser' as PermissionResolverName, 
    group: 'USER' as PermissionGroup, 
    key_code: 'USER_OWN_UPDATE', 
    disabled_to_client: true 
  },
  // ... outras permissões
];
```

**Campos importantes:**
- `key_code: 'USER_OWN_UPDATE'` - Código único da permissão
- `disabled_to_client: true` - Permissão fixa do sistema (não gerenciável pelo cliente)
- `group: 'USER'` - Grupo de permissões relacionadas a usuários

### 3. Lógica no PermissionsGuard

**Localização:** `src/middlewares/permissions.guard.ts`

O Guard implementa uma lógica de **fallback** que permite self-update:

```typescript
async canActivate(context: ExecutionContext): Promise<boolean> {
  const requiredPermissions = this.reflector.getAllAndOverride<PermissionResolverName[]>(
    PERMISSIONS_KEY, 
    [context.getHandler(), context.getClass()]
  );

  if (!requiredPermissions || requiredPermissions.length === 0) {
    return true;
  }

  const userId = this.extractUserId(context);
  if (!userId) {
    throw new UnauthorizedException('User not authenticated');
  }

  // Busca permissões do usuário
  const user = await this.prisma.user.findUnique({
    where: { id: userId },
    include: {
      user_roles: {
        where: { is_deleted: false },
        include: {
          role: {
            include: {
              role_permissions: {
                include: { permission: true },
              },
            },
          },
        },
      },
    },
  });

  if (!user) {
    throw new UnauthorizedException('User not found');
  }

  const userPermissions: PermissionResolverName[] = user.user_roles
    .flatMap((ur) => ur.role.role_permissions)
    .map((rp) => rp.permission.resolver_name);

  const hasPermission = requiredPermissions.some((p) => userPermissions.includes(p));

  if (!hasPermission) {
    // LÓGICA DE FALLBACK PARA SELF-UPDATE
    if (
      requiredPermissions.includes('updateUser' as PermissionResolverName) && 
      userPermissions.includes('updateOwnUser' as PermissionResolverName)
    ) {
      const targetUserId = this.extractTargetUserId(context);
      if (targetUserId === userId) {
        return true; // Permite atualizar seu próprio perfil
      }
    }
    
    throw new UnauthorizedException('User does not have permission to access this resource');
  }

  return true;
}
```

**Fluxo da Lógica:**

1. ✅ Se o usuário tem `updateUser` → Pode atualizar qualquer usuário
2. ❌ Se o usuário NÃO tem `updateUser` → Verifica fallback:
   - ✅ Tem `updateOwnUser` + está editando seu próprio ID → **PERMITIDO**
   - ❌ Tem `updateOwnUser` + está editando outro ID → **NEGADO**
   - ❌ Não tem `updateOwnUser` → **NEGADO**

### 4. Nova Mutation no Resolver

**Localização:** `src/graphql/user.resolver.ts`

Duas formas de atualização disponíveis:

#### Opção A: Mutation `updateUser` (Tradicional)
```typescript
@Permission()
@Mutation(() => UserModel)
async updateUser(
  @Args('id') id: string,
  @Args('data') data: UserUpdateDto,
  @Context() context: { userId: string },
): Promise<Omit<User, 'password'>> {
  const requester_id = context.userId;
  return await this.userService.updateUser(id, data, requester_id);
}
```

**Uso com `updateOwnUser`:**
- Usuário com permissão `updateOwnUser` pode usar passando seu próprio ID
- Guard valida se o ID passado é o mesmo do usuário autenticado

#### Opção B: Mutation `updateOwnUser` (Recomendado)
```typescript
@Permission()
@Mutation(() => UserModel)
async updateOwnUser(
  @Args('data') data: UserUpdateDto,
  @Context() context: { userId: string },
): Promise<Omit<User, 'password'>> {
  const userId = context.userId;
  return await this.userService.updateUser(userId, data, userId);
}
```

**Vantagens:**
- ✅ Não requer passar ID (mais seguro)
- ✅ Impossível editar outro usuário por engano
- ✅ Código mais limpo no frontend

## Como Usar

### 1. Query GraphQL para Atribuir Permissão

Primeiro, certifique-se que a role tem a permissão `updateOwnUser`:

```graphql
# 1. Buscar ID da permissão
query GetUpdateOwnUserPermission {
  permissions(where: { key_code: { equals: "USER_OWN_UPDATE" } }) {
    id
    name
    key_code
    resolver_name
  }
}

# 2. Criar ou atualizar role com a permissão
mutation CreateRoleWithSelfUpdate {
  createRole(
    data: {
      name: "Basic User"
      key_code: "BASIC_USER"
      description: "Can update own profile"
      permissions: {
        connect: [
          { key_code: "USER_OWN_UPDATE" }
          { key_code: "USER_ACCESS" }
        ]
      }
    }
  ) {
    id
    name
    role_permissions {
      permission {
        name
        key_code
      }
    }
  }
}

# 3. Atribuir role ao usuário
mutation AssignBasicUserRole {
  addRoleToUser(
    userId: "USER_ID_AQUI"
    roleId: "ROLE_ID_AQUI"
  ) {
    id
    name
    user_roles {
      role {
        name
      }
    }
  }
}
```

### 2. Mutation para Atualizar Próprio Perfil

#### Usando `updateOwnUser` (Recomendado):

```graphql
mutation UpdateMyProfile {
  updateOwnUser(
    data: {
      name: "Novo Nome"
      phone: "+31 123456789"
      address: "Nova Rua, 123"
      language_preference: "nl"
    }
  ) {
    id
    name
    email
    phone
    address
    language_preference
  }
}
```

#### Usando `updateUser` tradicional:

```graphql
mutation UpdateMyProfileTraditional($myUserId: String!) {
  updateUser(
    id: $myUserId
    data: {
      name: "Novo Nome"
      phone: "+31 123456789"
    }
  ) {
    id
    name
    email
    phone
  }
}

# Variables:
{
  "myUserId": "ea05b221-d67b-4159-8b10-5f28f770ee46"
}
```

### 3. Exemplo de Implementação no Frontend

```typescript
// services/user.service.ts
import { gql } from '@apollo/client';

const UPDATE_OWN_USER = gql`
  mutation UpdateOwnUser($data: UserUpdateDto!) {
    updateOwnUser(data: $data) {
      id
      name
      email
      phone
      address
      language_preference
    }
  }
`;

// Uso no componente
const [updateOwnUser, { loading, error }] = useMutation(UPDATE_OWN_USER);

const handleProfileUpdate = async (formData) => {
  try {
    const result = await updateOwnUser({
      variables: {
        data: {
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          language_preference: formData.language,
        }
      }
    });
    
    console.log('Profile updated:', result.data.updateOwnUser);
  } catch (err) {
    console.error('Error updating profile:', err);
  }
};
```

## Diferenças entre Permissões

| Permissão | Key Code | Scope | Uso |
|-----------|----------|-------|-----|
| `updateUser` | `USER_UPDATE` | Qualquer usuário | Administradores, gestores |
| `updateOwnUser` | `USER_OWN_UPDATE` | Apenas próprio usuário | Todos os usuários |

## Cenários de Uso

### ✅ Cenário 1: Usuário Comum Atualiza Próprio Perfil
```
Usuário: João (ID: abc-123)
Permissões: [updateOwnUser]
Mutation: updateOwnUser(data: { name: "João Silva" })
Resultado: ✅ SUCESSO
```

### ✅ Cenário 2: Admin Atualiza Qualquer Usuário
```
Usuário: Admin (ID: admin-1)
Permissões: [updateUser]
Mutation: updateUser(id: "abc-123", data: { name: "João Silva" })
Resultado: ✅ SUCESSO
```

### ❌ Cenário 3: Usuário Tenta Editar Outro Usuário
```
Usuário: João (ID: abc-123)
Permissões: [updateOwnUser]
Mutation: updateUser(id: "xyz-456", data: { name: "Maria Silva" })
Resultado: ❌ UnauthorizedException
```

### ✅ Cenário 4: Usuário com updateOwnUser Usa updateUser com Próprio ID
```
Usuário: João (ID: abc-123)
Permissões: [updateOwnUser]
Mutation: updateUser(id: "abc-123", data: { name: "João Silva" })
Resultado: ✅ SUCESSO (fallback no Guard)
```

## Scripts de Seed

Para executar o seed e garantir que a permissão está no banco:

```bash
# Executar seed de permissões
npx ts-node src/scripts/seed-permissions.ts

# Verificar no banco
# Conecte ao PostgreSQL e execute:
SELECT id, name, key_code, resolver_name, disabled_to_client 
FROM permissions 
WHERE key_code = 'USER_OWN_UPDATE';
```

## Migrações

A migração foi criada automaticamente:

```bash
# Migração gerada
prisma/migrations/20260119055424_add_update_own_user_permission/migration.sql
```

Conteúdo:
```sql
-- AlterEnum
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'updateOwnUser';
```

## Testes Recomendados

### 1. Teste de Self-Update com updateOwnUser
```graphql
# Login como usuário comum
mutation Login {
  login(email: "user@example.com", password: "senha") {
    token
  }
}

# Usar token para atualizar próprio perfil
mutation {
  updateOwnUser(data: { name: "Nome Atualizado" }) {
    id
    name
  }
}
# Esperado: ✅ Sucesso
```

### 2. Teste de Tentativa de Editar Outro Usuário
```graphql
# Login como usuário comum
# Tentar editar outro usuário
mutation {
  updateUser(id: "OUTRO_USER_ID", data: { name: "Teste" }) {
    id
  }
}
# Esperado: ❌ UnauthorizedException
```

### 3. Teste de Admin com updateUser
```graphql
# Login como admin
# Editar qualquer usuário
mutation {
  updateUser(id: "QUALQUER_USER_ID", data: { name: "Teste Admin" }) {
    id
  }
}
# Esperado: ✅ Sucesso
```

## Troubleshooting

### Erro: "User does not have permission to access this resource"

**Possíveis causas:**
1. Usuário não tem a permissão `updateOwnUser` em nenhuma role
2. Usuário está tentando editar outro usuário sem ter `updateUser`
3. Token JWT expirado ou inválido

**Solução:**
```graphql
# Verificar permissões do usuário
query CheckUserPermissions($userId: String!) {
  user(id: $userId) {
    id
    name
    user_roles {
      role {
        name
        role_permissions {
          permission {
            key_code
            resolver_name
          }
        }
      }
    }
  }
}
```

### Erro: Permissão não encontrada no banco

**Solução:**
```bash
# Re-executar seed
npx ts-node src/scripts/seed-permissions.ts

# Verificar se foi criada
# No psql:
SELECT * FROM permissions WHERE key_code = 'USER_OWN_UPDATE';
```

## Arquivos Modificados

1. ✅ `prisma/schema.prisma` - Enum PermissionResolverName
2. ✅ `src/scripts/seed-permissions.ts` - Seed de permissões
3. ✅ `src/middlewares/permissions.guard.ts` - Lógica de autorização
4. ✅ `src/graphql/user.resolver.ts` - Nova mutation updateOwnUser

## Próximos Passos

### Para o Backend:
1. ✅ Criar script para atribuir automaticamente `updateOwnUser` a todos usuários
2. ✅ Adicionar logging de auditoria para self-updates
3. ✅ Implementar rate limiting para prevenir abuso

### Para o Frontend:
1. Criar componente de edição de perfil usando `updateOwnUser`
2. Adicionar validação de campos no formulário
3. Implementar feedback visual de sucesso/erro

### Para DevOps:
1. Executar seed em produção após deploy
2. Documentar no changelog da versão
3. Notificar equipe sobre nova funcionalidade

## Segurança

### ✅ Boas Práticas Implementadas:
- Validação automática de ownership (usuário só edita seu próprio perfil)
- Permissão fixa do sistema (não pode ser removida acidentalmente)
- Logging de auditoria (campos created_by/updated_by)
- Separação clara entre permissões admin e usuário comum

### ⚠️ Considerações:
- Campos sensíveis como `email` podem necessitar verificação adicional
- Mudanças de `institution_id` ou `department_id` podem necessitar aprovação
- Implementar limitação de frequência de updates (rate limiting)

## Conclusão

A implementação da permissão `updateOwnUser` fornece uma forma segura e controlada para usuários atualizarem seus próprios dados sem necessitar de permissões administrativas completas. O sistema mantém a segurança validando automaticamente que o usuário só pode modificar seus próprios dados, enquanto administradores mantêm controle total sobre todos os usuários.
