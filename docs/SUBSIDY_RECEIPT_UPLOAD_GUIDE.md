# Upload de Comprovante de Subsídio (Subsidy Receipt) — Guia Completo para o Frontend

## Diagnóstico do Erro Relatado

```json
{
  "message": "Activity not found",
  "extensions": { "code": "NOT_FOUND", "status": 404 }
}
```

**Causa raiz:** O valor de `project_activity_id` enviado na requisição não existe no banco de dados ou pertence a uma atividade com `is_deleted: true`.

**Correção imediata:** Consulte as atividades do projeto (`projectActivities`) antes de fazer o upload e use o `id` retornado nessa query — não reutilize IDs cached ou digitados manualmente.

---

## Atenção: O Upload NÃO é feito via GraphQL

> O endpoint de upload é **REST**, não uma mutation GraphQL.
> Enviar a requisição para o endpoint GraphQL (`/graphql`) com multipart resultará em erros inesperados.

**Endpoint correto:**
```
POST /subsidy-receipts/upload
Content-Type: multipart/form-data
Authorization: Bearer <token>
```

---

## Restrições Importantes (verificadas pelo backend)

| Condição                                    | Comportamento                                                                   |
|---------------------------------------------|---------------------------------------------------------------------------------|
| `request_type = ADVANCE`                    | ✅ Upload permitido — valores do adiantamento devem ser comprovados             |
| `request_type = WITHOUT_DOCUMENT`           | ✅ Upload permitido — comprovantes podem ser anexados a qualquer momento        |
| `request_type = WITH_DOCUMENT`              | ✅ Upload permitido                                                             |
| Status do subsídio = `CLOSED`               | ❌ Upload bloqueado — pedido encerrado                                          |
| `project_activity_id` inválido ou deletado  | ❌ Erro 404 `Activity not found`                                                |
| `subsidy_request_id` inválido ou deletado   | ❌ Erro 404 `Subsidy request not found`                                         |
| Múltiplos uploads                           | ✅ Permitido — cada pedido pode ter quantos comprovantes forem necessários      |

---

## Estrutura da Requisição de Upload

### Campos do formulário (`multipart/form-data`)

| Campo                      | Tipo     | Obrigatório | Descrição                                                                          |
|----------------------------|----------|:-----------:|------------------------------------------------------------------------------------|
| `file`                     | `File`   | ✅           | Arquivo do comprovante. Nome do campo **deve ser exatamente** `file`               |
| `subsidy_request_id`       | `string` | ✅           | ID do pedido de subsídio (`SubsidyRequest.id`) — deve ser do tipo `WITH_DOCUMENT` |
| `project_activity_id`      | `string` | ✅           | ID da atividade do projeto (`ProjectActivity.id`) — deve estar ativo               |
| `type`                     | `string` | ✅           | Tipo do arquivo: `pdf`, `image` ou `invoice`                                       |
| `subsidy_request_item_id`  | `string` | ❌           | ID do item do pedido (`SubsidyRequestItem.id`) — permite vincular ao item específico |
| `amount`                   | `number` | ❌           | Valor monetário do comprovante (ex.: `1600.00`)                                    |

> **Atenção:** campos numéricos como `amount` devem ser enviados como **string no FormData**
> (o backend converte internamente com `DecimalHelper.toDecimal`).

---

## Como obter os IDs corretos

### 1. Buscar o pedido de subsídio com seus itens e atividades

Antes de fazer o upload, confirme que o pedido existe e está no tipo correto:

```graphql
query GetSubsidyRequestForUpload($id: String!) {
  subsidyRequest(id: $id) {
    id
    request_type        # DEVE ser WITH_DOCUMENT
    subsidy_status {
      name              # NÃO pode ser CLOSED
    }
    items {
      id                # → use como subsidy_request_item_id (opcional)
      project_activity {
        id              # → use como project_activity_id
        name
        is_deleted      # deve ser false
      }
    }
  }
}
```

### 2. Confirmar que a atividade existe e está ativa

```graphql
query GetProjectActivities($filters: String) {
  projectActivities(filters: $filters) {
    id
    name
    is_deleted   # deve ser false
    project_id
  }
}
```

---

## Exemplo de Código (TypeScript / fetch)

