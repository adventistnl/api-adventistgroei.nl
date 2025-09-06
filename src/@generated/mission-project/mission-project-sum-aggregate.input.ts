import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MissionProjectSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    budget?: true;
}
