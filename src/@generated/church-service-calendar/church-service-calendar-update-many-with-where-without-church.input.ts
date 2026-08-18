import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchServiceCalendarScalarWhereInput } from './church-service-calendar-scalar-where.input';
import { Type } from 'class-transformer';
import { ChurchServiceCalendarUpdateManyMutationInput } from './church-service-calendar-update-many-mutation.input';

@InputType()
export class ChurchServiceCalendarUpdateManyWithWhereWithoutChurchInput {

    @Field(() => ChurchServiceCalendarScalarWhereInput, {nullable:false})
    @Type(() => ChurchServiceCalendarScalarWhereInput)
    where!: ChurchServiceCalendarScalarWhereInput;

    @Field(() => ChurchServiceCalendarUpdateManyMutationInput, {nullable:false})
    @Type(() => ChurchServiceCalendarUpdateManyMutationInput)
    data!: ChurchServiceCalendarUpdateManyMutationInput;
}
