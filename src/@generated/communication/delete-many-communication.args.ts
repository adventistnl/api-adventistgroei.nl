import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunicationWhereInput } from './communication-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyCommunicationArgs {

    @Field(() => CommunicationWhereInput, {nullable:true})
    @Type(() => CommunicationWhereInput)
    where?: CommunicationWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
