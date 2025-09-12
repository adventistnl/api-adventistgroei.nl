import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProjectActivityAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    budget_amount?: true;
}
