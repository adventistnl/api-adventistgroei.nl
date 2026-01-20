/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unnecessary-type-assertion */
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { Prisma } from '@prisma/client';
import { LoggerService, LogContext } from '../services/logger.service';
import { CustomGraphQLError, ErrorCode } from '../common/errors/custom-graphql-error';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter, GqlExceptionFilter {
  constructor(private readonly logger: LoggerService) {}

  catch(exception: unknown, host: ArgumentsHost): any {
    const gqlHost = GqlArgumentsHost.create(host);
    const context = this.extractContext(gqlHost);
    
    // Log detalhado do erro
    this.logException(exception, context);
    
    // Determinar o tipo de erro e retornar resposta apropriada
    if (this.isGraphQLContext(host)) {
      return this.handleGraphQLException(exception, context);
    } else {
      return this.handleHttpException(exception, host, context);
    }
  }

  private extractContext(gqlHost: GqlArgumentsHost): LogContext {
    try {
      const ctx = gqlHost.getContext() as any;
      const info = gqlHost.getInfo() as any;
      const args = gqlHost.getArgs();

      return {
        correlationId: this.generateCorrelationId(),
        userId: ctx?.userId || 'anonymous',
        operation: info?.fieldName as string,
        query: info?.fieldNodes?.[0]?.loc?.source?.body as string,
        variables: args,
        userAgent: ctx?.req?.headers?.['user-agent'] as string,
        ip: this.getClientIp(ctx?.req),
        path: info?.path?.key as string,
        method: 'GraphQL',
      };
    } catch {
      return {
        correlationId: this.generateCorrelationId(),
      };
    }
  }

  private logException(exception: unknown, context: LogContext): void {
    const errorInfo = this.analyzeException(exception);
    
    this.logger.logError(
      `Unhandled Exception: ${errorInfo.message}`,
      {
        ...context,
        additional: {
          errorType: errorInfo.type,
          errorCode: errorInfo.code,
          statusCode: errorInfo.statusCode,
          originalError: errorInfo.originalError,
          isPrismaError: errorInfo.isPrismaError,
          isHttpException: errorInfo.isHttpException,
          isCustomError: errorInfo.isCustomError,
        },
      },
      exception instanceof Error ? exception : new Error(String(exception))
    );
  }

  private handleGraphQLException(exception: unknown, context: LogContext): GraphQLError {
    const errorInfo = this.analyzeException(exception);
    
    // Se já é um CustomGraphQLError, apenas returna
    if (exception instanceof CustomGraphQLError) {
      return exception;
    }

    // Se é um GraphQLError, preserva
    if (exception instanceof GraphQLError) {
      return exception;
    }

    // Prisma errors
    if (this.isPrismaError(exception)) {
      return this.handlePrismaError(exception, context);
    }

    // HTTP exceptions
    if (exception instanceof HttpException) {
      return new CustomGraphQLError(
        exception.message,
        this.mapHttpStatusToErrorCode(exception.getStatus()),
        exception.getStatus()
      );
    }

    // Erros genéricos
    return new CustomGraphQLError(
      this.isDevelopment() ? errorInfo.message : 'Internal server error',
      ErrorCode.INTERNAL_SERVER_ERROR,
      500
    );
  }

  private handleHttpException(exception: unknown, host: ArgumentsHost, context: LogContext): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse() as any;
    const request = ctx.getRequest() as any;

    const errorInfo = this.analyzeException(exception);
    const status = errorInfo.statusCode;

    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request?.url as string,
      method: request?.method as string,
      message: this.isDevelopment() ? errorInfo.message : 'Internal server error',
      correlationId: context.correlationId,
      ...(this.isDevelopment() && { stack: errorInfo.originalError }),
    };

    response?.status?.(status)?.json?.(errorResponse);
  }

  private handlePrismaError(exception: any, context: LogContext): CustomGraphQLError {
    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      switch (exception.code) {
        case 'P2002':
          return new CustomGraphQLError(
            'A record with this information already exists',
            ErrorCode.CONFLICT,
            409
          );
        case 'P2025':
          return new CustomGraphQLError(
            'Record not found',
            ErrorCode.NOT_FOUND,
            404
          );
        case 'P2003':
          return new CustomGraphQLError(
            'Foreign key constraint failed',
            ErrorCode.BAD_REQUEST,
            400
          );
        case 'P2016':
          return new CustomGraphQLError(
            'Query interpretation error',
            ErrorCode.BAD_REQUEST,
            400
          );
        default:
          this.logger.logDatabaseError(
            `Prisma error: ${exception.code} - ${exception.message}`,
            context,
            exception
          );
          return new CustomGraphQLError(
            'Database operation failed',
            ErrorCode.INTERNAL_SERVER_ERROR,
            500
          );
      }
    }

    if (exception instanceof Prisma.PrismaClientUnknownRequestError) {
      this.logger.logDatabaseError(
        `Unknown Prisma error: ${exception.message}`,
        context,
        exception
      );
      return new CustomGraphQLError(
        'Database error occurred',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500
      );
    }

    if (exception instanceof Prisma.PrismaClientRustPanicError) {
      this.logger.logDatabaseError(
        `Prisma engine panic: ${exception.message}`,
        context,
        exception
      );
      return new CustomGraphQLError(
        'Database engine error',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500
      );
    }

    if (exception instanceof Prisma.PrismaClientInitializationError) {
      this.logger.logDatabaseError(
        `Prisma initialization error: ${exception.message}`,
        context,
        exception
      );
      return new CustomGraphQLError(
        'Database connection error',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500
      );
    }

    if (exception instanceof Prisma.PrismaClientValidationError) {
      this.logger.logValidationError(
        `Prisma validation error: ${exception.message}`,
        context
      );
      return new CustomGraphQLError(
        'Invalid query parameters',
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    return new CustomGraphQLError(
      'Database error',
      ErrorCode.INTERNAL_SERVER_ERROR,
      500
    );
  }

  private analyzeException(exception: unknown): {
    message: string;
    type: string;
    code: string | number;
    statusCode: number;
    originalError: any;
    isPrismaError: boolean;
    isHttpException: boolean;
    isCustomError: boolean;
  } {
    if (exception instanceof CustomGraphQLError) {
      return {
        message: exception.message,
        type: 'CustomGraphQLError',
        code: (exception.extensions?.code as string) || 'UNKNOWN',
        statusCode: (exception.extensions?.status as number) || 500,
        originalError: exception,
        isPrismaError: false,
        isHttpException: false,
        isCustomError: true,
      };
    }

    if (exception instanceof GraphQLError) {
      return {
        message: exception.message,
        type: 'GraphQLError',
        code: (exception.extensions?.code as string) || 'GRAPHQL_ERROR',
        statusCode: (exception.extensions?.status as number) || 400,
        originalError: exception,
        isPrismaError: false,
        isHttpException: false,
        isCustomError: false,
      };
    }

    if (exception instanceof HttpException) {
      return {
        message: exception.message,
        type: 'HttpException',
        code: exception.getStatus(),
        statusCode: exception.getStatus(),
        originalError: exception,
        isPrismaError: false,
        isHttpException: true,
        isCustomError: false,
      };
    }

    if (this.isPrismaError(exception)) {
      const prismaError = exception as any;
      return {
        message: prismaError.message || 'Database error',
        type: (exception as Error).constructor?.name || 'PrismaError',
        code: prismaError.code || 'PRISMA_ERROR',
        statusCode: 500,
        originalError: exception,
        isPrismaError: true,
        isHttpException: false,
        isCustomError: false,
      };
    }

    if (exception instanceof Error) {
      return {
        message: exception.message,
        type: exception.constructor.name,
        code: 'UNKNOWN_ERROR',
        statusCode: 500,
        originalError: exception,
        isPrismaError: false,
        isHttpException: false,
        isCustomError: false,
      };
    }

    return {
      message: String(exception),
      type: 'Unknown',
      code: 'UNKNOWN',
      statusCode: 500,
      originalError: exception,
      isPrismaError: false,
      isHttpException: false,
      isCustomError: false,
    };
  }

  private isPrismaError(exception: unknown): boolean {
    return (
      exception instanceof Prisma.PrismaClientKnownRequestError ||
      exception instanceof Prisma.PrismaClientUnknownRequestError ||
      exception instanceof Prisma.PrismaClientRustPanicError ||
      exception instanceof Prisma.PrismaClientInitializationError ||
      exception instanceof Prisma.PrismaClientValidationError
    );
  }

  private isGraphQLContext(host: ArgumentsHost): boolean {
    return host.getType<any>() === 'graphql';
  }

  private mapHttpStatusToErrorCode(status: number): ErrorCode {
    switch (status) {
      case 400:
        return ErrorCode.BAD_REQUEST;
      case 401:
        return ErrorCode.UNAUTHORIZED;
      case 404:
        return ErrorCode.NOT_FOUND;
      case 409:
        return ErrorCode.CONFLICT;
      default:
        return ErrorCode.INTERNAL_SERVER_ERROR;
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

  private isDevelopment(): boolean {
    return process.env.NODE_ENV === 'development';
  }
}