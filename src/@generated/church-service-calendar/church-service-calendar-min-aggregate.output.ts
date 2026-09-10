import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ServiceCalendarSource } from '../prisma/service-calendar-source.enum';

@ObjectType()
export class ChurchServiceCalendarMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    institution_id?: string;

    @Field(() => String, {nullable:true})
    church_id?: string;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => Boolean, {nullable:true})
    has_service?: boolean;

    @Field(() => ServiceCalendarSource, {nullable:true})
    source?: `${ServiceCalendarSource}`;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;
}
