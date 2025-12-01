# Sistema de Logging Avançado

Este documento descreve o sistema de logging implementado na aplicação, que oferece controle detalhado e informações abrangentes para debugging e monitoramento.

## Visão Geral

O sistema de logging foi projetado para capturar automaticamente:
- Todas as requisições GraphQL com detalhes completos
- Erros não tratados com stack trace e contexto
- Informações de performance (tempo de execução)
- Dados de auditoria (usuário, IP, user-agent)
- Correlação de logs através de IDs únicos

## Componentes Principais

### 1. LoggerService (`src/services/logger.service.ts`)

Serviço centralizado para todas as operações de logging.

**Características:**
- Diferentes níveis de log: ERROR, WARN, INFO, DEBUG
- Formatação estruturada em JSON
- Filtragem automática de informações sensíveis
- Suporte a contexto rico com metadados

**Métodos principais:**
```typescript
logger.info(message, context?)
logger.logWarn(message, context?)
logger.logError(message, context?, error?)
logger.logDebug(message, context?)

// Métodos específicos
logger.logGraphQLRequest(operation, query, variables, context)
logger.logGraphQLResponse(operation, executionTime, hasErrors, context)
logger.logAuthError(message, context?)
logger.logAuthorizationError(message, context?)
logger.logValidationError(message, context?)
logger.logDatabaseError(message, context?, error?)
```

### 2. LoggingInterceptor (`src/interceptors/logging.interceptor.ts`)

Interceptor global que captura todas as requisições.

**Funcionalidades:**
- Log automático de todas as requisições GraphQL
- Medição de tempo de execução
- Captura de contexto de requisição (IP, user-agent, etc.)
- Correlação automática de requisição/resposta

### 3. GlobalExceptionFilter (`src/filters/global-exception.filter.ts`)

Filtro global que captura todos os erros não tratados.

**Funcionalidades:**
- Captura todos os tipos de erro (GraphQL, HTTP, Prisma, etc.)
- Log detalhado com stack trace
- Tratamento específico para diferentes tipos de erro
- Conversão automática para formato apropriado

### 4. CustomGraphQLError (melhorado)

Classe de erro customizada com suporte a contexto rico.

**Novos recursos:**
- Timestamp automático
- Correlation ID
- Contexto de erro estruturado
- Métodos estáticos para criação de erros específicos

## Logs Automáticos vs Manuais

### **Logs Automáticos** (Gerados pelo sistema)

O interceptor e exception filter geram logs automaticamente:

#### **LoggingInterceptor** (src/interceptors/logging.interceptor.ts)
```typescript
// Para TODAS as requisições GraphQL:
INFO  - "GraphQL Request: createUser"     // Início da requisição
INFO  - "GraphQL Response: createUser (150ms)"  // Sucesso
WARN  - "GraphQL Response: createUser (150ms)"  // Com erros
```

#### **GlobalExceptionFilter** (src/filters/global-exception.filter.ts)
```typescript
// Para TODOS os erros não tratados:
ERROR - "Unhandled Exception: User not found"
ERROR - "Prisma error: P2002 - Unique constraint failed"
ERROR - "Database connection failed"
```

### **Logs Manuais** (Você controla)

Use em seus services, repositories e resolvers:

```typescript
@Injectable()
export class UserService {
  constructor(private readonly logger: LoggerService) {}

  async createUser(data: CreateUserDto, userId: string): Promise<User> {
    // INFO - Operação iniciada
    this.logger.info('Starting user creation', {
      userId,
      operation: 'createUser',
      additional: { targetEmail: data.email }
    });

    try {
      // DEBUG - Detalhes internos (só em dev)
      this.logger.logDebug('Validating user data', {
        userId,
        operation: 'createUser'
      });

      const user = await this.userRepository.create(data);
      
      // INFO - Sucesso
      this.logger.info('User created successfully', {
        userId,
        operation: 'createUser',
        additional: { newUserId: user.id }
      });

      return user;
    } catch (error) {
      // ERROR - Falha (também capturado pelo GlobalExceptionFilter)
      this.logger.logDatabaseError('Failed to create user', {
        userId,
        operation: 'createUser'
      }, error);
      throw error;
    }
  }
}
```

### **Exemplos Práticos de Cada Nível**

