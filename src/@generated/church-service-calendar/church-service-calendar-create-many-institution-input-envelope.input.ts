import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchServiceCalendarCreateManyInstitutionInput } from './church-service-calendar-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class ChurchServiceCalendarCreateManyInstitutionInputEnvelope {

    @Field(() => [ChurchServiceCalendarCreateManyInstitutionInput], {nullable:false})
    @Type(() => ChurchServiceCalendarCreateManyInstitutionInput)
    data!: Array<ChurchServiceCalendarCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
