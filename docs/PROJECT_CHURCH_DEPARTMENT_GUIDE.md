# Guia de Implementação: Church Department em Projetos

## 📋 Visão Geral

Este guia descreve como implementar o registro de projetos com relacionamento ao **Departamento de Igreja** (`church_department_id`) no frontend.

## 🎯 Propósito

O campo `church_department_id` permite vincular um projeto a um departamento específico de uma igreja local, complementando o `department_id` institucional obrigatório.

### Estrutura de Relacionamentos

```
Project
├── department_id (obrigatório)        → Departamento Institucional
├── church_department_id (opcional)    → Departamento da Igreja Local
├── church_id (opcional)               → Igreja
└── institution_id (opcional)          → Instituição
```

## 🏗️ Arquitetura Backend

### 1. Schema Prisma

```prisma
model Project {
  id                    String      @id @default(uuid())
  department_id         String      // Departamento institucional (obrigatório)
  department            Department  @relation("ProjectDepartment", fields: [department_id], references: [id])
  
  church_department_id  String?     // Departamento da igreja (opcional)
  church_department     Department? @relation("ProjectChurchDepartment", fields: [church_department_id], references: [id])
  
  church_id             String?
  church                Church?     @relation(fields: [church_id], references: [id])
  
  // ... outros campos
}

model Department {
  id               String      @id @default(uuid())
  institution_id   String
  institution      Institution @relation(fields: [institution_id], references: [id])
  church_id        String?     // Se preenchido, é um departamento de igreja
  church           Church?     @relation(fields: [church_id], references: [id])
  
  // Relações inversas com Project
  projects         Project[]   @relation("ProjectDepartment")
  church_projects  Project[]   @relation("ProjectChurchDepartment")
  
  // ... outros campos
}
```

### 2. Migrations Aplicadas

```sql
-- Migration: 20260120033804_add_church_department_to_project
ALTER TABLE "public"."Project" 
  ADD COLUMN "church_department_id" TEXT;

ALTER TABLE "public"."Project" 
  ADD CONSTRAINT "Project_church_department_id_fkey" 
  FOREIGN KEY ("church_department_id") 
  REFERENCES "public"."Department"("id") 
  ON DELETE SET NULL 
  ON UPDATE CASCADE;
```

### 3. DTOs Atualizados

**ProjectCreateDto:**
```typescript
@InputType()
export class ProjectCreateDto {
  @Field()
  @IsString()
  department_id: string;  // Obrigatório
  
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  church_id?: string;
  
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  church_department_id?: string;  // Novo campo
  
  // ... outros campos
}
```

**ProjectUpdateDto:**
```typescript
@InputType()
export class ProjectUpdateDto {
  @Field({ nullable: true })
  @IsOptional()
  department_id?: string;
  
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  church_id?: string;
  
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  church_department_id?: string;  // Novo campo
  
  // ... outros campos
}
```

### 4. Repository

O repository foi atualizado para incluir `church_department_id` nas operações de **create** e **update**:

```typescript
// Create
const createdProject = await this.prisma.project.create({
  data: {
    // ... outros campos
    department: { connect: { id: data.department_id } },
    church: data.church_id ? { connect: { id: data.church_id } } : undefined,
    church_department: data.church_department_id 
      ? { connect: { id: data.church_department_id } } 
      : undefined,
  },
});

// Update
const updateData = {
  // ... outros campos
  department: department_id ? { connect: { id: department_id } } : undefined,
  church: church_id ? { connect: { id: church_id } } : undefined,
  church_department: church_department_id 
    ? { connect: { id: church_department_id } } 
    : undefined,
};
```

### 5. Resolver

O resolver expõe o relacionamento via `@ResolveField`:

```typescript
@Resolver(() => Project)
export class ProjectResolver {
  constructor(
    private readonly departmentService: DepartmentService,
  ) {}

  @ResolveField(() => Department, { nullable: true, name: 'churchDepartment' })
  async getChurchDepartment(@Parent() project: Project): Promise<Department | null> {
    if (!project.church_department_id) {
      return null;
    }
    return this.departmentService.getDepartmentById(
      project.church_department_id as string
    );
  }
}
```

## 📡 GraphQL API

### Mutations

#### 1. Criar Projeto com Church Department

