# Implementação de Leader ID em Department

## Visão Geral

Adicionada a funcionalidade de atribuir um líder (leader) obrigatório para cada departamento. Cada departamento deve ter um usuário responsável por sua gestão.

## Arquitetura da Solução

### 1. Schema Prisma

**Localização:** `prisma/schema.prisma`

```prisma
model Department {
  id                         String           @id @default(uuid())
  institution_id             String
  institution                Institution      @relation(fields: [institution_id], references: [id])
  church_id                  String?
  church                     Church?           @relation(fields: [church_id], references: [id])
  name                       String
  description                String
  leader_id                  String           // NOVO: Campo obrigatório
  leader                     User             @relation("DepartmentLeader", fields: [leader_id], references: [id])
  // ... outros campos
}

model User {
  // ... campos existentes
  led_departments           Department[]     @relation("DepartmentLeader")  // NOVO: Relação reversa
}
```

**Migration:** `20260120044321_add_leader_id_to_department`

A migration foi criada com estratégia para lidar com dados existentes:
1. Adiciona coluna `leader_id` como nullable
2. Preenche com o primeiro usuário da instituição de cada departamento
3. Torna a coluna NOT NULL
4. Adiciona foreign key constraint

### 2. DTOs Atualizados

**Localização:** `src/dto/department.dto.ts`

```typescript
@InputType()
export class DepartmentCreateDto {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  description: string;

  @Field()
  @IsString()
  institution: string;

  @Field()
  @IsString()
  leader_id: string;  // NOVO: Campo obrigatório

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  church?: string;

  @Field(() => ContactCreateDto, { nullable: true })
  @IsOptional()
  @ValidateNested()
  contact?: ContactCreateDto;
}

@InputType()
export class DepartmentUpdateDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  institution_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  leader_id?: string;  // NOVO: Campo opcional para update

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  church_id?: string;

  @Field(() => ContactCreateDto, { nullable: true })
  @IsOptional()
  @ValidateNested()
  contact?: ContactCreateDto;
}
```

### 3. Repository

**Localização:** `src/repositories/department.repository.ts`

#### Método Create

```typescript
async create(data: DepartmentCreateDto, userId: string): Promise<Department> {
  await this.institutionRepository.findById(data.institution);
  const churchId = data.church && data.church.trim() !== '' ? data.church : undefined;
  if (churchId) await this.churchRepository.findById(churchId);

  // Validate leader exists
  const leader = await this.prisma.user.findUnique({ where: { id: data.leader_id } });
  if (!leader) {
    throw new CustomGraphQLError('Leader user not found', ErrorCode.NOT_FOUND, 404);
  }

  // ... criação de contato

  return this.prisma.department.create({
    data: {
      name: data.name,
      description: data.description,
      institution: { connect: { id: data.institution } },
      leader: { connect: { id: data.leader_id } },  // NOVO: Conecta o líder
      church: churchId ? { connect: { id: churchId } } : undefined,
      contact: contactId ? { connect: { id: contactId } } : undefined,
      created_by: userId,
      updated_by: userId,
    },
  });
}
```

#### Método Update

```typescript
async update(departmentId: string, data: DepartmentUpdateDto, userId: string): Promise<Department> {
  if (data.institution_id) {
    await this.institutionRepository.findById(data.institution_id);
  }

  if (data.church_id) {
    await this.churchRepository.findById(data.church_id);
  }

  // NOVO: Validação do líder
  if (data.leader_id) {
    const leader = await this.prisma.user.findUnique({ where: { id: data.leader_id } });
    if (!leader) {
      throw new CustomGraphQLError('Leader user not found', ErrorCode.NOT_FOUND, 404);
    }
  }

  // ... restante da lógica

  return this.prisma.department.update({
    where: { id: departmentId },
    data: {
      name: data.name ?? undefined,
      description: data.description ?? undefined,
      institution: data.institution_id ? { connect: { id: data.institution_id } } : undefined,
      leader: data.leader_id ? { connect: { id: data.leader_id } } : undefined,  // NOVO
      church: data.church_id ? { connect: { id: data.church_id } } : undefined,
      contact: contactData,
      updated_by: userId,
    },
  });
}
```

