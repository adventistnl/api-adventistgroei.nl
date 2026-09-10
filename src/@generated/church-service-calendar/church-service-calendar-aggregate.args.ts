import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChurchServiceCalendarWhereInput } from './church-service-calendar-where.input';
import { Type } from 'class-transformer';
import { ChurchServiceCalendarOrderByWithRelationInput } from './church-service-calendar-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ChurchServiceCalendarWhereUniqueInput } from './church-service-calendar-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChurchServiceCalendarCountAggregateInput } from './church-service-calendar-count-aggregate.input';
import { ChurchServiceCalendarMinAggregateInput } from './church-service-calendar-min-aggregate.input';
import { ChurchServiceCalendarMaxAggregateInput } from './church-service-calendar-max-aggregate.input';

@ArgsType()
export class ChurchServiceCalendarAggregateArgs {

    @Field(() => ChurchServiceCalendarWhereInput, {nullable:true})
    @Type(() => ChurchServiceCalendarWhereInput)
    where?: ChurchServiceCalendarWhereInput;

    @Field(() => [ChurchServiceCalendarOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChurchServiceCalendarOrderByWithRelationInput>;

    @Field(() => ChurchServiceCalendarWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ChurchServiceCalendarWhereUniqueInput, 'id' | 'church_id_date'>;

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
