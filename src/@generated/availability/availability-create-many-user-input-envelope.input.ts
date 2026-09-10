import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityCreateManyUserInput } from './availability-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class AvailabilityCreateManyUserInputEnvelope {

    @Field(() => [AvailabilityCreateManyUserInput], {nullable:false})
    @Type(() => AvailabilityCreateManyUserInput)
    data!: Array<AvailabilityCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