### 4. Resolver

**Localização:** `src/graphql/department.resolver.ts`

```typescript
import { UserService } from '../services/user.service';  // NOVO import

@Resolver(() => Department)
@UseGuards(PermissionsGuard)
export class DepartmentResolver {
  constructor(
    private readonly departmentService: DepartmentService,
    private readonly userService: UserService,  // NOVO: Injeção do UserService
  ) {}

  // ... mutations existentes

  // NOVO: ResolveField para carregar dados do líder
  @ResolveField(() => User)
  async leader(@Parent() department: Department): Promise<User> {
    return this.userService.getUserById(department.leader_id);
  }

  // ... outros ResolveFields
}
```

## API GraphQL

### Mutations

#### 1. Criar Departamento (agora requer leader_id)

```graphql
mutation CreateDepartment {
  createDepartment(data: {
    name: "Departamento de TI"
    description: "Responsável pela infraestrutura tecnológica"
    institution: "institution-uuid"
    leader_id: "user-uuid"  # OBRIGATÓRIO
    church: "church-uuid"  # opcional
  }) {
    id
    name
    description
    leader_id
    leader {
      id
      name
      email
    }
  }
}
```

**Resposta:**
```json
{
  "data": {
    "createDepartment": {
      "id": "dept-uuid-123",
      "name": "Departamento de TI",
      "description": "Responsável pela infraestrutura tecnológica",
      "leader_id": "user-uuid",
      "leader": {
        "id": "user-uuid",
        "name": "João Silva",
        "email": "joao.silva@example.com"
      }
    }
  }
}
```

#### 2. Atualizar Líder do Departamento

