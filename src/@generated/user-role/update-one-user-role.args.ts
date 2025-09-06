import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRoleUpdateInput } from './user-role-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserRoleWhereUniqueInput } from './user-role-where-unique.input';

@ArgsType()
export class UpdateOneUserRoleArgs {

    @Field(() => UserRoleUpdateInput, {nullable:false})
    @Type(() => UserRoleUpdateInput)
    data!: UserRoleUpdateInput;

    @Field(() => UserRoleWhereUniqueInput, {nullable:false})
    @Type(() => UserRoleWhereUniqueInput)
    where!: Prisma.AtLeast<UserRoleWhereUniqueInput, 'id'>;
}
