import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Type } from 'class-transformer';

@InputType()
export class AnnualBudgetListRelationFilter {

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    every?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    some?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    none?: AnnualBudgetWhereInput;
}
