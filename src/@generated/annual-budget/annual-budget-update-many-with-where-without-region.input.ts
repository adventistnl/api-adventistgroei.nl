import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetScalarWhereInput } from './annual-budget-scalar-where.input';
import { Type } from 'class-transformer';
import { AnnualBudgetUpdateManyMutationInput } from './annual-budget-update-many-mutation.input';

@InputType()
export class AnnualBudgetUpdateManyWithWhereWithoutRegionInput {

    @Field(() => AnnualBudgetScalarWhereInput, {nullable:false})
    @Type(() => AnnualBudgetScalarWhereInput)
    where!: AnnualBudgetScalarWhereInput;

    @Field(() => AnnualBudgetUpdateManyMutationInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateManyMutationInput)
    data!: AnnualBudgetUpdateManyMutationInput;
}
