import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectMessageRecipientWhereInput } from './direct-message-recipient-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyDirectMessageRecipientArgs {

    @Field(() => DirectMessageRecipientWhereInput, {nullable:true})
    @Type(() => DirectMessageRecipientWhereInput)
    where?: DirectMessageRecipientWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
