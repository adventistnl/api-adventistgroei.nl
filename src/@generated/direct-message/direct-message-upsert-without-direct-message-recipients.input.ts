import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageUpdateWithoutDirect_message_recipientsInput } from './direct-message-update-without-direct-message-recipients.input';
import { Type } from 'class-transformer';
import { DirectMessageCreateWithoutDirect_message_recipientsInput } from './direct-message-create-without-direct-message-recipients.input';
import { DirectMessageWhereInput } from './direct-message-where.input';

@InputType()
export class DirectMessageUpsertWithoutDirect_message_recipientsInput {

    @Field(() => DirectMessageUpdateWithoutDirect_message_recipientsInput, {nullable:false})
    @Type(() => DirectMessageUpdateWithoutDirect_message_recipientsInput)
    update!: DirectMessageUpdateWithoutDirect_message_recipientsInput;

    @Field(() => DirectMessageCreateWithoutDirect_message_recipientsInput, {nullable:false})
    @Type(() => DirectMessageCreateWithoutDirect_message_recipientsInput)
    create!: DirectMessageCreateWithoutDirect_message_recipientsInput;

    @Field(() => DirectMessageWhereInput, {nullable:true})
    @Type(() => DirectMessageWhereInput)
    where?: DirectMessageWhereInput;
}
