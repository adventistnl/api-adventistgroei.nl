import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ThrottlerGuard } from '@nestjs/throttler';

@Injectable()
export class GqlThrottlerGuard extends ThrottlerGuard {
  protected getRequestResponse(context: ExecutionContext) {
    const gqlCtx = GqlExecutionContext.create(context);
     
    const ctx: Record<string, any> = gqlCtx.getContext();
    
    // Suporte tanto para chamadas HTTP REST quanto GraphQL
    if (context.getType() === 'http') {
      const http = context.switchToHttp();
      return { req: http.getRequest(), res: http.getResponse() };
    }
    
    const req = ctx.req || {
      headers: {},
      ip: '127.0.0.1',
      header: () => undefined,
    };

    const res = ctx.res || ctx.req?.res || {
      header: () => undefined,
      setHeader: () => undefined,
    };

    // Certifique-se de que o objeto de resposta tenha as funções esperadas pelo ThrottlerGuard
    if (typeof res.header !== 'function') {
      res.header = () => undefined;
    }
    if (typeof res.setHeader !== 'function') {
      res.setHeader = () => undefined;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return { req, res };
  }
}
