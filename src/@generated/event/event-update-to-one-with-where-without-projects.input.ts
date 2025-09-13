import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutProjectsInput } from './event-update-without-projects.input';

@InputType()
export class EventUpdateToOneWithWhereWithoutProjectsInput {

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;

    @Field(() => EventUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => EventUpdateWithoutProjectsInput)
    data!: EventUpdateWithoutProjectsInput;
}
