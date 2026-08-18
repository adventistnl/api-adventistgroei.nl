import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityHistoryCreateManyInput } from './availability-history-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAvailabilityHistoryArgs {

    @Field(() => [AvailabilityHistoryCreateManyInput], {nullable:false})
    @Type(() => AvailabilityHistoryCreateManyInput)
    data!: Array<AvailabilityHistoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
