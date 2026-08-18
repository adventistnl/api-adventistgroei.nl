import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityScalarWhereInput } from './availability-scalar-where.input';
import { Type } from 'class-transformer';
import { AvailabilityUpdateManyMutationInput } from './availability-update-many-mutation.input';

@InputType()
export class AvailabilityUpdateManyWithWhereWithoutUserInput {

    @Field(() => AvailabilityScalarWhereInput, {nullable:false})
    @Type(() => AvailabilityScalarWhereInput)
    where!: AvailabilityScalarWhereInput;

    @Field(() => AvailabilityUpdateManyMutationInput, {nullable:false})
    @Type(() => AvailabilityUpdateManyMutationInput)
    data!: AvailabilityUpdateManyMutationInput;
}
