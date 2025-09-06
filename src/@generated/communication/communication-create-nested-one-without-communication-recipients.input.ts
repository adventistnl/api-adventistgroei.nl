import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunicationCreateWithoutCommunication_recipientsInput } from './communication-create-without-communication-recipients.input';
import { Type } from 'class-transformer';
import { CommunicationCreateOrConnectWithoutCommunication_recipientsInput } from './communication-create-or-connect-without-communication-recipients.input';
import { Prisma } from '@prisma/client';
import { CommunicationWhereUniqueInput } from './communication-where-unique.input';

@InputType()
export class CommunicationCreateNestedOneWithoutCommunication_recipientsInput {

    @Field(() => CommunicationCreateWithoutCommunication_recipientsInput, {nullable:true})
    @Type(() => CommunicationCreateWithoutCommunication_recipientsInput)
    create?: CommunicationCreateWithoutCommunication_recipientsInput;

    @Field(() => CommunicationCreateOrConnectWithoutCommunication_recipientsInput, {nullable:true})
    @Type(() => CommunicationCreateOrConnectWithoutCommunication_recipientsInput)
    connectOrCreate?: CommunicationCreateOrConnectWithoutCommunication_recipientsInput;

    @Field(() => CommunicationWhereUniqueInput, {nullable:true})
    @Type(() => CommunicationWhereUniqueInput)
    connect?: Prisma.AtLeast<CommunicationWhereUniqueInput, 'id'>;
}
