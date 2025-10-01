import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpecialProjectsWhereInput } from './special-projects-where.input';
import { Type } from 'class-transformer';
import { SpecialProjectsOrderByWithAggregationInput } from './special-projects-order-by-with-aggregation.input';
import { SpecialProjectsScalarFieldEnum } from './special-projects-scalar-field.enum';
import { SpecialProjectsScalarWhereWithAggregatesInput } from './special-projects-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SpecialProjectsCountAggregateInput } from './special-projects-count-aggregate.input';
import { SpecialProjectsAvgAggregateInput } from './special-projects-avg-aggregate.input';
import { SpecialProjectsSumAggregateInput } from './special-projects-sum-aggregate.input';
import { SpecialProjectsMinAggregateInput } from './special-projects-min-aggregate.input';
import { SpecialProjectsMaxAggregateInput } from './special-projects-max-aggregate.input';

@ArgsType()
export class SpecialProjectsGroupByArgs {

    @Field(() => SpecialProjectsWhereInput, {nullable:true})
    @Type(() => SpecialProjectsWhereInput)
    where?: SpecialProjectsWhereInput;

    @Field(() => [SpecialProjectsOrderByWithAggregationInput], {nullable:true})
    @Type(() => SpecialProjectsOrderByWithAggregationInput)
    orderBy?: Array<SpecialProjectsOrderByWithAggregationInput>;

    @Field(() => [SpecialProjectsScalarFieldEnum], {nullable:false})
    by!: Array<`${SpecialProjectsScalarFieldEnum}`>;

    @Field(() => SpecialProjectsScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => SpecialProjectsScalarWhereWithAggregatesInput)
    having?: SpecialProjectsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SpecialProjectsCountAggregateInput, {nullable:true})
    @Type(() => SpecialProjectsCountAggregateInput)
    _count?: SpecialProjectsCountAggregateInput;

    @Field(() => SpecialProjectsAvgAggregateInput, {nullable:true})
    @Type(() => SpecialProjectsAvgAggregateInput)
    _avg?: SpecialProjectsAvgAggregateInput;

    @Field(() => SpecialProjectsSumAggregateInput, {nullable:true})
    @Type(() => SpecialProjectsSumAggregateInput)
    _sum?: SpecialProjectsSumAggregateInput;

    @Field(() => SpecialProjectsMinAggregateInput, {nullable:true})
    @Type(() => SpecialProjectsMinAggregateInput)
    _min?: SpecialProjectsMinAggregateInput;

    @Field(() => SpecialProjectsMaxAggregateInput, {nullable:true})
    @Type(() => SpecialProjectsMaxAggregateInput)
    _max?: SpecialProjectsMaxAggregateInput;
}
