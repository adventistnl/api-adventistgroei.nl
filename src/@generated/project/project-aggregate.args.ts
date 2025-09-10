import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectOrderByWithRelationInput } from './project-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectCountAggregateInput } from './project-count-aggregate.input';
import { ProjectAvgAggregateInput } from './project-avg-aggregate.input';
import { ProjectSumAggregateInput } from './project-sum-aggregate.input';
import { ProjectMinAggregateInput } from './project-min-aggregate.input';
import { ProjectMaxAggregateInput } from './project-max-aggregate.input';

@ArgsType()
export class ProjectAggregateArgs {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => [ProjectOrderByWithRelationInput], {nullable:true})
    @Type(() => ProjectOrderByWithRelationInput)
    orderBy?: Array<ProjectOrderByWithRelationInput>;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    cursor?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProjectCountAggregateInput, {nullable:true})
    @Type(() => ProjectCountAggregateInput)
    _count?: ProjectCountAggregateInput;

    @Field(() => ProjectAvgAggregateInput, {nullable:true})
    @Type(() => ProjectAvgAggregateInput)
    _avg?: ProjectAvgAggregateInput;

    @Field(() => ProjectSumAggregateInput, {nullable:true})
    @Type(() => ProjectSumAggregateInput)
    _sum?: ProjectSumAggregateInput;

    @Field(() => ProjectMinAggregateInput, {nullable:true})
    @Type(() => ProjectMinAggregateInput)
    _min?: ProjectMinAggregateInput;

    @Field(() => ProjectMaxAggregateInput, {nullable:true})
    @Type(() => ProjectMaxAggregateInput)
    _max?: ProjectMaxAggregateInput;
}