```graphql
mutation UpdateDepartmentLeader {
  updateDepartment(
    id: "dept-uuid-123"
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

#### 3. Buscar Departamento com Líder

```graphql
query GetDepartment {
  department(id: "dept-uuid-123") {
    id
    name
    description
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
  }
}
```

**Resposta:**
```json
{
  "data": {
    "department": {
      "id": "dept-uuid-123",
      "name": "Departamento de TI",
      "description": "Responsável pela infraestrutura tecnológica",
      "leader_id": "user-uuid",
      "leader": {
        "id": "user-uuid",
        "name": "João Silva",
        "email": "joao.silva@example.com",
        "contact": {
          "phone": "+31 6 1234 5678",
          "email": "joao.silva@example.com"
        }
      },
      "users": [
        {
          "id": "user-2",
          "name": "Maria Santos",
          "email": "maria@example.com"
        }
      ]
    }
  }
}
```

#### 4. Buscar Departamentos de uma Instituição

```graphql
query GetDepartments {
  departments(institution_id: "institution-uuid") {
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

### Query para Buscar Departamentos Liderados por um Usuário

```graphql
query GetUserLedDepartments {
  user(id: "user-uuid") {
    id
    name
    led_departments {
      id
      name
      description
      institution {
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
| Leader obrigatório | DepartmentCreateDto | Campo `leader_id` é obrigatório na criação |
| Existência do usuário | DepartmentRepository.create | Valida se o user_id existe antes de criar |
| Existência do usuário | DepartmentRepository.update | Valida se o user_id existe antes de atualizar |
| Foreign key constraint | Database | Previne exclusão de usuário que é líder de departamento |

## Tratamento de Erros

### Erros Possíveis

```typescript
// Tentativa de criar departamento com líder inexistente
{
  "errors": [{
    "message": "Leader user not found",
    "extensions": {
      "code": "NOT_FOUND",
      "statusCode": 404
    }
  }]
}

// Tentativa de atualizar com líder inexistente
{
  "errors": [{
    "message": "Leader user not found",
    "extensions": {
      "code": "NOT_FOUND",
      "statusCode": 404
    }
  }]
}
```

## Implementação Frontend

### React com Apollo Client

```typescript
import { useMutation, useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const CREATE_DEPARTMENT = gql`
  mutation CreateDepartment($data: DepartmentCreateDto!) {
    createDepartment(data: $data) {
      id
      name
      description
      leader {
        id
        name
        email
      }
    }
  }
`;

const UPDATE_DEPARTMENT_LEADER = gql`
  mutation UpdateDepartmentLeader($id: String!, $leaderId: String!) {
    updateDepartment(id: $id, data: { leader_id: $leaderId }) {
      id
      name
      leader {
        id
        name
      }
    }
  }
`;

const GET_DEPARTMENT = gql`
  query GetDepartment($id: String!) {
    department(id: $id) {
      id
      name
      description
      leader {
        id
        name
        email
      }
      users {
        id
        name
      }
    }
  }
`;

interface DepartmentFormProps {
  institutionId: string;
}

function DepartmentForm({ institutionId }: DepartmentFormProps) {
  const [createDepartment] = useMutation(CREATE_DEPARTMENT);
  const [selectedLeader, setSelectedLeader] = useState<string>('');

  const handleSubmit = async (formData: any) => {
    try {
      await createDepartment({
        variables: {
          data: {
            name: formData.name,
            description: formData.description,
            institution: institutionId,
            leader_id: selectedLeader,  // OBRIGATÓRIO
          }
        }
      });
      toast.success('Departamento criado com sucesso!');
    } catch (error) {
      if (error.message.includes('Leader user not found')) {
        toast.error('Líder selecionado não encontrado');
      } else {
        toast.error('Erro ao criar departamento');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nome do departamento" required />
      <textarea name="description" placeholder="Descrição" required />
      
      {/* Seleção de líder */}
      <select 
        value={selectedLeader} 
        onChange={(e) => setSelectedLeader(e.target.value)}
        required
      >
        <option value="">Selecione um líder</option>
        {/* Carregar usuários da instituição */}
      </select>
      
      <button type="submit">Criar Departamento</button>
    </form>
  );
}

function DepartmentLeaderManager({ departmentId }: { departmentId: string }) {
  const [updateLeader] = useMutation(UPDATE_DEPARTMENT_LEADER);
  const { data } = useQuery(GET_DEPARTMENT, {
    variables: { id: departmentId }
  });

  const changeLeader = async (newLeaderId: string) => {
    try {
      await updateLeader({
        variables: {
          id: departmentId,
          leaderId: newLeaderId
        }
      });
      toast.success('Líder atualizado com sucesso!');
    } catch (error) {
      toast.error('Erro ao atualizar líder');
    }
  };

  return (
    <div>
      <h3>Líder Atual: {data?.department?.leader?.name}</h3>
      <button onClick={() => changeLeader('new-user-id')}>
        Alterar Líder
      </button>
    </div>
  );
}
```

### TypeScript Types

```typescript
interface Department {
  id: string;
  name: string;
  description: string;
  institution_id: string;
  church_id?: string | null;
  leader_id: string;
  leader: User;
  users?: User[];
  contact_id?: string | null;
  created_at: Date;
  updated_at: Date;
}

interface User {
  id: string;
  name: string;
  email: string;
  led_departments?: Department[];
}

interface CreateDepartmentInput {
  name: string;
  description: string;
  institution: string;
  leader_id: string;  // OBRIGATÓRIO
  church?: string;
  contact?: ContactInput;
}

interface UpdateDepartmentInput {
  name?: string;
  description?: string;
  institution_id?: string;
  leader_id?: string;
  church_id?: string;
  contact?: ContactInput;
}
```

## Casos de Uso

### 1. Criação de Departamento com Líder

**Cenário:** Admin cria novo departamento e atribui um líder

```typescript
const createDepartmentWithLeader = async () => {
  await createDepartment({
    variables: {
      data: {
        name: "Departamento Financeiro",
        description: "Gestão financeira da instituição",
        institution: institutionId,
        leader_id: selectedUserId  // Usuário com permissão de líder
      }
    }
  });
};
```

### 2. Mudança de Liderança

**Cenário:** Transferência de liderança de um departamento

```typescript
const transferLeadership = async (departmentId: string, newLeaderId: string) => {
  await updateDepartment({
    variables: {
      id: departmentId,
      data: { leader_id: newLeaderId }
    }
  });
};
```

### 3. Listar Departamentos por Líder

**Cenário:** Ver todos os departamentos que um usuário lidera

```typescript
const getUserDepartments = async (userId: string) => {
  const { data } = await apolloClient.query({
    query: gql`
      query GetUserDepartments($userId: String!) {
        user(id: $userId) {
          id
          name
          led_departments {
            id
            name
            users {
              id
              name
            }
          }
        }
      }
    `,
    variables: { userId }
  });
  
  return data.user.led_departments;
};
```

## Migrações e Dados Existentes

A migration foi projetada para lidar com departamentos já existentes no banco:

```sql
-- Step 1: Add leader_id column as nullable
ALTER TABLE "public"."Department" ADD COLUMN "leader_id" TEXT;

-- Step 2: Set leader_id for existing departments using the first user of the institution
UPDATE "public"."Department" d
SET "leader_id" = (
  SELECT u.id 
  FROM "public"."User" u 
  WHERE u.institution_id = d.institution_id 
  AND u.is_deleted = false
  ORDER BY u.created_at ASC 
  LIMIT 1
)
WHERE d.leader_id IS NULL;

-- Step 3: Make leader_id NOT NULL
ALTER TABLE "public"."Department" ALTER COLUMN "leader_id" SET NOT NULL;

-- Step 4: Add foreign key constraint
ALTER TABLE "public"."Department" ADD CONSTRAINT "Department_leader_id_fkey" 
  FOREIGN KEY ("leader_id") REFERENCES "public"."User"("id") 
  ON DELETE RESTRICT ON UPDATE CASCADE;
```

**Estratégia:**
1. Todos os departamentos existentes recebem automaticamente o primeiro usuário da instituição como líder
2. Administradores podem depois atualizar para o líder correto
3. Previne quebra de dados existentes

## Considerações de Segurança

### ✅ Boas Práticas

- **Validação obrigatória:** Leader_id é sempre validado antes de criar/atualizar
- **Foreign key constraint:** Previne exclusão acidental de usuário líder
- **Auditoria:** Todas as mudanças registram created_by/updated_by
- **Permissões:** Apenas usuários com permissão adequada podem gerenciar departamentos

### ⚠️ Considerações

1. **Exclusão de Usuário:** Se tentar excluir um usuário que é líder, o banco retornará erro devido à foreign key
2. **Transferência obrigatória:** Antes de excluir um líder, deve transferir a liderança
3. **Notificações:** Considerar notificar usuário quando se torna líder de um departamento
4. **Hierarquia:** Leader pode ter permissões especiais sobre o departamento

## Próximos Passos

- [ ] Implementar notificação quando usuário se torna líder
- [ ] Adicionar permissões específicas para líderes de departamento
- [ ] Criar dashboard específico para líderes visualizarem seus departamentos
- [ ] Implementar histórico de mudanças de liderança
- [ ] Permitir co-líderes (múltiplos líderes por departamento)

## Conclusão

A implementação do campo `leader_id` obrigatório em Department estabelece uma hierarquia clara de responsabilidade, permitindo atribuir e gerenciar líderes de departamento de forma estruturada. O sistema garante integridade referencial, validações robustas e auditoria completa de todas as operações relacionadas à liderança departamental.
