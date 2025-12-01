import { Injectable, LoggerService as NestLoggerService } from '@nestjs/common';

export enum LogLevel {
  ERROR = 'ERROR',
  WARN = 'WARN',
  INFO = 'INFO',
  DEBUG = 'DEBUG',
}

export interface LogContext {
  correlationId?: string;
  userId?: string;
  operation?: string;
  query?: string;
  variables?: unknown;
  userAgent?: string;
  ip?: string;
  executionTime?: number;
  stackTrace?: string;
  path?: string;
  method?: string;
  statusCode?: number;
  timestamp?: string;
  environment?: string;
  version?: string;
  hasErrors?: boolean;
  additional?: Record<string, unknown>;
}

export interface LogEntry {
  level: LogLevel;
  message: string;
  context?: LogContext;
  timestamp: string;
  service: string;
  error?: Error;
}

@Injectable()
export class LoggerService implements NestLoggerService {
  private readonly serviceName = 'api-adventistgroei';
  private readonly environment = process.env.NODE_ENV || 'development';
  private readonly version = process.env.APP_VERSION || '1.0.0';

  private formatLog(level: LogLevel, message: string, context?: LogContext, error?: Error): LogEntry {
    const timestamp = new Date().toISOString();
    const correlationId = context?.correlationId || this.generateCorrelationId();

    return {
      level,
      message,
      timestamp,
      service: this.serviceName,
      context: {
        ...context,
        correlationId,
        timestamp,
        environment: this.environment,
        version: this.version,
      },
      error,
    };
  }

  private writeLog(logEntry: LogEntry): void {
    const logLine = JSON.stringify(logEntry, this.getCircularReplacer(), 2);

    switch (logEntry.level) {
      case LogLevel.ERROR:
        console.error(logLine);
        break;
      case LogLevel.WARN:
        console.warn(logLine);
        break;
      case LogLevel.INFO:
        console.info(logLine);
        break;
      case LogLevel.DEBUG:
        if (this.environment === 'development') {
          console.log(logLine);
        }
        break;
      default:
        console.log(logLine);
    }
  }

  private generateCorrelationId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private getCircularReplacer() {
    const seen = new WeakSet();
    return (_key: string, value: unknown): unknown => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return '[Circular]';
        }
        seen.add(value);
      }
      return value;
    };
  }

  // Implementação dos métodos do NestLoggerService
  log(message: string, context?: string): void {
    this.info(message, { additional: { nestContext: context } });
  }

  error(message: string, trace?: string, context?: string): void {
    const error = trace ? new Error(trace) : undefined;
    this.logError(message, { additional: { nestContext: context } }, error);
  }

  warn(message: string, context?: string): void {
    this.logWarn(message, { additional: { nestContext: context } });
  }

  debug(message: string, context?: string): void {
    this.logDebug(message, { additional: { nestContext: context } });
  }

  verbose(message: string, context?: string): void {
    this.logDebug(message, { additional: { nestContext: context } });
  }

  // Métodos customizados
  info(message: string, context?: LogContext): void {
    const logEntry = this.formatLog(LogLevel.INFO, message, context);
    this.writeLog(logEntry);
  }

  logWarn(message: string, context?: LogContext): void {
    const logEntry = this.formatLog(LogLevel.WARN, message, context);
    this.writeLog(logEntry);
  }

  logError(message: string, context?: LogContext, error?: Error): void {
    const errorContext: LogContext = {
      ...context,
      stackTrace: error?.stack || new Error().stack,
    };
    
    const logEntry = this.formatLog(LogLevel.ERROR, message, errorContext, error);
    this.writeLog(logEntry);
  }

  logDebug(message: string, context?: LogContext): void {
    const logEntry = this.formatLog(LogLevel.DEBUG, message, context);
    this.writeLog(logEntry);
  }

  // Método para log de requisições GraphQL
  logGraphQLRequest(
    operationName: string,
    query: string,
    variables: any,
    context: LogContext
  ): void {
    this.info(`GraphQL Request: ${operationName}`, {
      ...context,
      operation: operationName,
      query: this.sanitizeQuery(query),
      variables: this.sanitizeVariables(variables),
    });
  }

  // Método para log de respostas GraphQL
  logGraphQLResponse(
    operationName: string,
    executionTime: number,
    hasErrors: boolean,
    context: LogContext
  ): void {
    const level = hasErrors ? LogLevel.WARN : LogLevel.INFO;
    const message = `GraphQL Response: ${operationName} (${executionTime}ms)`;
    
    const logEntry = this.formatLog(level, message, {
      ...context,
      operation: operationName,
      executionTime,
      hasErrors,
    });
    
    this.writeLog(logEntry);
  }

  // Método para log de erros de autenticação
  logAuthError(message: string, context?: LogContext): void {
    this.logError(`Authentication Error: ${message}`, {
      ...context,
      additional: { ...context?.additional, errorType: 'authentication' },
    });
  }

  // Método para log de erros de autorização
  logAuthorizationError(message: string, context?: LogContext): void {
    this.logError(`Authorization Error: ${message}`, {
      ...context,
      additional: { ...context?.additional, errorType: 'authorization' },
    });
  }

  // Método para log de erros de validação
  logValidationError(message: string, context?: LogContext): void {
    this.logError(`Validation Error: ${message}`, {
      ...context,
      additional: { ...context?.additional, errorType: 'validation' },
    });
  }

  // Método para log de erros de banco de dados
  logDatabaseError(message: string, context?: LogContext, error?: Error): void {
    this.logError(`Database Error: ${message}`, {
      ...context,
      additional: { ...context?.additional, errorType: 'database' },
    }, error);
  }

  private sanitizeQuery(query: string): string {
    // Remove quebras de linha excessivas e limita o tamanho
    return query?.replace(/\s+/g, ' ').trim().substring(0, 500) || '';
  }

  private sanitizeVariables(variables: unknown): Record<string, unknown> {
    if (!variables || typeof variables !== 'object') return {};
    
    // Remove informações sensíveis das variáveis
    const sanitized = { ...variables } as Record<string, unknown>;
    const sensitiveFields = ['password', 'token', 'secret', 'authorization', 'bearer'];
    
    Object.keys(sanitized).forEach(key => {
      if (sensitiveFields.some(field => key.toLowerCase().includes(field))) {
        sanitized[key] = '[REDACTED]';
      }
    });

    return sanitized;
  }
}