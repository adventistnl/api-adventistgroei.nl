import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRoleWhereUniqueInput } from './user-role-where-unique.input';
import { Type } from 'class-transformer';
import { UserRoleCreateWithoutUserInput } from './user-role-create-without-user.input';

@InputType()
export class UserRoleCreateOrConnectWithoutUserInput {

    @Field(() => UserRoleWhereUniqueInput, {nullable:false})
    @Type(() => UserRoleWhereUniqueInput)
    where!: Prisma.AtLeast<UserRoleWhereUniqueInput, 'id'>;

    @Field(() => UserRoleCreateWithoutUserInput, {nullable:false})
    @Type(() => UserRoleCreateWithoutUserInput)
    create!: UserRoleCreateWithoutUserInput;
}
