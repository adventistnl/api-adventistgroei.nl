import { Field, Int, InputType } from "@nestjs/graphql";
import { EntityType } from "@prisma/client";
import { Length } from "class-validator";

@InputType()
export class AnnualBudgetCreateDto {
  @Field(() => Int)
  @Length(4, 4)
  year: number;

  @Field(() => Number)
  planned_budget: number;

  @Field(() => String)
  entity_type: EntityType;
  
  @Field(() => String)
  entity_id: string;

  @Field(() => String)
  description: string;

  @Field(() => String, { nullable: true })
  justification?: string;
}

@InputType()
export class AnnualBudgetUpdateDto {
  @Field(() => Number, { nullable: true })
  planned_budget?: number;

  @Field(() => Number, { nullable: true })
  total_expenses?: number;

  @Field(() => Number, { nullable: true })
  balance?: number;

  @Field(() => Int, { nullable: true })
  @Length(4, 4)
  year?: number;

  @Field(() => String, { nullable: true })
  notes?: string;

  @Field(() => String, { nullable: true })
  description?: string;
  
  @Field(() => String, { nullable: true })
  justification?: string;
  
}