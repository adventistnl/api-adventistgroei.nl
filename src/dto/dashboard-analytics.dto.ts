import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class MonthlyUserRegistration {
  @Field()
  month: string;

  @Field(() => Int)
  count: number;
}

@ObjectType()
export class DashboardKPIs {
  // Users
  @Field(() => Int, { nullable: true })
  totalUsers?: number;

  @Field(() => Int, { nullable: true })
  newUsersThisYear?: number;

  @Field(() => Int, { nullable: true })
  previousYearUsers?: number;

  @Field(() => Float, { nullable: true })
  userGrowthRate?: number;

  // Projects
  @Field(() => Int, { nullable: true })
  totalProjects?: number;

  @Field(() => Int, { nullable: true })
  newProjectsThisYear?: number;

  @Field(() => Int, { nullable: true })
  previousYearProjects?: number;

  @Field(() => Float, { nullable: true })
  projectGrowthRate?: number;

  // Structure
  @Field(() => Int, { nullable: true })
  institutionDepartments?: number;

  @Field(() => Int, { nullable: true })
  churchDepartments?: number;

  @Field(() => Int, { nullable: true })
  totalDepartments?: number;

  @Field(() => Int, { nullable: true })
  activeChurches?: number;

  @Field(() => Int, { nullable: true })
  totalRegions?: number;
}
