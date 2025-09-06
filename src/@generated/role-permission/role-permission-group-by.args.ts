import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RolePermissionWhereInput } from './role-permission-where.input';
import { Type } from 'class-transformer';
import { RolePermissionOrderByWithAggregationInput } from './role-permission-order-by-with-aggregation.input';
import { RolePermissionScalarFieldEnum } from './role-permission-scalar-field.enum';
import { RolePermissionScalarWhereWithAggregatesInput } from './role-permission-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RolePermissionCountAggregateInput } from './role-permission-count-aggregate.input';
import { RolePermissionMinAggregateInput } from './role-permission-min-aggregate.input';
import { RolePermissionMaxAggregateInput } from './role-permission-max-aggregate.input';

@ArgsType()
export class RolePermissionGroupByArgs {

    @Field(() => RolePermissionWhereInput, {nullable:true})
    @Type(() => RolePermissionWhereInput)
    where?: RolePermissionWhereInput;

    @Field(() => [RolePermissionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RolePermissionOrderByWithAggregationInput>;

    @Field(() => [RolePermissionScalarFieldEnum], {nullable:false})
    by!: Array<`${RolePermissionScalarFieldEnum}`>;

    @Field(() => RolePermissionScalarWhereWithAggregatesInput, {nullable:true})
    having?: RolePermissionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RolePermissionCountAggregateInput, {nullable:true})
    _count?: RolePermissionCountAggregateInput;

    @Field(() => RolePermissionMinAggregateInput, {nullable:true})
    _min?: RolePermissionMinAggregateInput;

    @Field(() => RolePermissionMaxAggregateInput, {nullable:true})
    _max?: RolePermissionMaxAggregateInput;
}
