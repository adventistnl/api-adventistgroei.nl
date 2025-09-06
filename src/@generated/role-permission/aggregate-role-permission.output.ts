import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RolePermissionCountAggregate } from './role-permission-count-aggregate.output';
import { RolePermissionMinAggregate } from './role-permission-min-aggregate.output';
import { RolePermissionMaxAggregate } from './role-permission-max-aggregate.output';

@ObjectType()
export class AggregateRolePermission {

    @Field(() => RolePermissionCountAggregate, {nullable:true})
    _count?: RolePermissionCountAggregate;

    @Field(() => RolePermissionMinAggregate, {nullable:true})
    _min?: RolePermissionMinAggregate;

    @Field(() => RolePermissionMaxAggregate, {nullable:true})
    _max?: RolePermissionMaxAggregate;
}
