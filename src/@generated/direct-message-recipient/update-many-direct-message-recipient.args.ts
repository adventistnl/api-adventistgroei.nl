import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectMessageRecipientUpdateManyMutationInput } from './direct-message-recipient-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DirectMessageRecipientWhereInput } from './direct-message-recipient-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyDirectMessageRecipientArgs {

    @Field(() => DirectMessageRecipientUpdateManyMutationInput, {nullable:false})
    @Type(() => DirectMessageRecipientUpdateManyMutationInput)
    data!: DirectMessageRecipientUpdateManyMutationInput;

    @Field(() => DirectMessageRecipientWhereInput, {nullable:true})
    @Type(() => DirectMessageRecipientWhereInput)
    where?: DirectMessageRecipientWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
