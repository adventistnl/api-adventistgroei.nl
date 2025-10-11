import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutAnnual_budgetsInput } from './region-create-without-annual-budgets.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutAnnual_budgetsInput } from './region-create-or-connect-without-annual-budgets.input';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';

@InputType()
export class RegionCreateNestedOneWithoutAnnual_budgetsInput {

    @Field(() => RegionCreateWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => RegionCreateWithoutAnnual_budgetsInput)
    create?: RegionCreateWithoutAnnual_budgetsInput;

    @Field(() => RegionCreateOrConnectWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutAnnual_budgetsInput)
    connectOrCreate?: RegionCreateOrConnectWithoutAnnual_budgetsInput;

    @Field(() => RegionWhereUniqueInput, {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;
}
