import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateManyAnnual_budgetInput } from './church-create-many-annual-budget.input';
import { Type } from 'class-transformer';

@InputType()
export class ChurchCreateManyAnnual_budgetInputEnvelope {

    @Field(() => [ChurchCreateManyAnnual_budgetInput], {nullable:false})
    @Type(() => ChurchCreateManyAnnual_budgetInput)
    data!: Array<ChurchCreateManyAnnual_budgetInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
