# Status de Projetos - Guia de Transições

## Visão Geral

O sistema de projetos suporta um conjunto completo de status que refletem o ciclo de vida de um projeto, desde o rascunho inicial até a conclusão.

## Status Disponíveis

### 1. DRAFT (Rascunho)
- **Cor**: Cinza (#6b7280)
- **Descrição**: Ponto de partida inicial do fluxo de trabalho
- **Quando usar**: Projeto está sendo criado ou ainda não foi submetido para avaliação
- **Transições possíveis**: → OPEN_REQUEST, IN_PROGRESS

### 2. OPEN_REQUEST (Solicitação Aberta)
- **Cor**: Azul céu (#0ea5e9)
- **Descrição**: Solicitação aberta no fluxo de trabalho
- **Quando usar**: Projeto foi submetido e aguarda processamento inicial
- **Transições possíveis**: → IN_REVIEW, ADJUSTMENTS_NEEDED, IN_PROGRESS

### 3. IN_REVIEW (Em Revisão)
- **Cor**: Azul (#3b82f6)
- **Descrição**: Sob revisão/avaliação
- **Quando usar**: Projeto está sendo avaliado pela equipe responsável
- **Transições possíveis**: → ADJUSTMENTS_NEEDED, IN_PROGRESS, ON_HOLD

### 4. ADJUSTMENTS_NEEDED (Ajustes Necessários)
- **Cor**: Laranja (#f97316)
- **Descrição**: Atenção - correções necessárias
- **Quando usar**: Projeto precisa de modificações antes de prosseguir
- **Transições possíveis**: → IN_REVIEW, IN_PROGRESS, DRAFT

### 5. IN_PROGRESS (Em Progresso)
- **Cor**: Verde (#22c55e)
- **Descrição**: Execução ativa/positiva
- **Quando usar**: Projeto está sendo executado ativamente
- **Transições possíveis**: → PENDING_RECEIPT, WAITING_REFUND, CONCLUDED, ON_HOLD, OVERDUE

### 6. PENDING_RECEIPT (Aguardando Recebimento)
- **Cor**: Ciano (#06b6d4)
- **Descrição**: Processo aguardando recebimento
- **Quando usar**: Projeto está aguardando confirmação de recebimento de fundos/recursos
- **Transições possíveis**: → IN_PROGRESS, WAITING_REFUND, CONCLUDED

### 7. WAITING_REFUND (Aguardando Reembolso)
- **Cor**: Verde-azulado (#14b8a6)
- **Descrição**: Processo aguardando reembolso
- **Quando usar**: Projeto está aguardando processamento de reembolso
- **Transições possíveis**: → IN_PROGRESS, CONCLUDED

### 8. OVERDUE (Atrasado)
- **Cor**: Vermelho (#ef4444)
- **Descrição**: Crítico - prazo vencido
- **Quando usar**: Prazo do projeto expirou (automático via cron)
- **Transições possíveis**: → IN_PROGRESS (se prazo for estendido)
- **Nota**: Status pode ser atribuído automaticamente pelo sistema

### 9. ON_HOLD (Em Espera) [LEGADO]
- **Cor**: -
- **Descrição**: Projeto pausado temporariamente
- **Quando usar**: Projeto precisa ser pausado por razões externas
- **Transições possíveis**: → IN_PROGRESS, IN_REVIEW, DRAFT
- **Nota**: Status legado mantido para compatibilidade

### 10. EXPIRED (Expirado) [LEGADO]
- **Cor**: -
- **Descrição**: Projeto expirou
- **Quando usar**: Substituído por OVERDUE em novos fluxos
- **Transições possíveis**: → IN_PROGRESS (se prazo for estendido)
- **Nota**: Status legado mantido para compatibilidade, considere usar OVERDUE

### 11. CONCLUDED (Concluído)
- **Cor**: Verde escuro (#16a34a)
- **Descrição**: Sucesso - projeto totalmente concluído
- **Quando usar**: Todas as atividades e documentos foram finalizados
- **Transições possíveis**: Nenhuma (estado final)
- **Validações obrigatórias**:
  - ✅ Todas as atividades devem estar COMPLETED
  - ✅ Todos os documentos devem estar validados
  - ✅ Todos os subsídios devem estar CLOSED

## Regras de Transição

### Transição para CONCLUDED
A transição para CONCLUDED requer validações automáticas:

```typescript
// Validações automáticas no service
async validateConcludedTransition(projectId: string): Promise<void> {
  // 1. Verifica atividades incompletas
  // 2. Verifica documentos não validados
  // 3. Verifica subsídios em aberto
}
```

**Requisitos**:
- Todas as atividades com status COMPLETED
- Todos os documentos com is_validated = true
- Todos os subsídios com status CLOSED

### Proteções

1. **Projetos CONCLUDED não podem ser modificados**
   - Qualquer tentativa de update ou updateCoOwner em projeto CONCLUDED resultará em erro
   
2. **Extensão de prazo automática**
   - Se um projeto EXPIRED/OVERDUE tem seu `end_at` estendido para o futuro, automaticamente reverte para IN_PROGRESS

3. **Revert automático para DRAFT**
   - Se todas as atividades de um projeto são excluídas, o status automaticamente volta para DRAFT

## Fluxo Típico

```
DRAFT
  ↓
OPEN_REQUEST
  ↓
IN_REVIEW
  ↓ (opcional)
ADJUSTMENTS_NEEDED → volta para IN_REVIEW
  ↓
IN_PROGRESS
  ↓ (opcional)
PENDING_RECEIPT → volta para IN_PROGRESS
  ↓ (opcional)
WAITING_REFUND → volta para IN_PROGRESS
  ↓
CONCLUDED
```

## Uso no GraphQL

### Criar projeto com status específico
```graphql
mutation {
  createProject(data: {
    title: "Meu Projeto"
    # ... outros campos
    status: DRAFT  # Status padrão
  }) {
    id
    status
  }
}
```

### Atualizar status do projeto
```graphql
mutation {
  updateProject(
    id: "project-id"
    data: {
      status: IN_PROGRESS
    }
  ) {
    id
    status
  }
}
```

### Tentar concluir projeto (com validações)
```graphql
mutation {
  updateProject(
    id: "project-id"
    data: {
      status: CONCLUDED
    }
  ) {
    id
    status
  }
}
# Retorna erro se validações falharem:
# - PROJECT_HAS_INCOMPLETE_ACTIVITIES
# - PROJECT_HAS_UNVALIDATED_DOCUMENTS
# - PROJECT_HAS_OPEN_SUBSIDIES
```

## Automação via Cron

O sistema possui um job cron que executa diariamente às 01:00:

```typescript
// Marca projetos como EXPIRED automaticamente
@Cron('0 1 * * *')
async checkExpiredProjects() {
  // Atualiza projetos onde:
  // - end_at < now
  // - status NOT IN (CONCLUDED, EXPIRED)
  // - is_deleted = false
}
```

## Frontend Integration

A configuração de cores e labels está disponível no objeto:

```typescript
export const PROJECT_STATUS_CONFIG: Record<string, StatusConfigEntry> = {
  DRAFT: { labelKey: 'draft', kanbanColor: '#6b7280', ... },
  OPEN_REQUEST: { labelKey: 'openRequest', kanbanColor: '#0ea5e9', ... },
  // ... outros status
}
```

Cada status possui:
- `labelKey`: Chave para internacionalização
- `kanbanColor`: Cor hexadecimal para visualização
- `dotColor`: Classe Tailwind para indicador
- `triggerClass`: Classes Tailwind para botão/trigger
- `requiresCondition` (opcional): Função de validação customizada

## Considerações de Migração

Se você tem projetos com status legados (`ON_HOLD`, `EXPIRED`), considere:

1. Criar script de migração para converter `EXPIRED` → `OVERDUE`
2. Avaliar conversão de `ON_HOLD` para status apropriado
3. Manter status legados temporariamente para compatibilidade

## Referências

- Schema: [prisma/schema.prisma](../prisma/schema.prisma)
- Service: [src/services/project.service.ts](../src/services/project.service.ts)
- Enum gerado: [src/@generated/prisma/project-status.enum.ts](../src/@generated/prisma/project-status.enum.ts)
- Cron: [src/cron/services/project-expiration.service.ts](../src/cron/services/project-expiration.service.ts)
