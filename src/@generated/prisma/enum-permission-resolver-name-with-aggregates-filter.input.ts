import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionResolverName } from './permission-resolver-name.enum';
import { NestedEnumPermissionResolverNameWithAggregatesFilter } from './nested-enum-permission-resolver-name-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPermissionResolverNameFilter } from './nested-enum-permission-resolver-name-filter.input';

@InputType()
export class EnumPermissionResolverNameWithAggregatesFilter {

    @Field(() => PermissionResolverName, {nullable:true})
    equals?: `${PermissionResolverName}`;

    @Field(() => [PermissionResolverName], {nullable:true})
    in?: Array<`${PermissionResolverName}`>;

    @Field(() => [PermissionResolverName], {nullable:true})
    notIn?: Array<`${PermissionResolverName}`>;

    @Field(() => NestedEnumPermissionResolverNameWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPermissionResolverNameWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPermissionResolverNameFilter, {nullable:true})
    _min?: NestedEnumPermissionResolverNameFilter;

    @Field(() => NestedEnumPermissionResolverNameFilter, {nullable:true})
    _max?: NestedEnumPermissionResolverNameFilter;
}
