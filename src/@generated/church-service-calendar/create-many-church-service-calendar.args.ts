import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChurchServiceCalendarCreateManyInput } from './church-service-calendar-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyChurchServiceCalendarArgs {

    @Field(() => [ChurchServiceCalendarCreateManyInput], {nullable:false})
    @Type(() => ChurchServiceCalendarCreateManyInput)
    data!: Array<ChurchServiceCalendarCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
