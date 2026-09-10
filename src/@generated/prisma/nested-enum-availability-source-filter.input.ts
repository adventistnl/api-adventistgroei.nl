import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilitySource } from './availability-source.enum';

@InputType()
export class NestedEnumAvailabilitySourceFilter {

    @Field(() => AvailabilitySource, {nullable:true})
    equals?: `${AvailabilitySource}`;

    @Field(() => [AvailabilitySource], {nullable:true})
    in?: Array<`${AvailabilitySource}`>;

    @Field(() => [AvailabilitySource], {nullable:true})
    notIn?: Array<`${AvailabilitySource}`>;

    @Field(() => NestedEnumAvailabilitySourceFilter, {nullable:true})
    not?: NestedEnumAvailabilitySourceFilter;
}
