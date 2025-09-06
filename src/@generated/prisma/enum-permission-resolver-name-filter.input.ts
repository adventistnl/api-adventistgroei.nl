import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionResolverName } from './permission-resolver-name.enum';
import { NestedEnumPermissionResolverNameFilter } from './nested-enum-permission-resolver-name-filter.input';

@InputType()
export class EnumPermissionResolverNameFilter {

    @Field(() => PermissionResolverName, {nullable:true})
    equals?: `${PermissionResolverName}`;

    @Field(() => [PermissionResolverName], {nullable:true})
    in?: Array<`${PermissionResolverName}`>;

    @Field(() => [PermissionResolverName], {nullable:true})
    notIn?: Array<`${PermissionResolverName}`>;

    @Field(() => NestedEnumPermissionResolverNameFilter, {nullable:true})
    not?: NestedEnumPermissionResolverNameFilter;
}