#### **ERROR** - O que você verá:
```json
{
  "level": "ERROR",
  "message": "Database Error: Connection timeout",
  "timestamp": "2024-12-01T10:30:00.000Z",
  "service": "api-adventistgroei",
  "context": {
    "correlationId": "1701421800000-abc123",
    "userId": "user-123",
    "operation": "findUserById",
    "executionTime": 5000,
    "additional": { "errorType": "database" }
  },
  "error": {
    "name": "PrismaClientKnownRequestError",
    "message": "Connection timeout",
    "stack": "Error: Connection timeout\n    at PrismaClient..."
  }
}
```

#### **WARN** - O que você verá:
```json
{
  "level": "WARN",
  "message": "Authorization Error: Insufficient permissions",
  "timestamp": "2024-12-01T10:29:00.000Z",
  "context": {
    "correlationId": "1701421740000-def456",
    "userId": "user-456", 
    "operation": "deleteUser",
    "additional": { "requiredPermission": "ADMIN" }
  }
}
```

#### **INFO** - O que você verá:
```json
{
  "level": "INFO",
  "message": "GraphQL Request: createUser",
  "timestamp": "2024-12-01T10:28:00.000Z",
  "context": {
    "correlationId": "1701421680000-ghi789",
    "userId": "user-789",
    "operation": "createUser",
    "query": "mutation CreateUser($input: CreateUserInput!) { ... }",
    "variables": { "input": { "email": "new@user.com" } }
  }
}
```

#### **DEBUG** - O que você verá (só em desenvolvimento):
```json
{
  "level": "DEBUG",
  "message": "Cache hit for user permissions",
  "timestamp": "2024-12-01T10:27:00.000Z",
  "context": {
    "correlationId": "1701421620000-jkl012",
    "userId": "user-123",
    "operation": "validatePermissions",
    "additional": { 
      "cacheKey": "permissions:user-123",
      "hitRate": "85%"
    }
  }
}
```

## Guia Prático: Quando Usar Cada Nível

### **🔴 ERROR - Use quando:**
- ❌ Operação falhou completamente
- ❌ Sistema está inacessível/instável
- ❌ Dados corrompidos/perdidos
- ❌ Falha de segurança crítica

**Gatilhos automáticos:**
- Exceptions não tratadas (GlobalExceptionFilter)
- Erros de banco de dados (Prisma)
- Timeouts de conexão
- Falhas de autenticação

### **🟡 WARN - Use quando:**
- ⚠️ Algo suspeito, mas sistema funcionando
- ⚠️ Performance degradada
- ⚠️ Uso de fallbacks/valores padrão
- ⚠️ Tentativas de acesso negadas

**Gatilhos automáticos:**
- Requisições > 2 segundos (performance)
- Tentativas de login inválidas
- Acessos não autorizados

### **🔵 INFO - Use quando:**
- ℹ️ Operações importantes iniciadas/finalizadas
- ℹ️ Estados importantes do sistema
- ℹ️ Eventos de auditoria
- ℹ️ Mudanças de configuração

**Gatilhos automáticos:**
- Todas as requisições GraphQL
- Startup da aplicação
- Alterações de estado importantes

### **⚫ DEBUG - Use quando:**
- 🔍 Investigando problemas específicos
- 🔍 Valores de variáveis importantes
- 🔍 Fluxo detalhado de execução
- 🔍 Cache hits/misses

**Gatilhos automáticos:**
- Nenhum (sempre manual)

## Exemplos de Implementação por Tipo de Operação

### **Repository/Service Layer**
```typescript
@Injectable()
export class UserRepository {
  constructor(private readonly logger: LoggerService) {}

  async findById(id: string): Promise<User | null> {
    // INFO: Operação importante iniciada
    this.logger.info('Finding user by ID', { 
      operation: 'findById',
      additional: { userId: id }
    });

    try {
      // DEBUG: Detalhes internos (só em dev)
      this.logger.logDebug('Executing database query', {
        operation: 'findById',
        additional: { query: 'SELECT * FROM users WHERE id = ?', params: [id] }
      });

      const user = await this.prisma.user.findUnique({ where: { id } });
      
      if (!user) {
        // WARN: Não é erro, mas importante saber
        this.logger.logWarn('User not found', { 
          operation: 'findById',
          additional: { requestedId: id }
        });
        return null;
      }

      // INFO: Sucesso
      this.logger.info('User found successfully', {
        operation: 'findById', 
        additional: { foundUserId: user.id }
      });

      return user;
    } catch (error) {
      // ERROR: Falha crítica (também pego pelo GlobalExceptionFilter)
      this.logger.logDatabaseError('Database query failed', {
        operation: 'findById',
        additional: { requestedId: id }
      }, error);
      throw error;
    }
  }
}
```

