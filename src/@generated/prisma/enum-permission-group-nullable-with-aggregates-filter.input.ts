import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionGroup } from './permission-group.enum';
import { NestedEnumPermissionGroupNullableWithAggregatesFilter } from './nested-enum-permission-group-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumPermissionGroupNullableFilter } from './nested-enum-permission-group-nullable-filter.input';

@InputType()
export class EnumPermissionGroupNullableWithAggregatesFilter {

    @Field(() => PermissionGroup, {nullable:true})
    equals?: `${PermissionGroup}`;

    @Field(() => [PermissionGroup], {nullable:true})
    in?: Array<`${PermissionGroup}`>;

    @Field(() => [PermissionGroup], {nullable:true})
    notIn?: Array<`${PermissionGroup}`>;

    @Field(() => NestedEnumPermissionGroupNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPermissionGroupNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumPermissionGroupNullableFilter, {nullable:true})
    _min?: NestedEnumPermissionGroupNullableFilter;

    @Field(() => NestedEnumPermissionGroupNullableFilter, {nullable:true})
    _max?: NestedEnumPermissionGroupNullableFilter;
}
