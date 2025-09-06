import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRoleWhereUniqueInput } from './user-role-where-unique.input';
import { Type } from 'class-transformer';
import { UserRoleCreateInput } from './user-role-create.input';
import { UserRoleUpdateInput } from './user-role-update.input';

@ArgsType()
export class UpsertOneUserRoleArgs {

    @Field(() => UserRoleWhereUniqueInput, {nullable:false})
    @Type(() => UserRoleWhereUniqueInput)
    where!: Prisma.AtLeast<UserRoleWhereUniqueInput, 'id'>;

    @Field(() => UserRoleCreateInput, {nullable:false})
    @Type(() => UserRoleCreateInput)
    create!: UserRoleCreateInput;

    @Field(() => UserRoleUpdateInput, {nullable:false})
    @Type(() => UserRoleUpdateInput)
    update!: UserRoleUpdateInput;
}
