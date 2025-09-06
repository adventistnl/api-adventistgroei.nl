import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';

@InputType()
export class EventScalarRelationFilter {

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    is?: EventWhereInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    isNot?: EventWhereInput;
}
