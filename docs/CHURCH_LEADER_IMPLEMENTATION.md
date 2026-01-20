# Implementação de Leader ID em Church

## Visão Geral

Adicionada a funcionalidade de atribuir um líder (leader) obrigatório para cada igreja. Cada igreja deve ter um usuário responsável por sua liderança, estabelecendo uma hierarquia clara de responsabilidade.

## Arquitetura da Solução

### 1. Schema Prisma

**Localização:** `prisma/schema.prisma`

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
  leader_id        String                 @unique  // NOVO: Campo obrigatório e único
  leader           User                   @relation("ChurchLeader", fields: [leader_id], references: [id])
  // ... outros campos
}

model User {
  // ... campos existentes
  led_church                Church?                  @relation("ChurchLeader")  // NOVO: Relação reversa
}
```

**Migration:** `20260120194208_add_leader_id_to_church`

A migration foi criada com estratégia para lidar com dados existentes:
1. Adiciona enum value `updateChurchLeader` ao `PermissionResolverName`
2. Adiciona coluna `leader_id` como nullable
3. Preenche com o primeiro usuário da instituição de cada igreja
4. Torna a coluna NOT NULL
5. Adiciona unique constraint
6. Adiciona foreign key constraint

### 2. DTOs Atualizados

**Localização:** `src/dto/church.dto.ts`

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
  leader_id: string;  // NOVO: Campo obrigatório

  @Field(() => ContactCreateDto, { nullable: true })
  @IsOptional()
  contact?: ContactCreateDto;

  @Field(() => ChurchType, { nullable: true })
  type?: ChurchType;
}

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
  leader_id?: string;  // NOVO: Campo opcional para update

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
  departmens?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  subsidy_requests?: string[];

  @Field(() => ChurchType, { nullable: true })
  type?: ChurchType;
}
```

### 3. Repository

**Localização:** `src/repositories/church.repository.ts`

#### Método Create

```typescript
async create(data: ChurchCreateDto, userId: string): Promise<Church> {
  // Validação de relacionamentos
  await this.validateInstitution(data.institution_id);

  // Validate leader exists
  const leader = await this.prisma.user.findUnique({ where: { id: data.leader_id } });
  if (!leader) {
    throw new CustomGraphQLError('Leader user not found', ErrorCode.NOT_FOUND, 404);
  }

  // ... criação de contato e região

  return await this.prisma.church.create({
    data: {
      institution: { connect: { id: data.institution_id } },
      leader: { connect: { id: data.leader_id } },  // NOVO: Conecta o líder
      region: regionId ? { connect: { id: regionId } } : undefined,
      name: data.name,
      type: data.type || 'STANDARD',
      contact: contactId ? { connect: { id: contactId } } : undefined,
      created_by: userId,
      updated_by: userId,
      is_deleted: false,
    },
  });
}
```

#### Método Update

```typescript
async update(churchId: string, data: ChurchUpdateDto, userId: string): Promise<Church> {
  await this.findById(churchId);
  if (data.institution_id) {
    await this.institutionRepository.findById(data.institution_id);
  }

  // NOVO: Validação do líder
  if (data.leader_id) {
    const leader = await this.prisma.user.findUnique({ where: { id: data.leader_id } });
    if (!leader) {
      throw new CustomGraphQLError('Leader user not found', ErrorCode.NOT_FOUND, 404);
    }
  }

  // ... restante da lógica

  return await this.prisma.church.update({
    where: { id: churchId },
    data: {
      ...(data.institution_id && { institution: { connect: { id: data.institution_id } } }),
      ...(data.leader_id && { leader: { connect: { id: data.leader_id } } }),  // NOVO
      ...(data.type && { type: data.type }),
      ...(data.name && { name: data.name }),
      // Sempre atualiza a região quando a cidade for informada
      ...(city !== undefined && {
        region: regionId ? { connect: { id: regionId } } : { disconnect: true }
      }),
      ...contactData,
      updated_by: userId,
    },
  });
}
```

### 4. Resolver

**Localização:** `src/graphql/church.resolver.ts`

