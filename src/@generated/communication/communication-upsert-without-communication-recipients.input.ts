import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunicationUpdateWithoutCommunication_recipientsInput } from './communication-update-without-communication-recipients.input';
import { Type } from 'class-transformer';
import { CommunicationCreateWithoutCommunication_recipientsInput } from './communication-create-without-communication-recipients.input';
import { CommunicationWhereInput } from './communication-where.input';

@InputType()
export class CommunicationUpsertWithoutCommunication_recipientsInput {

    @Field(() => CommunicationUpdateWithoutCommunication_recipientsInput, {nullable:false})
    @Type(() => CommunicationUpdateWithoutCommunication_recipientsInput)
    update!: CommunicationUpdateWithoutCommunication_recipientsInput;

    @Field(() => CommunicationCreateWithoutCommunication_recipientsInput, {nullable:false})
    @Type(() => CommunicationCreateWithoutCommunication_recipientsInput)
    create!: CommunicationCreateWithoutCommunication_recipientsInput;

    @Field(() => CommunicationWhereInput, {nullable:true})
    @Type(() => CommunicationWhereInput)
    where?: CommunicationWhereInput;
}
