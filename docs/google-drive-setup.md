# Google Drive API - Setup Guide

Este guia descreve como configurar a integração com Google Drive API usando Service Account para upload de arquivos do sistema.

## Pré-requisitos

- Conta Google Workspace (Gmail Enterprise)
- Acesso ao Google Cloud Console
- Acesso administrativo ao Google Drive da organização

## Passo 1: Configurar Google Cloud Project

### 1.1 Criar ou Selecionar Projeto

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. No menu superior, clique no seletor de projetos
3. Opções:
   - **Criar novo projeto**: Clique em "Novo Projeto"
     - Nome sugerido: "AdventistGroei API"
     - Clique em "Criar"
   - **Usar projeto existente**: Selecione o projeto desejado

### 1.2 Habilitar Google Drive API

1. No menu lateral, navegue para **APIs e Serviços > Biblioteca**
2. Busque por "Google Drive API"
3. Clique em **Google Drive API**
4. Clique no botão **Ativar**
5. Aguarde alguns segundos até a API ser ativada

## Passo 2: Criar Service Account

### 2.1 Criar a Service Account

1. No menu lateral, navegue para **IAM e Administrador > Contas de serviço**
2. Clique em **+ Criar Conta de Serviço**
3. Preencha os campos:
   - **Nome da conta de serviço**: `adventistgroei-drive-service`
   - **ID da conta de serviço**: (será preenchido automaticamente)
   - **Descrição**: `Service account para upload de arquivos ao Google Drive`
4. Clique em **Criar e Continuar**

### 2.2 Configurar Permissões (Opcional)

1. Na tela "Conceder acesso a esta conta de serviço ao projeto":
   - **Você pode pular esta etapa** - não precisamos conceder roles do projeto
   - As permissões serão gerenciadas diretamente no Google Drive
2. Clique em **Continuar**

### 2.3 Conceder Acesso ao Service Account (Opcional)

1. Na tela "Conceder aos usuários acesso a esta conta de serviço":
   - **Você pode pular esta etapa** - não precisa configurar
2. Clique em **Concluir**

### 2.4 Criar e Baixar Credenciais JSON

1. Na lista de service accounts, clique na conta recém-criada (`adventistgroei-drive-service`)
2. Navegue até a aba **Chaves**
3. Clique em **Adicionar Chave > Criar nova chave**
4. Selecione o formato **JSON**
5. Clique em **Criar**
6. O arquivo JSON será baixado automaticamente
   - **IMPORTANTE**: Guarde este arquivo em local seguro
   - Este arquivo contém credenciais sensíveis e não deve ser compartilhado

### 2.5 Copiar Email da Service Account

1. Na página de detalhes da service account, copie o email
2. Formato: `adventistgroei-drive-service@{project-id}.iam.gserviceaccount.com`
3. **Salve este email** - você precisará dele no próximo passo

## Passo 3: Configurar Pasta no Google Drive

### 3.1 Criar Pasta Raiz

