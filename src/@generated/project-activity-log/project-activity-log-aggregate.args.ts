import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityLogWhereInput } from './project-activity-log-where.input';
import { Type } from 'class-transformer';
import { ProjectActivityLogOrderByWithRelationInput } from './project-activity-log-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityLogWhereUniqueInput } from './project-activity-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectActivityLogCountAggregateInput } from './project-activity-log-count-aggregate.input';
import { ProjectActivityLogMinAggregateInput } from './project-activity-log-min-aggregate.input';
import { ProjectActivityLogMaxAggregateInput } from './project-activity-log-max-aggregate.input';

@ArgsType()
export class ProjectActivityLogAggregateArgs {

    @Field(() => ProjectActivityLogWhereInput, {nullable:true})
    @Type(() => ProjectActivityLogWhereInput)
    where?: ProjectActivityLogWhereInput;

    @Field(() => [ProjectActivityLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectActivityLogOrderByWithRelationInput>;

    @Field(() => ProjectActivityLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProjectActivityLogWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProjectActivityLogCountAggregateInput, {nullable:true})
    _count?: ProjectActivityLogCountAggregateInput;

    @Field(() => ProjectActivityLogMinAggregateInput, {nullable:true})
    _min?: ProjectActivityLogMinAggregateInput;

    @Field(() => ProjectActivityLogMaxAggregateInput, {nullable:true})
    _max?: ProjectActivityLogMaxAggregateInput;
}
