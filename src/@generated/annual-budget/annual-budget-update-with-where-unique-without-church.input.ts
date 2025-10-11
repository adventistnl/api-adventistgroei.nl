import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualBudgetUpdateWithoutChurchInput } from './annual-budget-update-without-church.input';

@InputType()
export class AnnualBudgetUpdateWithWhereUniqueWithoutChurchInput {

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:false})
    @Type(() => AnnualBudgetWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetUpdateWithoutChurchInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutChurchInput)
    data!: AnnualBudgetUpdateWithoutChurchInput;
}
