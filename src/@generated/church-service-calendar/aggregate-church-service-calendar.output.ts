import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChurchServiceCalendarCountAggregate } from './church-service-calendar-count-aggregate.output';
import { ChurchServiceCalendarMinAggregate } from './church-service-calendar-min-aggregate.output';
import { ChurchServiceCalendarMaxAggregate } from './church-service-calendar-max-aggregate.output';

@ObjectType()
export class AggregateChurchServiceCalendar {

    @Field(() => ChurchServiceCalendarCountAggregate, {nullable:true})
    _count?: ChurchServiceCalendarCountAggregate;

    @Field(() => ChurchServiceCalendarMinAggregate, {nullable:true})
    _min?: ChurchServiceCalendarMinAggregate;

    @Field(() => ChurchServiceCalendarMaxAggregate, {nullable:true})
    _max?: ChurchServiceCalendarMaxAggregate;
}
