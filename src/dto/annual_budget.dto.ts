import { Field, Int, InputType } from "@nestjs/graphql";
import { Length } from "class-validator";

@InputType()
export class AnnualBudgetCreateDto {
  @Field(() => Int)
  @Length(4, 4)
  year!: number;

  @Field(() => Number)
  planned_budget!: number;

  @Field(() => Number)
  total_expenses!: number;

  @Field(() => Number)
  balance!: number;
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
}