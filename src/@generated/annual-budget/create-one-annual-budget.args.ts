import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnualBudgetCreateInput } from './annual-budget-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAnnualBudgetArgs {

    @Field(() => AnnualBudgetCreateInput, {nullable:false})
    @Type(() => AnnualBudgetCreateInput)
    data!: AnnualBudgetCreateInput;
}
