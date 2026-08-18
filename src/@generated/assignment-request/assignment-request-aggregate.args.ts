import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentRequestWhereInput } from './assignment-request-where.input';
import { Type } from 'class-transformer';
import { AssignmentRequestOrderByWithRelationInput } from './assignment-request-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AssignmentRequestWhereUniqueInput } from './assignment-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AssignmentRequestCountAggregateInput } from './assignment-request-count-aggregate.input';
import { AssignmentRequestMinAggregateInput } from './assignment-request-min-aggregate.input';
import { AssignmentRequestMaxAggregateInput } from './assignment-request-max-aggregate.input';

@ArgsType()
export class AssignmentRequestAggregateArgs {

    @Field(() => AssignmentRequestWhereInput, {nullable:true})
    @Type(() => AssignmentRequestWhereInput)
    where?: AssignmentRequestWhereInput;

    @Field(() => [AssignmentRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AssignmentRequestOrderByWithRelationInput>;

    @Field(() => AssignmentRequestWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AssignmentRequestCountAggregateInput, {nullable:true})
    _count?: AssignmentRequestCountAggregateInput;

    @Field(() => AssignmentRequestMinAggregateInput, {nullable:true})
    _min?: AssignmentRequestMinAggregateInput;

    @Field(() => AssignmentRequestMaxAggregateInput, {nullable:true})
    _max?: AssignmentRequestMaxAggregateInput;
}
