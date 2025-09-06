import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageRecipientCreateManyRecipient_roleInput } from './direct-message-recipient-create-many-recipient-role.input';
import { Type } from 'class-transformer';

@InputType()
export class DirectMessageRecipientCreateManyRecipient_roleInputEnvelope {

    @Field(() => [DirectMessageRecipientCreateManyRecipient_roleInput], {nullable:false})
    @Type(() => DirectMessageRecipientCreateManyRecipient_roleInput)
    data!: Array<DirectMessageRecipientCreateManyRecipient_roleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
