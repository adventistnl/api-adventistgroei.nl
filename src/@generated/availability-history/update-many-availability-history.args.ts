import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityHistoryUpdateManyMutationInput } from './availability-history-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AvailabilityHistoryWhereInput } from './availability-history-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyAvailabilityHistoryArgs {

    @Field(() => AvailabilityHistoryUpdateManyMutationInput, {nullable:false})
    @Type(() => AvailabilityHistoryUpdateManyMutationInput)
    data!: AvailabilityHistoryUpdateManyMutationInput;

    @Field(() => AvailabilityHistoryWhereInput, {nullable:true})
    @Type(() => AvailabilityHistoryWhereInput)
    where?: AvailabilityHistoryWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
