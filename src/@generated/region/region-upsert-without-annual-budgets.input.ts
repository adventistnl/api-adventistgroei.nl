import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionUpdateWithoutAnnual_budgetsInput } from './region-update-without-annual-budgets.input';
import { Type } from 'class-transformer';
import { RegionCreateWithoutAnnual_budgetsInput } from './region-create-without-annual-budgets.input';
import { RegionWhereInput } from './region-where.input';

@InputType()
export class RegionUpsertWithoutAnnual_budgetsInput {

    @Field(() => RegionUpdateWithoutAnnual_budgetsInput, {nullable:false})
    @Type(() => RegionUpdateWithoutAnnual_budgetsInput)
    update!: RegionUpdateWithoutAnnual_budgetsInput;

    @Field(() => RegionCreateWithoutAnnual_budgetsInput, {nullable:false})
    @Type(() => RegionCreateWithoutAnnual_budgetsInput)
    create!: RegionCreateWithoutAnnual_budgetsInput;

    @Field(() => RegionWhereInput, {nullable:true})
    @Type(() => RegionWhereInput)
    where?: RegionWhereInput;
}
