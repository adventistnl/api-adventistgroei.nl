import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateManyRegionInput } from './annual-budget-create-many-region.input';
import { Type } from 'class-transformer';

@InputType()
export class AnnualBudgetCreateManyRegionInputEnvelope {

    @Field(() => [AnnualBudgetCreateManyRegionInput], {nullable:false})
    @Type(() => AnnualBudgetCreateManyRegionInput)
    data!: Array<AnnualBudgetCreateManyRegionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
