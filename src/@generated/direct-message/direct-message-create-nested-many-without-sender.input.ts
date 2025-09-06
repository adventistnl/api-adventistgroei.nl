import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageCreateWithoutSenderInput } from './direct-message-create-without-sender.input';
import { Type } from 'class-transformer';
import { DirectMessageCreateOrConnectWithoutSenderInput } from './direct-message-create-or-connect-without-sender.input';
import { DirectMessageCreateManySenderInputEnvelope } from './direct-message-create-many-sender-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DirectMessageWhereUniqueInput } from './direct-message-where-unique.input';

@InputType()
export class DirectMessageCreateNestedManyWithoutSenderInput {

    @Field(() => [DirectMessageCreateWithoutSenderInput], {nullable:true})
    @Type(() => DirectMessageCreateWithoutSenderInput)
    create?: Array<DirectMessageCreateWithoutSenderInput>;

    @Field(() => [DirectMessageCreateOrConnectWithoutSenderInput], {nullable:true})
    @Type(() => DirectMessageCreateOrConnectWithoutSenderInput)
    connectOrCreate?: Array<DirectMessageCreateOrConnectWithoutSenderInput>;

    @Field(() => DirectMessageCreateManySenderInputEnvelope, {nullable:true})
    @Type(() => DirectMessageCreateManySenderInputEnvelope)
    createMany?: DirectMessageCreateManySenderInputEnvelope;

    @Field(() => [DirectMessageWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DirectMessageWhereUniqueInput, 'id'>>;
}
