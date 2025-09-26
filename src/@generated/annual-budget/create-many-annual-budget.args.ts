import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnualBudgetCreateManyInput } from './annual-budget-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAnnualBudgetArgs {

    @Field(() => [AnnualBudgetCreateManyInput], {nullable:false})
    @Type(() => AnnualBudgetCreateManyInput)
    data!: Array<AnnualBudgetCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
