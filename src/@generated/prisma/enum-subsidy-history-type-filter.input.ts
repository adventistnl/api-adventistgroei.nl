import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyHistoryType } from './subsidy-history-type.enum';
import { NestedEnumSubsidyHistoryTypeFilter } from './nested-enum-subsidy-history-type-filter.input';

@InputType()
export class EnumSubsidyHistoryTypeFilter {

    @Field(() => SubsidyHistoryType, {nullable:true})
    equals?: `${SubsidyHistoryType}`;

    @Field(() => [SubsidyHistoryType], {nullable:true})
    in?: Array<`${SubsidyHistoryType}`>;

    @Field(() => [SubsidyHistoryType], {nullable:true})
    notIn?: Array<`${SubsidyHistoryType}`>;

    @Field(() => NestedEnumSubsidyHistoryTypeFilter, {nullable:true})
    not?: NestedEnumSubsidyHistoryTypeFilter;
}
