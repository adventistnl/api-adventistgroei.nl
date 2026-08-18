import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityWhereInput } from './availability-where.input';

@InputType()
export class AvailabilityListRelationFilter {

    @Field(() => AvailabilityWhereInput, {nullable:true})
    every?: AvailabilityWhereInput;

    @Field(() => AvailabilityWhereInput, {nullable:true})
    some?: AvailabilityWhereInput;

    @Field(() => AvailabilityWhereInput, {nullable:true})
    none?: AvailabilityWhereInput;
}
