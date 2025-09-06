import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectMessageCreateInput } from './direct-message-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDirectMessageArgs {

    @Field(() => DirectMessageCreateInput, {nullable:false})
    @Type(() => DirectMessageCreateInput)
    data!: DirectMessageCreateInput;
}
