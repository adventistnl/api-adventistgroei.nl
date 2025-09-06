import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunicationRecipientUpdateManyMutationInput } from './communication-recipient-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CommunicationRecipientWhereInput } from './communication-recipient-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyCommunicationRecipientArgs {

    @Field(() => CommunicationRecipientUpdateManyMutationInput, {nullable:false})
    @Type(() => CommunicationRecipientUpdateManyMutationInput)
    data!: CommunicationRecipientUpdateManyMutationInput;

    @Field(() => CommunicationRecipientWhereInput, {nullable:true})
    @Type(() => CommunicationRecipientWhereInput)
    where?: CommunicationRecipientWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
