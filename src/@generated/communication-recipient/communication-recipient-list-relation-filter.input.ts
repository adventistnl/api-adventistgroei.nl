import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunicationRecipientWhereInput } from './communication-recipient-where.input';

@InputType()
export class CommunicationRecipientListRelationFilter {

    @Field(() => CommunicationRecipientWhereInput, {nullable:true})
    every?: CommunicationRecipientWhereInput;

    @Field(() => CommunicationRecipientWhereInput, {nullable:true})
    some?: CommunicationRecipientWhereInput;

    @Field(() => CommunicationRecipientWhereInput, {nullable:true})
    none?: CommunicationRecipientWhereInput;
}
