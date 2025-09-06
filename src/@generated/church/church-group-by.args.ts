import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChurchWhereInput } from './church-where.input';
import { Type } from 'class-transformer';
import { ChurchOrderByWithAggregationInput } from './church-order-by-with-aggregation.input';
import { ChurchScalarFieldEnum } from './church-scalar-field.enum';
import { ChurchScalarWhereWithAggregatesInput } from './church-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ChurchCountAggregateInput } from './church-count-aggregate.input';
import { ChurchMinAggregateInput } from './church-min-aggregate.input';
import { ChurchMaxAggregateInput } from './church-max-aggregate.input';

@ArgsType()
export class ChurchGroupByArgs {

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;

    @Field(() => [ChurchOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ChurchOrderByWithAggregationInput>;

    @Field(() => [ChurchScalarFieldEnum], {nullable:false})
    by!: Array<`${ChurchScalarFieldEnum}`>;

    @Field(() => ChurchScalarWhereWithAggregatesInput, {nullable:true})
    having?: ChurchScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ChurchCountAggregateInput, {nullable:true})
    _count?: ChurchCountAggregateInput;

    @Field(() => ChurchMinAggregateInput, {nullable:true})
    _min?: ChurchMinAggregateInput;

    @Field(() => ChurchMaxAggregateInput, {nullable:true})
    _max?: ChurchMaxAggregateInput;
}
