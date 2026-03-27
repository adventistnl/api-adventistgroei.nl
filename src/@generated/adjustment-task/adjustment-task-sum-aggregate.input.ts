import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdjustmentTaskSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    position?: true;
}
