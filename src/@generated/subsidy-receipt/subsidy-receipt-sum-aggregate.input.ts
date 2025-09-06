import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SubsidyReceiptSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    amount?: true;
}
