import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VerificationCodeSumAggregate {

    @Field(() => Int, {nullable:true})
    attempts?: number;
}
