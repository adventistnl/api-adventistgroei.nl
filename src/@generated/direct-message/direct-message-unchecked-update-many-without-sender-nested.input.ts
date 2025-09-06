import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageCreateWithoutSenderInput } from './direct-message-create-without-sender.input';
import { Type } from 'class-transformer';
import { DirectMessageCreateOrConnectWithoutSenderInput } from './direct-message-create-or-connect-without-sender.input';
import { DirectMessageUpsertWithWhereUniqueWithoutSenderInput } from './direct-message-upsert-with-where-unique-without-sender.input';
import { DirectMessageCreateManySenderInputEnvelope } from './direct-message-create-many-sender-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DirectMessageWhereUniqueInput } from './direct-message-where-unique.input';
import { DirectMessageUpdateWithWhereUniqueWithoutSenderInput } from './direct-message-update-with-where-unique-without-sender.input';
import { DirectMessageUpdateManyWithWhereWithoutSenderInput } from './direct-message-update-many-with-where-without-sender.input';
import { DirectMessageScalarWhereInput } from './direct-message-scalar-where.input';

@InputType()
export class DirectMessageUncheckedUpdateManyWithoutSenderNestedInput {

    @Field(() => [DirectMessageCreateWithoutSenderInput], {nullable:true})
    @Type(() => DirectMessageCreateWithoutSenderInput)
    create?: Array<DirectMessageCreateWithoutSenderInput>;

    @Field(() => [DirectMessageCreateOrConnectWithoutSenderInput], {nullable:true})
    @Type(() => DirectMessageCreateOrConnectWithoutSenderInput)
    connectOrCreate?: Array<DirectMessageCreateOrConnectWithoutSenderInput>;

    @Field(() => [DirectMessageUpsertWithWhereUniqueWithoutSenderInput], {nullable:true})
    @Type(() => DirectMessageUpsertWithWhereUniqueWithoutSenderInput)
    upsert?: Array<DirectMessageUpsertWithWhereUniqueWithoutSenderInput>;

    @Field(() => DirectMessageCreateManySenderInputEnvelope, {nullable:true})
    @Type(() => DirectMessageCreateManySenderInputEnvelope)
    createMany?: DirectMessageCreateManySenderInputEnvelope;

    @Field(() => [DirectMessageWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DirectMessageWhereUniqueInput, 'id'>>;

    @Field(() => [DirectMessageWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DirectMessageWhereUniqueInput, 'id'>>;

    @Field(() => [DirectMessageWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DirectMessageWhereUniqueInput, 'id'>>;

    @Field(() => [DirectMessageWhereUniqueInput], {nullable:true})
    @Type(() => DirectMessageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DirectMessageWhereUniqueInput, 'id'>>;

    @Field(() => [DirectMessageUpdateWithWhereUniqueWithoutSenderInput], {nullable:true})
    @Type(() => DirectMessageUpdateWithWhereUniqueWithoutSenderInput)
    update?: Array<DirectMessageUpdateWithWhereUniqueWithoutSenderInput>;

    @Field(() => [DirectMessageUpdateManyWithWhereWithoutSenderInput], {nullable:true})
    @Type(() => DirectMessageUpdateManyWithWhereWithoutSenderInput)
    updateMany?: Array<DirectMessageUpdateManyWithWhereWithoutSenderInput>;

    @Field(() => [DirectMessageScalarWhereInput], {nullable:true})
    @Type(() => DirectMessageScalarWhereInput)
    deleteMany?: Array<DirectMessageScalarWhereInput>;
}
