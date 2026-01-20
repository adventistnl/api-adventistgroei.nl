import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChurchWhereInput } from './church-where.input';
import { Type } from 'class-transformer';
import { ChurchOrderByWithRelationInput } from './church-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChurchCountAggregateInput } from './church-count-aggregate.input';
import { ChurchMinAggregateInput } from './church-min-aggregate.input';
import { ChurchMaxAggregateInput } from './church-max-aggregate.input';

@ArgsType()
export class ChurchAggregateArgs {

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;

    @Field(() => [ChurchOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChurchOrderByWithRelationInput>;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ChurchCountAggregateInput, {nullable:true})
    _count?: ChurchCountAggregateInput;

    @Field(() => ChurchMinAggregateInput, {nullable:true})
    _min?: ChurchMinAggregateInput;

    @Field(() => ChurchMaxAggregateInput, {nullable:true})
    _max?: ChurchMaxAggregateInput;
}
