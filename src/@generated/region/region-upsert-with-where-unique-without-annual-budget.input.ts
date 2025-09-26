import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { Type } from 'class-transformer';
import { RegionUpdateWithoutAnnual_budgetInput } from './region-update-without-annual-budget.input';
import { RegionCreateWithoutAnnual_budgetInput } from './region-create-without-annual-budget.input';

@InputType()
export class RegionUpsertWithWhereUniqueWithoutAnnual_budgetInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    @Type(() => RegionWhereUniqueInput)
    where!: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;

    @Field(() => RegionUpdateWithoutAnnual_budgetInput, {nullable:false})
    @Type(() => RegionUpdateWithoutAnnual_budgetInput)
    update!: RegionUpdateWithoutAnnual_budgetInput;

    @Field(() => RegionCreateWithoutAnnual_budgetInput, {nullable:false})
    @Type(() => RegionCreateWithoutAnnual_budgetInput)
    create!: RegionCreateWithoutAnnual_budgetInput;
}
