import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissionProjectWhereInput } from './mission-project-where.input';
import { Type } from 'class-transformer';
import { MissionProjectOrderByWithAggregationInput } from './mission-project-order-by-with-aggregation.input';
import { MissionProjectScalarFieldEnum } from './mission-project-scalar-field.enum';
import { MissionProjectScalarWhereWithAggregatesInput } from './mission-project-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MissionProjectCountAggregateInput } from './mission-project-count-aggregate.input';
import { MissionProjectAvgAggregateInput } from './mission-project-avg-aggregate.input';
import { MissionProjectSumAggregateInput } from './mission-project-sum-aggregate.input';
import { MissionProjectMinAggregateInput } from './mission-project-min-aggregate.input';
import { MissionProjectMaxAggregateInput } from './mission-project-max-aggregate.input';

@ArgsType()
export class MissionProjectGroupByArgs {

    @Field(() => MissionProjectWhereInput, {nullable:true})
    @Type(() => MissionProjectWhereInput)
    where?: MissionProjectWhereInput;

    @Field(() => [MissionProjectOrderByWithAggregationInput], {nullable:true})
    @Type(() => MissionProjectOrderByWithAggregationInput)
    orderBy?: Array<MissionProjectOrderByWithAggregationInput>;

    @Field(() => [MissionProjectScalarFieldEnum], {nullable:false})
    by!: Array<`${MissionProjectScalarFieldEnum}`>;

    @Field(() => MissionProjectScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => MissionProjectScalarWhereWithAggregatesInput)
    having?: MissionProjectScalarWhereWithAggregatesInput;

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
