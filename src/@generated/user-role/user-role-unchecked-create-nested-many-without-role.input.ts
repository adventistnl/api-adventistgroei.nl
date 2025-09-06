import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleCreateWithoutRoleInput } from './user-role-create-without-role.input';
import { Type } from 'class-transformer';
import { UserRoleCreateOrConnectWithoutRoleInput } from './user-role-create-or-connect-without-role.input';
import { UserRoleCreateManyRoleInputEnvelope } from './user-role-create-many-role-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserRoleWhereUniqueInput } from './user-role-where-unique.input';

@InputType()
export class UserRoleUncheckedCreateNestedManyWithoutRoleInput {

    @Field(() => [UserRoleCreateWithoutRoleInput], {nullable:true})
    @Type(() => UserRoleCreateWithoutRoleInput)
    create?: Array<UserRoleCreateWithoutRoleInput>;

    @Field(() => [UserRoleCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => UserRoleCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<UserRoleCreateOrConnectWithoutRoleInput>;

    @Field(() => UserRoleCreateManyRoleInputEnvelope, {nullable:true})
    @Type(() => UserRoleCreateManyRoleInputEnvelope)
    createMany?: UserRoleCreateManyRoleInputEnvelope;

    @Field(() => [UserRoleWhereUniqueInput], {nullable:true})
    @Type(() => UserRoleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserRoleWhereUniqueInput, 'id'>>;
}
