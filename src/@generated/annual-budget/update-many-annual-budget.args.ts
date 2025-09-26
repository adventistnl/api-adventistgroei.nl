import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnualBudgetUpdateManyMutationInput } from './annual-budget-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyAnnualBudgetArgs {

    @Field(() => AnnualBudgetUpdateManyMutationInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateManyMutationInput)
    data!: AnnualBudgetUpdateManyMutationInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    where?: AnnualBudgetWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
