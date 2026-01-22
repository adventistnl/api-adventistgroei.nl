# Internacionalização do Sistema de Subsídios

## Visão Geral

O sistema de subsídios agora possui suporte completo para internacionalização (i18n), permitindo que todas as mensagens de erro, validações e registros de histórico sejam exibidos em múltiplos idiomas.

## Idiomas Suportados

- **English (en)** - Idioma padrão
- **Nederlands (nl)** - Holandês
- **Português (pt)** - Planejado para implementação futura

## Como Funciona

### Backend - GraphQL Mutations

Todas as mutations relacionadas a subsídios agora aceitam um parâmetro opcional `language`:

```graphql
mutation CreateSubsidyRequest($data: SubsidyRequestCreateDto!, $language: LanguagePreference) {
  createSubsidyRequest(data: $data, language: $language) {
    id
    # ... outros campos
  }
}

mutation UpdateSubsidyRequest($id: String!, $data: SubsidyRequestUpdateDto!, $language: LanguagePreference) {
  updateSubsidyRequest(id: $id, data: $data, language: $language) {
    id
    # ... outros campos
  }
}

mutation ApproveSubsidyRequest($id: String!, $approved_amount: Float!, $language: LanguagePreference) {
  approveSubsidyRequest(id: $id, approved_amount: $approved_amount, language: $language) {
    id
    # ... outros campos
  }
}

mutation RejectSubsidyRequest($id: String!, $rejection_reason: String!, $language: LanguagePreference) {
  rejectSubsidyRequest(id: $id, rejection_reason: $rejection_reason, language: $language) {
    id
    # ... outros campos
  }
}

mutation DeleteSubsidyRequest($id: String!, $language: LanguagePreference) {
  deleteSubsidyRequest(id: $id, language: $language) {
    id
    # ... outros campos
  }
}

mutation AddSubsidyRequestMessage($id: String!, $message: String!, $language: LanguagePreference) {
  addSubsidyRequestMessage(id: $id, message: $message, language: $language) {
    id
    reason
    # ... outros campos
  }
}
```

### Valores do Enum LanguagePreference

```graphql
enum LanguagePreference {
  en  # English (padrão)
  nl  # Nederlands
}
```

## Chaves de Tradução para Frontend

### 1. Mensagens de Erro (`subsidy.errors.*`)

Todas as chaves de erro devem ser usadas com o namespace `subsidy` e prefixo `errors.`:

| Chave | English (en) | Nederlands (nl) | Uso |
|-------|--------------|-----------------|-----|
| `subsidy.errors.status_is_closed` | Cannot change status of a CLOSED subsidy request | Kan de status van een GESLOTEN subsidieaanvraag niet wijzigen | Quando tentar alterar status de subsídio fechado |
| `subsidy.errors.invalid_transition_in_review_to_closed` | Cannot change status directly from IN_REVIEW to CLOSED | Kan de status niet direct wijzigen van IN_BEOORDELING naar GESLOTEN | Transição inválida de IN_REVIEW para CLOSED |
| `subsidy.errors.invalid_transition_final_state` | Cannot change status from {{from}} to {{to}}. Approved/Rejected requests can only be CLOSED. | Kan de status niet wijzigen van {{from}} naar {{to}}. Goedgekeurde/Afgewezen aanvragen kunnen alleen GESLOTEN worden. | Transição inválida de status final |
| `subsidy.errors.action_not_allowed_closed` | Action not allowed on a CLOSED subsidy request | Actie niet toegestaan op een GESLOTEN subsidieaanvraag | Ação não permitida em subsídio fechado |
| `subsidy.errors.documents_not_validated` | Cannot change status. All documents must be validated first. | Kan de status niet wijzigen. Alle documenten moeten eerst gevalideerd worden. | Documentos pendentes de validação |
| `subsidy.errors.documents_pending_validation` | Cannot approve subsidy. {{count}} document(s) are still pending validation. | Kan subsidie niet goedkeuren. {{count}} document(en) wachten nog op validatie. | Documentos ainda não validados |
| `subsidy.errors.documents_rejected` | Cannot approve subsidy. {{count}} document(s) were rejected. | Kan subsidie niet goedkeuren. {{count}} document(en) zijn afgewezen. | Documentos rejeitados |
| `subsidy.errors.pending_status_not_found` | Pending status not found. Please create a PENDING status first. | Status 'In afwachting' niet gevonden. Maak eerst een PENDING status aan. | Status PENDING não encontrado |
| `subsidy.errors.subsidy_not_found` | SubsidyRequest not found | Subsidieaanvraag niet gevonden | Subsídio não encontrado |
| `subsidy.errors.cannot_delete_approved_or_closed` | Cannot delete {{status}} subsidy requests | Kan {{status}} subsidieaanvragen niet verwijderen | Tentar deletar subsídio aprovado/fechado |
| `subsidy.errors.approved_status_not_found` | Approved status not found | Goedgekeurde status niet gevonden | Status APPROVED não encontrado |
| `subsidy.errors.rejected_status_not_found` | Rejected status not found | Afgewezen status niet gevonden | Status REJECTED não encontrado |
| `subsidy.errors.document_amounts_mismatch` | The sum of document amounts ({{sum}}) does not match the requested amount ({{requested}}) for the activity | De som van documentbedragen ({{sum}}) komt niet overeen met het aangevraagde bedrag ({{requested}}) voor de activiteit | Soma de valores de documentos não bate |