### **GraphQL Resolver**
```typescript
@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly logger: LoggerService
  ) {}

  @Query(() => User)
  async user(@Args('id') id: string, @Context('userId') currentUserId: string) {
    // INFO: Requisição importante (também pega pelo interceptor)
    this.logger.info('User query requested', {
      userId: currentUserId,
      operation: 'user',
      additional: { targetUserId: id }
    });

    // Validação de permissão
    if (!currentUserId) {
      // ERROR: Tentativa de acesso sem autenticação
      this.logger.logAuthError('Unauthenticated access attempt', {
        operation: 'user',
        additional: { targetUserId: id }
      });
      throw CustomGraphQLError.unauthorized('Authentication required');
    }

    try {
      return await this.userService.findById(id);
    } catch (error) {
      // Erro já logado pelo service e GlobalExceptionFilter
      throw error;
    }
  }
}
```

### **Middleware/Guards**
```typescript
@Injectable()
export class AuthGuard {
  constructor(private readonly logger: LoggerService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = this.getRequest(context);
    const token = this.extractToken(request);

    if (!token) {
      // WARN: Tentativa sem token
      this.logger.logWarn('Request without authentication token', {
        operation: 'AuthGuard',
        additional: { 
          path: request.url,
          userAgent: request.headers['user-agent']
        }
      });
      return false;
    }

    try {
      // DEBUG: Processo de validação (só em dev)
      this.logger.logDebug('Validating JWT token', {
        operation: 'AuthGuard',
        additional: { tokenLength: token.length }
      });

      const payload = this.jwtService.verify(token);
      
      // INFO: Sucesso na autenticação
      this.logger.info('User authenticated successfully', {
        userId: payload.sub,
        operation: 'AuthGuard'
      });

      return true;
    } catch (error) {
      // WARN: Token inválido (não é erro crítico do sistema)
      this.logger.logAuthError('Invalid authentication token', {
        operation: 'AuthGuard',
        additional: { 
          error: error.message,
          tokenPresent: !!token
        }
      });
      return false;
    }
  }
}
```

```typescript
import { LoggerService } from '../services/logger.service';

@Injectable()
export class MyService {
  constructor(private readonly logger: LoggerService) {}
}
```

## Onde Visualizar os Logs

### **Durante Desenvolvimento**
Os logs aparecem diretamente no console do terminal onde você roda a aplicação:

```bash
# Iniciando a aplicação
npm run start:dev

# Você verá logs assim:
{
  "level": "INFO",
  "message": "Application is running on Port: 3000",
  "timestamp": "2024-12-01T10:00:00.000Z",
  "service": "api-adventistgroei",
  "context": {
    "correlationId": "1701421200000-startup",
    "environment": "development",
    "port": 3000
  }
}

{
  "level": "INFO", 
  "message": "GraphQL Request: createUser",
  "timestamp": "2024-12-01T10:01:00.000Z",
  "context": {
    "correlationId": "1701421260000-abc123",
    "userId": "user-123",
    "operation": "createUser",
    "query": "mutation CreateUser($input: CreateUserInput!) { ... }",
    "variables": { "input": { "email": "test@example.com" } }
  }
}
```

### **Em Produção**
Os logs são enviados para:

#### **1. Docker Logs (se usando containers)**
```bash
# Ver logs em tempo real
docker logs -f container-name

# Ver logs das últimas 100 linhas  
docker logs --tail 100 container-name

# Ver logs de um período específico
docker logs --since="2024-12-01T10:00:00" container-name
```

#### **2. Sistemas de Log Management**
Como os logs são em JSON estruturado, eles podem ser facilmente enviados para:

