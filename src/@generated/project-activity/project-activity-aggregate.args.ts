import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityWhereInput } from './project-activity-where.input';
import { Type } from 'class-transformer';
import { ProjectActivityOrderByWithRelationInput } from './project-activity-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectActivityCountAggregateInput } from './project-activity-count-aggregate.input';
import { ProjectActivityAvgAggregateInput } from './project-activity-avg-aggregate.input';
import { ProjectActivitySumAggregateInput } from './project-activity-sum-aggregate.input';
import { ProjectActivityMinAggregateInput } from './project-activity-min-aggregate.input';
import { ProjectActivityMaxAggregateInput } from './project-activity-max-aggregate.input';

@ArgsType()
export class ProjectActivityAggregateArgs {

    @Field(() => ProjectActivityWhereInput, {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    where?: ProjectActivityWhereInput;

    @Field(() => [ProjectActivityOrderByWithRelationInput], {nullable:true})
    @Type(() => ProjectActivityOrderByWithRelationInput)
    orderBy?: Array<ProjectActivityOrderByWithRelationInput>;

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    cursor?: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProjectActivityCountAggregateInput, {nullable:true})
    @Type(() => ProjectActivityCountAggregateInput)
    _count?: ProjectActivityCountAggregateInput;

    @Field(() => ProjectActivityAvgAggregateInput, {nullable:true})
    @Type(() => ProjectActivityAvgAggregateInput)
    _avg?: ProjectActivityAvgAggregateInput;

    @Field(() => ProjectActivitySumAggregateInput, {nullable:true})
    @Type(() => ProjectActivitySumAggregateInput)
    _sum?: ProjectActivitySumAggregateInput;

    @Field(() => ProjectActivityMinAggregateInput, {nullable:true})
    @Type(() => ProjectActivityMinAggregateInput)
    _min?: ProjectActivityMinAggregateInput;

    @Field(() => ProjectActivityMaxAggregateInput, {nullable:true})
    @Type(() => ProjectActivityMaxAggregateInput)
    _max?: ProjectActivityMaxAggregateInput;
}
