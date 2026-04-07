import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Type } from 'class-transformer';
import { AnnualBudgetUpdateWithoutTransfers_inInput } from './annual-budget-update-without-transfers-in.input';

@InputType()
export class AnnualBudgetUpdateToOneWithWhereWithoutTransfers_inInput {

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    where?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetUpdateWithoutTransfers_inInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutTransfers_inInput)
    data!: AnnualBudgetUpdateWithoutTransfers_inInput;
}
