import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetUpdateWithoutChurchesInput } from './annual-budget-update-without-churches.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateWithoutChurchesInput } from './annual-budget-create-without-churches.input';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';

@InputType()
export class AnnualBudgetUpsertWithoutChurchesInput {

    @Field(() => AnnualBudgetUpdateWithoutChurchesInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutChurchesInput)
    update!: AnnualBudgetUpdateWithoutChurchesInput;

    @Field(() => AnnualBudgetCreateWithoutChurchesInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutChurchesInput)
    create!: AnnualBudgetCreateWithoutChurchesInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    where?: AnnualBudgetWhereInput;
}
