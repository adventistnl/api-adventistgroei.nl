import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCalendarSource } from '../prisma/service-calendar-source.enum';

@InputType()
export class ChurchServiceCalendarUncheckedCreateWithoutInstitutionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    church_id!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Boolean, {nullable:false})
    has_service!: boolean;

    @Field(() => ServiceCalendarSource, {nullable:true})
    source?: `${ServiceCalendarSource}`;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;
}
