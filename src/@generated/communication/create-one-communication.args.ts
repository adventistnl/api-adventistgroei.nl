import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunicationCreateInput } from './communication-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCommunicationArgs {

    @Field(() => CommunicationCreateInput, {nullable:false})
    @Type(() => CommunicationCreateInput)
    data!: CommunicationCreateInput;
}
