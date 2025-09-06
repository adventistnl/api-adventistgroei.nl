import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunicationRecipientWhereInput } from './communication-recipient-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyCommunicationRecipientArgs {

    @Field(() => CommunicationRecipientWhereInput, {nullable:true})
    @Type(() => CommunicationRecipientWhereInput)
    where?: CommunicationRecipientWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
