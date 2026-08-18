import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityHistoryCreateInput } from './availability-history-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAvailabilityHistoryArgs {

    @Field(() => AvailabilityHistoryCreateInput, {nullable:false})
    @Type(() => AvailabilityHistoryCreateInput)
    data!: AvailabilityHistoryCreateInput;
}
