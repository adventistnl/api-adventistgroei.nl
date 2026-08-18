import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreacherRegionAccessWhereInput } from './preacher-region-access-where.input';
import { Type } from 'class-transformer';
import { PreacherRegionAccessOrderByWithAggregationInput } from './preacher-region-access-order-by-with-aggregation.input';
import { PreacherRegionAccessScalarFieldEnum } from './preacher-region-access-scalar-field.enum';
import { PreacherRegionAccessScalarWhereWithAggregatesInput } from './preacher-region-access-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PreacherRegionAccessCountAggregateInput } from './preacher-region-access-count-aggregate.input';
import { PreacherRegionAccessMinAggregateInput } from './preacher-region-access-min-aggregate.input';
import { PreacherRegionAccessMaxAggregateInput } from './preacher-region-access-max-aggregate.input';

@ArgsType()
export class PreacherRegionAccessGroupByArgs {

    @Field(() => PreacherRegionAccessWhereInput, {nullable:true})
    @Type(() => PreacherRegionAccessWhereInput)
    where?: PreacherRegionAccessWhereInput;

    @Field(() => [PreacherRegionAccessOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PreacherRegionAccessOrderByWithAggregationInput>;

    @Field(() => [PreacherRegionAccessScalarFieldEnum], {nullable:false})
    by!: Array<`${PreacherRegionAccessScalarFieldEnum}`>;

    @Field(() => PreacherRegionAccessScalarWhereWithAggregatesInput, {nullable:true})
    having?: PreacherRegionAccessScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PreacherRegionAccessCountAggregateInput, {nullable:true})
    _count?: PreacherRegionAccessCountAggregateInput;

    @Field(() => PreacherRegionAccessMinAggregateInput, {nullable:true})
    _min?: PreacherRegionAccessMinAggregateInput;

    @Field(() => PreacherRegionAccessMaxAggregateInput, {nullable:true})
    _max?: PreacherRegionAccessMaxAggregateInput;
}
