import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRoleWhereInput } from './user-role-where.input';
import { Type } from 'class-transformer';
import { UserRoleOrderByWithRelationInput } from './user-role-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserRoleWhereUniqueInput } from './user-role-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserRoleCountAggregateInput } from './user-role-count-aggregate.input';
import { UserRoleMinAggregateInput } from './user-role-min-aggregate.input';
import { UserRoleMaxAggregateInput } from './user-role-max-aggregate.input';

@ArgsType()
export class UserRoleAggregateArgs {

    @Field(() => UserRoleWhereInput, {nullable:true})
    @Type(() => UserRoleWhereInput)
    where?: UserRoleWhereInput;

    @Field(() => [UserRoleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserRoleOrderByWithRelationInput>;

    @Field(() => UserRoleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserRoleWhereUniqueInput, 'id'>;

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
