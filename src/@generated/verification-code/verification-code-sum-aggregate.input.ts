import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VerificationCodeSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    attempts?: true;
}
