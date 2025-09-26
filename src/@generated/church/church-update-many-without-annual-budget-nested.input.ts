import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutAnnual_budgetInput } from './church-create-without-annual-budget.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutAnnual_budgetInput } from './church-create-or-connect-without-annual-budget.input';
import { ChurchUpsertWithWhereUniqueWithoutAnnual_budgetInput } from './church-upsert-with-where-unique-without-annual-budget.input';
import { ChurchCreateManyAnnual_budgetInputEnvelope } from './church-create-many-annual-budget-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { ChurchUpdateWithWhereUniqueWithoutAnnual_budgetInput } from './church-update-with-where-unique-without-annual-budget.input';
import { ChurchUpdateManyWithWhereWithoutAnnual_budgetInput } from './church-update-many-with-where-without-annual-budget.input';
import { ChurchScalarWhereInput } from './church-scalar-where.input';

@InputType()
export class ChurchUpdateManyWithoutAnnual_budgetNestedInput {

    @Field(() => [ChurchCreateWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => ChurchCreateWithoutAnnual_budgetInput)
    create?: Array<ChurchCreateWithoutAnnual_budgetInput>;

    @Field(() => [ChurchCreateOrConnectWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutAnnual_budgetInput)
    connectOrCreate?: Array<ChurchCreateOrConnectWithoutAnnual_budgetInput>;

    @Field(() => [ChurchUpsertWithWhereUniqueWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => ChurchUpsertWithWhereUniqueWithoutAnnual_budgetInput)
    upsert?: Array<ChurchUpsertWithWhereUniqueWithoutAnnual_budgetInput>;

    @Field(() => ChurchCreateManyAnnual_budgetInputEnvelope, {nullable:true})
    @Type(() => ChurchCreateManyAnnual_budgetInputEnvelope)
    createMany?: ChurchCreateManyAnnual_budgetInputEnvelope;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>>;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>>;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>>;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>>;

    @Field(() => [ChurchUpdateWithWhereUniqueWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => ChurchUpdateWithWhereUniqueWithoutAnnual_budgetInput)
    update?: Array<ChurchUpdateWithWhereUniqueWithoutAnnual_budgetInput>;

    @Field(() => [ChurchUpdateManyWithWhereWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => ChurchUpdateManyWithWhereWithoutAnnual_budgetInput)
    updateMany?: Array<ChurchUpdateManyWithWhereWithoutAnnual_budgetInput>;

    @Field(() => [ChurchScalarWhereInput], {nullable:true})
    @Type(() => ChurchScalarWhereInput)
    deleteMany?: Array<ChurchScalarWhereInput>;
}
