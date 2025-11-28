import { Field, ObjectType, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class BudgetKPIs {
  @Field(() => Float)
  totalInstitutionBudget!: number;

  @Field(() => Float)
  totalAllocated!: number;

  @Field(() => Float)
  totalSpent!: number;

  @Field(() => Float)
  budgetRemaining!: number;

  @Field(() => Float)
  budgetUtilization!: number;

  @Field(() => Int, { description: 'Número de departments ativos (sempre 0 para budgets da instituição)' })
  activeDepartments!: number;
}

@ObjectType()
export class DepartmentSpending {
  @Field(() => String)
  name!: string;

  @Field(() => Float)
  planned!: number;

  @Field(() => Float)
  approved!: number;

  @Field(() => Float)
  reserved!: number;

  @Field(() => String)
  institution!: string;
}

@ObjectType()
export class DepartmentMonthlySpending {
  @Field(() => String)
  departmentId!: string;

  @Field(() => String)
  departmentName!: string;

  @Field(() => Float)
  amount!: number;
}

@ObjectType()
export class SpendingOverTime {
  @Field(() => String)
  date!: string;

  @Field(() => String)
  month!: string;

  @Field(() => [DepartmentMonthlySpending])
  departments!: DepartmentMonthlySpending[];
}

@ObjectType()
export class BudgetDistribution {
  @Field(() => Float)
  total!: number;

  @Field(() => Float)
  allocated!: number;

  @Field(() => Float)
  remaining!: number;

  @Field(() => Float)
  percentageUsed!: number;
}

@ObjectType()
export class EntityDistribution {
  @Field(() => String)
  name!: string;

  @Field(() => Float)
  amount!: number;

  @Field(() => Float)
  percentage!: number;

  @Field(() => Int)
  count!: number;
}

