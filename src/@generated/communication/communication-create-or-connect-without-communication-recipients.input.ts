import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunicationWhereUniqueInput } from './communication-where-unique.input';
import { Type } from 'class-transformer';
import { CommunicationCreateWithoutCommunication_recipientsInput } from './communication-create-without-communication-recipients.input';

@InputType()
export class CommunicationCreateOrConnectWithoutCommunication_recipientsInput {

    @Field(() => CommunicationWhereUniqueInput, {nullable:false})
    @Type(() => CommunicationWhereUniqueInput)
    where!: Prisma.AtLeast<CommunicationWhereUniqueInput, 'id'>;

    @Field(() => CommunicationCreateWithoutCommunication_recipientsInput, {nullable:false})
    @Type(() => CommunicationCreateWithoutCommunication_recipientsInput)
    create!: CommunicationCreateWithoutCommunication_recipientsInput;
}
