import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateWithoutChurchInput } from './annual-budget-create-without-church.input';

@InputType()
export class AnnualBudgetCreateOrConnectWithoutChurchInput {

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:false})
    @Type(() => AnnualBudgetWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetCreateWithoutChurchInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutChurchInput)
    create!: AnnualBudgetCreateWithoutChurchInput;
}
