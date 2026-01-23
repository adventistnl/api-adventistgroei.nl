import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ChurchSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    house_number?: true;
}
