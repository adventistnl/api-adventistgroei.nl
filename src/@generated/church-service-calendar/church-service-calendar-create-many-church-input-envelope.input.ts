import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchServiceCalendarCreateManyChurchInput } from './church-service-calendar-create-many-church.input';
import { Type } from 'class-transformer';

@InputType()
export class ChurchServiceCalendarCreateManyChurchInputEnvelope {

    @Field(() => [ChurchServiceCalendarCreateManyChurchInput], {nullable:false})
    @Type(() => ChurchServiceCalendarCreateManyChurchInput)
    data!: Array<ChurchServiceCalendarCreateManyChurchInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
