import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstitutionPositionWhereInput } from './institution-position-where.input';
import { Type } from 'class-transformer';
import { InstitutionPositionOrderByWithAggregationInput } from './institution-position-order-by-with-aggregation.input';
import { InstitutionPositionScalarFieldEnum } from './institution-position-scalar-field.enum';
import { InstitutionPositionScalarWhereWithAggregatesInput } from './institution-position-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { InstitutionPositionCountAggregateInput } from './institution-position-count-aggregate.input';
import { InstitutionPositionMinAggregateInput } from './institution-position-min-aggregate.input';
import { InstitutionPositionMaxAggregateInput } from './institution-position-max-aggregate.input';

@ArgsType()
export class InstitutionPositionGroupByArgs {

    @Field(() => InstitutionPositionWhereInput, {nullable:true})
    @Type(() => InstitutionPositionWhereInput)
    where?: InstitutionPositionWhereInput;

    @Field(() => [InstitutionPositionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<InstitutionPositionOrderByWithAggregationInput>;

    @Field(() => [InstitutionPositionScalarFieldEnum], {nullable:false})
    by!: Array<`${InstitutionPositionScalarFieldEnum}`>;

    @Field(() => InstitutionPositionScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstitutionPositionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => InstitutionPositionCountAggregateInput, {nullable:true})
    _count?: InstitutionPositionCountAggregateInput;

    @Field(() => InstitutionPositionMinAggregateInput, {nullable:true})
    _min?: InstitutionPositionMinAggregateInput;

    @Field(() => InstitutionPositionMaxAggregateInput, {nullable:true})
    _max?: InstitutionPositionMaxAggregateInput;
}
