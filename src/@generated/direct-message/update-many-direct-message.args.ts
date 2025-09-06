import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectMessageUpdateManyMutationInput } from './direct-message-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DirectMessageWhereInput } from './direct-message-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyDirectMessageArgs {

    @Field(() => DirectMessageUpdateManyMutationInput, {nullable:false})
    @Type(() => DirectMessageUpdateManyMutationInput)
    data!: DirectMessageUpdateManyMutationInput;

    @Field(() => DirectMessageWhereInput, {nullable:true})
    @Type(() => DirectMessageWhereInput)
    where?: DirectMessageWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