```typescript
import { UserService } from '../services/user.service';  // NOVO import
import { UserModel } from '../models/user.model';        // NOVO import

@Resolver(() => ChurchModel)
@UseGuards(PermissionsGuard)
export class ChurchResolver {
  constructor(
    private readonly churchService: ChurchService,
    private readonly userService: UserService,  // NOVO: Injeção do UserService
  ) {}

  // ... mutations existentes

  // NOVO: ResolveField para carregar dados do líder
  @ResolveField(() => UserModel, { nullable: true })
  async leader(@Parent() church: Church): Promise<Omit<User, 'password'> | null> {
    return this.userService.getUserById(church.leader_id);
  }

  // ... outros ResolveFields
}
```

### 5. Permissão updateChurchLeader

**Localização:** `src/scripts/seed-permissions.ts`

```typescript
{ 
  name: 'update church leader', 
  description: 'Update church leader assignment (admin/developer only)', 
  resolver_name: 'updateChurchLeader' as PermissionResolverName, 
  group: 'CHURCH' as PermissionGroup, 
  key_code: 'CHURCH_LEADER_UPDATE', 
  disabled_to_client: true 
}
```

**Roles com essa permissão:**
- Admin (todas as permissões)
- Church Leader (para poder gerenciar sua própria igreja)

## API GraphQL

### Mutations

#### 1. Criar Igreja (agora requer leader_id)

```graphql
mutation CreateChurch {
  createChurch(data: {
    name: "Igreja Central"
    institution_id: "institution-uuid"
    leader_id: "user-uuid"  # OBRIGATÓRIO
    type: STANDARD
    contact: {
      phone: "+31 6 1234 5678"
      address: "Rua Principal, 123"
      city: "Amsterdam"
    }
  }) {
    id
    name
    type
    leader_id
    leader {
      id
      name
      email
    }
    contact {
      phone
      address
      city
    }
  }
}
```

**Resposta:**
```json
{
  "data": {
    "createChurch": {
      "id": "church-uuid-123",
      "name": "Igreja Central",
      "type": "STANDARD",
      "leader_id": "user-uuid",
      "leader": {
        "id": "user-uuid",
        "name": "Pastor João Silva",
        "email": "joao.silva@igreja.com"
      },
      "contact": {
        "phone": "+31 6 1234 5678",
        "address": "Rua Principal, 123",
        "city": "Amsterdam"
      }
    }
  }
}
```

#### 2. Atualizar Líder da Igreja

```graphql
mutation UpdateChurchLeader {
  updateChurch(
    id: "church-uuid-123"
    data: {
      leader_id: "new-leader-user-uuid"
    }
  ) {
    id
    name
    leader_id
    leader {
      id
      name
      email
    }
  }
}
```

#### 3. Buscar Igreja com Líder

```graphql
query GetChurch {
  church(id: "church-uuid-123") {
    id
    name
    type
    leader_id
    leader {
      id
      name
      email
      contact {
        phone
        email
      }
    }
    users {
      id
      name
      email
    }
    departments {
      id
      name
      leader {
        id
        name
      }
    }
    region {
      id
      name
    }
  }
}
```

**Resposta:**
```json
{
  "data": {
    "church": {
      "id": "church-uuid-123",
      "name": "Igreja Central",
      "type": "STANDARD",
      "leader_id": "user-uuid",
      "leader": {
        "id": "user-uuid",
        "name": "Pastor João Silva",
        "email": "joao.silva@igreja.com",
        "contact": {
          "phone": "+31 6 1234 5678",
          "email": "joao.silva@igreja.com"
        }
      },
      "users": [
        {
          "id": "user-2",
          "name": "Maria Santos",
          "email": "maria@igreja.com"
        }
      ],
      "departments": [
        {
          "id": "dept-1",
          "name": "Departamento de Jovens",
          "leader": {
            "id": "user-3",
            "name": "Carlos Oliveira"
          }
        }
      ],
      "region": {
        "id": "region-1",
        "name": "Região Norte"
      }
    }
  }
}
```

#### 4. Buscar Igrejas de uma Instituição

```graphql
query GetChurches {
  churches(institution_id: "institution-uuid") {
    id
    name
    type
    leader {
      id
      name
      email
    }
    region {
      name
    }
  }
}
```

### Query para Buscar Igreja Liderada por um Usuário

