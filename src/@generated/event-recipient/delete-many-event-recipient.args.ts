import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventRecipientWhereInput } from './event-recipient-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyEventRecipientArgs {

    @Field(() => EventRecipientWhereInput, {nullable:true})
    @Type(() => EventRecipientWhereInput)
    where?: EventRecipientWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
