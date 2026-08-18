import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentWhereInput } from './assignment-where.input';
import { Type } from 'class-transformer';
import { AssignmentOrderByWithRelationInput } from './assignment-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AssignmentWhereUniqueInput } from './assignment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AssignmentCountAggregateInput } from './assignment-count-aggregate.input';
import { AssignmentMinAggregateInput } from './assignment-min-aggregate.input';
import { AssignmentMaxAggregateInput } from './assignment-max-aggregate.input';

@ArgsType()
export class AssignmentAggregateArgs {

    @Field(() => AssignmentWhereInput, {nullable:true})
    @Type(() => AssignmentWhereInput)
    where?: AssignmentWhereInput;

    @Field(() => [AssignmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AssignmentOrderByWithRelationInput>;

    @Field(() => AssignmentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AssignmentCountAggregateInput, {nullable:true})
    _count?: AssignmentCountAggregateInput;

    @Field(() => AssignmentMinAggregateInput, {nullable:true})
    _min?: AssignmentMinAggregateInput;

    @Field(() => AssignmentMaxAggregateInput, {nullable:true})
    _max?: AssignmentMaxAggregateInput;
}
