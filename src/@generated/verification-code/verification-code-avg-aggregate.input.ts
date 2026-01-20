import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VerificationCodeAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    attempts?: true;
}
