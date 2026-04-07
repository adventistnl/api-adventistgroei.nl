import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Type } from 'class-transformer';
import { AnnualBudgetUpdateWithoutTransfers_outInput } from './annual-budget-update-without-transfers-out.input';

@InputType()
export class AnnualBudgetUpdateToOneWithWhereWithoutTransfers_outInput {

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    where?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetUpdateWithoutTransfers_outInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutTransfers_outInput)
    data!: AnnualBudgetUpdateWithoutTransfers_outInput;
}
