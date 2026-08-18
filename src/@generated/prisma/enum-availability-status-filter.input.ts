import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityStatus } from './availability-status.enum';
import { NestedEnumAvailabilityStatusFilter } from './nested-enum-availability-status-filter.input';

@InputType()
export class EnumAvailabilityStatusFilter {

    @Field(() => AvailabilityStatus, {nullable:true})
    equals?: `${AvailabilityStatus}`;

    @Field(() => [AvailabilityStatus], {nullable:true})
    in?: Array<`${AvailabilityStatus}`>;

    @Field(() => [AvailabilityStatus], {nullable:true})
    notIn?: Array<`${AvailabilityStatus}`>;

    @Field(() => NestedEnumAvailabilityStatusFilter, {nullable:true})
    not?: NestedEnumAvailabilityStatusFilter;
}
