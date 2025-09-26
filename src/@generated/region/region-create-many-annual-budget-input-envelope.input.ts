import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateManyAnnual_budgetInput } from './region-create-many-annual-budget.input';
import { Type } from 'class-transformer';

@InputType()
export class RegionCreateManyAnnual_budgetInputEnvelope {

    @Field(() => [RegionCreateManyAnnual_budgetInput], {nullable:false})
    @Type(() => RegionCreateManyAnnual_budgetInput)
    data!: Array<RegionCreateManyAnnual_budgetInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
