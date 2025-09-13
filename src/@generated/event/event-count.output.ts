import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventCount {

    @Field(() => Int, {nullable:false})
    event_recipients?: number;

    @Field(() => Int, {nullable:false})
    event_registrations?: number;

    @Field(() => Int, {nullable:false})
    projects?: number;
}
