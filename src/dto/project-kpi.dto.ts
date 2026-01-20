import { ObjectType, Field, Int, Float } from '@nestjs/graphql'

@ObjectType()
export class ProjectKPIsDto {
  // Activities KPIs
  @Field(() => Int)
  totalActivities: number

  @Field(() => Int)
  completedActivities: number

  @Field(() => Int)
  inProgressActivities: number

  @Field(() => Int)
  completionRate: number

  // Budget KPIs
  @Field(() => Float)
  projectBudget: number

  @Field(() => Float)
  allocatedBudget: number

  @Field(() => Float)
  subsidizedBudget: number

  @Field(() => Float)
  balance: number

  @Field(() => Int)
  subsidizedBudgetPercentage: number

  @Field(() => Int)
  budgetUtilization: number

  // Subsidy KPIs
  @Field(() => Int)
  subsidizedActivities: number

  @Field(() => Int)
  subsidyRate: number

  @Field(() => Float)
  totalSubsidyAmount: number

  @Field(() => Int)
  subsidyRequestsCount: number

  @Field(() => Int)
  approvedSubsidyRequestsCount: number

  // Timeline KPIs
  @Field(() => Int)
  daysRemaining: number

  @Field()
  endDate: Date

  @Field()
  projectStatus: string
}
