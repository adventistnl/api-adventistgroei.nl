# Padrões para Implementação de Fluxos (Resolvers, Services e Repositories)

Este documento descreve os padrões a serem seguidos para implementar fluxos consistentes em resolvers, services e repositories no projeto.

---

## **1. Nomenclatura de IDs**

### **Resolver:**
- O argumento recebido deve ser nomeado como `id`.
- Exemplo:
  ```typescript
  @Mutation(() => Department)
  async updateDepartment(
    @Args('id') id: string,
    @Args('data') data: DepartmentUpdateDto,
    @Context() context: { userId: string }
  ): Promise<Department> {
    return this.departmentService.updateDepartment(id, data, context.userId);
  }
  ```

### **Service e Repository:**
- O argumento deve ser renomeado para `<entityName>Id` (camelCase com prefixo).
- Exemplo na Service:
  ```typescript
  async updateDepartment(departmentId: string, data: DepartmentUpdateDto, userId: string): Promise<Department> {
    return this.departmentRepository.update(departmentId, data, userId);
  }
  ```
- Exemplo no Repository:
  ```typescript
  async update(departmentId: string, data: DepartmentUpdateDto, userId: string): Promise<Department> {
    return this.prisma.department.update({
      where: { id: departmentId },
      data: {
        ...existing code...
      },
    });
  }
  ```

---

## **2. Validação de Relacionamentos**
- Antes de realizar operações, valide os IDs relacionados nos repositórios correspondentes.
- Utilize os métodos `findById` para garantir que os registros existem.
- Exemplo:
  ```typescript
  if (data.institution_id) {
    await this.institutionRepository.findById(data.institution_id);
  }
  ```

---

## **3. Gerenciamento de Relacionamentos no Prisma**
- Utilize `connect` para gerenciar relacionamentos no Prisma.
- Exemplo:
  ```typescript
  institution: data.institution_id ? { connect: { id: data.institution_id } } : undefined,
  ```

---

## **4. Consistência nos DTOs**
- Os campos nos DTOs devem refletir o esquema do banco de dados, utilizando snake_case.
- Para campos relacionados, como `contact`, utilize objetos aninhados com validação robusta.
- Exemplo atualizado:
  ```typescript
  @Field(() => ContactCreateDto, { nullable: true })
  @IsOptional()
  @ValidateNested()
  contact?: ContactCreateDto;
  ```

---

## **5. Fluxo Geral**
1. **Resolver:** Recebe o argumento `id` e o passa para a service como `<entityName>Id`.
2. **Service:** Recebe `<entityName>Id` e o passa para o repository.
3. **Repository:** Realiza as operações no banco de dados, validando relacionamentos e utilizando `connect` para associações.

---

## **Exemplo Completo**

### Resolver:
```typescript
@Permission()
@Mutation(() => Department)
async updateDepartment(
  @Args('id') id: string,
  @Args('data') data: DepartmentUpdateDto,
  @Context() context: { userId: string }
): Promise<Department> {
  return this.departmentService.updateDepartment(id, data, context.userId);
}
```

### Service:
```typescript
async updateDepartment(departmentId: string, data: DepartmentUpdateDto, userId: string): Promise<Department> {
  return this.departmentRepository.update(departmentId, data, userId);
}
```

### Repository:
```typescript
async update(departmentId: string, data: DepartmentUpdateDto, userId: string): Promise<Department> {
  const existingDepartment = await this.findById(departmentId);
  if (!existingDepartment) {
    throw new CustomGraphQLError('Department not found', ErrorCode.NOT_FOUND, 404);
  }

  let contactData;
  if (data.contact) {
    contactData = existingDepartment.contact_id
      ? {
          update: {
            ...data.contact,
            updated_by: userId,
          },
        }
      : {
          create: {
            ...data.contact,
            is_primary: false,
            created_by: userId,
            updated_by: userId,
          },
        };
  }

  return this.prisma.department.update({
    where: { id: departmentId },
    data: {
      name: data.name ?? undefined,
      description: data.description ?? undefined,
      annual_budget: data.annual_budget ? new Prisma.Decimal(data.annual_budget) : undefined,
      institution: data.institution_id ? { connect: { id: data.institution_id } } : undefined,
      church: data.church_id ? { connect: { id: data.church_id } } : undefined,
      contact: contactData,
      updated_by: userId,
    },
  });
}

async create(data: DepartmentCreateDto, userId: string): Promise<Department> {
  let contactId: string | undefined;
  if (data.contact) {
    const contact = await this.prisma.contact.create({
      data: {
        ...data.contact,
        is_primary: false,
        created_by: userId,
        updated_by: userId,
      },
    });
    contactId = contact.id;
  }

  return this.prisma.department.create({
    data: {
      name: data.name,
      description: data.description,
      annual_budget: new Prisma.Decimal(data.annual_budget),
      institution: { connect: { id: data.institution } },
      church: { connect: { id: data.church } },
      contact: contactId ? { connect: { id: contactId } } : undefined,
      created_by: userId,
      updated_by: userId,
    },
  });
}
```

---

## **Exemplo de Atualização com Contato Existente ou Novo**

#### Repository:
```typescript
async update(churchId: string, data: ChurchUpdateDto, userId: string): Promise<Church> {
  const church = await this.prisma.church.findUnique({
    where: { id: churchId },
  });
  if (!church) {
    throw new CustomGraphQLError('Church not found', ErrorCode.NOT_FOUND, 404);
  }

  let contactData;
  if (data.contact) {
    contactData = church.contact_id
      ? {
          update: {
            ...data.contact,
            updated_by: userId,
          },
        }
      : {
          create: {
            ...data.contact,
            is_primary: true,
            created_by: userId,
            updated_by: userId,
          },
        };
  }

  return await this.prisma.church.update({
    where: { id: churchId },
    data: {
      institution_id: data.institution_id,
      name: data.name,
      region_id: data.region_id,
      contact: contactData,
      updated_by: userId,
    },
  });
}
```

#### Service:
```typescript
async updateChurch(data: ChurchUpdateDto, userId: string): Promise<Church> {
  return await this.churchRepository.update(data, userId);
}
```

#### Resolver:
```typescript
@Permission()
@Mutation(() => ChurchModel)
async updateChurch(
  @Args('data') data: ChurchUpdateDto,
  @Context() context: { userId: string },
): Promise<Church> {
  const userId = context.userId;
  return await this.churchService.updateChurch(data, userId);
}
```
