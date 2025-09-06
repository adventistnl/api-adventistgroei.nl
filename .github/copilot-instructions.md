# Copilot Instructions para `api-adventistgroei.nl`

## Visão Geral

- Projeto backend em **Node.js/NestJS** com **TypeScript**, **Prisma** (PostgreSQL) e **GraphQL**.
- Estrutura modular: cada domínio deve ser separado em **services**, **schemas (resolvers)**, **repositories**, **models**, **dto**, **middlewares**.
- O padrão **Repository** é obrigatório para acesso a dados, mesmo que a pasta esteja vazia atualmente.
> Veja instruções detalhadas sobre Repository Pattern em `.github/repository-pattern.md`
- Sempre utilize **tipos gerados automaticamente** pelo `prisma-nestjs-graphql` para substituir modelos manuais, resolvendo conflitos de tipos duplicados quando necessário.
- O projeto segue **SOLID** e boas práticas de OOP. Código limpo, legível e sem duplicação.

## Fluxo de Dados

- **Resolvers** (`src/graphql/`) expõem queries/mutations GraphQL e delegam tudo para os **services**. Não possuem lógica de negócio nem acesso direto ao banco.
- **Resolvers** (`src/graphql/`) devem usar `@ResolveField` para expor relacionamentos, delegando a lógica de carregamento para os **services**.
- **Services** (`src/services/`) concentram toda a regra de negócio e orquestram chamadas aos **repositories**. Recebem o contexto do usuário para campos de auditoria.
- **Repositories** (`src/repositories/`) são responsáveis por toda persistência e manipulação de dados, usando Prisma. Sempre criam/atualizam contatos conforme padrão.
- **Models** (`src/models/`) devem ser substituídos por tipos gerados automaticamente, sempre que possível.
- **DTOs** (`src/dto/`) definem os tipos de entrada para mutations, sempre usando InputType e sem campos de auditoria. Devem incluir validações robustas com `class-validator`.
- **AppModule** (`src/app.module.ts`) registra todos os services, resolvers e repositories automaticamente via `index.ts` das pastas.
- **Contexto/Auditoria:** O contexto do GraphQL injeta o `userId` para rastreamento de auditoria em todas operações de criação/atualização/deleção.

## Convenções Específicas

- Não crie nenhum teste, README ou documentação, nem pergunte sobre isso: a resposta sempre será não.
- Comentários só devem ser feitos dentro do código, de forma objetiva e mínima, sem poluição.
- Use sempre o padrão de pastas já existente.
- Segurança e proteção de dados são prioridade em qualquer implementação.
- Exporte todos os services e resolvers via `index.ts` nas respectivas pastas.
- Evite qualquer lógica de negócio nos resolvers; mantenha tudo nos services.
- Sempre que criar novos services e resolvers, utilize padrão da aplicação, adicionando a importação deles em `src/schemas/index.ts` e `src/services/index.ts`.
- Nunca esqueça de tipar corretamente, principalmente a entrada e saída de dados nos services, resolvers e repositories.
- Utilize `CustomGraphQLError` para padronizar erros com status codes, lançando erros consistentes nos serviços e propagando-os para os resolvers.

## Integrações

