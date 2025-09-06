import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionGroup } from './permission-group.enum';
import { NestedEnumPermissionGroupNullableFilter } from './nested-enum-permission-group-nullable-filter.input';

@InputType()
export class EnumPermissionGroupNullableFilter {

    @Field(() => PermissionGroup, {nullable:true})
    equals?: `${PermissionGroup}`;

    @Field(() => [PermissionGroup], {nullable:true})
    in?: Array<`${PermissionGroup}`>;

    @Field(() => [PermissionGroup], {nullable:true})
    notIn?: Array<`${PermissionGroup}`>;

    @Field(() => NestedEnumPermissionGroupNullableFilter, {nullable:true})
    not?: NestedEnumPermissionGroupNullableFilter;
}
