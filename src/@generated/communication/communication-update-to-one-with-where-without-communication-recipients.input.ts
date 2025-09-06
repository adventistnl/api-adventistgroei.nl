import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunicationWhereInput } from './communication-where.input';
import { Type } from 'class-transformer';
import { CommunicationUpdateWithoutCommunication_recipientsInput } from './communication-update-without-communication-recipients.input';

@InputType()
export class CommunicationUpdateToOneWithWhereWithoutCommunication_recipientsInput {

    @Field(() => CommunicationWhereInput, {nullable:true})
    @Type(() => CommunicationWhereInput)
    where?: CommunicationWhereInput;

    @Field(() => CommunicationUpdateWithoutCommunication_recipientsInput, {nullable:false})
    @Type(() => CommunicationUpdateWithoutCommunication_recipientsInput)
    data!: CommunicationUpdateWithoutCommunication_recipientsInput;
}
