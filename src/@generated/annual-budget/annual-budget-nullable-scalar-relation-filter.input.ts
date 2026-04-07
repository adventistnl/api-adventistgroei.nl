import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Type } from 'class-transformer';

@InputType()
export class AnnualBudgetNullableScalarRelationFilter {

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    is?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    isNot?: AnnualBudgetWhereInput;
}
