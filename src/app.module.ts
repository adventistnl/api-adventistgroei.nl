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

const JWT_SECRET = process.env.JWT_SECRET;

@Module({
  imports: [
    ScheduleModule.forRoot(), // Habilita o suporte a cron jobs
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      introspection: true,
      autoSchemaFile: 'schema.gql',
      csrfPrevention: false, // Desabilitar CSRF para permitir file uploads
      context: async ({ req }: { req: { headers: Record<string, string> } }): Promise<ContextDto> => {
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
  controllers: [ActivityDocumentsController],
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