- **Datadog**: Para métricas e alertas
- **New Relic**: Para monitoramento de performance 
- **ELK Stack (Elasticsearch + Logstash + Kibana)**: Para busca e visualização
- **Grafana + Loki**: Para dashboards e alertas
- **AWS CloudWatch**: Se hospedado na AWS
- **Google Cloud Logging**: Se hospedado no GCP

#### **3. Exemplo de Setup com Docker + ELK**
```yaml
# docker-compose.yml
version: '3.8'
services:
  api:
    build: .
    environment:
      - NODE_ENV=production
    logging:
      driver: "json-file"
      options:
        max-size: "100m"
        max-file: "3"
  
  elasticsearch:
    image: elasticsearch:7.15.0
    environment:
      - discovery.type=single-node
    ports:
      - "9200:9200"
  
  logstash:
    image: logstash:7.15.0
    volumes:
      - ./logstash.conf:/usr/share/logstash/pipeline/logstash.conf
    depends_on:
      - elasticsearch
  
  kibana:
    image: kibana:7.15.0
    ports:
      - "5601:5601"
    depends_on:
      - elasticsearch
```

### **Correlação e Rastreamento**

#### **Seguindo uma Requisição Específica**
Use o `correlationId` para rastrear toda a jornada de uma requisição:

```bash
# Filtrando logs por correlationId
grep "1701421260000-abc123" application.log

# Resultado: toda a timeline da requisição
INFO  | GraphQL Request: createUser (correlationId: 1701421260000-abc123)
DEBUG | Validating user data (correlationId: 1701421260000-abc123)  
INFO  | Database query executed (correlationId: 1701421260000-abc123)
INFO  | GraphQL Response: createUser 150ms (correlationId: 1701421260000-abc123)
```

#### **Monitorando um Usuário Específico**
```bash
# Logs de um usuário específico
grep '"userId":"user-123"' application.log | jq .

# Ou usando ferramentas de log:
# No Kibana: userId:"user-123"
# No Datadog: @userId:user-123
```

### **Alertas Recomendados**

#### **Alertas Críticos (ERROR)**
- Taxa de erro > 1% em 5 minutos
- Mais de 10 erros de banco em 1 minuto
- Falha de conexão com serviços externos

#### **Alertas de Monitoramento (WARN)**
- Taxa de requisições não autorizadas > 10/minuto
- Tempo de resposta médio > 2 segundos
- Memory usage > 80%

#### **Dashboards Úteis**
```
📊 Dashboard Principal:
├── Requests per minute (INFO level)
├── Error rate (ERROR level)  
├── Average response time
├── Top slow operations (WARN level)
├── Authentication failures (WARN level)
└── Database errors (ERROR level)

📊 Dashboard de Debug:
├── Cache hit rate (DEBUG level)
├── Query execution times
├── Memory usage trends
└── User activity patterns
```

### **Comandos Úteis para Análise**

#### **Análise de Performance**
```bash
# Operações mais lentas
grep '"executionTime"' application.log | jq 'select(.context.executionTime > 1000)'

# TOP 10 operações por tempo
grep '"level":"INFO"' application.log | jq '.context.executionTime' | sort -nr | head -10
```

#### **Análise de Erros** 
```bash
# Tipos de erro mais comuns
grep '"level":"ERROR"' application.log | jq '.context.additional.errorType' | sort | uniq -c

# Erros de um usuário específico
grep '"userId":"user-123"' application.log | grep '"level":"ERROR"'
```

#### **Análise de Usuários**
```bash
# Usuários mais ativos
grep '"level":"INFO"' application.log | jq -r '.context.userId' | sort | uniq -c | sort -nr | head -10

# Operações mais executadas
grep '"operation"' application.log | jq -r '.context.operation' | sort | uniq -c | sort -nr
```

```typescript
// Log de informação
this.logger.info('Operação iniciada', {
  userId: 'user-123',
  operation: 'createUser',
  additional: {
    targetEmail: 'user@example.com'
  }
});

// Log de erro
this.logger.logError('Erro na operação', {
  userId: 'user-123',
  operation: 'createUser'
}, error);
```

### 3. Uso de CustomGraphQLError

