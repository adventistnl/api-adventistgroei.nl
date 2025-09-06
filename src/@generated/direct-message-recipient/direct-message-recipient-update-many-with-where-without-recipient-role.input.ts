import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageRecipientScalarWhereInput } from './direct-message-recipient-scalar-where.input';
import { Type } from 'class-transformer';
import { DirectMessageRecipientUpdateManyMutationInput } from './direct-message-recipient-update-many-mutation.input';

@InputType()
export class DirectMessageRecipientUpdateManyWithWhereWithoutRecipient_roleInput {

    @Field(() => DirectMessageRecipientScalarWhereInput, {nullable:false})
    @Type(() => DirectMessageRecipientScalarWhereInput)
    where!: DirectMessageRecipientScalarWhereInput;

    @Field(() => DirectMessageRecipientUpdateManyMutationInput, {nullable:false})
    @Type(() => DirectMessageRecipientUpdateManyMutationInput)
    data!: DirectMessageRecipientUpdateManyMutationInput;
}
