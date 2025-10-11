import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutAnnual_budgetsInput } from './church-create-without-annual-budgets.input';

@InputType()
export class ChurchCreateOrConnectWithoutAnnual_budgetsInput {

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>;

    @Field(() => ChurchCreateWithoutAnnual_budgetsInput, {nullable:false})
    @Type(() => ChurchCreateWithoutAnnual_budgetsInput)
    create!: ChurchCreateWithoutAnnual_budgetsInput;
}
