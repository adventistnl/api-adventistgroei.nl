import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetUpdateWithoutRegionsInput } from './annual-budget-update-without-regions.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateWithoutRegionsInput } from './annual-budget-create-without-regions.input';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';

@InputType()
export class AnnualBudgetUpsertWithoutRegionsInput {

    @Field(() => AnnualBudgetUpdateWithoutRegionsInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutRegionsInput)
    update!: AnnualBudgetUpdateWithoutRegionsInput;

    @Field(() => AnnualBudgetCreateWithoutRegionsInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutRegionsInput)
    create!: AnnualBudgetCreateWithoutRegionsInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    where?: AnnualBudgetWhereInput;
}