```graphql
query GetUserLedChurch {
  user(id: "user-uuid") {
    id
    name
    led_church {
      id
      name
      type
      institution {
        id
        name
      }
      users {
        id
        name
      }
      departments {
        id
        name
      }
    }
  }
}
```

## Validações Implementadas

| Validação | Local | Descrição |
|-----------|-------|-----------|
| Leader obrigatório | ChurchCreateDto | Campo `leader_id` é obrigatório na criação |
| Existência do usuário | ChurchRepository.create | Valida se o user_id existe antes de criar |
| Existência do usuário | ChurchRepository.update | Valida se o user_id existe antes de atualizar |
| Unique constraint | Database | Cada usuário pode liderar apenas uma igreja |
| Foreign key constraint | Database | Previne exclusão de usuário que é líder de igreja |

## Tratamento de Erros

### Erros Possíveis

```typescript
// Tentativa de criar igreja com líder inexistente
{
  "errors": [{
    "message": "Leader user not found",
    "extensions": {
      "code": "NOT_FOUND",
      "statusCode": 404
    }
  }]
}

// Tentativa de atribuir líder que já lidera outra igreja
{
  "errors": [{
    "message": "duplicate key value violates unique constraint \"Church_leader_id_key\"",
    "extensions": {
      "code": "BAD_REQUEST",
      "statusCode": 400
    }
  }]
}
```

## Implementação Frontend

### React com Apollo Client

```typescript
import { useMutation, useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const CREATE_CHURCH = gql`
  mutation CreateChurch($data: ChurchCreateDto!) {
    createChurch(data: $data) {
      id
      name
      type
      leader {
        id
        name
        email
      }
    }
  }
`;

const UPDATE_CHURCH_LEADER = gql`
  mutation UpdateChurchLeader($id: String!, $leaderId: String!) {
    updateChurch(id: $id, data: { leader_id: $leaderId }) {
      id
      name
      leader {
        id
        name
      }
    }
  }
`;

const GET_CHURCH = gql`
  query GetChurch($id: String!) {
    church(id: $id) {
      id
      name
      type
      leader {
        id
        name
        email
      }
      users {
        id
        name
      }
      departments {
        id
        name
        leader {
          id
          name
        }
      }
    }
  }
`;

interface ChurchFormProps {
  institutionId: string;
}

function ChurchForm({ institutionId }: ChurchFormProps) {
  const [createChurch] = useMutation(CREATE_CHURCH);
  const [selectedLeader, setSelectedLeader] = useState<string>('');

  const handleSubmit = async (formData: any) => {
    try {
      await createChurch({
        variables: {
          data: {
            name: formData.name,
            institution_id: institutionId,
            leader_id: selectedLeader,  // OBRIGATÓRIO
            type: formData.type || 'STANDARD',
            contact: formData.contact
          }
        }
      });
      toast.success('Igreja criada com sucesso!');
    } catch (error) {
      if (error.message.includes('Leader user not found')) {
        toast.error('Líder selecionado não encontrado');
      } else if (error.message.includes('unique constraint')) {
        toast.error('Este usuário já lidera outra igreja');
      } else {
        toast.error('Erro ao criar igreja');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nome da igreja" required />
      <select name="type">
        <option value="STANDARD">Igreja Padrão</option>
        <option value="PLANT">Plantação de Igreja</option>
        <option value="COMPANY">Grupo Pequeno</option>
      </select>
      
      {/* Seleção de líder */}
      <select 
        value={selectedLeader} 
        onChange={(e) => setSelectedLeader(e.target.value)}
        required
      >
        <option value="">Selecione um líder</option>
        {/* Carregar usuários da instituição que não lideram outras igrejas */}
      </select>
      
      <button type="submit">Criar Igreja</button>
    </form>
  );
}

function ChurchLeaderManager({ churchId }: { churchId: string }) {
  const [updateLeader] = useMutation(UPDATE_CHURCH_LEADER);
  const { data } = useQuery(GET_CHURCH, {
    variables: { id: churchId }
  });

  const changeLeader = async (newLeaderId: string) => {
    try {
      await updateLeader({
        variables: {
          id: churchId,
          leaderId: newLeaderId
        }
      });
      toast.success('Líder atualizado com sucesso!');
    } catch (error) {
      if (error.message.includes('unique constraint')) {
        toast.error('Este usuário já lidera outra igreja');
      } else {
        toast.error('Erro ao atualizar líder');
      }
    }
  };

  return (
    <div>
      <h3>Líder Atual: {data?.church?.leader?.name}</h3>
      <button onClick={() => changeLeader('new-user-id')}>
        Alterar Líder
      </button>
    </div>
  );
}
```

