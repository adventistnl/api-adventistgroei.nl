import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventRegistrationWhereInput } from './event-registration-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyEventRegistrationArgs {

    @Field(() => EventRegistrationWhereInput, {nullable:true})
    @Type(() => EventRegistrationWhereInput)
    where?: EventRegistrationWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
