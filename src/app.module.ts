import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { getUserIdFromRequest } from './middlewares/auth-context.helper';

import { JwtStrategy } from './middlewares';
import * as Services from './services';
import * as Resolvers from './graphql';
import * as Repositories from './repositories';
import * as CronServices from './cron/services';

const JWT_SECRET = process.env.JWT_SECRET;

@Module({
  imports: [
    ScheduleModule.forRoot(), // Habilita o suporte a cron jobs
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      introspection: true,
      autoSchemaFile: true,
      context: ({ req }: { req: { headers: Record<string, string> } }) => {
        const userId = getUserIdFromRequest(req);
        return { req, userId };
      },
    }),
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [
    ...Object.values(Services),
    ...Object.values(Resolvers),
    ...Object.values(Repositories),
    ...Object.values(CronServices),
    JwtStrategy,
  ],
})

export class AppModule {};
