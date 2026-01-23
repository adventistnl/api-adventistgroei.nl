# Church CRUD Implementation Guide

## 📋 Visão Geral

Este documento descreve a implementação completa do CRUD (Create, Read, Update, Delete) para a entidade **Church** (Igreja) no sistema Adventist Groei.

## 🗂️ Estrutura de Arquivos

```
src/
├── @generated/
│   └── church/
│       └── church.model.ts              # Modelo GraphQL gerado automaticamente
├── dto/
│   └── church.dto.ts                    # DTOs de entrada (Create/Update)
├── repositories/
│   └── church.repository.ts             # Camada de acesso a dados
├── services/
│   └── church.service.ts                # Lógica de negócio
├── graphql/
│   └── church.resolver.ts               # Resolver GraphQL
└── models/
    └── church.model.ts                  # Modelo customizado (se necessário)

prisma/
└── schema.prisma                        # Schema do banco de dados
```

## 📊 Schema do Banco de Dados

### Modelo Church (Prisma)

```prisma
model Church {
  id               String                 @id @default(uuid())
  type             ChurchType             @default(STANDARD)
  institution_id   String
  institution      Institution            @relation(fields: [institution_id], references: [id])
  name             String
  region_id        String?
  region           Region?                @relation(fields: [region_id], references: [id])
  contact_id       String?
  contact          Contact?               @relation(fields: [contact_id], references: [id])
  leader_id        String?                @unique
  leader           User?                  @relation("ChurchLeader", fields: [leader_id], references: [id])
  zip_code         String?                # ✨ Novo campo adicionado
  house_number     Int?                   # ✨ Novo campo adicionado
  created_at       DateTime               @default(now())
  updated_at       DateTime               @updatedAt
  created_by       String
  updated_by       String
  is_deleted       Boolean                @default(false)
  deleted_at       DateTime?
  deleted_by       String?
  departments      Department[]
  users            User[]
  subsidy_requests SubsidyRequest[]
  annual_budgets   AnnualBudget[]
  projects         Project[]
}
```

### Campos Principais

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `id` | String (UUID) | ✅ | Identificador único |
| `name` | String | ✅ | Nome da igreja |
| `institution_id` | String | ✅ | ID da instituição |
| `leader_id` | String | ❌ | ID do líder (único) |
| `region_id` | String | ❌ | ID da região |
| `contact_id` | String | ❌ | ID do contato |
| `zip_code` | String | ❌ | Código postal (formato holandês: 1234AB) |
| `house_number` | Int | ❌ | Número da casa/edifício |
| `type` | ChurchType | ✅ | Tipo da igreja (STANDARD) |

## 📝 DTOs (Data Transfer Objects)

### ChurchCreateDto

```typescript
@InputType()
export class ChurchCreateDto {
  @Field()
  @IsString()
  institution_id: string;

  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  leader_id: string;

  @Field(() => ContactCreateDto, { nullable: true })
  @IsOptional()
  contact?: ContactCreateDto;

  @Field(() => ChurchType, { nullable: true })
  type?: ChurchType;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  zip_code?: string;
}
```

### ChurchUpdateDto

```typescript
@InputType()
export class ChurchUpdateDto {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  institution_id?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  leader_id?: string;

  @Field(() => ContactCreateDto, { nullable: true })
  @IsOptional()
  contact?: ContactCreateDto;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  users?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  departments?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  subsidy_requests?: string[]; 
  
  @Field(() => ChurchType, { nullable: true })
  type?: ChurchType;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  zip_code?: string;
}
```

## 🔐 Permissões Necessárias

### Operações e Permissões

| Operação | Permissão | Descrição |
|----------|-----------|-----------|
| **READ (List)** | `CHURCHES_ACCESS` | Listar todas as igrejas |
| **READ (Single)** | `CHURCH_ACCESS` | Ver detalhes de uma igreja |
| **CREATE** | `CHURCH_CREATE` | Criar nova igreja |
| **UPDATE** | `CHURCH_UPDATE` | Atualizar igreja |
| **DELETE** | `CHURCH_DELETE` | Deletar igreja (soft delete) |
| **UPDATE LEADER** | `CHURCH_LEADER_UPDATE` | Atualizar líder da igreja |

