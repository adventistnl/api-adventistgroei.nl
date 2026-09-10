import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MonthlyCloseResult {
  @Field()
  autoAccepted!: number;

  @Field()
  locked!: number;
}
