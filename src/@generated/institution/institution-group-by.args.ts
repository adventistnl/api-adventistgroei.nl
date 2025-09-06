import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionOrderByWithAggregationInput } from './institution-order-by-with-aggregation.input';
import { InstitutionScalarFieldEnum } from './institution-scalar-field.enum';
import { InstitutionScalarWhereWithAggregatesInput } from './institution-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { InstitutionCountAggregateInput } from './institution-count-aggregate.input';
import { InstitutionMinAggregateInput } from './institution-min-aggregate.input';
import { InstitutionMaxAggregateInput } from './institution-max-aggregate.input';

@ArgsType()
export class InstitutionGroupByArgs {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => [InstitutionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<InstitutionOrderByWithAggregationInput>;

    @Field(() => [InstitutionScalarFieldEnum], {nullable:false})
    by!: Array<`${InstitutionScalarFieldEnum}`>;

    @Field(() => InstitutionScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstitutionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => InstitutionCountAggregateInput, {nullable:true})
    _count?: InstitutionCountAggregateInput;

    @Field(() => InstitutionMinAggregateInput, {nullable:true})
    _min?: InstitutionMinAggregateInput;

    @Field(() => InstitutionMaxAggregateInput, {nullable:true})
    _max?: InstitutionMaxAggregateInput;
}
