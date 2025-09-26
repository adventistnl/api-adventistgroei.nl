import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutAnnual_budgetInput } from './region-create-without-annual-budget.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutAnnual_budgetInput } from './region-create-or-connect-without-annual-budget.input';
import { RegionCreateManyAnnual_budgetInputEnvelope } from './region-create-many-annual-budget-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';

@InputType()
export class RegionCreateNestedManyWithoutAnnual_budgetInput {

    @Field(() => [RegionCreateWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => RegionCreateWithoutAnnual_budgetInput)
    create?: Array<RegionCreateWithoutAnnual_budgetInput>;

    @Field(() => [RegionCreateOrConnectWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutAnnual_budgetInput)
    connectOrCreate?: Array<RegionCreateOrConnectWithoutAnnual_budgetInput>;

    @Field(() => RegionCreateManyAnnual_budgetInputEnvelope, {nullable:true})
    @Type(() => RegionCreateManyAnnual_budgetInputEnvelope)
    createMany?: RegionCreateManyAnnual_budgetInputEnvelope;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RegionWhereUniqueInput, 'id'>>;
}
