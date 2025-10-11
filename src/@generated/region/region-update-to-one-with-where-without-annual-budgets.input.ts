import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionWhereInput } from './region-where.input';
import { Type } from 'class-transformer';
import { RegionUpdateWithoutAnnual_budgetsInput } from './region-update-without-annual-budgets.input';

@InputType()
export class RegionUpdateToOneWithWhereWithoutAnnual_budgetsInput {

    @Field(() => RegionWhereInput, {nullable:true})
    @Type(() => RegionWhereInput)
    where?: RegionWhereInput;

    @Field(() => RegionUpdateWithoutAnnual_budgetsInput, {nullable:false})
    @Type(() => RegionUpdateWithoutAnnual_budgetsInput)
    data!: RegionUpdateWithoutAnnual_budgetsInput;
}
