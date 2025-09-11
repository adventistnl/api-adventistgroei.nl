import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VoluntariesOnProjectsWhereInput } from './voluntaries-on-projects-where.input';
import { Type } from 'class-transformer';
import { VoluntariesOnProjectsOrderByWithAggregationInput } from './voluntaries-on-projects-order-by-with-aggregation.input';
import { VoluntariesOnProjectsScalarFieldEnum } from './voluntaries-on-projects-scalar-field.enum';
import { VoluntariesOnProjectsScalarWhereWithAggregatesInput } from './voluntaries-on-projects-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { VoluntariesOnProjectsCountAggregateInput } from './voluntaries-on-projects-count-aggregate.input';
import { VoluntariesOnProjectsMinAggregateInput } from './voluntaries-on-projects-min-aggregate.input';
import { VoluntariesOnProjectsMaxAggregateInput } from './voluntaries-on-projects-max-aggregate.input';

@ArgsType()
export class VoluntariesOnProjectsGroupByArgs {

    @Field(() => VoluntariesOnProjectsWhereInput, {nullable:true})
    @Type(() => VoluntariesOnProjectsWhereInput)
    where?: VoluntariesOnProjectsWhereInput;

    @Field(() => [VoluntariesOnProjectsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VoluntariesOnProjectsOrderByWithAggregationInput>;

    @Field(() => [VoluntariesOnProjectsScalarFieldEnum], {nullable:false})
    by!: Array<`${VoluntariesOnProjectsScalarFieldEnum}`>;

    @Field(() => VoluntariesOnProjectsScalarWhereWithAggregatesInput, {nullable:true})
    having?: VoluntariesOnProjectsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VoluntariesOnProjectsCountAggregateInput, {nullable:true})
    _count?: VoluntariesOnProjectsCountAggregateInput;

    @Field(() => VoluntariesOnProjectsMinAggregateInput, {nullable:true})
    _min?: VoluntariesOnProjectsMinAggregateInput;

    @Field(() => VoluntariesOnProjectsMaxAggregateInput, {nullable:true})
    _max?: VoluntariesOnProjectsMaxAggregateInput;
}
