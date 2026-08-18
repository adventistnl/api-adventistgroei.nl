import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityHistoryWhereInput } from './availability-history-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyAvailabilityHistoryArgs {

    @Field(() => AvailabilityHistoryWhereInput, {nullable:true})
    @Type(() => AvailabilityHistoryWhereInput)
    where?: AvailabilityHistoryWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
