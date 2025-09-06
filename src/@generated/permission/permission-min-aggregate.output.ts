import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PermissionResolverName } from '../prisma/permission-resolver-name.enum';
import { PermissionGroup } from '../prisma/permission-group.enum';

@ObjectType()
export class PermissionMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    key_code?: string;

    @Field(() => PermissionResolverName, {nullable:true})
    resolver_name?: `${PermissionResolverName}`;

    @Field(() => PermissionGroup, {nullable:true})
    group?: `${PermissionGroup}`;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;
}
