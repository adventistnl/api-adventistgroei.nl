import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageRecipientWhereInput } from './direct-message-recipient-where.input';

@InputType()
export class DirectMessageRecipientListRelationFilter {

    @Field(() => DirectMessageRecipientWhereInput, {nullable:true})
    every?: DirectMessageRecipientWhereInput;

    @Field(() => DirectMessageRecipientWhereInput, {nullable:true})
    some?: DirectMessageRecipientWhereInput;

    @Field(() => DirectMessageRecipientWhereInput, {nullable:true})
    none?: DirectMessageRecipientWhereInput;
}
