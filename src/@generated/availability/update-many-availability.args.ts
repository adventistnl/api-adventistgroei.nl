import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityUpdateManyMutationInput } from './availability-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AvailabilityWhereInput } from './availability-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyAvailabilityArgs {

    @Field(() => AvailabilityUpdateManyMutationInput, {nullable:false})
    @Type(() => AvailabilityUpdateManyMutationInput)
    data!: AvailabilityUpdateManyMutationInput;

    @Field(() => AvailabilityWhereInput, {nullable:true})
    @Type(() => AvailabilityWhereInput)
    where?: AvailabilityWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
