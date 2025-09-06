import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CommunicationCount {

    @Field(() => Int, {nullable:false})
    communication_recipients?: number;
}
