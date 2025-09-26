import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutAnnual_budgetInput } from './church-create-without-annual-budget.input';

@InputType()
export class ChurchCreateOrConnectWithoutAnnual_budgetInput {

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>;

    @Field(() => ChurchCreateWithoutAnnual_budgetInput, {nullable:false})
    @Type(() => ChurchCreateWithoutAnnual_budgetInput)
    create!: ChurchCreateWithoutAnnual_budgetInput;
}
