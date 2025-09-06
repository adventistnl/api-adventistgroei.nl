import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventRecipientUpdateManyMutationInput } from './event-recipient-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EventRecipientWhereInput } from './event-recipient-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyEventRecipientArgs {

    @Field(() => EventRecipientUpdateManyMutationInput, {nullable:false})
    @Type(() => EventRecipientUpdateManyMutationInput)
    data!: EventRecipientUpdateManyMutationInput;

    @Field(() => EventRecipientWhereInput, {nullable:true})
    @Type(() => EventRecipientWhereInput)
    where?: EventRecipientWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
