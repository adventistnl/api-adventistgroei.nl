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

  @Field(() => Int)
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
export class SpendingOverTime {
  @Field(() => String)
  date!: string;

  @Field(() => String)
  month!: string;

  @Field(() => Float)
  finance!: number;

  @Field(() => Float)
  operations!: number;

  @Field(() => Float)
  hr!: number;

  @Field(() => Float)
  it!: number;

  @Field(() => Float)
  marketing!: number;
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

