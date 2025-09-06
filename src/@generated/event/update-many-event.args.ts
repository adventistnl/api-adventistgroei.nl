import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventUpdateManyMutationInput } from './event-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EventWhereInput } from './event-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyEventArgs {

    @Field(() => EventUpdateManyMutationInput, {nullable:false})
    @Type(() => EventUpdateManyMutationInput)
    data!: EventUpdateManyMutationInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
