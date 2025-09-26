import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { Type } from 'class-transformer';
import { RegionUpdateWithoutAnnual_budgetInput } from './region-update-without-annual-budget.input';

@InputType()
export class RegionUpdateWithWhereUniqueWithoutAnnual_budgetInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    @Type(() => RegionWhereUniqueInput)
    where!: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;

    @Field(() => RegionUpdateWithoutAnnual_budgetInput, {nullable:false})
    @Type(() => RegionUpdateWithoutAnnual_budgetInput)
    data!: RegionUpdateWithoutAnnual_budgetInput;
}
