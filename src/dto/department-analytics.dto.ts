import { ObjectType, Field, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class DepartmentKPIs {
  @Field(() => Int)
  totalDepartments: number;

  @Field(() => Int)
  activeDepartments: number;

  @Field(() => Int)
  departmentsWithBudget: number;

  @Field(() => Int)
  totalUsers: number;

  @Field(() => Float)
  totalAllocatedBudget: number;

  @Field(() => Float)
  totalSpentBudget: number;

  @Field(() => Float)
  averageBudgetPerDepartment: number;

  @Field(() => Float)
  averageUsersPerDepartment: number;

  @Field(() => Int)
  totalProjects: number;

  @Field(() => Int)
  openProjects: number;

  @Field(() => Int)
  completedProjects: number;
}

@ObjectType()
export class DepartmentActivityData {
  @Field()
  department_id: string;

  @Field()
  department_name: string;

  @Field(() => Int)
  user_count: number;

  @Field(() => Float)
  allocated_amount: number;

  @Field(() => Float)
  spent_amount: number;

  @Field(() => Int)
  project_count: number;

  @Field(() => Int)
  open_projects: number;

  @Field(() => Int)
  completed_projects: number;

  @Field(() => Int)
  activity_count: number;
}

@ObjectType()
export class DepartmentBudgetTimeline {
  @Field()
  month: string;

  @Field()
  department_id: string;

  @Field()
  department_name: string;

  @Field(() => Float)
  allocated: number;

  @Field(() => Float)
  spent: number;
}
