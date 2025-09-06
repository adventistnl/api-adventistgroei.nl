import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DirectMessageWhereUniqueInput } from './direct-message-where-unique.input';
import { Type } from 'class-transformer';
import { DirectMessageCreateWithoutSenderInput } from './direct-message-create-without-sender.input';

@InputType()
export class DirectMessageCreateOrConnectWithoutSenderInput {

    @Field(() => DirectMessageWhereUniqueInput, {nullable:false})
    @Type(() => DirectMessageWhereUniqueInput)
    where!: Prisma.AtLeast<DirectMessageWhereUniqueInput, 'id'>;

    @Field(() => DirectMessageCreateWithoutSenderInput, {nullable:false})
    @Type(() => DirectMessageCreateWithoutSenderInput)
    create!: DirectMessageCreateWithoutSenderInput;
}
