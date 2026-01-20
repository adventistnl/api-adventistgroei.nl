import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityDocumentsWhereInput } from './activity-documents-where.input';
import { Type } from 'class-transformer';
import { ActivityDocumentsOrderByWithRelationInput } from './activity-documents-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ActivityDocumentsWhereUniqueInput } from './activity-documents-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ActivityDocumentsCountAggregateInput } from './activity-documents-count-aggregate.input';
import { ActivityDocumentsMinAggregateInput } from './activity-documents-min-aggregate.input';
import { ActivityDocumentsMaxAggregateInput } from './activity-documents-max-aggregate.input';

@ArgsType()
export class ActivityDocumentsAggregateArgs {

    @Field(() => ActivityDocumentsWhereInput, {nullable:true})
    @Type(() => ActivityDocumentsWhereInput)
    where?: ActivityDocumentsWhereInput;

    @Field(() => [ActivityDocumentsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ActivityDocumentsOrderByWithRelationInput>;

    @Field(() => ActivityDocumentsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ActivityDocumentsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ActivityDocumentsCountAggregateInput, {nullable:true})
    _count?: ActivityDocumentsCountAggregateInput;

    @Field(() => ActivityDocumentsMinAggregateInput, {nullable:true})
    _min?: ActivityDocumentsMinAggregateInput;

    @Field(() => ActivityDocumentsMaxAggregateInput, {nullable:true})
    _max?: ActivityDocumentsMaxAggregateInput;
}
