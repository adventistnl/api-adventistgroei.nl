import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { Type } from 'class-transformer';
import { RegionCreateWithoutAnnual_budgetsInput } from './region-create-without-annual-budgets.input';

@InputType()
export class RegionCreateOrConnectWithoutAnnual_budgetsInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    @Type(() => RegionWhereUniqueInput)
    where!: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;

    @Field(() => RegionCreateWithoutAnnual_budgetsInput, {nullable:false})
    @Type(() => RegionCreateWithoutAnnual_budgetsInput)
    create!: RegionCreateWithoutAnnual_budgetsInput;
}
