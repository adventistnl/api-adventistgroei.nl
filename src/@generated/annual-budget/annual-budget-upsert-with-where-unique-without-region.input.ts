import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualBudgetUpdateWithoutRegionInput } from './annual-budget-update-without-region.input';
import { AnnualBudgetCreateWithoutRegionInput } from './annual-budget-create-without-region.input';

@InputType()
export class AnnualBudgetUpsertWithWhereUniqueWithoutRegionInput {

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:false})
    @Type(() => AnnualBudgetWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetUpdateWithoutRegionInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutRegionInput)
    update!: AnnualBudgetUpdateWithoutRegionInput;

    @Field(() => AnnualBudgetCreateWithoutRegionInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutRegionInput)
    create!: AnnualBudgetCreateWithoutRegionInput;
}
