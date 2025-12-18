import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityStatus } from './activity-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumActivityStatusFilter } from './nested-enum-activity-status-filter.input';

@InputType()
export class NestedEnumActivityStatusWithAggregatesFilter {

    @Field(() => ActivityStatus, {nullable:true})
    equals?: `${ActivityStatus}`;

    @Field(() => [ActivityStatus], {nullable:true})
    in?: Array<`${ActivityStatus}`>;

    @Field(() => [ActivityStatus], {nullable:true})
    notIn?: Array<`${ActivityStatus}`>;

    @Field(() => NestedEnumActivityStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumActivityStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumActivityStatusFilter, {nullable:true})
    _min?: NestedEnumActivityStatusFilter;

    @Field(() => NestedEnumActivityStatusFilter, {nullable:true})
    _max?: NestedEnumActivityStatusFilter;
}
