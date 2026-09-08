import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';
import { APP_FILTER, APP_INTERCEPTOR, APP_GUARD } from '@nestjs/core';
import { getUserIdFromRequest } from './middlewares/auth-context.helper';
import { GqlThrottlerGuard } from './middlewares/gql-throttler.guard';

import { JwtStrategy } from './middlewares';
import { JwtAuthGuard } from './middlewares/jwt-auth.guard';
import * as Services from './services';
import * as Resolvers from './graphql';
import * as Repositories from './repositories';
import * as CronServices from './cron/services';
import { ContextDto } from './dto/context.dto';
import { parseCookie } from 'cookie';
import { LoggerService } from './services/logger.service';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { GlobalExceptionFilter } from './filters/global-exception.filter';
import { ActivityDocumentsController } from './controllers/activity-documents.controller';
import { SubsidyReceiptController } from './controllers/subsidy-receipt.controller';
import { ZipCodeModule } from './modules/zip-code.module';

const JWT_SECRET = process.env.JWT_SECRET;

@Module({
  imports: [
    ScheduleModule.forRoot(), // Habilita o suporte a cron jobs
    ConfigModule.forRoot(),
    ZipCodeModule,
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 100, // Máximo de 100 requests por minuto por IP
    }]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      introspection: true,
      autoSchemaFile: 'schema.gql',
      csrfPrevention: false,
      subscriptions: {
        'graphql-ws': {
          onConnect: async (ctx: any) => {
            // Suporta connectionParams flat: { Authorization: "Bearer ..." }
            // e nested:  { headers: { Authorization: "Bearer ..." } }
            const cp = ctx?.connectionParams ?? {};
            let authHeader: string | undefined =
              cp?.headers?.Authorization ||
              cp?.headers?.authorization ||
              cp?.Authorization ||
              cp?.authorization;
            
            // Tenta pegar o token do cookie HttpOnly caso não venha no header
            if (!authHeader && ctx.extra?.request?.headers?.cookie) {
              const parsedCookies = parseCookie(ctx.extra.request.headers.cookie);
              if (parsedCookies['auth-token']) {
                authHeader = `Bearer ${parsedCookies['auth-token']}`;
              }
            }

            if (authHeader && typeof authHeader === 'string') {
              const req = { headers: { authorization: authHeader } };
              const userCtx = await getUserIdFromRequest(req as any);
              return {
                userId: userCtx?.userId ?? '',
                userRoles: userCtx?.userRoles ?? [],
              };
            }
            return { userId: '', userRoles: [] };
          },
        },
      },
      context: async ({ req, res, extra }: { req?: any; res?: any; extra?: any }): Promise<ContextDto> => {
        // Contexto de WebSocket (subscription)
        if (extra !== undefined) {
          return {
            req: extra.request,
            res,
            userId: (extra).userId ?? '',
            userRoles: (extra).userRoles ?? [],
          };
        }
        // Contexto HTTP (query/mutation)
        // Ler cookie HttpOnly para autenticação se não vier no header
        if (req && !req.headers.authorization && req.headers.cookie) {
          const parsedCookies = parseCookie(req.headers.cookie);
          if (parsedCookies['auth-token']) {
            req.headers.authorization = `Bearer ${parsedCookies['auth-token']}`;
          }
        }
        
        const ctx = await getUserIdFromRequest(req);
        return {
          req,
          res,
          userId: ctx?.userId ?? '',
          userRoles: ctx?.userRoles ?? [],
        };
      },
    }),
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),
  ],
  controllers: [ActivityDocumentsController, SubsidyReceiptController],
  providers: [
    // Logging system
    LoggerService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: GqlThrottlerGuard,
    },
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
    // Application services
    ...Object.values(Services),
    ...Object.values(Resolvers),
    ...Object.values(Repositories),
    ...Object.values(CronServices),
    JwtStrategy,
    JwtAuthGuard,
  ],
})

export class AppModule {};
