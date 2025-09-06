import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRoleWhereInput } from './user-role-where.input';
import { Type } from 'class-transformer';
import { UserRoleOrderByWithAggregationInput } from './user-role-order-by-with-aggregation.input';
import { UserRoleScalarFieldEnum } from './user-role-scalar-field.enum';
import { UserRoleScalarWhereWithAggregatesInput } from './user-role-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserRoleCountAggregateInput } from './user-role-count-aggregate.input';
import { UserRoleMinAggregateInput } from './user-role-min-aggregate.input';
import { UserRoleMaxAggregateInput } from './user-role-max-aggregate.input';

@ArgsType()
export class UserRoleGroupByArgs {

    @Field(() => UserRoleWhereInput, {nullable:true})
    @Type(() => UserRoleWhereInput)
    where?: UserRoleWhereInput;

    @Field(() => [UserRoleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserRoleOrderByWithAggregationInput>;

    @Field(() => [UserRoleScalarFieldEnum], {nullable:false})
    by!: Array<`${UserRoleScalarFieldEnum}`>;

    @Field(() => UserRoleScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserRoleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserRoleCountAggregateInput, {nullable:true})
    _count?: UserRoleCountAggregateInput;

    @Field(() => UserRoleMinAggregateInput, {nullable:true})
    _min?: UserRoleMinAggregateInput;

    @Field(() => UserRoleMaxAggregateInput, {nullable:true})
    _max?: UserRoleMaxAggregateInput;
}
