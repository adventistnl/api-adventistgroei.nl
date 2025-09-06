import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventRegistrationUpdateManyMutationInput } from './event-registration-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EventRegistrationWhereInput } from './event-registration-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyEventRegistrationArgs {

    @Field(() => EventRegistrationUpdateManyMutationInput, {nullable:false})
    @Type(() => EventRegistrationUpdateManyMutationInput)
    data!: EventRegistrationUpdateManyMutationInput;

    @Field(() => EventRegistrationWhereInput, {nullable:true})
    @Type(() => EventRegistrationWhereInput)
    where?: EventRegistrationWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
