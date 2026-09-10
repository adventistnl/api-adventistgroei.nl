import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RequestStatus } from './request-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRequestStatusFilter } from './nested-enum-request-status-filter.input';

@InputType()
export class NestedEnumRequestStatusWithAggregatesFilter {

    @Field(() => RequestStatus, {nullable:true})
    equals?: `${RequestStatus}`;

    @Field(() => [RequestStatus], {nullable:true})
    in?: Array<`${RequestStatus}`>;

    @Field(() => [RequestStatus], {nullable:true})
    notIn?: Array<`${RequestStatus}`>;

    @Field(() => NestedEnumRequestStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRequestStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumRequestStatusFilter, {nullable:true})
    _min?: NestedEnumRequestStatusFilter;

    @Field(() => NestedEnumRequestStatusFilter, {nullable:true})
    _max?: NestedEnumRequestStatusFilter;
}
