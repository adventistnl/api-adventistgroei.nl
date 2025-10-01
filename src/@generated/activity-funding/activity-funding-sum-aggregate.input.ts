import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ActivityFundingSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    contribution_amount?: true;

    @Field(() => Boolean, {nullable:true})
    contribution_percent?: true;
}
