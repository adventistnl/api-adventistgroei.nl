import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import * as Services from './services';
import * as Resolvers from './schemas';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      driver: ApolloDriver,
      playground: true,
      introspection: true,
      autoSchemaFile: true,
    }),
  ],
  providers: [...Object.values(Services), ...Object.values(Resolvers)],
})
export class AppModule {}
