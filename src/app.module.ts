import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import * as Services from './services';
import * as Resolvers from './graphql';
import * as Repositories from './repositories';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      introspection: true,
      autoSchemaFile: true,
      context: ({ req }: { req: { headers: Record<string, string> } }) => ({
        req,
        userId: req.headers['x-user-id'],
      }),
    }),
  ],
  providers: [
    ...Object.values(Services),
    ...Object.values(Resolvers),
    ...Object.values(Repositories),
  ],
})
export class AppModule {}
