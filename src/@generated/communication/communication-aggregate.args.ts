import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunicationWhereInput } from './communication-where.input';
import { Type } from 'class-transformer';
import { CommunicationOrderByWithRelationInput } from './communication-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CommunicationWhereUniqueInput } from './communication-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommunicationCountAggregateInput } from './communication-count-aggregate.input';
import { CommunicationMinAggregateInput } from './communication-min-aggregate.input';
import { CommunicationMaxAggregateInput } from './communication-max-aggregate.input';

@ArgsType()
export class CommunicationAggregateArgs {

    @Field(() => CommunicationWhereInput, {nullable:true})
    @Type(() => CommunicationWhereInput)
    where?: CommunicationWhereInput;

    @Field(() => [CommunicationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommunicationOrderByWithRelationInput>;

    @Field(() => CommunicationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommunicationWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CommunicationCountAggregateInput, {nullable:true})
    _count?: CommunicationCountAggregateInput;

    @Field(() => CommunicationMinAggregateInput, {nullable:true})
    _min?: CommunicationMinAggregateInput;

    @Field(() => CommunicationMaxAggregateInput, {nullable:true})
    _max?: CommunicationMaxAggregateInput;
}