```typescript
import { CustomGraphQLError, ErrorContext } from '../common/errors/custom-graphql-error';

// Erro não encontrado com contexto
throw CustomGraphQLError.notFound('User not found', {
  userId: 'current-user-id',
  operation: 'findUserById',
  additional: {
    targetUserId: 'searched-user-id'
  }
});

// Erro de autorização
throw CustomGraphQLError.forbidden('Insufficient permissions', {
  userId: 'user-123',
  operation: 'deleteUser'
});
```

### 4. Logs Específicos por Tipo

```typescript
// Erro de autenticação
this.logger.logAuthError('Token inválido', { userId: 'anonymous' });

// Erro de banco de dados
this.logger.logDatabaseError('Falha na conexão', { operation: 'findUser' }, error);

// Erro de validação
this.logger.logValidationError('Dados inválidos', { 
  userId: 'user-123',
  additional: { field: 'email' }
});
```

## Estrutura dos Logs

### Formato JSON

```json
{
  "level": "ERROR",
  "message": "Database Error: User not found",
  "timestamp": "2024-12-01T10:30:00.000Z",
  "service": "api-adventistgroei",
  "context": {
    "correlationId": "1701421800000-abc123def",
    "userId": "user-123",
    "operation": "findUserById",
    "query": "query FindUserById($id: ID!) { user(id: $id) { id name email } }",
    "variables": { "id": "user-456" },
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    "ip": "192.168.1.100",
    "executionTime": 150,
    "timestamp": "2024-12-01T10:30:00.000Z",
    "environment": "production",
    "version": "1.0.0",
    "additional": {
      "targetUserId": "user-456",
      "errorType": "database"
    }
  },
  "error": {
    "name": "PrismaClientKnownRequestError",
    "message": "Record not found",
    "stack": "Error: Record not found\\n    at ..."
  }
}
```

### Campos do Contexto

- **correlationId**: ID único para rastrear requisições relacionadas
- **userId**: ID do usuário que fez a requisição
- **operation**: Nome da operação GraphQL ou método
- **query**: Query GraphQL sanitizada (limitada a 500 caracteres)
- **variables**: Variáveis da query (com informações sensíveis removidas)
- **userAgent**: User agent do cliente
- **ip**: Endereço IP do cliente
- **executionTime**: Tempo de execução em milissegundos
- **path**: Caminho da operação
- **method**: Método HTTP ou 'GraphQL'
- **additional**: Contexto adicional específico da operação

## Configuração

### Variáveis de Ambiente

```env
NODE_ENV=production          # Controla o nível de detalhes dos logs
APP_VERSION=1.0.0           # Versão da aplicação nos logs
```

### Níveis de Log - Explicação Detalhada

O sistema possui 4 níveis de log hierárquicos, do mais crítico ao mais detalhado:

#### **ERROR** (Mais Crítico)
- **Quando usar**: Erros que quebram a aplicação ou operações críticas
- **Onde aparece**: Sempre visível em TODOS os ambientes
- **Exemplos**:
  - Falhas de conexão com banco de dados
  - Erros não tratados que quebram requisições
  - Falhas de autenticação críticas
  - Erros do Prisma (conexão, queries inválidas)
- **Cor no console**: Vermelho (console.error)
- **Ação requerida**: Investigação e correção imediata

```typescript
// Exemplos de uso
this.logger.logError('Database connection failed', context, error);
this.logger.logDatabaseError('Query execution failed', context, error);
throw CustomGraphQLError.internalServerError('Critical system error', context);
```

#### **WARN** (Atenção Necessária)
- **Quando usar**: Situações problemáticas que não quebram, mas precisam de atenção
- **Onde aparece**: Visível em produção e desenvolvimento
- **Exemplos**:
  - Tentativas de acesso negadas (autorização)
  - Dados inconsistentes encontrados
  - Performance degradada (operações lentas)
  - Recursos próximos do limite
- **Cor no console**: Amarelo (console.warn)
- **Ação requerida**: Monitoramento e possível investigação

```typescript
// Exemplos de uso
this.logger.logWarn('User attempted unauthorized access', context);
this.logger.logAuthorizationError('Insufficient permissions', context);
// Automaticamente gerado pelo interceptor para operações > 2 segundos
```

