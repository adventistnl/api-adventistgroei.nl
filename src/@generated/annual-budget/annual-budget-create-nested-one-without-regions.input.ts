import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutRegionsInput } from './annual-budget-create-without-regions.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutRegionsInput } from './annual-budget-create-or-connect-without-regions.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';

@InputType()
export class AnnualBudgetCreateNestedOneWithoutRegionsInput {

    @Field(() => AnnualBudgetCreateWithoutRegionsInput, {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutRegionsInput)
    create?: AnnualBudgetCreateWithoutRegionsInput;

    @Field(() => AnnualBudgetCreateOrConnectWithoutRegionsInput, {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutRegionsInput)
    connectOrCreate?: AnnualBudgetCreateOrConnectWithoutRegionsInput;

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;
}
