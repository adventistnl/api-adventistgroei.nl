import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchUpdateWithoutAnnual_budgetInput } from './church-update-without-annual-budget.input';

@InputType()
export class ChurchUpdateWithWhereUniqueWithoutAnnual_budgetInput {

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>;

    @Field(() => ChurchUpdateWithoutAnnual_budgetInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutAnnual_budgetInput)
    data!: ChurchUpdateWithoutAnnual_budgetInput;
}
