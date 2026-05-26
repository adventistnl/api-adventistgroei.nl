import { ObjectType, Field, Float, ID } from '@nestjs/graphql';

@ObjectType()
export class ActivityBudgetSummary {
  @Field(() => ID)
  activity_id: string;

  @Field(() => String)
  activity_name: string;

  @Field(() => Float)
  budget: number;

  @Field(() => Float)
  allocated: number;

  @Field(() => Float)
  available: number;
}
