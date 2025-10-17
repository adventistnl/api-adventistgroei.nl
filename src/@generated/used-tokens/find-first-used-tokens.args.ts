import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedTokensWhereInput } from './used-tokens-where.input';
import { Type } from 'class-transformer';
import { UsedTokensOrderByWithRelationInput } from './used-tokens-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UsedTokensWhereUniqueInput } from './used-tokens-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UsedTokensScalarFieldEnum } from './used-tokens-scalar-field.enum';

@ArgsType()
export class FindFirstUsedTokensArgs {

    @Field(() => UsedTokensWhereInput, {nullable:true})
    @Type(() => UsedTokensWhereInput)
    where?: UsedTokensWhereInput;

    @Field(() => [UsedTokensOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UsedTokensOrderByWithRelationInput>;

    @Field(() => UsedTokensWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UsedTokensWhereUniqueInput, 'id' | 'token'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UsedTokensScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UsedTokensScalarFieldEnum}`>;
}
