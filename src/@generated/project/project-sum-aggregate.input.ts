import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProjectSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    budget?: true;

    @Field(() => Boolean, {nullable:true})
    subsidized_budget?: true;

    @Field(() => Boolean, {nullable:true})
    balance?: true;
}