### 2. Mensagens de Histórico (`subsidy.history.*`)

Usadas para registrar ações no histórico de status do subsídio:

| Chave | English (en) | Nederlands (nl) | Uso |
|-------|--------------|-----------------|-----|
| `subsidy.history.request_created` | Request created | Aanvraag aangemaakt | Subsídio criado |
| `subsidy.history.status_changed` | Status changed from {{from}} to {{to}} | Status gewijzigd van {{from}} naar {{to}} | Status alterado |
| `subsidy.history.priority_changed` | Priority changed from {{from}} to {{to}} | Prioriteit gewijzigd van {{from}} naar {{to}} | Prioridade alterada |
| `subsidy.history.subsidy_deleted` | Subsidy request deleted | Subsidieaanvraag verwijderd | Subsídio deletado |
| `subsidy.history.request_approved` | Request approved. Approved amount: {{amount}} | Aanvraag goedgekeurd. Goedgekeurd bedrag: {{amount}} | Subsídio aprovado |
| `subsidy.history.request_rejected` | Request rejected | Aanvraag afgewezen | Subsídio rejeitado |
| `subsidy.history.auto_status_in_review` | Status automatically changed to IN_REVIEW. {{approved}} approved, {{rejected}} rejected, {{pending}} pending. | Status automatisch gewijzigd naar IN_BEOORDELING. {{approved}} goedgekeurd, {{rejected}} afgewezen, {{pending}} in afwachting. | Status auto-atualizado para IN_REVIEW |

### 3. Outros (`subsidy.status.*`)

| Chave | English (en) | Nederlands (nl) | Uso |
|-------|--------------|-----------------|-----|
| `subsidy.status.unknown` | Unknown | Onbekend | Status desconhecido |

## Implementação no Frontend

### 1. Biblioteca de i18n Recomendada

Para React/Next.js: **react-i18next** ou **next-i18next**
Para Vue.js: **vue-i18n**
Para Angular: **@ngx-translate/core**

### 2. Estrutura de Arquivos de Tradução

```
/locales
  /en
    subsidy.json
  /nl
    subsidy.json
  /pt (futuro)
    subsidy.json
```

### 3. Exemplo de Uso com react-i18next

```typescript
import { useTranslation } from 'react-i18next';

function SubsidyForm() {
  const { t, i18n } = useTranslation('subsidy');
  
  const handleSubmit = async (data) => {
    try {
      await createSubsidyRequest({
        variables: {
          data,
          language: i18n.language // 'en' ou 'nl'
        }
      });
    } catch (error) {
      // Mensagem de erro já vem traduzida do backend
      alert(error.message);
    }
  };
  
  return (
    <div>
      <h1>{t('subsidy.title')}</h1>
      {/* ... */}
    </div>
  );
}
```

### 4. Exibindo Mensagens de Erro Traduzidas

As mensagens de erro do GraphQL já vêm traduzidas do backend:

```typescript
const [updateSubsidy, { error }] = useMutation(UPDATE_SUBSIDY_REQUEST);

// O error.message já vem traduzido de acordo com o parâmetro language enviado
if (error) {
  toast.error(error.message); // Exibe: "Kan de status niet wijzigen..." (se language = 'nl')
}
```

### 5. Arquivo de Tradução Frontend (subsidy.json)

Para labels, títulos e textos do frontend que não vêm do backend:

**locales/en/subsidy.json**
```json
{
  "title": "Subsidy Requests",
  "create": "Create Request",
  "approve": "Approve",
  "reject": "Reject",
  "status": {
    "pending": "Pending",
    "in_review": "In Review",
    "approved": "Approved",
    "rejected": "Rejected",
    "closed": "Closed"
  },
  "form": {
    "amount": "Requested Amount",
    "description": "Description",
    "project": "Project",
    "department": "Department"
  }
}
```

**locales/nl/subsidy.json**
```json
{
  "title": "Subsidieaanvragen",
  "create": "Aanvraag Maken",
  "approve": "Goedkeuren",
  "reject": "Afwijzen",
  "status": {
    "pending": "In afwachting",
    "in_review": "In beoordeling",
    "approved": "Goedgekeurd",
    "rejected": "Afgewezen",
    "closed": "Gesloten"
  },
  "form": {
    "amount": "Aangevraagd Bedrag",
    "description": "Beschrijving",
    "project": "Project",
    "department": "Afdeling"
  }
}
```

## Variáveis de Interpolação

Algumas traduções usam variáveis dinâmicas que são substituídas em tempo de execução:

- `{{from}}` e `{{to}}` - Status de origem e destino
- `{{count}}` - Número de documentos
- `{{sum}}` e `{{requested}}` - Valores monetários
- `{{amount}}` - Valor aprovado
- `{{approved}}`, `{{rejected}}`, `{{pending}}` - Contadores de documentos

Exemplo de uso no backend:
```typescript
translate('subsidy.errors.documents_rejected', 'nl', { 
  ns: 'subsidy', 
  count: 3 
})
// Resultado: "Kan subsidie niet goedkeuren. 3 document(en) zijn afgewezen."
```

## Boas Práticas

1. **Sempre enviar o parâmetro `language`** nas mutations GraphQL
2. **Obter o idioma do usuário** do contexto/settings da aplicação
3. **Usar o mesmo idioma** em toda a sessão do usuário
4. **Tratar erros do GraphQL** exibindo a mensagem já traduzida
5. **Separar traduções** de UI (frontend) de mensagens do sistema (backend)

## Exemplo Completo: Aprovar Subsídio

```typescript
import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';

const APPROVE_SUBSIDY = gql`
  mutation ApproveSubsidy($id: String!, $amount: Float!, $language: LanguagePreference) {
    approveSubsidyRequest(
      id: $id, 
      approved_amount: $amount, 
      language: $language
    ) {
      id
      approved_amount
      subsidy_status {
        name
      }
    }
  }
`;

function ApproveButton({ subsidyId, amount }) {
  const { i18n, t } = useTranslation('subsidy');
  const [approve, { loading, error }] = useMutation(APPROVE_SUBSIDY);
  
  const handleApprove = async () => {
    try {
      await approve({
        variables: {
          id: subsidyId,
          amount: amount,
          language: i18n.language // 'en' ou 'nl'
        }
      });
      
      toast.success(t('subsidy.messages.approved_success'));
    } catch (err) {
      // Erro já vem traduzido do backend
      toast.error(err.message);
    }
  };
  
  return (
    <button onClick={handleApprove} disabled={loading}>
      {loading ? t('subsidy.approving') : t('subsidy.approve')}
    </button>
  );
}
```

## Migração de Código Existente

Se você já tem código que chama estas mutations sem o parâmetro `language`:

**Antes:**
```graphql
mutation {
  createSubsidyRequest(data: $data) {
    id
  }
}
```

**Depois:**
```graphql
mutation CreateSubsidy($data: SubsidyRequestCreateDto!, $language: LanguagePreference) {
  createSubsidyRequest(data: $data, language: $language) {
    id
  }
}
```

**Nota:** O parâmetro `language` é opcional e usa `en` como padrão, então o código antigo continuará funcionando, mas sem traduções personalizadas.

## Status Atual

✅ **Implementado:**
- Backend com suporte completo a i18n
- Traduções em inglês (en)
- Traduções em holandês (nl)
- Todas as mutations aceitam parâmetro `language`
- Mensagens de erro traduzidas
- Histórico de status traduzido

⏳ **Pendente:**
- Traduções em português (pt) - arquivos de tradução criados mas enum não suporta ainda
- Implementação no frontend (React/Vue/Angular)
- Testes automatizados de i18n

## Arquivos de Referência

- Backend Service: `src/services/subsidy-request.service.ts`
- GraphQL Resolver: `src/graphql/subsidy-request.resolver.ts`
- Traduções EN: `locales/en/subsidy.json`
- Traduções NL: `locales/nl/subsidy.json`
- Configuração i18n: `i18n.config.ts`