### Roles com Acesso Completo

- ✅ **Admin** - Todas as permissões
- ✅ **Institutional Leader** - Criar, atualizar, deletar igrejas na sua instituição
- ✅ **Church Leader** - Atualizar sua própria igreja
- ✅ **Developer** - Todas as permissões

## 🔄 Operações CRUD

### 1. CREATE - Criar Igreja

**GraphQL Mutation:**

```graphql
mutation CreateChurch {
  createChurch(data: {
    institution_id: "uuid-da-instituicao"
    name: "Igreja Central de Amsterdam"
    leader_id: "uuid-do-lider"
    zip_code: "1012AB"
    house_number: 29
    type: STANDARD
    contact: {
      email: "contato@igreja.nl"
      phone: "+31 20 123 4567"
      address: "Damstraat 1"
      city: "Amsterdam"
      country: "Netherlands"
    }
  }) {
    id
    name
    zip_code
    type
    leader {
      id
      name
      email
    }
    contact {
      email
      phone
      address
    }
    created_at
  }
}
```

**Resposta:**

```json
{
  "data": {
    "createChurch": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Igreja Central de Amsterdam",
      "zip_code": "1012 AB",
      "type": "STANDARD",
      "leader": {
        "id": "uuid-do-lider",
        "name": "Jan de Vries",
        "email": "jan@igreja.nl"
      },
      "contact": {
        "email": "contato@igreja.nl",
        "phone": "+31 20 123 4567",
        "address": "Damstraat 1"
      },
      "created_at": "2026-01-22T22:49:40.000Z"
    }
  }
}
```

### 2. READ - Listar Igrejas

**GraphQL Query (Todas):**

```graphql
query ListChurches {
  churches {
    id
    name
    zip_code
    type
    leader {
      id
      name
      email
    }
    institution {
      id
      name
    }
    region {
      id
      name
    }
    departments {
      id
      name
    }
    _count {
      users
      departments
      projects
    }
  }
}
```

**GraphQL Query (Por Instituição):**

```graphql
query ChurchesByInstitution($institutionId: String!) {
  churches(
    where: {
      institution_id: { equals: $institutionId }
      is_deleted: { equals: false }
    }
  ) {
    id
    name
    zip_code
    leader {
      name
    }
  }
}
```

**GraphQL Query (Single):**

```graphql
query GetChurch($id: String!) {
  church(id: $id) {
    id
    name
    zip_code
    type
    leader {
      id
      name
      email
      contact {
        phone
        email
      }
    }
    contact {
      email
      phone
      address
      city
      state
      country
      zip_code
    }
    institution {
      id
      name
    }
    region {
      id
      name
    }
    departments {
      id
      name
      leader {
        name
      }
    }
    users {
      id
      name
      email
    }
    created_at
    updated_at
  }
}
```

### 3. UPDATE - Atualizar Igreja

**GraphQL Mutation (Atualizar Dados Básicos):**

```graphql
mutation UpdateChurch($id: String!) {
  updateChurch(
    id: $id
    data: {
      name: "Igreja Central de Amsterdam - Renovada"
      zip_code: "1013 CD"
      contact: {
        email: "novo@igreja.nl"
        phone: "+31 20 999 8888"
      }
    }
  ) {
    id
    name
    zip_code
    contact {
      email
      phone
    }
    updated_at
  }
}
```

**GraphQL Mutation (Atualizar Líder):**

```graphql
mutation UpdateChurchLeader($churchId: String!, $leaderId: String!) {
  updateChurch(
    id: $churchId
    data: {
      leader_id: $leaderId
    }
  ) {
    id
    name
    leader {
      id
      name
      email
    }
  }
}
```

**GraphQL Mutation (Remover Líder):**

```graphql
mutation RemoveChurchLeader($churchId: String!) {
  updateChurch(
    id: $churchId
    data: {
      leader_id: null
    }
  ) {
    id
    name
    leader {
      id
      name
    }
  }
}
```

### 4. DELETE - Deletar Igreja (Soft Delete)