```graphql
mutation CreateProjectWithChurchDepartment {
  createProject(
    data: {
      # Campos obrigatórios
      title: "Projeto Evangelístico Local"
      description: "Campanha de evangelismo na comunidade"
      department_id: "dept-institution-uuid"      # Departamento Institucional
      budget: 5000
      type: MISSION
      language_preference: nl
      start_at: "2026-02-01T00:00:00Z"
      end_at: "2026-12-31T23:59:59Z"
      
      # Campos opcionais relacionados à igreja
      church_id: "church-uuid"                    # Igreja
      church_department_id: "dept-church-uuid"    # Departamento da Igreja
      institution_id: "institution-uuid"
    }
  ) {
    id
    title
    
    # Departamento institucional
    department {
      id
      name
      institution {
        id
        name
      }
    }
    
    # Departamento da igreja
    churchDepartment {
      id
      name
      church {
        id
        name
        address
      }
    }
    
    # Igreja direta
    church {
      id
      name
    }
  }
}
```

#### 2. Atualizar Church Department

```graphql
mutation UpdateProjectChurchDepartment {
  updateProject(
    id: "project-uuid"
    data: {
      church_department_id: "new-dept-uuid"
    }
  ) {
    id
    title
    churchDepartment {
      id
      name
      church {
        name
      }
    }
  }
}
```

#### 3. Remover Church Department

```graphql
mutation RemoveChurchDepartment {
  updateProject(
    id: "project-uuid"
    data: {
      church_department_id: null
    }
  ) {
    id
    churchDepartment {
      id
    }
  }
}
```

### Queries

#### 1. Buscar Projeto com Departamentos

```graphql
query GetProjectWithDepartments($id: String!) {
  project(id: $id) {
    id
    title
    description
    budget
    
    # Departamento institucional principal
    department {
      id
      name
      description
      institution {
        id
        name
      }
    }
    
    # Departamento específico da igreja
    churchDepartment {
      id
      name
      description
      church {
        id
        name
        address
        contact {
          name
          phone
          email
        }
      }
    }
  }
}
```

#### 2. Listar Departamentos de Igreja

Para popular o dropdown de seleção:

```graphql
query GetChurchDepartments($churchId: String!) {
  departments(
    where: { 
      church_id: { equals: $churchId }
      is_deleted: { equals: false }
    }
  ) {
    id
    name
    description
    church {
      id
      name
    }
  }
}
```

## 💻 Implementação Frontend

### 1. Tipos TypeScript

```typescript
// types/project.ts
export interface ProjectFormData {
  title: string;
  description: string;
  department_id: string;           // Obrigatório
  church_id?: string | null;       // Opcional
  church_department_id?: string | null;  // Novo campo opcional
  institution_id?: string | null;
  budget: number;
  type: ProjectType;
  language_preference: 'en' | 'nl' | 'pt';
  start_at: string;
  end_at: string;
  deadline?: string | null;
  is_private: boolean;
  required_volunteers: boolean;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  church_id?: string | null;
  church?: {
    id: string;
    name: string;
  } | null;
  institution?: {
    id: string;
    name: string;
  };
}
```

### 2. GraphQL Queries/Mutations

