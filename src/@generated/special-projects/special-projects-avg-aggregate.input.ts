import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SpecialProjectsAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    budget?: true;
}
