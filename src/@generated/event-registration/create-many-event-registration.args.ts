import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventRegistrationCreateManyInput } from './event-registration-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEventRegistrationArgs {

    @Field(() => [EventRegistrationCreateManyInput], {nullable:false})
    @Type(() => EventRegistrationCreateManyInput)
    data!: Array<EventRegistrationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
