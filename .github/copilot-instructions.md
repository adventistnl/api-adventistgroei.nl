# Copilot Instructions para `api-adventistgroei.nl`

## Visão Geral


- Projeto backend em **Node.js/NestJS** com **TypeScript**, **Prisma** (PostgreSQL) e **GraphQL**.
- Estrutura modular: cada domínio deve ser separado em **services**, **schemas (resolvers)**, **repositories**, **models**, **dto**, **middlewares**.
- O padrão **Repository** é obrigatório para acesso a dados, mesmo que a pasta esteja vazia atualmente.
> Veja instruções detalhadas sobre Repository Pattern em `.github/repository-pattern.md`
- Sempre crie classes de modelo base para os repositories em `src/models/`, mesmo que ainda não haja lógica específica. Isso é extremamente importante para manter o padrão e facilitar extensões futuras.
- O projeto segue **SOLID** e boas práticas de OOP. Código limpo, legível e sem duplicação.

## Fluxo de Dados


- **Resolvers** (`src/graphql/`) expõem queries/mutations GraphQL e delegam tudo para os **services**. Não possuem lógica de negócio nem acesso direto ao banco.
- **Resolvers** (`src/graphql/`) expõem queries/mutations GraphQL e delegam tudo para os **services**. Não possuem lógica de negócio nem acesso direto ao banco. É obrigatório implementar o Guard de Permissions em todos os resolvers, usando o decorator e o guard padrão do projeto.
- **Services** (`src/services/`) concentram toda a regra de negócio e orquestram chamadas aos **repositories**. Recebem o contexto do usuário para campos de auditoria.
- **Repositories** (`src/repositories/`) são responsáveis por toda persistência e manipulação de dados, usando Prisma. Sempre criam/atualizam contatos conforme padrão.
- **Models** (`src/models/`) definem a estrutura dos dados expostos no GraphQL, tipados e decorados.
- **DTOs** (`src/dto/`) definem os tipos de entrada para mutations, sempre usando InputType e sem campos de auditoria.
- **AppModule** (`src/app.module.ts`) registra todos os services, resolvers e repositories automaticamente via `index.ts` das pastas.
- **Contexto/Auditoria:** O contexto do GraphQL injeta o `userId` para rastreamento de auditoria em todas operações de criação/atualização/deleção.

## Convenções Específicas

- não crie nenhum teste, README ou documentação, nem pergunte sobre isso: a resposta sempre será não
- comentários só devem ser feitos dentro do código, de forma objetiva e mínima, sem poluição
- Use sempre o padrão de pastas já existente.
- Segurança e proteção de dados são prioridade em qualquer implementação.
- Exporte todos os services e resolvers via `index.ts` nas respectivas pastas.
- Evite qualquer lógica de negócio nos resolvers; mantenha tudo nos services.
- sempre que criar novos services e resolvers, utilize padrão da aplicação, adicionando a importação deles em `src/schemas/index.ts` e `src/services/index.ts`.
- nunca esquça de tipar corretamente, principalmente a entrada e saída de dados nos services, resolvers e repositories.

## Comandos Essenciais

- Instalar dependências: `pnpm install`
- Rodar em dev: `pnpm run start:dev`
- Rodar em produção: `pnpm run start:prod`
- Testes (se solicitado): `pnpm run test`, `pnpm run test:e2e`, `pnpm run test:cov`

## Integrações

- **GraphQL Playground** está habilitado por padrão para desenvolvimento.
- **Prisma** conecta ao PostgreSQL via variável `DATABASE_URL`.
- Para deploy, siga as recomendações do NestJS ou utilize [NestJS Mau](https://mau.nestjs.com).


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