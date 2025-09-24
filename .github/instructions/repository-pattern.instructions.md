# Repository Pattern em TypeScript + GraphQL

## Visão Geral

O Repository Pattern separa a lógica de acesso a dados da lógica de negócio, facilitando manutenção, testes e extensões futuras. Em projetos TypeScript com GraphQL, ele garante que queries/mutations nunca acessem o banco diretamente, mas sempre via repositórios.

## Estrutura Recomendada

- Crie uma classe base de modelo em `src/models/` para cada entidade.
- Implemente o repository em `src/repositories/`, usando Prisma ou outro ORM.
- O service chama o repository, nunca o resolver.
- O resolver chama apenas o service.

## Exemplo Simplificado

- Model:
  ```typescript
  // src/models/user.model.ts
  export class User {
    id: string;
    name: string;
    // ...outros campos
  }
  ```
- Repository:
  ```typescript
  // src/repositories/user.repository.ts
  import { Injectable } from '@nestjs/common';
  import { PrismaService } from '../prisma/prisma.service';
  import { User } from '../models/user.model';

  @Injectable()
  export class UserRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findAll(): Promise<User[]> {
      return this.prisma.user.findMany();
    }
    // ...outros métodos
  }
  ```
- Service:
  ```typescript
  // src/services/user.service.ts
  import { Injectable } from '@nestjs/common';
  import { UserRepository } from '../repositories/user.repository';

  @Injectable()
  export class UserService {
    constructor(private readonly userRepo: UserRepository) {}

    async getUsers() {
      return this.userRepo.findAll();
    }
  }
  ```
- Resolver:
  ```typescript
  // src/schemas/user.resolver.ts
  import { Resolver, Query } from '@nestjs/graphql';
  import { UserService } from '../services/user.service';

  @Resolver()
  export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [User])
    users() {
      return this.userService.getUsers();
    }
  }
  ```

## Dicas
- Nunca coloque lógica de negócio ou acesso a dados no resolver.
- Sempre crie a classe de modelo base, mesmo que vazia.
- Use o padrão de pastas do projeto.
- Repositórios facilitam testes e desacoplamento.
