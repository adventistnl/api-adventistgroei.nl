import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityStatus } from './availability-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAvailabilityStatusFilter } from './nested-enum-availability-status-filter.input';

@InputType()
export class NestedEnumAvailabilityStatusWithAggregatesFilter {

    @Field(() => AvailabilityStatus, {nullable:true})
    equals?: `${AvailabilityStatus}`;

    @Field(() => [AvailabilityStatus], {nullable:true})
    in?: Array<`${AvailabilityStatus}`>;

    @Field(() => [AvailabilityStatus], {nullable:true})
    notIn?: Array<`${AvailabilityStatus}`>;

    @Field(() => NestedEnumAvailabilityStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAvailabilityStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAvailabilityStatusFilter, {nullable:true})
    _min?: NestedEnumAvailabilityStatusFilter;

    @Field(() => NestedEnumAvailabilityStatusFilter, {nullable:true})
    _max?: NestedEnumAvailabilityStatusFilter;
}
