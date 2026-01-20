import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyHistoryType } from './subsidy-history-type.enum';

@InputType()
export class NestedEnumSubsidyHistoryTypeFilter {

    @Field(() => SubsidyHistoryType, {nullable:true})
    equals?: `${SubsidyHistoryType}`;

    @Field(() => [SubsidyHistoryType], {nullable:true})
    in?: Array<`${SubsidyHistoryType}`>;

    @Field(() => [SubsidyHistoryType], {nullable:true})
    notIn?: Array<`${SubsidyHistoryType}`>;

    @Field(() => NestedEnumSubsidyHistoryTypeFilter, {nullable:true})
    not?: NestedEnumSubsidyHistoryTypeFilter;
}
