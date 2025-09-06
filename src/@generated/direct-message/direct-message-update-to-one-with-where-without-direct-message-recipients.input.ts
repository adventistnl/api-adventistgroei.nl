import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageWhereInput } from './direct-message-where.input';
import { Type } from 'class-transformer';
import { DirectMessageUpdateWithoutDirect_message_recipientsInput } from './direct-message-update-without-direct-message-recipients.input';

@InputType()
export class DirectMessageUpdateToOneWithWhereWithoutDirect_message_recipientsInput {

    @Field(() => DirectMessageWhereInput, {nullable:true})
    @Type(() => DirectMessageWhereInput)
    where?: DirectMessageWhereInput;

    @Field(() => DirectMessageUpdateWithoutDirect_message_recipientsInput, {nullable:false})
    @Type(() => DirectMessageUpdateWithoutDirect_message_recipientsInput)
    data!: DirectMessageUpdateWithoutDirect_message_recipientsInput;
}
