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
  @Field(() => Int)
  totalUsers: number;

  @Field(() => Int)
  newUsersThisYear: number;

  @Field(() => Int)
  previousYearUsers: number;

  @Field(() => Float)
  userGrowthRate: number;

  // Projects
  @Field(() => Int)
  totalProjects: number;

  @Field(() => Int)
  newProjectsThisYear: number;

  @Field(() => Int)
  previousYearProjects: number;

  @Field(() => Float)
  projectGrowthRate: number;

  // Structure
  @Field(() => Int)
  institutionDepartments: number;

  @Field(() => Int)
  churchDepartments: number;

  @Field(() => Int)
  totalDepartments: number;

  @Field(() => Int)
  activeChurches: number;

  @Field(() => Int)
  totalRegions: number;
}
