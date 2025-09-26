import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutAnnual_budgetInput } from './region-create-without-annual-budget.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutAnnual_budgetInput } from './region-create-or-connect-without-annual-budget.input';
import { RegionUpsertWithWhereUniqueWithoutAnnual_budgetInput } from './region-upsert-with-where-unique-without-annual-budget.input';
import { RegionCreateManyAnnual_budgetInputEnvelope } from './region-create-many-annual-budget-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { RegionUpdateWithWhereUniqueWithoutAnnual_budgetInput } from './region-update-with-where-unique-without-annual-budget.input';
import { RegionUpdateManyWithWhereWithoutAnnual_budgetInput } from './region-update-many-with-where-without-annual-budget.input';
import { RegionScalarWhereInput } from './region-scalar-where.input';

@InputType()
export class RegionUncheckedUpdateManyWithoutAnnual_budgetNestedInput {

    @Field(() => [RegionCreateWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => RegionCreateWithoutAnnual_budgetInput)
    create?: Array<RegionCreateWithoutAnnual_budgetInput>;

    @Field(() => [RegionCreateOrConnectWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutAnnual_budgetInput)
    connectOrCreate?: Array<RegionCreateOrConnectWithoutAnnual_budgetInput>;

    @Field(() => [RegionUpsertWithWhereUniqueWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => RegionUpsertWithWhereUniqueWithoutAnnual_budgetInput)
    upsert?: Array<RegionUpsertWithWhereUniqueWithoutAnnual_budgetInput>;

    @Field(() => RegionCreateManyAnnual_budgetInputEnvelope, {nullable:true})
    @Type(() => RegionCreateManyAnnual_budgetInputEnvelope)
    createMany?: RegionCreateManyAnnual_budgetInputEnvelope;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RegionWhereUniqueInput, 'id'>>;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RegionWhereUniqueInput, 'id'>>;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RegionWhereUniqueInput, 'id'>>;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RegionWhereUniqueInput, 'id'>>;

    @Field(() => [RegionUpdateWithWhereUniqueWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => RegionUpdateWithWhereUniqueWithoutAnnual_budgetInput)
    update?: Array<RegionUpdateWithWhereUniqueWithoutAnnual_budgetInput>;

    @Field(() => [RegionUpdateManyWithWhereWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => RegionUpdateManyWithWhereWithoutAnnual_budgetInput)
    updateMany?: Array<RegionUpdateManyWithWhereWithoutAnnual_budgetInput>;

    @Field(() => [RegionScalarWhereInput], {nullable:true})
    @Type(() => RegionScalarWhereInput)
    deleteMany?: Array<RegionScalarWhereInput>;
}
