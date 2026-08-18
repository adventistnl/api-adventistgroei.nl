import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChurchServiceCalendarUpdateManyMutationInput } from './church-service-calendar-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ChurchServiceCalendarWhereInput } from './church-service-calendar-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyChurchServiceCalendarArgs {

    @Field(() => ChurchServiceCalendarUpdateManyMutationInput, {nullable:false})
    @Type(() => ChurchServiceCalendarUpdateManyMutationInput)
    data!: ChurchServiceCalendarUpdateManyMutationInput;

    @Field(() => ChurchServiceCalendarWhereInput, {nullable:true})
    @Type(() => ChurchServiceCalendarWhereInput)
    where?: ChurchServiceCalendarWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
