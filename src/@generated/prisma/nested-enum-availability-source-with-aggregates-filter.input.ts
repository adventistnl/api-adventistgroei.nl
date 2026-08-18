import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilitySource } from './availability-source.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAvailabilitySourceFilter } from './nested-enum-availability-source-filter.input';

@InputType()
export class NestedEnumAvailabilitySourceWithAggregatesFilter {

    @Field(() => AvailabilitySource, {nullable:true})
    equals?: `${AvailabilitySource}`;

    @Field(() => [AvailabilitySource], {nullable:true})
    in?: Array<`${AvailabilitySource}`>;

    @Field(() => [AvailabilitySource], {nullable:true})
    notIn?: Array<`${AvailabilitySource}`>;

    @Field(() => NestedEnumAvailabilitySourceWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAvailabilitySourceWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAvailabilitySourceFilter, {nullable:true})
    _min?: NestedEnumAvailabilitySourceFilter;

    @Field(() => NestedEnumAvailabilitySourceFilter, {nullable:true})
    _max?: NestedEnumAvailabilitySourceFilter;
}
