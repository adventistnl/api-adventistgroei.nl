import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateWithoutProjectsInput } from './event-update-without-projects.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutProjectsInput } from './event-create-without-projects.input';
import { EventWhereInput } from './event-where.input';

@InputType()
export class EventUpsertWithoutProjectsInput {

    @Field(() => EventUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => EventUpdateWithoutProjectsInput)
    update!: EventUpdateWithoutProjectsInput;

    @Field(() => EventCreateWithoutProjectsInput, {nullable:false})
    @Type(() => EventCreateWithoutProjectsInput)
    create!: EventCreateWithoutProjectsInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;
}
