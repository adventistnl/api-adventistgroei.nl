import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DirectMessageCount {

    @Field(() => Int, {nullable:false})
    direct_message_recipients?: number;
}
