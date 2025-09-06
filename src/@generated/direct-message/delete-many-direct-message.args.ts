import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectMessageWhereInput } from './direct-message-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyDirectMessageArgs {

    @Field(() => DirectMessageWhereInput, {nullable:true})
    @Type(() => DirectMessageWhereInput)
    where?: DirectMessageWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
