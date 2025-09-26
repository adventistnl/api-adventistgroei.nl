import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Type } from 'class-transformer';
import { AnnualBudgetUpdateWithoutRegionsInput } from './annual-budget-update-without-regions.input';

@InputType()
export class AnnualBudgetUpdateToOneWithWhereWithoutRegionsInput {

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    where?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetUpdateWithoutRegionsInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutRegionsInput)
    data!: AnnualBudgetUpdateWithoutRegionsInput;
}
