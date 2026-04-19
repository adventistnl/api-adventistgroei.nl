import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetUpdateWithoutTransfers_inInput } from './annual-budget-update-without-transfers-in.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateWithoutTransfers_inInput } from './annual-budget-create-without-transfers-in.input';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';

@InputType()
export class AnnualBudgetUpsertWithoutTransfers_inInput {

    @Field(() => AnnualBudgetUpdateWithoutTransfers_inInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutTransfers_inInput)
    update!: AnnualBudgetUpdateWithoutTransfers_inInput;

    @Field(() => AnnualBudgetCreateWithoutTransfers_inInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutTransfers_inInput)
    create!: AnnualBudgetCreateWithoutTransfers_inInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    where?: AnnualBudgetWhereInput;
}
