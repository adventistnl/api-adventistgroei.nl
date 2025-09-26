import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateWithoutRegionsInput } from './annual-budget-create-without-regions.input';

@InputType()
export class AnnualBudgetCreateOrConnectWithoutRegionsInput {

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:false})
    @Type(() => AnnualBudgetWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetCreateWithoutRegionsInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutRegionsInput)
    create!: AnnualBudgetCreateWithoutRegionsInput;
}
