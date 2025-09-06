import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectMessageUpdateInput } from './direct-message-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DirectMessageWhereUniqueInput } from './direct-message-where-unique.input';

@ArgsType()
export class UpdateOneDirectMessageArgs {

    @Field(() => DirectMessageUpdateInput, {nullable:false})
    @Type(() => DirectMessageUpdateInput)
    data!: DirectMessageUpdateInput;

    @Field(() => DirectMessageWhereUniqueInput, {nullable:false})
    @Type(() => DirectMessageWhereUniqueInput)
    where!: Prisma.AtLeast<DirectMessageWhereUniqueInput, 'id'>;
}
