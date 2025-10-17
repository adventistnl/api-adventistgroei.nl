import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UsedTokensWhereUniqueInput } from './used-tokens-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueUsedTokensArgs {

    @Field(() => UsedTokensWhereUniqueInput, {nullable:false})
    @Type(() => UsedTokensWhereUniqueInput)
    where!: Prisma.AtLeast<UsedTokensWhereUniqueInput, 'id' | 'token'>;
}
