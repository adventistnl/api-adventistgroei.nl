import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageRecipientCreateManyDirect_messageInput } from './direct-message-recipient-create-many-direct-message.input';
import { Type } from 'class-transformer';

@InputType()
export class DirectMessageRecipientCreateManyDirect_messageInputEnvelope {

    @Field(() => [DirectMessageRecipientCreateManyDirect_messageInput], {nullable:false})
    @Type(() => DirectMessageRecipientCreateManyDirect_messageInput)
    data!: Array<DirectMessageRecipientCreateManyDirect_messageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
