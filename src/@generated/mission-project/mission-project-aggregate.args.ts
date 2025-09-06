import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissionProjectWhereInput } from './mission-project-where.input';
import { Type } from 'class-transformer';
import { MissionProjectOrderByWithRelationInput } from './mission-project-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MissionProjectWhereUniqueInput } from './mission-project-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MissionProjectCountAggregateInput } from './mission-project-count-aggregate.input';
import { MissionProjectAvgAggregateInput } from './mission-project-avg-aggregate.input';
import { MissionProjectSumAggregateInput } from './mission-project-sum-aggregate.input';
import { MissionProjectMinAggregateInput } from './mission-project-min-aggregate.input';
import { MissionProjectMaxAggregateInput } from './mission-project-max-aggregate.input';

@ArgsType()
export class MissionProjectAggregateArgs {

    @Field(() => MissionProjectWhereInput, {nullable:true})
    @Type(() => MissionProjectWhereInput)
    where?: MissionProjectWhereInput;

    @Field(() => [MissionProjectOrderByWithRelationInput], {nullable:true})
    @Type(() => MissionProjectOrderByWithRelationInput)
    orderBy?: Array<MissionProjectOrderByWithRelationInput>;

    @Field(() => MissionProjectWhereUniqueInput, {nullable:true})
    @Type(() => MissionProjectWhereUniqueInput)
    cursor?: Prisma.AtLeast<MissionProjectWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MissionProjectCountAggregateInput, {nullable:true})
    @Type(() => MissionProjectCountAggregateInput)
    _count?: MissionProjectCountAggregateInput;

    @Field(() => MissionProjectAvgAggregateInput, {nullable:true})
    @Type(() => MissionProjectAvgAggregateInput)
    _avg?: MissionProjectAvgAggregateInput;

    @Field(() => MissionProjectSumAggregateInput, {nullable:true})
    @Type(() => MissionProjectSumAggregateInput)
    _sum?: MissionProjectSumAggregateInput;

    @Field(() => MissionProjectMinAggregateInput, {nullable:true})
    @Type(() => MissionProjectMinAggregateInput)
    _min?: MissionProjectMinAggregateInput;

    @Field(() => MissionProjectMaxAggregateInput, {nullable:true})
    @Type(() => MissionProjectMaxAggregateInput)
    _max?: MissionProjectMaxAggregateInput;
}
