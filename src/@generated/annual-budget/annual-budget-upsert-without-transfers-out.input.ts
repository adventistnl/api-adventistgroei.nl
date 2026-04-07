import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetUpdateWithoutTransfers_outInput } from './annual-budget-update-without-transfers-out.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateWithoutTransfers_outInput } from './annual-budget-create-without-transfers-out.input';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';

@InputType()
export class AnnualBudgetUpsertWithoutTransfers_outInput {

    @Field(() => AnnualBudgetUpdateWithoutTransfers_outInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutTransfers_outInput)
    update!: AnnualBudgetUpdateWithoutTransfers_outInput;

    @Field(() => AnnualBudgetCreateWithoutTransfers_outInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutTransfers_outInput)
    create!: AnnualBudgetCreateWithoutTransfers_outInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    where?: AnnualBudgetWhereInput;
}
