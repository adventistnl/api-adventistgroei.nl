import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ContactCount {

    @Field(() => Int, {nullable:false})
    Church?: number;

    @Field(() => Int, {nullable:false})
    Department?: number;

    @Field(() => Int, {nullable:false})
    User?: number;

    @Field(() => Int, {nullable:false})
    Event?: number;
}
