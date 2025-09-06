import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';

@InputType()
export class EventListRelationFilter {

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    every?: EventWhereInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    some?: EventWhereInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    none?: EventWhereInput;
}
