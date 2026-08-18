import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityCreateInput } from './availability-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAvailabilityArgs {

    @Field(() => AvailabilityCreateInput, {nullable:false})
    @Type(() => AvailabilityCreateInput)
    data!: AvailabilityCreateInput;
}