**GraphQL Mutation:**

```graphql
mutation DeleteChurch($id: String!) {
  deleteChurch(id: $id) {
    id
    name
    is_deleted
    deleted_at
  }
}
```

**Nota:** A operação de delete é **soft delete**, ou seja, o registro não é removido fisicamente do banco de dados, apenas marcado como deletado (`is_deleted: true`).

## 🔍 Queries Avançadas

### Filtrar Igrejas por Região

```graphql
query ChurchesByRegion($regionId: String!) {
  churches(
    where: {
      region_id: { equals: $regionId }
      is_deleted: { equals: false }
    }
    orderBy: { name: asc }
  ) {
    id
    name
    zip_code
    leader {
      name
    }
  }
}
```

### Buscar Igrejas com Código Postal

```graphql
query ChurchesWithZipCode {
  churches(
    where: {
      zip_code: { not: null }
      is_deleted: { equals: false }
    }
  ) {
    id
    name
    zip_code
    contact {
      address
      city
    }
  }
}
```

### Buscar Igrejas sem Líder

```graphql
query ChurchesWithoutLeader {
  churches(
    where: {
      leader_id: { equals: null }
      is_deleted: { equals: false }
    }
  ) {
    id
    name
    institution {
      name
    }
  }
}
```

### Estatísticas de Igrejas

```graphql
query ChurchStats($churchId: String!) {
  church(id: $churchId) {
    id
    name
    _count {
      users
      departments
      projects
      subsidy_requests
      annual_budgets
    }
  }
}
```

## 🛡️ Validações e Regras de Negócio

### Validações no Service

1. **Criação:**
   - ✅ Institution deve existir
   - ✅ Leader (se fornecido) deve existir e ser um usuário válido
   - ✅ Leader não pode ser líder de outra igreja (unique constraint)
   - ✅ Nome da igreja é obrigatório

2. **Atualização:**
   - ✅ Church deve existir
   - ✅ Não pode atualizar igreja deletada
   - ✅ Se alterar leader_id, validar que o novo líder existe
   - ✅ Leader não pode ser líder de múltiplas igrejas

3. **Deleção:**
   - ✅ Soft delete em cascata para:
     - Departments da igreja
     - Relacionamentos com users
     - Subsidy requests relacionados
   - ✅ Histórico de auditoria mantido

## 📂 Pattern de Implementação

### Repository Pattern

```typescript
// church.repository.ts
@Injectable()
export class ChurchRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: ChurchCreateDto, userId: string) {
    return this.prisma.church.create({
      data: {
        ...data,
        created_by: userId,
        updated_by: userId,
      },
      include: {
        leader: true,
        institution: true,
        contact: true,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.church.findUnique({
      where: { id, is_deleted: false },
      include: {
        leader: true,
        institution: true,
        region: true,
        contact: true,
        departments: true,
      },
    });
  }

  async update(id: string, data: ChurchUpdateDto, userId: string) {
    return this.prisma.church.update({
      where: { id },
      data: {
        ...data,
        updated_by: userId,
      },
      include: {
        leader: true,
        contact: true,
      },
    });
  }

  async softDelete(id: string, userId: string) {
    return this.prisma.church.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
      },
    });
  }
}
```

## 🎯 Casos de Uso Comuns

### 1. Criar Igreja com Contato

```graphql
mutation {
  createChurch(data: {
    institution_id: "uuid"
    name: "Igreja do Centro"
    leader_id: "uuid"
    zip_code: "1234 AB"
    contact: {
      email: "igreja@exemplo.nl"
      phone: "+31 20 123 4567"
      address: "Rua Principal 123"
      city: "Amsterdam"
      country: "Netherlands"
    }
  }) {
    id
    name
  }
}
```

### 2. Transferir Liderança

```graphql
mutation TransferLeadership {
  # 1. Remover líder atual
  updateChurch(id: "church-uuid", data: { leader_id: null }) {
    id
  }
  
  # 2. Atribuir novo líder
  updateChurch(id: "church-uuid", data: { leader_id: "new-leader-uuid" }) {
    id
    leader {
      name
    }
  }
}
```

