import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdjustmentTaskAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    position?: true;
}
