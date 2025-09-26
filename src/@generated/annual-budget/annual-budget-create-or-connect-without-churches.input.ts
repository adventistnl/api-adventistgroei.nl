import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateWithoutChurchesInput } from './annual-budget-create-without-churches.input';

@InputType()
export class AnnualBudgetCreateOrConnectWithoutChurchesInput {

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:false})
    @Type(() => AnnualBudgetWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetCreateWithoutChurchesInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutChurchesInput)
    create!: AnnualBudgetCreateWithoutChurchesInput;
}
