import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DirectMessageWhereUniqueInput } from './direct-message-where-unique.input';
import { Type } from 'class-transformer';
import { DirectMessageCreateWithoutDirect_message_recipientsInput } from './direct-message-create-without-direct-message-recipients.input';

@InputType()
export class DirectMessageCreateOrConnectWithoutDirect_message_recipientsInput {

    @Field(() => DirectMessageWhereUniqueInput, {nullable:false})
    @Type(() => DirectMessageWhereUniqueInput)
    where!: Prisma.AtLeast<DirectMessageWhereUniqueInput, 'id'>;

    @Field(() => DirectMessageCreateWithoutDirect_message_recipientsInput, {nullable:false})
    @Type(() => DirectMessageCreateWithoutDirect_message_recipientsInput)
    create!: DirectMessageCreateWithoutDirect_message_recipientsInput;
}
