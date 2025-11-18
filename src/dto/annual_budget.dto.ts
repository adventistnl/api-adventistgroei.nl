import { Field, Float, Int, InputType } from "@nestjs/graphql";
import { AnnualBudgetCategory } from "src/@generated/prisma/annual-budget-category.enum";
import { AnnualBudgetEntityType } from "src/@generated/prisma/annual-budget-entity-type.enum";
import { AnnualBudgetPriority } from "src/@generated/prisma/annual-budget-priority.enum";

@InputType()
export class AnnualBudgetCreateDto {
  @Field(() => Int, {nullable:false})
  year!: number;

  @Field(() => Float, {nullable:false})
  planned_budget!: number;

  @Field(() => String, {nullable:false})
  description!: string;

  @Field(() => String, {nullable:true})
  justification?: string;

  @Field(() => Float, {nullable:false})
  requested_amount!: number;

  @Field(() => AnnualBudgetEntityType, {nullable:false})
  entity_type!: `${AnnualBudgetEntityType}`;

  @Field(() => AnnualBudgetPriority, {nullable:true})
  priority?: `${AnnualBudgetPriority}`;

  @Field(() => AnnualBudgetCategory, {nullable:true})
  category?: `${AnnualBudgetCategory}`;

  @Field(() => String, {nullable:true})
  notes?: string;

  @Field(() => String, { nullable: false })
  entity_id!: string;

  @Field(() => Float, {nullable:true})
  total_expenses?: number;
}

@InputType()
export class AnnualBudgetUpdateDto {
  @Field(() => Float, { nullable: true })
  planned_budget?: number;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  justification?: string;

  @Field(() => AnnualBudgetPriority, { nullable: true })
  priority?: `${AnnualBudgetPriority}`;

  @Field(() => AnnualBudgetCategory, { nullable: true })
  category?: `${AnnualBudgetCategory}`;

  @Field(() => String, { nullable: true })
  notes?: string;

  @Field(() => [String], { nullable: true })
  documents?: string[];

  @Field(() => Float, { nullable: true })
  total_expenses?: number;
}