import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SubsidyRequestItemSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    requested_amount?: true;

    @Field(() => Boolean, {nullable:true})
    approved_amount?: true;
}
