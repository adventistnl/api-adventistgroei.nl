import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleCreateWithoutRoleInput } from './user-role-create-without-role.input';
import { Type } from 'class-transformer';
import { UserRoleCreateOrConnectWithoutRoleInput } from './user-role-create-or-connect-without-role.input';
import { UserRoleUpsertWithWhereUniqueWithoutRoleInput } from './user-role-upsert-with-where-unique-without-role.input';
import { UserRoleCreateManyRoleInputEnvelope } from './user-role-create-many-role-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserRoleWhereUniqueInput } from './user-role-where-unique.input';
import { UserRoleUpdateWithWhereUniqueWithoutRoleInput } from './user-role-update-with-where-unique-without-role.input';
import { UserRoleUpdateManyWithWhereWithoutRoleInput } from './user-role-update-many-with-where-without-role.input';
import { UserRoleScalarWhereInput } from './user-role-scalar-where.input';

@InputType()
export class UserRoleUpdateManyWithoutRoleNestedInput {

    @Field(() => [UserRoleCreateWithoutRoleInput], {nullable:true})
    @Type(() => UserRoleCreateWithoutRoleInput)
    create?: Array<UserRoleCreateWithoutRoleInput>;

    @Field(() => [UserRoleCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => UserRoleCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<UserRoleCreateOrConnectWithoutRoleInput>;

    @Field(() => [UserRoleUpsertWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => UserRoleUpsertWithWhereUniqueWithoutRoleInput)
    upsert?: Array<UserRoleUpsertWithWhereUniqueWithoutRoleInput>;

    @Field(() => UserRoleCreateManyRoleInputEnvelope, {nullable:true})
    @Type(() => UserRoleCreateManyRoleInputEnvelope)
    createMany?: UserRoleCreateManyRoleInputEnvelope;

    @Field(() => [UserRoleWhereUniqueInput], {nullable:true})
    @Type(() => UserRoleWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserRoleWhereUniqueInput, 'id'>>;

    @Field(() => [UserRoleWhereUniqueInput], {nullable:true})
    @Type(() => UserRoleWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserRoleWhereUniqueInput, 'id'>>;

    @Field(() => [UserRoleWhereUniqueInput], {nullable:true})
    @Type(() => UserRoleWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserRoleWhereUniqueInput, 'id'>>;

    @Field(() => [UserRoleWhereUniqueInput], {nullable:true})
    @Type(() => UserRoleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserRoleWhereUniqueInput, 'id'>>;

    @Field(() => [UserRoleUpdateWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => UserRoleUpdateWithWhereUniqueWithoutRoleInput)
    update?: Array<UserRoleUpdateWithWhereUniqueWithoutRoleInput>;

    @Field(() => [UserRoleUpdateManyWithWhereWithoutRoleInput], {nullable:true})
    @Type(() => UserRoleUpdateManyWithWhereWithoutRoleInput)
    updateMany?: Array<UserRoleUpdateManyWithWhereWithoutRoleInput>;

    @Field(() => [UserRoleScalarWhereInput], {nullable:true})
    @Type(() => UserRoleScalarWhereInput)
    deleteMany?: Array<UserRoleScalarWhereInput>;
}
