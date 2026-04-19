import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { getUserIdFromRequest } from './middlewares/auth-context.helper';

import { JwtStrategy } from './middlewares';
import { JwtAuthGuard } from './middlewares/jwt-auth.guard';
import * as Services from './services';
import * as Resolvers from './graphql';
import * as Repositories from './repositories';
import * as CronServices from './cron/services';
import { ContextDto } from './dto/context.dto';
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
            const authHeader: string | undefined =
              cp?.headers?.Authorization ||
              cp?.headers?.authorization ||
              cp?.Authorization ||
              cp?.authorization;

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
      context: async ({ req, extra }: { req?: any; extra?: any }): Promise<ContextDto> => {
        // Contexto de WebSocket (subscription) — extra é SEMPRE definido pelo onConnect,
        // mesmo quando userId está vazio. Checar extra !== undefined evita o crash
        // causado por req ser undefined em conexões WS.
        if (extra !== undefined) {
          return {
            req,
            userId: (extra as any).userId ?? '',
            userRoles: (extra as any).userRoles ?? [],
          };
        }
        // Contexto HTTP (query/mutation) — req nunca é undefined aqui
        const ctx = await getUserIdFromRequest(req);
        return {
          req,
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