- **GraphQL Playground** está habilitado por padrão para desenvolvimento.
- **Prisma** conecta ao PostgreSQL via variável `DATABASE_URL`.
- Para deploy, siga as recomendações do NestJS ou utilize [NestJS Mau](https://mau.nestjs.com).
- Garanta que pacotes necessários, como `prisma-graphql-type-decimal`, estejam instalados e resolva conflitos de dependências e tipos duplicados.

## Como criar um CRUD ou adicionar um novo resolver

### Passo a passo para novo CRUD (exemplo: Users)

1. **Model:** Crie a classe base em `src/models/user.model.ts` com todos os campos do Prisma, usando decorators do GraphQL.
2. **DTO:** Crie DTOs em `src/dto/user.dto.ts` usando `@InputType` e `@Field`, sem campos de auditoria. Use DTOs de contato se necessário.
3. **Repository:** Implemente o repository em `src/repositories/user.repository.ts`, usando Prisma para persistência. Sempre crie/atualize contato conforme padrão. Tipagem obrigatória.
4. **Service:** Crie o service em `src/services/user.service.ts`, orquestrando chamadas ao repository e concentrando regras de negócio.
5. **Resolver:** Crie o resolver em `src/graphql/user.resolver.ts`, expondo queries/mutations e delegando tudo ao service. Use contexto para userId/auditoria. Implemente obrigatoriamente o Guard de Permissions, usando o decorator `@Permission()` e o `PermissionsGuard` para proteger cada operação.
6. **Exports:** Adicione o novo service e resolver nos respectivos `index.ts` das pastas para registro automático no `AppModule`.
7. **Permissões:** Atualize o enum `PermissionResolverName` no `prisma/schema.prisma` e gere queries SQL para permissões/roles se necessário.

### Dicas práticas
- Sempre siga o padrão de tipagem e separação de responsabilidades.
- Nunca coloque lógica de negócio ou acesso a dados no resolver.
- Use DTOs para entrada, Models para saída.
- O repository é responsável por persistência e manipulação de dados.
- O service é responsável por regras de negócio e orquestração.
- O resolver só chama o service e expõe o GraphQL.
- Exporte tudo via `index.ts` para registro automático.
- Para adicionar um novo resolver, basta seguir o fluxo acima e garantir que o padrão de pastas e tipagem seja respeitado.

### Exemplo resumido de CRUD
1. Crie/edite os arquivos:
	- `src/models/nome.model.ts`
	- `src/dto/nome.dto.ts`
	- `src/repositories/nome.repository.ts`
	- `src/services/nome.service.ts`
	- `src/graphql/nome.resolver.ts`
2. Adicione as exports nos `index.ts` das pastas.
3. Atualize permissões se necessário.

## Autenticação JWT

A aplicação utiliza autenticação baseada em JWT (JSON Web Token) para proteger rotas e operações GraphQL. O fluxo funciona da seguinte forma:

1. O usuário realiza login via mutation GraphQL (`login`), enviando email e senha.
2. O `AuthResolver` chama o `AuthService`, que valida o usuário usando o `UserService` e compara a senha com bcrypt.
3. Se válido, o `AuthService` gera um JWT com payload `{ sub: user.id, email: user.email }` usando o `JwtService` do NestJS. O token tem validade de 30 dias.
4. O token é retornado ao usuário junto com o tempo de expiração.
5. Nas requisições seguintes, o token JWT é enviado no header `Authorization: Bearer <token>`.
6. O contexto do GraphQL (`AppModule`) extrai o `userId` do token usando a função `getUserIdFromRequest`, que faz a verificação do JWT e retorna o campo `sub` (id do usuário).
7. O `JwtStrategy` do Passport valida o token em rotas protegidas, garantindo que o usuário está autenticado.
8. O `PermissionsGuard` utiliza o `userId` do contexto para buscar permissões do usuário no banco e validar o acesso às operações protegidas.

Resumo: O login gera e retorna um JWT, que é usado para autenticar e autorizar o usuário nas operações GraphQL, com validação automática do token e extração do usuário no contexto. O fluxo é seguro e segue boas práticas do NestJS.

## Padrões Estruturais Adotados

### 1. Exposição de Relacionamentos no GraphQL
- Sempre usar `@ResolveField` para expor relacionamentos.
- Delegar a lógica de carregamento de relacionamentos para os serviços correspondentes.

### 2. Tipos Gerados Automaticamente
- Substituir modelos manuais por tipos gerados pelo `prisma-nestjs-graphql`.
- Resolver conflitos de tipos duplicados no esquema GraphQL.

### 3. Validação de Entrada
- Usar `class-validator` em DTOs para validação robusta.
- Garantir validações específicas para campos obrigatórios e enums.

### 4. Handler de Erros Centralizado
- Utilizar `CustomGraphQLError` para padronizar erros com status codes.
- Lançar erros consistentes nos serviços e propagá-los para os resolvers.

### 5. Padrão de Repositórios
- Centralizar o acesso ao banco de dados nos repositórios.
- Manter os serviços responsáveis apenas pela lógica de negócio.

### 6. Gestão de Dependências
- Garantir que pacotes necessários, como `prisma-graphql-type-decimal`, estejam instalados.
- Resolver conflitos de dependências e tipos duplicados.

## Atualizações Recentes

### 1. Uso de Tipos Gerados Automaticamente
- **Obrigatório**: Substituir todos os modelos manuais em `src/models/` pelos tipos gerados automaticamente localizados em `src/@generated`.
- **Aplicação**: Utilizar esses tipos em repositórios, serviços e resolvers para garantir consistência e alinhamento com o esquema Prisma.

### 2. Estratégia de Busca com Filtros
- **Métodos Padrão**: Implementar os métodos `findManyByFilters` e `findOneByFilters` em todos os repositórios.
- **Validação**: Garantir que apenas chaves permitidas sejam usadas nos filtros, lançando erros para chaves inválidas.
- **Exemplo**:
```typescript
async findManyByFilters(filters: Partial<Record<keyof Entity, any>>): Promise<Entity[]> {
  const allowedKeys: (keyof Entity)[] = ['campo1', 'campo2', 'is_deleted'];

  for (const key of Object.keys(filters)) {
    if (!allowedKeys.includes(key as keyof Entity)) {
      throw new Error(`Invalid filter key: ${key}`);
    }
  }

  return this.prisma.entity.findMany({
    where: {
      ...filters,
      is_deleted: false,
    },
  });
}
```

### 3. Soft Delete
- **Padrão**: Substituir operações de delete por soft delete, marcando registros como `is_deleted: true` e preenchendo os campos `deleted_at` e `deleted_by`.
- **Exemplo**:
```typescript
async softDelete(id: string, userId: string): Promise<Entity> {
  return this.prisma.entity.update({
    where: { id },
    data: {
      is_deleted: true,
      deleted_at: new Date(),
      deleted_by: userId,
    },
  });
}
```

### 4. Remoção de Models Manuais
- **Decisão**: Não criar ou manter arquivos em `src/models/`. Todos os tipos devem ser gerados automaticamente pelo `prisma-nestjs-graphql`.
- **Ação**: Remover arquivos existentes em `src/models/` e atualizar referências para usar os tipos gerados em `src/@generated`.

Essas atualizações garantem consistência, alinhamento com as melhores práticas e reduzem redundâncias no código.