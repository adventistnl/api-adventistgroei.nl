import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionResolverName } from '../prisma/permission-resolver-name.enum';
import { PermissionGroup } from '../prisma/permission-group.enum';

@InputType()
export class PermissionCreateWithoutRole_permissionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    key_code!: string;

    @Field(() => PermissionResolverName, {nullable:false})
    resolver_name!: `${PermissionResolverName}`;

    @Field(() => PermissionGroup, {nullable:true})
    group?: `${PermissionGroup}`;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => Boolean, {nullable:true})
    disabled_to_client?: boolean;
}