#### **INFO** (Informacional)
- **Quando usar**: Fluxo normal da aplicação, eventos importantes
- **Onde aparece**: Visível em todos os ambientes por padrão
- **Exemplos**:
  - Início/fim de operações importantes
  - Login/logout de usuários
  - Criação/atualização de registros
  - Configurações carregadas na inicialização
- **Cor no console**: Branco/Azul (console.info)
- **Ação requerida**: Nenhuma, apenas monitoramento

```typescript
// Exemplos de uso
this.logger.info('User logged in successfully', context);
this.logger.info('Creating new user', context);
this.logger.logGraphQLRequest('createUser', query, variables, context);
// Automaticamente gerado para todas as requisições GraphQL
```

#### **DEBUG** (Mais Detalhado)
- **Quando usar**: Informações muito detalhadas para debugging
- **Onde aparece**: **APENAS em ambiente de desenvolvimento** (NODE_ENV !== 'production')
- **Exemplos**:
  - Valores de variáveis durante execução
  - Estados intermediários de operações complexas
  - Detalhes internos de algoritmos
  - Trace detalhado de execução
- **Cor no console**: Cinza (console.log)
- **Ação requerida**: Apenas para desenvolvimento

```typescript
// Exemplos de uso
this.logger.logDebug('Processing validation rules', context);
this.logger.logDebug('Cache hit for user data', context);
// Usado para debugging detalhado
```

### **Hierarquia e Visibilidade por Ambiente**

```
PRODUÇÃO (NODE_ENV=production):
✅ ERROR   - Sempre visível
✅ WARN    - Sempre visível  
✅ INFO    - Sempre visível
❌ DEBUG   - NUNCA visível

DESENVOLVIMENTO (NODE_ENV=development):
✅ ERROR   - Sempre visível
✅ WARN    - Sempre visível
✅ INFO    - Sempre visível
✅ DEBUG   - Sempre visível

STAGING/TEST:
✅ ERROR   - Sempre visível
✅ WARN    - Sempre visível
✅ INFO    - Sempre visível
❌ DEBUG   - Normalmente oculto
```

## Filtragem de Informações Sensíveis

O sistema automaticamente remove ou substitui informações sensíveis:

- Campos com nomes contendo: `password`, `token`, `secret`, `authorization`, `bearer`
- Substituição por `[REDACTED]`
- Stack traces completos apenas em ambiente de desenvolvimento

## Correlação de Logs

Cada requisição recebe um `correlationId` único que permite:
- Rastrear logs relacionados à mesma operação
- Seguir o fluxo completo de uma requisição
- Correlacionar logs entre diferentes serviços

## Monitoramento e Alertas

### Métricas Recomendadas

1. **Taxa de erro por operação**
2. **Tempo médio de resposta por operação**
3. **Número de requisições por usuário**
4. **Erros de autenticação/autorização**
5. **Erros de banco de dados**

### Alertas Sugeridos

1. **Taxa de erro > 5% em 5 minutos**
2. **Tempo de resposta > 2 segundos**
3. **Múltiplos erros de autenticação do mesmo IP**
4. **Erros de banco de dados persistentes**

## Exemplos Práticos

Consulte o arquivo `src/examples/logging-usage.example.ts` para exemplos detalhados de como usar o sistema em diferentes cenários.

## Performance

O sistema foi otimizado para:
- Impacto mínimo na performance (< 5ms overhead)
- Formatação assíncrona em produção
- Limitação automática do tamanho dos logs
- Proteção contra referências circulares

## Troubleshooting

### Logs não aparecem

1. Verificar se `NODE_ENV` está configurado corretamente
2. Confirmar que o LoggerService está injetado
3. Verificar se os providers estão registrados no AppModule

### Performance degradada

1. Considerar reduzir o nível de log em produção
2. Verificar se há vazamentos de memória nos logs
3. Implementar rotação de logs se necessário

### Informações em falta

1. Verificar se o contexto está sendo passado corretamente
2. Confirmar que o interceptor está ativo
3. Validar se as variáveis de ambiente estão configuradas

## Próximos Passos

Possíveis melhorias futuras:
1. Integração com sistemas de monitoramento (Datadog, New Relic)
2. Implementação de alertas automáticos
3. Dashboard de métricas em tempo real
4. Compressão de logs para otimização
5. Rotação automática de arquivos de log