import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UsedTokensWhereUniqueInput } from './used-tokens-where-unique.input';
import { Type } from 'class-transformer';
import { UsedTokensCreateInput } from './used-tokens-create.input';
import { UsedTokensUpdateInput } from './used-tokens-update.input';

@ArgsType()
export class UpsertOneUsedTokensArgs {

    @Field(() => UsedTokensWhereUniqueInput, {nullable:false})
    @Type(() => UsedTokensWhereUniqueInput)
    where!: Prisma.AtLeast<UsedTokensWhereUniqueInput, 'id' | 'token'>;

    @Field(() => UsedTokensCreateInput, {nullable:false})
    @Type(() => UsedTokensCreateInput)
    create!: UsedTokensCreateInput;

    @Field(() => UsedTokensUpdateInput, {nullable:false})
    @Type(() => UsedTokensUpdateInput)
    update!: UsedTokensUpdateInput;
}
