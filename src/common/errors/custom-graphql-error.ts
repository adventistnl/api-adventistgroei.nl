import { GraphQLError } from 'graphql';

export class CustomGraphQLError extends GraphQLError {
  constructor(message: string, code: ErrorCode, status: number) {
    super(message, {
      extensions: {
        code,
        http: {
          status,
        },
        status,
      },
    });
  }
}

export enum ErrorCode {
  NOT_FOUND = 'NOT_FOUND',
  UNAUTHORIZED = 'UNAUTHORIZED',
  BAD_REQUEST = 'BAD_REQUEST',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
}
