import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ServiceCalendarSource } from '../prisma/service-calendar-source.enum';
import { Institution } from '../institution/institution.model';
import { Church } from '../church/church.model';

@ObjectType()
export class ChurchServiceCalendar {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    church_id!: string;

    @Field(() => Date, {nullable:false})
    date!: Date;

    @Field(() => Boolean, {nullable:false})
    has_service!: boolean;

    @Field(() => ServiceCalendarSource, {defaultValue:'CHURCH_CONFIRMED',nullable:false})
    source!: `${ServiceCalendarSource}`;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Institution, {nullable:false})
    institution?: Institution;

    @Field(() => Church, {nullable:false})
    church?: Church;
}
