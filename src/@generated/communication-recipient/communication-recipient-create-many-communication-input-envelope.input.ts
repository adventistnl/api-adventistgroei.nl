import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunicationRecipientCreateManyCommunicationInput } from './communication-recipient-create-many-communication.input';
import { Type } from 'class-transformer';

@InputType()
export class CommunicationRecipientCreateManyCommunicationInputEnvelope {

    @Field(() => [CommunicationRecipientCreateManyCommunicationInput], {nullable:false})
    @Type(() => CommunicationRecipientCreateManyCommunicationInput)
    data!: Array<CommunicationRecipientCreateManyCommunicationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
