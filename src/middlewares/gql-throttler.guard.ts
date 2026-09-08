import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ThrottlerGuard } from '@nestjs/throttler';

@Injectable()
export class GqlThrottlerGuard extends ThrottlerGuard {
  protected getRequestResponse(context: ExecutionContext) {
    const gqlCtx = GqlExecutionContext.create(context);
    const ctx = gqlCtx.getContext();
    
    // Suporte tanto para chamadas HTTP REST quanto GraphQL
    if (context.getType() === 'http') {
      const http = context.switchToHttp();
      return { req: http.getRequest(), res: http.getResponse() };
    }
    
    return { req: ctx.req, res: ctx.res || ctx.req?.res };
  }
}
