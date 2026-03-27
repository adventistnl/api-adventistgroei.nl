import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestType } from './subsidy-request-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumSubsidyRequestTypeFilter } from './nested-enum-subsidy-request-type-filter.input';

@InputType()
export class NestedEnumSubsidyRequestTypeWithAggregatesFilter {

    @Field(() => SubsidyRequestType, {nullable:true})
    equals?: `${SubsidyRequestType}`;

    @Field(() => [SubsidyRequestType], {nullable:true})
    in?: Array<`${SubsidyRequestType}`>;

    @Field(() => [SubsidyRequestType], {nullable:true})
    notIn?: Array<`${SubsidyRequestType}`>;

    @Field(() => NestedEnumSubsidyRequestTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumSubsidyRequestTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumSubsidyRequestTypeFilter, {nullable:true})
    _min?: NestedEnumSubsidyRequestTypeFilter;

    @Field(() => NestedEnumSubsidyRequestTypeFilter, {nullable:true})
    _max?: NestedEnumSubsidyRequestTypeFilter;
}
