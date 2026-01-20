import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutAnnual_budgetsInput } from './church-create-without-annual-budgets.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutAnnual_budgetsInput } from './church-create-or-connect-without-annual-budgets.input';
import { ChurchUpsertWithoutAnnual_budgetsInput } from './church-upsert-without-annual-budgets.input';
import { ChurchWhereInput } from './church-where.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { ChurchUpdateToOneWithWhereWithoutAnnual_budgetsInput } from './church-update-to-one-with-where-without-annual-budgets.input';

@InputType()
export class ChurchUpdateOneWithoutAnnual_budgetsNestedInput {

    @Field(() => ChurchCreateWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => ChurchCreateWithoutAnnual_budgetsInput)
    create?: ChurchCreateWithoutAnnual_budgetsInput;

    @Field(() => ChurchCreateOrConnectWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutAnnual_budgetsInput)
    connectOrCreate?: ChurchCreateOrConnectWithoutAnnual_budgetsInput;

    @Field(() => ChurchUpsertWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => ChurchUpsertWithoutAnnual_budgetsInput)
    upsert?: ChurchUpsertWithoutAnnual_budgetsInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    disconnect?: ChurchWhereInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    delete?: ChurchWhereInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;

    @Field(() => ChurchUpdateToOneWithWhereWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => ChurchUpdateToOneWithWhereWithoutAnnual_budgetsInput)
    update?: ChurchUpdateToOneWithWhereWithoutAnnual_budgetsInput;
}
