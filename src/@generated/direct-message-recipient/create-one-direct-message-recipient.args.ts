import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectMessageRecipientCreateInput } from './direct-message-recipient-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDirectMessageRecipientArgs {

    @Field(() => DirectMessageRecipientCreateInput, {nullable:false})
    @Type(() => DirectMessageRecipientCreateInput)
    data!: DirectMessageRecipientCreateInput;
}
