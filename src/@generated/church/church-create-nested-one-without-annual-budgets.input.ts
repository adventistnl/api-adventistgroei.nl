import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutAnnual_budgetsInput } from './church-create-without-annual-budgets.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutAnnual_budgetsInput } from './church-create-or-connect-without-annual-budgets.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';

@InputType()
export class ChurchCreateNestedOneWithoutAnnual_budgetsInput {

    @Field(() => ChurchCreateWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => ChurchCreateWithoutAnnual_budgetsInput)
    create?: ChurchCreateWithoutAnnual_budgetsInput;

    @Field(() => ChurchCreateOrConnectWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutAnnual_budgetsInput)
    connectOrCreate?: ChurchCreateOrConnectWithoutAnnual_budgetsInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>;
}
