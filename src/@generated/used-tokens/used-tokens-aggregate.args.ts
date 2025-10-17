import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedTokensWhereInput } from './used-tokens-where.input';
import { Type } from 'class-transformer';
import { UsedTokensOrderByWithRelationInput } from './used-tokens-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UsedTokensWhereUniqueInput } from './used-tokens-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UsedTokensCountAggregateInput } from './used-tokens-count-aggregate.input';
import { UsedTokensMinAggregateInput } from './used-tokens-min-aggregate.input';
import { UsedTokensMaxAggregateInput } from './used-tokens-max-aggregate.input';

@ArgsType()
export class UsedTokensAggregateArgs {

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

    @Field(() => UsedTokensCountAggregateInput, {nullable:true})
    _count?: UsedTokensCountAggregateInput;

    @Field(() => UsedTokensMinAggregateInput, {nullable:true})
    _min?: UsedTokensMinAggregateInput;

    @Field(() => UsedTokensMaxAggregateInput, {nullable:true})
    _max?: UsedTokensMaxAggregateInput;
}
