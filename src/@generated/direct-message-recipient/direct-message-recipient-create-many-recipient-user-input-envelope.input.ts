import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageRecipientCreateManyRecipient_userInput } from './direct-message-recipient-create-many-recipient-user.input';
import { Type } from 'class-transformer';

@InputType()
export class DirectMessageRecipientCreateManyRecipient_userInputEnvelope {

    @Field(() => [DirectMessageRecipientCreateManyRecipient_userInput], {nullable:false})
    @Type(() => DirectMessageRecipientCreateManyRecipient_userInput)
    data!: Array<DirectMessageRecipientCreateManyRecipient_userInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
