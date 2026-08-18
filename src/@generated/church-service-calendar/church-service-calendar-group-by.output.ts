import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ServiceCalendarSource } from '../prisma/service-calendar-source.enum';
import { ChurchServiceCalendarCountAggregate } from './church-service-calendar-count-aggregate.output';
import { ChurchServiceCalendarMinAggregate } from './church-service-calendar-min-aggregate.output';
import { ChurchServiceCalendarMaxAggregate } from './church-service-calendar-max-aggregate.output';

@ObjectType()
export class ChurchServiceCalendarGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    church_id!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Boolean, {nullable:false})
    has_service!: boolean;

    @Field(() => ServiceCalendarSource, {nullable:false})
    source!: `${ServiceCalendarSource}`;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => ChurchServiceCalendarCountAggregate, {nullable:true})
    _count?: ChurchServiceCalendarCountAggregate;

    @Field(() => ChurchServiceCalendarMinAggregate, {nullable:true})
    _min?: ChurchServiceCalendarMinAggregate;

    @Field(() => ChurchServiceCalendarMaxAggregate, {nullable:true})
    _max?: ChurchServiceCalendarMaxAggregate;
}
