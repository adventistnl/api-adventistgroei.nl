import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunicationRecipientCreateInput } from './communication-recipient-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCommunicationRecipientArgs {

    @Field(() => CommunicationRecipientCreateInput, {nullable:false})
    @Type(() => CommunicationRecipientCreateInput)
    data!: CommunicationRecipientCreateInput;
}
