import { GraphQLError } from 'graphql';

export interface ErrorContext {
  correlationId?: string;
  userId?: string;
  operation?: string;
  path?: string;
  userAgent?: string;
  ip?: string;
  timestamp?: string;
  additional?: Record<string, any>;
  additionalContext?: Record<string, any>;
}

export class CustomGraphQLError extends GraphQLError {
  public readonly timestamp: string;
  public readonly correlationId: string;
  public readonly context?: ErrorContext;

  constructor(
    message: string, 
    code: ErrorCode, 
    status: number, 
    context?: ErrorContext,
    originalError?: Error
  ) {
    const timestamp = new Date().toISOString();
    const correlationId = context?.correlationId || CustomGraphQLError.generateCorrelationId();

    super(message, {
      extensions: {
        code,
        http: {
          status,
        },
        status,
        timestamp,
        correlationId,
        context,
        ...(originalError && process.env.NODE_ENV === 'development' && {
          originalError: {
            name: originalError.name,
            message: originalError.message,
            stack: originalError.stack,
          },
        }),
      },
      originalError,
    });

    this.timestamp = timestamp;
    this.correlationId = correlationId;
    this.context = context;
  }

  private static generateCorrelationId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  public toLogObject(): Record<string, any> {
    return {
      message: this.message,
      code: this.extensions?.code,
      status: this.extensions?.status,
      timestamp: this.timestamp,
      correlationId: this.correlationId,
      context: this.context,
      path: this.path,
      ...(process.env.NODE_ENV === 'development' && {
        stack: this.stack,
        source: this.source,
        positions: this.positions,
      }),
    };
  }

  // Métodos estáticos para criar erros com contexto
  static notFound(message: string, context?: ErrorContext, originalError?: Error): CustomGraphQLError {
    return new CustomGraphQLError(message, ErrorCode.NOT_FOUND, 404, context, originalError);
  }

  static unauthorized(message: string, context?: ErrorContext, originalError?: Error): CustomGraphQLError {
    return new CustomGraphQLError(message, ErrorCode.UNAUTHORIZED, 401, context, originalError);
  }

  static badRequest(message: string, context?: ErrorContext, originalError?: Error): CustomGraphQLError {
    return new CustomGraphQLError(message, ErrorCode.BAD_REQUEST, 400, context, originalError);
  }

  static internalServerError(message: string, context?: ErrorContext, originalError?: Error): CustomGraphQLError {
    return new CustomGraphQLError(message, ErrorCode.INTERNAL_SERVER_ERROR, 500, context, originalError);
  }

  static conflict(message: string, context?: ErrorContext, originalError?: Error): CustomGraphQLError {
    return new CustomGraphQLError(message, ErrorCode.CONFLICT, 409, context, originalError);
  }

  static forbidden(message: string, context?: ErrorContext, originalError?: Error): CustomGraphQLError {
    return new CustomGraphQLError(message, ErrorCode.FORBIDDEN, 403, context, originalError);
  }
}

export enum ErrorCode {
  NOT_FOUND = 'NOT_FOUND',
  UNAUTHORIZED = 'UNAUTHORIZED',
  BAD_REQUEST = 'BAD_REQUEST',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  CONFLICT = 'CONFLICT',
  FORBIDDEN = 'FORBIDDEN',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  DATABASE_ERROR = 'DATABASE_ERROR',
  AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR',
  AUTHORIZATION_ERROR = 'AUTHORIZATION_ERROR',
}
