import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutAnnual_budgetInput } from './church-create-without-annual-budget.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutAnnual_budgetInput } from './church-create-or-connect-without-annual-budget.input';
import { ChurchCreateManyAnnual_budgetInputEnvelope } from './church-create-many-annual-budget-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';

@InputType()
export class ChurchCreateNestedManyWithoutAnnual_budgetInput {

    @Field(() => [ChurchCreateWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => ChurchCreateWithoutAnnual_budgetInput)
    create?: Array<ChurchCreateWithoutAnnual_budgetInput>;

    @Field(() => [ChurchCreateOrConnectWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutAnnual_budgetInput)
    connectOrCreate?: Array<ChurchCreateOrConnectWithoutAnnual_budgetInput>;

    @Field(() => ChurchCreateManyAnnual_budgetInputEnvelope, {nullable:true})
    @Type(() => ChurchCreateManyAnnual_budgetInputEnvelope)
    createMany?: ChurchCreateManyAnnual_budgetInputEnvelope;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>>;
}
