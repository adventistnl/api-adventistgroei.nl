# Backend E2E Test Suite

Bateria completa de testes end-to-end para a API GraphQL (`api-adventistgroei.nl`).

## Como Rodar

```bash
cd api-adventistgroei.nl

# Todos os testes E2E (sequencial — necessário por usar o banco real)
pnpm test:e2e

# Um arquivo específico
pnpm test:e2e --testPathPatterns="auth.e2e"
pnpm test:e2e --testPathPatterns="annual-budget.e2e"
pnpm test:e2e --testPathPatterns="subsidy-request.e2e"

# Arquivo de escala (já existia antes)
pnpm test:e2e --testPathPatterns="scheduling-permissions"
```

> **Importante:** Os testes rodam contra o banco de dados **real** (não há banco de teste isolado).
> Cada suite cria seus próprios dados com sufixo `e2e-test` e faz limpeza completa no `afterAll`.
> Nunca rodar `test:e2e` em produção.

## Arquivos de Teste

| Arquivo | O que cobre | Nº aprox. de testes |
|---|---|---|
| `auth.e2e-spec.ts` | Login, senha errada, email inexistente | 4 |
| `structure.e2e-spec.ts` | CRUD: Instituição, Região, Igreja, Departamento | 10 |
| `users-roles.e2e-spec.ts` | CRUD usuários, roles, `updateOwnUser` vs `updateUser` | 12 |
| `annual-budget.e2e-spec.ts` | Budget: criar, aprovar, rejeitar, revisar, travar, KPIs, ledger | 12 |
| `project.e2e-spec.ts` | Projetos: CRUD, co-owner, voluntários, myProjects | 10 |
| `project-activity.e2e-spec.ts` | Atividades: CRUD, status, batch update, audit logs | 11 |
| `subsidy-request.e2e-spec.ts` | Subsídio: criar→submeter→aprovar→rejeitar + KPIs + ALLOCATION_RESERVED verificado | 10 |
| `subsidy-refund.e2e-spec.ts` | Reembolso: parcial, total, rejeitar + REFUND_PARTIAL/REFUND_TOTAL verificado | 8 |
| `subsidy-transitions.e2e-spec.ts` | Transições inválidas de status + cap de atividade | 6 |
| `permissions-guard.e2e-spec.ts` | 20+ casos de 403 centralizados (CHURCH_MEMBER + unauthenticated) | 20 |
| `scheduling-permissions.e2e-spec.ts` | Escala: own/any scope, region access, monthly close | 10 |

**Total: ~113 testes**

## Padrão Adotado

Todos os testes seguem o padrão estabelecido em `scheduling-permissions.e2e-spec.ts`:

```typescript
// 1. Cria dados via Prisma no beforeAll (não via GraphQL — mais rápido e isolado)
// 2. Testa via HTTP+GraphQL usando supertest
// 3. Gera tokens com jwt.sign({ sub: userId }, process.env.JWT_SECRET)
// 4. Limpa tudo no afterAll na ordem inversa de dependência
```

## O que cada teste verifica

### `auth.e2e-spec.ts`
- Login retorna JWT válido ✅
- Senha errada → erro ✅
- Email inexistente → erro ✅

### `structure.e2e-spec.ts`
- Admin/InstLeader pode criar/atualizar estrutura ✅
- CHURCH_MEMBER é bloqueado para operações de escrita ✅
- Requisição sem token é bloqueada ✅

### `users-roles.e2e-spec.ts`
- Admin pode listar usuários, CHURCH_MEMBER não pode ✅
- `updateOwnUser`: CHURCH_MEMBER pode editar si mesmo ✅
- `updateUser`: CHURCH_MEMBER não pode editar outros ✅
- Admin pode criar/deletar roles customizadas ✅
- Admin pode adicionar/remover roles de usuários ✅

### `annual-budget.e2e-spec.ts`
- FINANCIAL_MANAGER pode criar orçamentos ✅
- FINANCIAL_MANAGER pode aprovar → status `APPROVED` ✅
- Aprovar gera `approved_amount` correto ✅
- FINANCIAL_MANAGER pode solicitar revisão → `REVISION_REQUESTED` ✅
- Admin pode rejeitar → `REJECTED` ✅
- Toggle lock: travar e destravar ✅
- KPIs e ledger acessíveis apenas por Finance+ ✅

### `subsidy-request.e2e-spec.ts`
- Criar subsídio cria transação `ALLOCATION_RESERVED` no banco ✅
- Aprovar subsídio cria transação `EXPENSE_APPROVED` ✅
- Rejeitar subsídio cria transação `ALLOCATION_RELEASED` ✅
- Advance Request: `is_for_advance = true` ✅
- Without Document: `request_type = WITHOUT_DOCUMENT` ✅
- CHURCH_MEMBER bloqueado em criar/aprovar ✅

### `subsidy-refund.e2e-spec.ts`
- Reembolso parcial cria transação `REFUND_PARTIAL` com valor correto ✅
- Reembolso total cria transação `REFUND_TOTAL` com valor correto ✅
- `rejectSubsidyRefund`: subsídio retorna ao estado anterior ✅
- `getSubsidiesWaitingRefund`: Finance pode listar, CHURCH_MEMBER não pode ✅

### `subsidy-transitions.e2e-spec.ts`
- DRAFT → CLOSED direto → erro de transição inválida ✅
- DRAFT → PENDING via `submit` → OK ✅
- PENDING → CLOSED → erro ✅
- Activity budget cap: €100 de cap, pedido de €150 → bloqueado ✅
- Segundo pedido que ultrapassa o cap restante → bloqueado ✅

### `permissions-guard.e2e-spec.ts`
- 5 queries bloqueadas para usuário sem token ✅
- 2 queries bloqueadas para usuário sem nenhuma role ✅
- 13+ operações admin bloqueadas para CHURCH_MEMBER ✅

## Notas Importantes

1. **Ano 2099**: Todos os dados financeiros usam `year: 2099` para evitar conflitos com dados reais.
2. **Prefixo `e2e-test`**: Todos os registros criados usam `created_by: 'e2e-test'` para identificação.
3. **Cleanup garantido**: O `afterAll` de cada suite remove todos os dados na ordem correta (respeitando foreign keys).
4. **Timeout**: `beforeAll`/`afterAll` têm timeout de 60-90s para acomodar a inicialização do NestJS.
5. **--runInBand**: Obrigatório pois os testes compartilham o banco e não são thread-safe.