### 3. Listar Igrejas da Minha Instituição

```graphql
query MyChurches {
  churches(
    where: {
      institution_id: { equals: $myInstitutionId }
      is_deleted: { equals: false }
    }
    orderBy: { name: asc }
  ) {
    id
    name
    zip_code
    leader {
      name
    }
    _count {
      users
    }
  }
}
```

## 🚀 Comandos de Setup

### Após Modificações no Schema

```bash
# 1. Criar migration
npx prisma migrate dev --name add_zip_code_to_church

# 2. Gerar Prisma Client
npx prisma generate

# 3. Compilar o projeto
npm run build

# 4. Verificar se não há erros
npm run lint
```

## 📚 Referências

- **Schema:** `prisma/schema.prisma` - Linha 363
- **DTOs:** `src/dto/church.dto.ts`
- **Repository:** `src/repositories/church.repository.ts`
- **Service:** `src/services/church.service.ts`
- **Resolver:** `src/graphql/church.resolver.ts`
- **Migration:** `prisma/migrations/20260122224940_add_zip_code_to_church/`

## ✅ Checklist de Implementação

- [x] Schema Prisma atualizado
- [x] Migration criada e aplicada
- [x] DTOs atualizados (Create/Update)
- [x] Prisma Client regenerado
- [x] Tipos GraphQL gerados
- [x] Repository implementado
- [x] Service com validações
- [x] Resolver GraphQL configurado
- [x] Permissões definidas
- [x] Testes de compilação passando

## 🐛 Troubleshooting

### Erro: "leader_id must be unique"

**Causa:** Tentando atribuir um usuário que já é líder de outra igreja.

**Solução:**
1. Remover o usuário como líder da igreja anterior
2. Ou escolher outro usuário como líder

### Erro: "Institution not found"

**Causa:** institution_id fornecido não existe.

**Solução:** Verificar se a instituição existe no banco de dados antes de criar a igreja.

### Campo zip_code não aparece no GraphQL

**Causa:** Prisma Client não foi regenerado após alterar o schema.

**Solução:**
```bash
npx prisma generate
npm run build
```

## 🗺️ Integração com ZipCode API

O sistema possui uma integração com PostcodeAPI.nu para validar e obter informações de endereço baseado em ZIP code e número da casa.

### Como Usar

**1. Consultar informações do ZIP code:**

```graphql
query {
  getZipInfo(zip: "6545CA", houseNumber: 29) {
    city
    province
  }
}
```

**Resposta:**
```json
{
  "data": {
    "getZipInfo": {
      "city": "Nijmegen",
      "province": "Gelderland"
    }
  }
}
```

**2. Criar Church com ZIP code validado:**

```graphql
# Primeiro, valide o ZIP code
query ValidateAddress {
  getZipInfo(zip: "6545CA", houseNumber: 29) {
    city
    province
  }
}

# Depois, crie a Church com os dados validados
mutation CreateChurchWithValidatedAddress {
  createChurch(data: {
    institution_id: "uuid-instituicao"
    name: "Igreja Nijmegen"
    leader_id: "uuid-lider"
    zip_code: "6545CA"
    house_number: 29
    contact: {
      email: "contato@nijmegen.nl"
      phone: "+31 24 123 4567"
      address: "Binderskampweg 29"
      city: "Nijmegen"  # Obtido do getZipInfo
      country: "Netherlands"
    }
  }) {
    id
    name
    zip_code
    house_number
  }
}
```

### Benefícios

- ✅ **Validação automática**: Confirma que ZIP code e número existem
- ✅ **Dados consistentes**: City e province obtidos da API oficial
- ✅ **Reduz erros**: Evita endereços inválidos no cadastro
- ✅ **UX melhorada**: Preenchimento automático de cidade/província no frontend

### Configuração Necessária

Adicione ao seu `.env`:
```env
POSTCODES_API_KEY=your_api_key_here
POSTCODES_API_URL=https://api.postcodeapi.nu/v3/lookup
```

📚 **Documentação completa:** Ver [ZIPCODE_API_IMPLEMENTATION.md](./ZIPCODE_API_IMPLEMENTATION.md)

