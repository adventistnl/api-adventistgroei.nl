import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Type } from 'class-transformer';
import { AnnualBudgetUpdateWithoutChurchesInput } from './annual-budget-update-without-churches.input';

@InputType()
export class AnnualBudgetUpdateToOneWithWhereWithoutChurchesInput {

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    where?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetUpdateWithoutChurchesInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutChurchesInput)
    data!: AnnualBudgetUpdateWithoutChurchesInput;
}
