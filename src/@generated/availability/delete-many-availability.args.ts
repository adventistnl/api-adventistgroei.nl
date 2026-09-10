import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityWhereInput } from './availability-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyAvailabilityArgs {

    @Field(() => AvailabilityWhereInput, {nullable:true})
    @Type(() => AvailabilityWhereInput)
    where?: AvailabilityWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
