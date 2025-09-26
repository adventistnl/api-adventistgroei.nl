import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { Type } from 'class-transformer';
import { RegionCreateWithoutAnnual_budgetInput } from './region-create-without-annual-budget.input';

@InputType()
export class RegionCreateOrConnectWithoutAnnual_budgetInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    @Type(() => RegionWhereUniqueInput)
    where!: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;

    @Field(() => RegionCreateWithoutAnnual_budgetInput, {nullable:false})
    @Type(() => RegionCreateWithoutAnnual_budgetInput)
    create!: RegionCreateWithoutAnnual_budgetInput;
}
