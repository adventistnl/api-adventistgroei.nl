import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DirectMessageWhereUniqueInput } from './direct-message-where-unique.input';
import { Type } from 'class-transformer';
import { DirectMessageCreateInput } from './direct-message-create.input';
import { DirectMessageUpdateInput } from './direct-message-update.input';

@ArgsType()
export class UpsertOneDirectMessageArgs {

    @Field(() => DirectMessageWhereUniqueInput, {nullable:false})
    @Type(() => DirectMessageWhereUniqueInput)
    where!: Prisma.AtLeast<DirectMessageWhereUniqueInput, 'id'>;

    @Field(() => DirectMessageCreateInput, {nullable:false})
    @Type(() => DirectMessageCreateInput)
    create!: DirectMessageCreateInput;

    @Field(() => DirectMessageUpdateInput, {nullable:false})
    @Type(() => DirectMessageUpdateInput)
    update!: DirectMessageUpdateInput;
}
