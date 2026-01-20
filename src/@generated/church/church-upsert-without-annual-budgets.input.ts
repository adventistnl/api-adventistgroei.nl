import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchUpdateWithoutAnnual_budgetsInput } from './church-update-without-annual-budgets.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutAnnual_budgetsInput } from './church-create-without-annual-budgets.input';
import { ChurchWhereInput } from './church-where.input';

@InputType()
export class ChurchUpsertWithoutAnnual_budgetsInput {

    @Field(() => ChurchUpdateWithoutAnnual_budgetsInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutAnnual_budgetsInput)
    update!: ChurchUpdateWithoutAnnual_budgetsInput;

    @Field(() => ChurchCreateWithoutAnnual_budgetsInput, {nullable:false})
    @Type(() => ChurchCreateWithoutAnnual_budgetsInput)
    create!: ChurchCreateWithoutAnnual_budgetsInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;
}
