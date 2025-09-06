import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunicationRecipientScalarWhereInput } from './communication-recipient-scalar-where.input';
import { Type } from 'class-transformer';
import { CommunicationRecipientUpdateManyMutationInput } from './communication-recipient-update-many-mutation.input';

@InputType()
export class CommunicationRecipientUpdateManyWithWhereWithoutCommunicationInput {

    @Field(() => CommunicationRecipientScalarWhereInput, {nullable:false})
    @Type(() => CommunicationRecipientScalarWhereInput)
    where!: CommunicationRecipientScalarWhereInput;

    @Field(() => CommunicationRecipientUpdateManyMutationInput, {nullable:false})
    @Type(() => CommunicationRecipientUpdateManyMutationInput)
    data!: CommunicationRecipientUpdateManyMutationInput;
}
