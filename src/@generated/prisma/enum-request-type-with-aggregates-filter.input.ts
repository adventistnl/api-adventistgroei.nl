import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RequestType } from './request-type.enum';
import { NestedEnumRequestTypeWithAggregatesFilter } from './nested-enum-request-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRequestTypeFilter } from './nested-enum-request-type-filter.input';

@InputType()
export class EnumRequestTypeWithAggregatesFilter {

    @Field(() => RequestType, {nullable:true})
    equals?: `${RequestType}`;

    @Field(() => [RequestType], {nullable:true})
    in?: Array<`${RequestType}`>;

    @Field(() => [RequestType], {nullable:true})
    notIn?: Array<`${RequestType}`>;

    @Field(() => NestedEnumRequestTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRequestTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumRequestTypeFilter, {nullable:true})
    _min?: NestedEnumRequestTypeFilter;

    @Field(() => NestedEnumRequestTypeFilter, {nullable:true})
    _max?: NestedEnumRequestTypeFilter;
}
