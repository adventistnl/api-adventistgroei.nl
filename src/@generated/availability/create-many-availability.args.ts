import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityCreateManyInput } from './availability-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAvailabilityArgs {

    @Field(() => [AvailabilityCreateManyInput], {nullable:false})
    @Type(() => AvailabilityCreateManyInput)
    data!: Array<AvailabilityCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
