import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedTokensUpdateInput } from './used-tokens-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UsedTokensWhereUniqueInput } from './used-tokens-where-unique.input';

@ArgsType()
export class UpdateOneUsedTokensArgs {

    @Field(() => UsedTokensUpdateInput, {nullable:false})
    @Type(() => UsedTokensUpdateInput)
    data!: UsedTokensUpdateInput;

    @Field(() => UsedTokensWhereUniqueInput, {nullable:false})
    @Type(() => UsedTokensWhereUniqueInput)
    where!: Prisma.AtLeast<UsedTokensWhereUniqueInput, 'id' | 'token'>;
}