```typescript
async function uploadSubsidyReceipt(params: {
  file: File;
  subsidyRequestId: string;
  projectActivityId: string;
  type: 'pdf' | 'image' | 'invoice';
  subsidyRequestItemId?: string;
  amount?: number;
  token: string;
  baseUrl: string;
}) {
  const formData = new FormData();

  // Nome do campo DEVE ser exactly "file"
  formData.append('file', params.file);

  // Campos obrigatórios
  formData.append('subsidy_request_id', params.subsidyRequestId);
  formData.append('project_activity_id', params.projectActivityId);
  formData.append('type', params.type);

  // Campos opcionais
  if (params.subsidyRequestItemId) {
    formData.append('subsidy_request_item_id', params.subsidyRequestItemId);
  }
  if (params.amount !== undefined) {
    // Enviar como string — backend converte para Decimal
    formData.append('amount', String(params.amount));
  }

  const response = await fetch(`${params.baseUrl}/subsidy-receipts/upload`, {
    method: 'POST',
    headers: {
      // NÃO definir Content-Type manualmente — o browser define com o boundary correto
      Authorization: `Bearer ${params.token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error?.message ?? 'Upload failed');
  }

  return response.json(); // SubsidyReceipt
}
```

> **Importante:** **Não** defina `Content-Type: multipart/form-data` manualmente. O browser/fetch precisa inserir o `boundary` automaticamente.

---

## Resposta de Sucesso (HTTP 201)

```json
{
  "id": "uuid-do-receipt",
  "filename": "nota-fiscal.pdf",
  "type": "pdf",
  "amount": 1600.00,
  "file_url": "https://drive.google.com/file/d/<drive_file_id>/view",
  "drive_file_id": "<drive_file_id>",
  "approved": false,
  "is_validated": false,
  "validated_at": null,
  "uploaded_by": "uuid-do-usuário",
  "created_at": "2026-03-08T11:38:53.961Z"
}
```

> Comprovantes **sempre** começam com `is_validated: false`. A validação é feita por um aprovador via endpoint separado.

---

## Demais Endpoints REST de Comprovantes

Todos os endpoints abaixo também são **REST** e requerem `Authorization: Bearer <token>`.

### Download

```
GET /subsidy-receipts/:id/download
```
Retorna o arquivo diretamente com headers de download.

### Excluir

```
DELETE /subsidy-receipts/:id
```

### Validar (aprovador)

```
POST /subsidy-receipts/:id/validate
```

### Rejeitar (aprovador)

```
POST /subsidy-receipts/:id/reject
Body (JSON): { "reason": "motivo da rejeição" }
```

### Listar (por filtro)

```
GET /subsidy-receipts?subsidy_request_id=<uuid>
GET /subsidy-receipts?subsidy_request_item_id=<uuid>
GET /subsidy-receipts?project_activity_id=<uuid>
```

### Listar por pedido (atalho)

```
GET /subsidy-receipts/by-request/:subsidyRequestId
GET /subsidy-receipts/by-item/:subsidyRequestItemId
```

---

## Erros Comuns e Como Resolver

| Código | Mensagem                                                         | Causa provável                                               | Solução                                                                  |
|--------|------------------------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------------------|
| 404    | `Activity not found`                                             | `project_activity_id` inválido, deletado ou de outro projeto | Consulte `projectActivities` e use o `id` retornado                     |
| 404    | `Subsidy request not found`                                      | `subsidy_request_id` inválido ou deletado                    | Confirme o ID via `subsidyRequest(id: ...)` antes do upload              |
| 400    | `Action not allowed on a CLOSED subsidy request`                 | Pedido está com status `CLOSED`                              | Não é possível anexar comprovantes após encerramento                     |
| 400    | `No file provided`                                               | Campo `file` ausente no FormData                             | Verifique se o `append('file', ...)` está correto e se o arquivo existe  |
| 401    | `Unauthorized`                                                   | Token JWT inválido ou ausente                                | Verifique o header `Authorization: Bearer <token>`                       |
| 403    | `User does not have permission to access this resource`          | Role sem permissão `uploadSubsidyReceipt`                    | Apenas roles com a permissão podem fazer upload (ADMIN, PROJECT_OWNER…) |

---

## Múltiplos Comprovantes por Pedido

Cada chamada ao endpoint `/subsidy-receipts/upload` cria **um** comprovante. Para vincular múltiplos arquivos ao mesmo pedido, basta chamar o endpoint repetidamente com o mesmo `subsidy_request_id`, variando o arquivo e opcionalmente o `subsidy_request_item_id`.

```typescript
// Exemplo: upload de 2 comprovantes para o mesmo pedido
for (const { file, itemId, amount } of receipts) {
  await uploadSubsidyReceipt({
    file,
    subsidyRequestId: 'uuid-do-pedido',
    projectActivityId: 'uuid-da-atividade',
    subsidyRequestItemId: itemId,
    type: 'pdf',
    amount,
    token,
    baseUrl,
  });
}
```

---

## Checklist Antes de Enviar o Upload

- [ ] O pedido de subsídio foi criado (`WITH_DOCUMENT`, `WITHOUT_DOCUMENT` ou `ADVANCE` — todos aceitos)
- [ ] O status do pedido **não** é `CLOSED`
- [ ] O `project_activity_id` foi obtido da query e é do projeto vinculado ao pedido
- [ ] O campo do arquivo no FormData tem o nome exato `file`
- [ ] O `Content-Type` **não** foi definido manualmente no header
- [ ] O token JWT está no header `Authorization: Bearer <token>`
- [ ] Campos numéricos (`amount`) foram convertidos para `string` antes de adicionar ao FormData