1. Acesse [Google Drive](https://drive.google.com/)
2. Clique em **Novo > Pasta**
3. Nome da pasta: `AdventistGroei Documents`
4. Clique em **Criar**

### 3.2 Compartilhar Pasta com Service Account

1. Clique com botão direito na pasta criada
2. Selecione **Compartilhar**
3. No campo "Adicionar pessoas e grupos", cole o email da service account copiado anteriormente
4. Defina permissão como **Editor**
5. **DESMARQUE** a opção "Notificar pessoas" (service accounts não recebem emails)
6. Clique em **Compartilhar**

### 3.3 Copiar ID da Pasta

1. Abra a pasta `AdventistGroei Documents`
2. Copie o ID da pasta da URL do navegador
3. Formato da URL: `https://drive.google.com/drive/folders/{FOLDER_ID}`
4. Exemplo: Se a URL for `https://drive.google.com/drive/folders/1AbCdEfGhIjKlMnOpQrStUvWxYz123456`
   - O FOLDER_ID é: `1AbCdEfGhIjKlMnOpQrStUvWxYz123456`
5. **Salve este ID** - você precisará dele na configuração

## Passo 4: Habilitar Domain-Wide Delegation (OBRIGATÓRIO)

**IMPORTANTE**: Service Accounts precisam de Domain-Wide Delegation para acessar Google Drive de usuários quando não há Shared Drives disponíveis.

### 4.1 Habilitar Domain-Wide Delegation

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Navegue para **IAM e Administrador > Contas de serviço**
3. Clique na service account criada (`adventistgroei-drive-service`)
4. Clique na aba **Detalhes**
5. Role até a seção **Domain-wide delegation**
6. Clique em **Habilitar delegação em todo o domínio G Suite**
7. Nome do produto (opcional): `AdventistGroei API`
8. Clique em **Salvar**
9. **Copie o Client ID** exibido (número longo) - você precisará dele no próximo passo

###4.2 Autorizar na Console de Administração do Google Workspace

**ATENÇÃO**: Este passo requer acesso de **Super Admin** do Google Workspace.

1. Acesse [Google Admin Console](https://admin.google.com/)
2. Navegue para **Segurança > Acesso e controle de dados > Controles de API**
3. Role até **Delegação em todo o domínio**
4. Clique em **Adicionar novo**
5. Preencha os campos:
   - **ID do cliente**: Cole o Client ID copiado no passo anterior
   - **Escopos OAuth**: `https://www.googleapis.com/auth/drive`
6. Clique em **Autorizar**

### 4.3 Identificar Usuário para Impersonificação

A Service Account precisa agir "em nome de" um usuário real que tenha Google Drive storage. Escolha:

- **Opção A (Recomendada)**: Criar uma conta de serviço dedicada
  - Exemplo: `storage@adventistgroei.nl`
  - Criar pasta "AdventistGroei Documents" no Drive desta conta
  - Vantagens: Separação clara, fácil auditoria

- **Opção B**: Usar conta de um administrador existente
  - Exemplo: `admin@adventistgroei.nl`
  - Criar pasta em "Meu Drive"
  - Desvantagens: Arquivos misturados com arquivos pessoais

Anote o email do usuário escolhido - você precisará dele na configuração.

## Passo 5: Configurar Aplicação

### 5.1 Criar Pasta de Configuração

```bash
# No diretório raiz do projeto API
mkdir -p config
```

### 5.2 Mover Arquivo de Credenciais

1. Renomeie o arquivo JSON baixado para: `service-account-key.json`
2. Mova o arquivo para a pasta `config/`:
   ```bash
   mv ~/Downloads/adventistgroei-*.json config/service-account-key.json
   ```

### 5.3 Atualizar .gitignore

Certifique-se de que o arquivo `.gitignore` contém:

```gitignore
# Google Service Account
config/service-account-key.json
```

**CRÍTICO**: Nunca commite o arquivo `service-account-key.json` ao Git!

### 5.4 Configurar Variáveis de Ambiente

Edite o arquivo `.env` na raiz do projeto e adicione:

```env
# Google Drive Configuration
GOOGLE_SERVICE_ACCOUNT_KEY_PATH="./config/service-account-key.json"
GOOGLE_DRIVE_ROOT_FOLDER_ID="<cole-aqui-o-folder-id-copiado>"
GOOGLE_DRIVE_USER_EMAIL="<cole-aqui-email-do-usuario-escolhido>"
```

Substitua:
- `<cole-aqui-o-folder-id-copiado>` pelo ID da pasta copiado no Passo 3.3
- `<cole-aqui-email-do-usuario-escolhido>` pelo email do usuário escolhido no Passo 4.3

Exemplo:
```env
GOOGLE_SERVICE_ACCOUNT_KEY_PATH="./config/service-account-key.json"
GOOGLE_DRIVE_ROOT_FOLDER_ID="1AbCdEfGhIjKlMnOpQrStUvWxYz123456"
GOOGLE_DRIVE_USER_EMAIL="storage@adventistgroei.nl"
```

### 5.5 Atualizar .env.example (Opcional mas Recomendado)

Adicione ao `.env.example`:

```env
# Google Drive Configuration
GOOGLE_SERVICE_ACCOUNT_KEY_PATH="./config/service-account-key.json"
GOOGLE_DRIVE_ROOT_FOLDER_ID="your-google-drive-root-folder-id"
GOOGLE_DRIVE_USER_EMAIL="user@yourdomain.com"
```

## Passo 6: Validar Configuração

### 6.1 Verificar Arquivos

Certifique-se de que os seguintes arquivos existem:

```bash
# Arquivo de credenciais
ls -la config/service-account-key.json

# Deve mostrar o arquivo
```

### 6.2 Verificar .env

```bash
# Verificar variáveis no .env
grep GOOGLE .env

# Deve mostrar:
# GOOGLE_SERVICE_ACCOUNT_KEY_PATH="./config/service-account-key.json"
# GOOGLE_DRIVE_ROOT_FOLDER_ID="..."
# GOOGLE_DRIVE_USER_EMAIL="..."
```

### 6.3 Testar Permissões no Drive

1. Acesse [Google Drive](https://drive.google.com/)
2. Navegue até a pasta `AdventistGroei Documents`
3. Verifique que a service account está listada como "Editor" nas permissões de compartilhamento

## Estrutura de Pastas Criada Automaticamente

Após a configuração, a aplicação criará automaticamente a seguinte estrutura:

```
📁 AdventistGroei Documents/ (Root - configurado manualmente)
├── 📁 Project-{project-id-1}/
│   ├── 📁 Activity-{activity-id-1}/
│   │   ├── 📄 document1.pdf
│   │   └── 📄 document2.jpg
│   └── 📁 Activity-{activity-id-2}/
│       └── 📄 document3.pdf
└── 📁 Project-{project-id-2}/
    └── 📁 Activity-{activity-id-3}/
        └── 📄 document4.png
```

- **Root folder**: Criada manualmente e compartilhada com service account
- **Project folders**: Criadas automaticamente ao fazer primeiro upload em um projeto
- **Activity folders**: Criadas automaticamente ao fazer primeiro upload em uma atividade
- **Files**: Armazenados nas pastas das atividades correspondentes

## Troubleshooting

### Erro: "Permission denied"

**Causa**: Service account não tem permissão na pasta raiz

**Solução**:
1. Verifique se compartilhou a pasta com o email correto da service account
2. Verifique se a permissão é "Editor" (não "Visualizador")
3. Aguarde alguns minutos para propagação das permissões

### Erro: "Invalid credentials"

**Causa**: Arquivo JSON incorreto ou caminho errado

**Solução**:
1. Verifique se o arquivo está em `config/service-account-key.json`
2. Verifique se o caminho no `.env` está correto
3. Verifique se o arquivo JSON é válido (abra em editor de texto)

### Erro: "Service account key creation is disabled"

**Causa**: Organização bloqueou criação de chaves de service account por política de segurança (`iam.disableServiceAccountKeyCreation`)

**Soluções Possíveis**:

#### Opção 1: Solicitar Exceção ao Administrador (Mais Simples)

Peça ao administrador da organização (com role `Organization Policy Administrator`) para criar uma exceção:

1. Acessar [Google Cloud Console → IAM & Admin → Organization Policies](https://console.cloud.google.com/iam-admin/orgpolicies)
2. Buscar pela política `iam.disableServiceAccountKeyCreation`
3. Criar exceção para o projeto específico ou desabilitar temporariamente

**Justificativa técnica para apresentar ao administrador**:
- Necessidade de integração backend-to-backend com Google Drive
- Service account será usada apenas para upload/download de arquivos em pasta específica do Drive
- Credenciais serão armazenadas de forma segura no servidor backend (não expostas ao cliente)
- Não há interação de usuários diretamente com as credenciais
- Alternativas mais seguras (Workload Identity) requerem infraestrutura específica no Google Cloud

#### Opção 2: Usar Workload Identity Federation (Mais Seguro)

Se o backend estiver hospedado em infraestrutura cloud (Google Cloud, AWS, Azure):

1. Configure Workload Identity Federation no Google Cloud
2. Permite autenticação sem chaves JSON
3. Mais seguro mas requer configuração de infraestrutura
4. Requer modificações no código de autenticação

#### Opção 3: Conta Google Pessoal (Workaround para Desenvolvimento)

Para ambiente de desenvolvimento/testes:

1. Criar projeto no Google Cloud usando **conta Google pessoal** (não corporativa)
2. Criar service account nesse projeto pessoal
3. Baixar credenciais JSON normalmente
4. Compartilhar pasta do Drive **corporativo** com email da service account **pessoal**
5. A service account consegue acessar recursos compartilhados mesmo sendo de outro domínio

**Nota**: Esta opção funciona porque o Google Drive permite compartilhamento cross-domain. É ideal para desenvolvimento mas para produção recomenda-se usar a Opção 1.

### Erro: "Folder not found"

**Causa**: FOLDER_ID incorreto

**Solução**:
1. Verifique se copiou o ID correto da URL
2. Certifique-se de que está usando apenas o ID (sem a URL completa)
3. Verifique se a pasta ainda existe e está compartilhada

### Arquivos não aparecem no Drive

**Causa**: Possíveis causas variadas

**Solução**:
1. Verifique se o upload foi bem-sucedido (sem erros nos logs)
2. Aguarde alguns segundos - pode haver delay de sincronização
3. Atualize a página do Google Drive (F5)
4. Verifique se está visualizando a pasta correta
5. Procure nas subpastas (Project > Activity)

## Segurança

### ⚠️ Práticas de Segurança Importantes

1. **NUNCA commite o arquivo de credenciais ao Git**
   - Sempre mantenha em `.gitignore`
   - Use variáveis de ambiente para produção

2. **Rotação de Chaves** (Recomendado a cada 90 dias)
   - Crie nova chave no Google Cloud Console
   - Atualize o arquivo `service-account-key.json`
   - Delete a chave antiga no console

3. **Princípio do Menor Privilégio**
   - Service account só tem acesso às pastas compartilhadas
   - Não tem acesso ao Drive pessoal ou outros arquivos
   - Permissão de "Editor" apenas na pasta raiz configurada

4. **Monitoramento**
   - Revise regularmente os arquivos uploadados
   - Monitore logs da aplicação para uploads suspeitos
   - Verifique atividade da service account no Google Cloud Console

5. **Backup**
   - Guarde cópia segura do arquivo de credenciais
   - Use gerenciador de senhas ou vault para armazenamento
   - Tenha plano de recuperação em caso de perda

## Produção

Para ambiente de produção (Coolify + Hetzner):

1. **Configure as variáveis de ambiente no Coolify**:
   - Adicione `GOOGLE_SERVICE_ACCOUNT_KEY_PATH`
   - Adicione `GOOGLE_DRIVE_ROOT_FOLDER_ID`

2. **Upload do arquivo de credenciais**:
   - Faça upload manual do `service-account-key.json` via SSH ou painel do Coolify
   - Coloque em `/app/config/service-account-key.json` (ou caminho configurado)
   - Verifique permissões do arquivo (deve ser legível pela aplicação)

3. **Alternativa - Secret Manager** (Recomendado):
   - Use Google Secret Manager para armazenar credenciais
   - Acesse credenciais via API em vez de arquivo local
   - Mais seguro para ambientes cloud

## Suporte

Para problemas não resolvidos com este guia:

1. Verifique logs da aplicação: `tail -f logs/app.log`
2. Verifique logs do Google Cloud: [Cloud Logging](https://console.cloud.google.com/logs)
3. Consulte [Documentação oficial do Google Drive API](https://developers.google.com/drive/api/guides/about-sdk)

## Recursos Adicionais

- [Google Drive API Documentation](https://developers.google.com/drive/api)
- [Service Accounts Overview](https://cloud.google.com/iam/docs/service-accounts)
- [Drive API Quotas](https://developers.google.com/drive/api/guides/limits)
- [googleapis Node.js Client](https://github.com/googleapis/google-api-nodejs-client)
