# Copilot Instructions para `api-adventistgroei.nl`

## Visão Geral


- Projeto backend em **Node.js/NestJS** com **TypeScript**, **Prisma** (PostgreSQL) e **GraphQL**.
- Estrutura modular: cada domínio deve ser separado em **services**, **schemas (resolvers)**, **repositories**, **models**, **dto**, **middlewares**.
- O padrão **Repository** é obrigatório para acesso a dados, mesmo que a pasta esteja vazia atualmente.
> Veja instruções detalhadas sobre Repository Pattern em `.github/repository-pattern.md`
- Sempre crie classes de modelo base para os repositories em `src/models/`, mesmo que ainda não haja lógica específica. Isso é extremamente importante para manter o padrão e facilitar extensões futuras.
- O projeto segue **SOLID** e boas práticas de OOP. Código limpo, legível e sem duplicação.

## Fluxo de Dados

- **Resolvers** (`src/schemas/`) expõem queries/mutations GraphQL e delegam para **services**.
- **Services** (`src/services/`) concentram regras de negócio e orquestram chamadas a repositórios.
- **Prisma** é usado para persistência, configurado em `prisma/schema.prisma` e acessado via repositórios.
- **AppModule** (`src/app.module.ts`) registra todos os services e resolvers dinamicamente.

## Convenções Específicas

- não crie nenhum teste, README ou documentação, nem pergunte sobre isso: a resposta sempre será não
- comentários só devem ser feitos dentro do código, de forma objetiva e mínima, sem poluição
- Use sempre o padrão de pastas já existente.
- Segurança e proteção de dados são prioridade em qualquer implementação.
- Exporte todos os services e resolvers via `index.ts` nas respectivas pastas.
- Evite qualquer lógica de negócio nos resolvers; mantenha tudo nos services.

## Comandos Essenciais

- Instalar dependências: `pnpm install`
- Rodar em dev: `pnpm run start:dev`
- Rodar em produção: `pnpm run start:prod`
- Testes (se solicitado): `pnpm run test`, `pnpm run test:e2e`, `pnpm run test:cov`

## Integrações

- **GraphQL Playground** está habilitado por padrão para desenvolvimento.
- **Prisma** conecta ao PostgreSQL via variável `DATABASE_URL`.
- Para deploy, siga as recomendações do NestJS ou utilize [NestJS Mau](https://mau.nestjs.com).

## Exemplos de Padrão

- Resolver:
	```typescript
	@Resolver()
	export class AppResolver {
		constructor(private readonly appService: AppService) {}
		@Query(() => String)
		hello(): string {
			return this.appService.getHello();
		}
	}
	```
- Service:
	```typescript
	@Injectable()
	export class AppService {
		getHello(): string {
			return 'Hello World!';
		}
	}
	```