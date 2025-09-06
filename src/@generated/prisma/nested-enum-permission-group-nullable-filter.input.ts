import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionGroup } from './permission-group.enum';

@InputType()
export class NestedEnumPermissionGroupNullableFilter {

    @Field(() => PermissionGroup, {nullable:true})
    equals?: `${PermissionGroup}`;

    @Field(() => [PermissionGroup], {nullable:true})
    in?: Array<`${PermissionGroup}`>;

    @Field(() => [PermissionGroup], {nullable:true})
    notIn?: Array<`${PermissionGroup}`>;

    @Field(() => NestedEnumPermissionGroupNullableFilter, {nullable:true})
    not?: NestedEnumPermissionGroupNullableFilter;
}
