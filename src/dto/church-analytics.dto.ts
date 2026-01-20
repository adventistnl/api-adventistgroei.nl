import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ChurchActivityTimeline {
  @Field()
  month: string;

  @Field()
  church_id: string;

  @Field()
  church_name: string;

  @Field(() => Int)
  activity_points: number;

  @Field(() => Int)
  user_points: number;

  @Field(() => Int)
  department_points: number;

  @Field(() => Int)
  project_points: number;

  @Field(() => Int)
  church_update_points: number;

  @Field(() => Int)
  total_points: number;
}
