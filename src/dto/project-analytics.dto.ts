import { ObjectType, Field, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class ProjectKPIs {
  @Field(() => Int)
  totalProjects: number;

  @Field(() => Int)
  activeProjects: number;

  @Field(() => Int)
  completedProjects: number;

  @Field(() => Int)
  upcomingProjects: number;

  @Field(() => Float)
  totalBudget: number;

  @Field(() => Float)
  totalSubsidizedBudget: number;

  @Field(() => Int)
  totalSubsidyRequests: number;

  @Field(() => Float)
  totalSubsidyAmount: number;

  @Field(() => Int)
  projectsWithVolunteers: number;

  @Field(() => Float)
  averageBudgetPerProject: number;
}

@ObjectType()
export class ProjectsByDepartment {
  @Field()
  department: string;

  @Field(() => Int)
  projects: number;

  @Field(() => Float)
  budget_used: number;

  @Field(() => Float)
  remaining_budget: number;

  @Field(() => Float, { nullable: true })
  annual_budget?: number;
}

@ObjectType()
export class SubsidyStatusDistribution {
  @Field()
  status: string;

  @Field(() => Int)
  count: number;

  @Field()
  color: string;
}

@ObjectType()
export class ProjectsTimeline {
  @Field()
  month: string;

  @Field(() => Int)
  created: number;

  @Field(() => Int)
  completed: number;

  @Field(() => Float)
  budget: number;
}