### TypeScript Types

```typescript
interface Church {
  id: string;
  name: string;
  type: ChurchType;
  institution_id: string;
  region_id?: string | null;
  contact_id?: string | null;
  leader_id: string;
  leader: User;
  users?: User[];
  departments?: Department[];
  region?: Region | null;
  contact?: Contact | null;
  created_at: Date;
  updated_at: Date;
}

interface User {
  id: string;
  name: string;
  email: string;
  led_church?: Church | null;
}

enum ChurchType {
  PLANT = 'PLANT',
  COMPANY = 'COMPANY', 
  STANDARD = 'STANDARD'
}

interface CreateChurchInput {
  name: string;
  institution_id: string;
  leader_id: string;  // OBRIGATÓRIO
  type?: ChurchType;
  contact?: ContactInput;
}

interface UpdateChurchInput {
  name?: string;
  institution_id?: string;
  leader_id?: string;
  type?: ChurchType;
  contact?: ContactInput;
}
```

## Casos de Uso

### 1. Criação de Igreja com Líder

**Cenário:** Admin cria nova igreja e atribui um líder

```typescript
const createChurchWithLeader = async () => {
  await createChurch({
    variables: {
      data: {
        name: "Nova Igreja Adventista",
        institution_id: institutionId,
        leader_id: selectedUserId,  // Usuário com função de pastor/líder
        type: "STANDARD"
      }
    }
  });
};
```

### 2. Mudança de Liderança

**Cenário:** Transferência de liderança de uma igreja

```typescript
const transferLeadership = async (churchId: string, newLeaderId: string) => {
  await updateChurch({
    variables: {
      id: churchId,
      data: { leader_id: newLeaderId }
    }
  });
};
```

### 3. Buscar Igreja Liderada por Usuário

**Cenário:** Ver a igreja que um usuário lidera

```typescript
const getUserChurch = async (userId: string) => {
  const { data } = await apolloClient.query({
    query: gql`
      query GetUserChurch($userId: String!) {
        user(id: $userId) {
          id
          name
          led_church {
            id
            name
            type
            users {
              id
              name
            }
            departments {
              id
              name
            }
          }
        }
      }
    `,
    variables: { userId }
  });
  
  return data.user.led_church;
};
```

### 4. Dashboard do Líder da Igreja

**Cenário:** Interface específica para líderes visualizarem suas igrejas

```typescript
const ChurchLeaderDashboard = ({ userId }: { userId: string }) => {
  const { data } = useQuery(gql`
    query ChurchLeaderDashboard($userId: String!) {
      user(id: $userId) {
        led_church {
          id
          name
          users {
            id
            name
            user_roles {
              name
            }
          }
          departments {
            id
            name
            users {
              id
            }
          }
          subsidy_requests {
            id
            description
            total_budget
            subsidy_status {
              name
            }
          }
          annual_budgets {
            id
            total_allocated_amount
            status
          }
        }
      }
    }
  `, { variables: { userId } });

  const church = data?.user?.led_church;
  if (!church) return <div>Você não lidera nenhuma igreja</div>;

  return (
    <div>
      <h2>Painel - {church.name}</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h3>Membros ({church.users.length})</h3>
          {/* Lista de membros */}
        </div>
        <div>
          <h3>Departamentos ({church.departments.length})</h3>
          {/* Lista de departamentos */}
        </div>
        <div>
          <h3>Solicitações de Subsídio ({church.subsidy_requests.length})</h3>
          {/* Lista de solicitações */}
        </div>
      </div>
    </div>
  );
};
```

## Migrações e Dados Existentes

A migration foi projetada para lidar com igrejas já existentes no banco:

