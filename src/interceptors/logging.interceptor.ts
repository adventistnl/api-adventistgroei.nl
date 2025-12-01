/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unnecessary-type-assertion */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { LoggerService, LogContext } from '../services/logger.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: LoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const startTime = Date.now();
    const correlationId = this.generateCorrelationId();
    
    // Extrair informações do contexto
    const logContext = this.extractRequestContext(context, correlationId);
    
    // Log da requisição de entrada
    this.logIncomingRequest(context, logContext);

    return next.handle().pipe(
      tap((data) => {
        const executionTime = Date.now() - startTime;
        this.logSuccessfulResponse(context, logContext, executionTime, data);
      }),
      catchError((error) => {
        const executionTime = Date.now() - startTime;
        this.logErrorResponse(context, logContext, executionTime, error);
        throw error; // Re-throw para que o error filter possa processar
      })
    );
  }

  private extractRequestContext(context: ExecutionContext, correlationId: string): LogContext {
    try {
      const gqlContext = GqlExecutionContext.create(context);
      const ctx = gqlContext.getContext() as any;
      const info = gqlContext.getInfo() as any;
      const args = gqlContext.getArgs();
      const req = ctx?.req as any;

      return {
        correlationId,
        userId: ctx?.userId || 'anonymous',
        operation: info?.fieldName as string,
        query: info?.fieldNodes?.[0]?.loc?.source?.body as string,
        variables: args,
        userAgent: req?.headers?.['user-agent'] as string,
        ip: this.getClientIp(req),
        path: info?.path?.key as string,
        method: 'GraphQL',
      };
    } catch (_error) {
      // Fallback para contextos não-GraphQL
      const request = context.switchToHttp().getRequest() as any;
      return {
        correlationId,
        userAgent: request?.headers?.['user-agent'] as string,
        ip: this.getClientIp(request),
        path: request?.url as string,
        method: request?.method as string,
      };
    }
  }

  private logIncomingRequest(context: ExecutionContext, logContext: LogContext): void {
    try {
      const gqlContext = GqlExecutionContext.create(context);
      const info = gqlContext.getInfo() as any;
      
      if (info) {
        this.logger.logGraphQLRequest(
          info.fieldName as string,
          info.fieldNodes?.[0]?.loc?.source?.body as string || '',
          gqlContext.getArgs(),
          logContext
        );
      } else {
        this.logger.info('HTTP Request received', logContext);
      }
    } catch (error) {
      this.logger.logError('Error logging incoming request', logContext, error as Error);
    }
  }

  private logSuccessfulResponse(
    context: ExecutionContext,
    logContext: LogContext,
    executionTime: number,
    data: unknown
  ): void {
    try {
      const gqlContext = GqlExecutionContext.create(context);
      const info = gqlContext.getInfo() as any;
      
      if (info) {
        this.logger.logGraphQLResponse(
          info.fieldName as string,
          executionTime,
          false,
          {
            ...logContext,
            executionTime,
            additional: {
              responseSize: this.calculateResponseSize(data),
              success: true,
            },
          }
        );
      } else {
        this.logger.info(`Request completed successfully (${executionTime}ms)`, {
          ...logContext,
          executionTime,
          statusCode: 200,
        });
      }
    } catch (error) {
      this.logger.logError('Error logging successful response', logContext, error as Error);
    }
  }

  private logErrorResponse(
    context: ExecutionContext,
    logContext: LogContext,
    executionTime: number,
    error: unknown
  ): void {
    try {
      const gqlContext = GqlExecutionContext.create(context);
      const info = gqlContext.getInfo() as any;
      
      if (info) {
        this.logger.logGraphQLResponse(
          info.fieldName as string,
          executionTime,
          true,
          {
            ...logContext,
            executionTime,
            additional: {
              errorMessage: error instanceof Error ? error.message : String(error),
              errorType: error instanceof Error ? error.constructor.name : typeof error,
              hasGraphQLErrors: true,
            },
          }
        );
      } else {
        this.logger.logError(`Request failed (${executionTime}ms)`, {
          ...logContext,
          executionTime,
          statusCode: error && typeof error === 'object' && 'status' in error ? (error as any).status : 500,
        }, error instanceof Error ? error : undefined);
      }
    } catch (logError) {
      this.logger.logError('Error logging error response', logContext, logError as Error);
    }
  }

  private generateCorrelationId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private getClientIp(request: any): string {
    if (!request) return 'unknown';
    
    const xForwardedFor = request.headers?.['x-forwarded-for'];
    const forwarded = typeof xForwardedFor === 'string' ? xForwardedFor.split(',')[0] : undefined;
    
    const ip = forwarded ||
      request.headers?.['x-real-ip'] ||
      request.connection?.remoteAddress ||
      request.socket?.remoteAddress ||
      request.ip;
      
    return typeof ip === 'string' ? ip : 'unknown';
  }

  private calculateResponseSize(data: unknown): number {
    try {
      return JSON.stringify(data).length;
    } catch {
      return 0;
    }
  }
}