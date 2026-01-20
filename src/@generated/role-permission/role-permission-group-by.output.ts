import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RolePermissionCountAggregate } from './role-permission-count-aggregate.output';
import { RolePermissionMinAggregate } from './role-permission-min-aggregate.output';
import { RolePermissionMaxAggregate } from './role-permission-max-aggregate.output';

@ObjectType()
export class RolePermissionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    role_id!: string;

    @Field(() => String, {nullable:false})
    permission_id!: string;

    @Field(() => Boolean, {nullable:false})
    is_essential!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => RolePermissionCountAggregate, {nullable:true})
    _count?: RolePermissionCountAggregate;

    @Field(() => RolePermissionMinAggregate, {nullable:true})
    _min?: RolePermissionMinAggregate;

    @Field(() => RolePermissionMaxAggregate, {nullable:true})
    _max?: RolePermissionMaxAggregate;
}
