import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRoleWhereUniqueInput } from './user-role-where-unique.input';
import { Type } from 'class-transformer';
import { UserRoleUpdateWithoutUserInput } from './user-role-update-without-user.input';

@InputType()
export class UserRoleUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UserRoleWhereUniqueInput, {nullable:false})
    @Type(() => UserRoleWhereUniqueInput)
    where!: Prisma.AtLeast<UserRoleWhereUniqueInput, 'id'>;

    @Field(() => UserRoleUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserRoleUpdateWithoutUserInput)
    data!: UserRoleUpdateWithoutUserInput;
}
