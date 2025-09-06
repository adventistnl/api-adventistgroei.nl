import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectMessageWhereInput } from './direct-message-where.input';
import { Type } from 'class-transformer';
import { DirectMessageOrderByWithRelationInput } from './direct-message-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DirectMessageWhereUniqueInput } from './direct-message-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DirectMessageCountAggregateInput } from './direct-message-count-aggregate.input';
import { DirectMessageMinAggregateInput } from './direct-message-min-aggregate.input';
import { DirectMessageMaxAggregateInput } from './direct-message-max-aggregate.input';

@ArgsType()
export class DirectMessageAggregateArgs {

    @Field(() => DirectMessageWhereInput, {nullable:true})
    @Type(() => DirectMessageWhereInput)
    where?: DirectMessageWhereInput;

    @Field(() => [DirectMessageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DirectMessageOrderByWithRelationInput>;

    @Field(() => DirectMessageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DirectMessageWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DirectMessageCountAggregateInput, {nullable:true})
    _count?: DirectMessageCountAggregateInput;

    @Field(() => DirectMessageMinAggregateInput, {nullable:true})
    _min?: DirectMessageMinAggregateInput;

    @Field(() => DirectMessageMaxAggregateInput, {nullable:true})
    _max?: DirectMessageMaxAggregateInput;
}