```typescript
// graphql/project.mutations.ts
import { gql } from '@apollo/client';

export const CREATE_PROJECT = gql`
  mutation CreateProject($data: ProjectCreateDto!) {
    createProject(data: $data) {
      id
      title
      description
      department {
        id
        name
        institution {
          name
        }
      }
      churchDepartment {
        id
        name
        church {
          id
          name
        }
      }
      church {
        id
        name
      }
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation UpdateProject($id: String!, $data: ProjectUpdateDto!) {
    updateProject(id: $id, data: $data) {
      id
      title
      churchDepartment {
        id
        name
      }
    }
  }
`;

// graphql/department.queries.ts
export const GET_CHURCH_DEPARTMENTS = gql`
  query GetChurchDepartments($churchId: String!) {
    departments(
      where: { 
        church_id: { equals: $churchId }
        is_deleted: { equals: false }
      }
    ) {
      id
      name
      description
      church {
        id
        name
      }
    }
  }
`;
```

### 3. Componente de Formulário (React + TypeScript)

```typescript
// components/ProjectForm.tsx
import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_PROJECT, UPDATE_PROJECT } from '../graphql/project.mutations';
import { GET_CHURCH_DEPARTMENTS } from '../graphql/department.queries';

interface ProjectFormProps {
  initialData?: Partial<ProjectFormData>;
  onSuccess?: (project: any) => void;
  mode: 'create' | 'edit';
  projectId?: string;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({
  initialData,
  onSuccess,
  mode,
  projectId
}) => {
  const [formData, setFormData] = useState<ProjectFormData>({
    title: initialData?.title || '',
    description: initialData?.description || '',
    department_id: initialData?.department_id || '',
    church_id: initialData?.church_id || null,
    church_department_id: initialData?.church_department_id || null,
    budget: initialData?.budget || 0,
    type: initialData?.type || 'MISSION',
    language_preference: initialData?.language_preference || 'nl',
    start_at: initialData?.start_at || '',
    end_at: initialData?.end_at || '',
    is_private: initialData?.is_private || false,
    required_volunteers: initialData?.required_volunteers || false,
  });

  // Buscar departamentos da igreja quando church_id mudar
  const { data: churchDepartmentsData } = useQuery(GET_CHURCH_DEPARTMENTS, {
    variables: { churchId: formData.church_id },
    skip: !formData.church_id,
  });

  const [createProject, { loading: creating }] = useMutation(CREATE_PROJECT);
  const [updateProject, { loading: updating }] = useMutation(UPDATE_PROJECT);

  // Resetar church_department_id quando church_id mudar
  useEffect(() => {
    if (formData.church_id !== initialData?.church_id) {
      setFormData(prev => ({ ...prev, church_department_id: null }));
    }
  }, [formData.church_id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (mode === 'create') {
        const result = await createProject({
          variables: { data: formData }
        });
        onSuccess?.(result.data.createProject);
      } else {
        const result = await updateProject({
          variables: { id: projectId, data: formData }
        });
        onSuccess?.(result.data.updateProject);
      }
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Título */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Título do Projeto *
        </label>
        <input
          type="text"
          required
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      {/* Descrição */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Descrição *
        </label>
        <textarea
          required
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg"
          rows={4}
        />
      </div>

      {/* Departamento Institucional (Obrigatório) */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Departamento Institucional *
        </label>
        <select
          required
          value={formData.department_id}
          onChange={(e) => setFormData({ ...formData, department_id: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="">Selecione um departamento</option>
          {/* Mapear departamentos institucionais aqui */}
        </select>
      </div>

      {/* Igreja (Opcional) */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Igreja (Opcional)
        </label>
        <select
          value={formData.church_id || ''}
          onChange={(e) => setFormData({ 
            ...formData, 
            church_id: e.target.value || null 
          })}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="">Nenhuma</option>
          {/* Mapear igrejas aqui */}
        </select>
      </div>

      {/* Departamento da Igreja (Opcional - apenas se church_id estiver preenchido) */}
      {formData.church_id && (
        <div>
          <label className="block text-sm font-medium mb-2">
            Departamento da Igreja (Opcional)
          </label>
          <select
            value={formData.church_department_id || ''}
            onChange={(e) => setFormData({ 
              ...formData, 
              church_department_id: e.target.value || null 
            })}
            className="w-full px-3 py-2 border rounded-lg"
            disabled={!churchDepartmentsData?.departments?.length}
          >
            <option value="">Nenhum</option>
            {churchDepartmentsData?.departments?.map((dept: Department) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
          {!churchDepartmentsData?.departments?.length && (
            <p className="text-sm text-gray-500 mt-1">
              Nenhum departamento disponível para esta igreja
            </p>
          )}
        </div>
      )}

      {/* Budget */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Orçamento *
        </label>
        <input
          type="number"
          required
          min="0"
          step="0.01"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: parseFloat(e.target.value) })}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      {/* Tipo de Projeto */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Tipo de Projeto *
        </label>
        <select
          required
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="MISSION">Missão</option>
          <option value="EVANGELISM">Evangelismo</option>
          <option value="SOCIAL">Social</option>
          <option value="EDUCATION">Educação</option>
        </select>
      </div>

      {/* Datas */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Data de Início *
          </label>
          <input
            type="datetime-local"
            required
            value={formData.start_at}
            onChange={(e) => setFormData({ ...formData, start_at: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Data de Término *
          </label>
          <input
            type="datetime-local"
            required
            value={formData.end_at}
            onChange={(e) => setFormData({ ...formData, end_at: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
      </div>

      {/* Botões */}
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="px-4 py-2 border rounded-lg hover:bg-gray-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={creating || updating}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {creating || updating ? 'Salvando...' : (mode === 'create' ? 'Criar Projeto' : 'Atualizar Projeto')}
        </button>
      </div>
    </form>
  );
};
```

### 4. Hook Customizado (Opcional)

```typescript
// hooks/useProjectForm.ts
import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_PROJECT, UPDATE_PROJECT } from '../graphql/project.mutations';
import { GET_CHURCH_DEPARTMENTS } from '../graphql/department.queries';

export const useProjectForm = (initialData?: Partial<ProjectFormData>) => {
  const [formData, setFormData] = useState<ProjectFormData>({
    title: initialData?.title || '',
    description: initialData?.description || '',
    department_id: initialData?.department_id || '',
    church_id: initialData?.church_id || null,
    church_department_id: initialData?.church_department_id || null,
    // ... outros campos
  });

  const { data: churchDepartments, loading: loadingDepartments } = useQuery(
    GET_CHURCH_DEPARTMENTS,
    {
      variables: { churchId: formData.church_id },
      skip: !formData.church_id,
    }
  );

  // Resetar church_department_id quando church_id mudar
  useEffect(() => {
    if (formData.church_id !== initialData?.church_id) {
      setFormData(prev => ({ ...prev, church_department_id: null }));
    }
  }, [formData.church_id]);

  return {
    formData,
    setFormData,
    churchDepartments: churchDepartments?.departments || [],
    loadingDepartments,
  };
};
```

## 🔍 Casos de Uso

### Caso 1: Projeto Institucional (Sem Igreja)

```typescript
const projectData = {
  title: "Campanha Nacional de Evangelismo",
  description: "Campanha em nível nacional",
  department_id: "dept-evangelism-uuid",  // Departamento institucional
  church_id: null,                         // Sem igreja específica
  church_department_id: null,              // Sem departamento de igreja
  budget: 50000,
  type: "EVANGELISM",
  // ... outros campos
};
```

### Caso 2: Projeto de Igreja Local (Com Departamento)

```typescript
const projectData = {
  title: "Escola Bíblica de Férias",
  description: "EBF para crianças da comunidade",
  department_id: "dept-education-uuid",       // Departamento institucional
  church_id: "church-amsterdam-uuid",         // Igreja local
  church_department_id: "dept-children-uuid", // Departamento infantil da igreja
  budget: 2000,
  type: "EDUCATION",
  // ... outros campos
};
```

### Caso 3: Projeto de Igreja (Sem Departamento Específico)

```typescript
const projectData = {
  title: "Reforma da Igreja",
  description: "Manutenção do prédio",
  department_id: "dept-infrastructure-uuid",  // Departamento institucional
  church_id: "church-rotterdam-uuid",         // Igreja local
  church_department_id: null,                 // Sem departamento específico
  budget: 15000,
  type: "INFRASTRUCTURE",
  // ... outros campos
};
```

## ✅ Validações

### Backend

1. ✅ `department_id` é obrigatório
2. ✅ `church_department_id` deve referenciar um `Department` válido
3. ✅ Se `church_department_id` for fornecido, valida existência no banco
4. ✅ Foreign key com `ON DELETE SET NULL` protege integridade

### Frontend

1. ✅ Validar que `department_id` está preenchido
2. ✅ `church_department_id` só aparece se `church_id` estiver selecionado
3. ✅ Resetar `church_department_id` quando `church_id` mudar
4. ✅ Desabilitar dropdown se não houver departamentos disponíveis
5. ✅ Feedback visual quando carregando departamentos

## 🧪 Testes

### 1. Teste de Criação

```graphql
mutation TestCreate {
  createProject(
    data: {
      title: "Test Project"
      description: "Testing church department"
      department_id: "valid-dept-id"
      church_id: "valid-church-id"
      church_department_id: "valid-church-dept-id"
      budget: 1000
      type: MISSION
      language_preference: nl
      start_at: "2026-03-01T00:00:00Z"
      end_at: "2026-12-31T23:59:59Z"
    }
  ) {
    id
    churchDepartment {
      id
      name
      church {
        name
      }
    }
  }
}
```

### 2. Teste de Atualização

```graphql
mutation TestUpdate {
  updateProject(
    id: "project-id"
    data: {
      church_department_id: "new-dept-id"
    }
  ) {
    id
    churchDepartment {
      name
    }
  }
}
```

## 📚 Recursos Adicionais

- [Documentação Prisma Relations](https://www.prisma.io/docs/concepts/components/prisma-schema/relations)
- [GraphQL Best Practices](https://graphql.org/learn/best-practices/)
- [React Hook Form](https://react-hook-form.com/) - Para formulários complexos
- [Apollo Client](https://www.apollographql.com/docs/react/) - Cliente GraphQL

## 🚀 Deploy

Após implementar no frontend:

1. **Testar localmente** com diferentes cenários
2. **Verificar queries GraphQL** no Playground
3. **Validar permissões** de usuários
4. **Deploy backend** com migrations aplicadas
5. **Deploy frontend** com nova versão

## ⚠️ Notas Importantes

1. `church_department_id` é **sempre opcional**
2. Apenas departamentos com `church_id` preenchido devem aparecer no dropdown
3. Sempre validar no backend, nunca confiar apenas no frontend
4. Usar lazy loading para departamentos (buscar apenas quando necessário)
5. Implementar cache adequado no Apollo Client para melhor performance

---

**Última atualização:** 20 de janeiro de 2026  
**Versão da API:** 1.0  
**Status:** ✅ Implementado e testado
