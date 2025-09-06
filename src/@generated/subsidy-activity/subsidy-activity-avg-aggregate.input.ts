import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SubsidyActivityAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    budget_amount?: true;
}
