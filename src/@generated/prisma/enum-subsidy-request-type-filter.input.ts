import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestType } from './subsidy-request-type.enum';
import { NestedEnumSubsidyRequestTypeFilter } from './nested-enum-subsidy-request-type-filter.input';

@InputType()
export class EnumSubsidyRequestTypeFilter {

    @Field(() => SubsidyRequestType, {nullable:true})
    equals?: `${SubsidyRequestType}`;

    @Field(() => [SubsidyRequestType], {nullable:true})
    in?: Array<`${SubsidyRequestType}`>;

    @Field(() => [SubsidyRequestType], {nullable:true})
    notIn?: Array<`${SubsidyRequestType}`>;

    @Field(() => NestedEnumSubsidyRequestTypeFilter, {nullable:true})
    not?: NestedEnumSubsidyRequestTypeFilter;
}
