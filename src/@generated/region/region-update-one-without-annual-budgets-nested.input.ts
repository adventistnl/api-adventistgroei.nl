import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutAnnual_budgetsInput } from './region-create-without-annual-budgets.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutAnnual_budgetsInput } from './region-create-or-connect-without-annual-budgets.input';
import { RegionUpsertWithoutAnnual_budgetsInput } from './region-upsert-without-annual-budgets.input';
import { RegionWhereInput } from './region-where.input';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { RegionUpdateToOneWithWhereWithoutAnnual_budgetsInput } from './region-update-to-one-with-where-without-annual-budgets.input';

@InputType()
export class RegionUpdateOneWithoutAnnual_budgetsNestedInput {

    @Field(() => RegionCreateWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => RegionCreateWithoutAnnual_budgetsInput)
    create?: RegionCreateWithoutAnnual_budgetsInput;

    @Field(() => RegionCreateOrConnectWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutAnnual_budgetsInput)
    connectOrCreate?: RegionCreateOrConnectWithoutAnnual_budgetsInput;

    @Field(() => RegionUpsertWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => RegionUpsertWithoutAnnual_budgetsInput)
    upsert?: RegionUpsertWithoutAnnual_budgetsInput;

    @Field(() => RegionWhereInput, {nullable:true})
    @Type(() => RegionWhereInput)
    disconnect?: RegionWhereInput;

    @Field(() => RegionWhereInput, {nullable:true})
    @Type(() => RegionWhereInput)
    delete?: RegionWhereInput;

    @Field(() => RegionWhereUniqueInput, {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;

    @Field(() => RegionUpdateToOneWithWhereWithoutAnnual_budgetsInput, {nullable:true})
    @Type(() => RegionUpdateToOneWithWhereWithoutAnnual_budgetsInput)
    update?: RegionUpdateToOneWithWhereWithoutAnnual_budgetsInput;
}
