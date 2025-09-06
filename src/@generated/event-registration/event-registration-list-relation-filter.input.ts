import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRegistrationWhereInput } from './event-registration-where.input';

@InputType()
export class EventRegistrationListRelationFilter {

    @Field(() => EventRegistrationWhereInput, {nullable:true})
    every?: EventRegistrationWhereInput;

    @Field(() => EventRegistrationWhereInput, {nullable:true})
    some?: EventRegistrationWhereInput;

    @Field(() => EventRegistrationWhereInput, {nullable:true})
    none?: EventRegistrationWhereInput;
}