```sql
-- Step 1: Add enum value
ALTER TYPE "public"."PermissionResolverName" ADD VALUE 'updateChurchLeader';

-- Step 2: Add leader_id column as nullable
ALTER TABLE "public"."Church" ADD COLUMN "leader_id" TEXT;

-- Step 3: Set leader_id for existing churches using the first user of the institution
UPDATE "public"."Church" c
SET "leader_id" = (
  SELECT u.id 
  FROM "public"."User" u 
  WHERE u.institution_id = c.institution_id 
  AND u.is_deleted = false
  ORDER BY u.created_at ASC 
  LIMIT 1
)
WHERE c."leader_id" IS NULL;

-- Step 4: Make leader_id NOT NULL
ALTER TABLE "public"."Church" ALTER COLUMN "leader_id" SET NOT NULL;

-- Step 5: Add unique constraint
CREATE UNIQUE INDEX "Church_leader_id_key" ON "public"."Church"("leader_id");

-- Step 6: Add foreign key constraint
ALTER TABLE "public"."Church" ADD CONSTRAINT "Church_leader_id_fkey" 
  FOREIGN KEY ("leader_id") REFERENCES "public"."User"("id") 
  ON DELETE RESTRICT ON UPDATE CASCADE;
```

**Estratégia:**
1. Todas as igrejas existentes recebem automaticamente o primeiro usuário da instituição como líder
2. Administradores podem depois atualizar para o líder correto
3. Previne quebra de dados existentes
4. Constraint UNIQUE garante que cada usuário só pode liderar uma igreja

## Considerações de Segurança

### ✅ Boas Práticas

- **Validação obrigatória:** Leader_id é sempre validado antes de criar/atualizar
- **Unique constraint:** Previne que um usuário lidere múltiplas igrejas
- **Foreign key constraint:** Previne exclusão acidental de usuário líder
- **Auditoria:** Todas as mudanças registram created_by/updated_by
- **Permissões:** Apenas usuários com permissão adequada podem gerenciar igrejas

### ⚠️ Considerações

1. **Exclusão de Usuário:** Se tentar excluir um usuário que lidera uma igreja, o banco retornará erro devido à foreign key
2. **Transferência obrigatória:** Antes de excluir um líder, deve transferir a liderança
3. **Notificações:** Considerar notificar usuário quando se torna líder de uma igreja
4. **Hierarquia:** Líder pode ter permissões especiais sobre a igreja
5. **Liderança única:** Um usuário só pode liderar uma igreja por vez

## Novos Endpoints e Funcionalidades

### Mutation updateChurchLeader

Para casos específicos onde só se quer alterar o líder:

```typescript
// Resolver adicional (opcional)
@Permission(['updateChurchLeader'])
@Mutation(() => ChurchModel)
async updateChurchLeader(
  @Args('churchId') churchId: string,
  @Args('leaderId') leaderId: string,
  @Context() context: { userId: string },
): Promise<Church> {
  return this.churchService.updateChurch(churchId, { leader_id: leaderId }, context.userId);
}
```

### Query churchesByLeader

Para buscar igrejas por líder específico:

```typescript
@Permission()
@Query(() => [ChurchModel])
async churchesByLeader(
  @Args('leaderId') leaderId: string
): Promise<Church[]> {
  return this.churchService.getChurchesByLeader(leaderId);
}
```

## Próximos Passos

- [ ] Implementar notificação quando usuário se torna líder de igreja
- [ ] Adicionar dashboard específico para líderes de igreja
- [ ] Criar relatórios de atividade por igreja
- [ ] Implementar histórico de mudanças de liderança
- [ ] Adicionar validação de que líder pertence à mesma instituição da igreja
- [ ] Considerar co-líderes ou líderes associados
- [ ] Implementar aprovação automática de certas operações pelo líder da igreja

## Conclusão

A implementação do campo `leader_id` obrigatório e único em Church estabelece uma hierarquia clara de liderança eclesiástica. O sistema garante integridade referencial, validações robustas, auditoria completa e previne conflitos de liderança. A constraint única assegura que cada usuário lidere apenas uma igreja, mantendo a organização hierárquica consistente.

A migração inteligente permite transição suave de dados existentes, e as validações implementadas garantem a qualidade dos dados. A API GraphQL oferece flexibilidade completa para operações de CRUD, consultas de liderança e gerenciamento organizacional.