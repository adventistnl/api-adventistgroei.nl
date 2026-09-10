import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChurchServiceCalendarWhereInput } from './church-service-calendar-where.input';
import { Type } from 'class-transformer';
import { ChurchServiceCalendarOrderByWithAggregationInput } from './church-service-calendar-order-by-with-aggregation.input';
import { ChurchServiceCalendarScalarFieldEnum } from './church-service-calendar-scalar-field.enum';
import { ChurchServiceCalendarScalarWhereWithAggregatesInput } from './church-service-calendar-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ChurchServiceCalendarCountAggregateInput } from './church-service-calendar-count-aggregate.input';
import { ChurchServiceCalendarMinAggregateInput } from './church-service-calendar-min-aggregate.input';
import { ChurchServiceCalendarMaxAggregateInput } from './church-service-calendar-max-aggregate.input';

@ArgsType()
export class ChurchServiceCalendarGroupByArgs {

    @Field(() => ChurchServiceCalendarWhereInput, {nullable:true})
    @Type(() => ChurchServiceCalendarWhereInput)
    where?: ChurchServiceCalendarWhereInput;

    @Field(() => [ChurchServiceCalendarOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ChurchServiceCalendarOrderByWithAggregationInput>;

    @Field(() => [ChurchServiceCalendarScalarFieldEnum], {nullable:false})
    by!: Array<`${ChurchServiceCalendarScalarFieldEnum}`>;

    @Field(() => ChurchServiceCalendarScalarWhereWithAggregatesInput, {nullable:true})
    having?: ChurchServiceCalendarScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ChurchServiceCalendarCountAggregateInput, {nullable:true})
    _count?: ChurchServiceCalendarCountAggregateInput;

    @Field(() => ChurchServiceCalendarMinAggregateInput, {nullable:true})
    _min?: ChurchServiceCalendarMinAggregateInput;

    @Field(() => ChurchServiceCalendarMaxAggregateInput, {nullable:true})
    _max?: ChurchServiceCalendarMaxAggregateInput;
}
