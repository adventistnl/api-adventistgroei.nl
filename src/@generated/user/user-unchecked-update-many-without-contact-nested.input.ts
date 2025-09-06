import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutContactInput } from './user-create-without-contact.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutContactInput } from './user-create-or-connect-without-contact.input';
import { UserUpsertWithWhereUniqueWithoutContactInput } from './user-upsert-with-where-unique-without-contact.input';
import { UserCreateManyContactInputEnvelope } from './user-create-many-contact-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutContactInput } from './user-update-with-where-unique-without-contact.input';
import { UserUpdateManyWithWhereWithoutContactInput } from './user-update-many-with-where-without-contact.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutContactNestedInput {

    @Field(() => [UserCreateWithoutContactInput], {nullable:true})
    @Type(() => UserCreateWithoutContactInput)
    create?: Array<UserCreateWithoutContactInput>;

    @Field(() => [UserCreateOrConnectWithoutContactInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutContactInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutContactInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutContactInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutContactInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutContactInput>;

    @Field(() => UserCreateManyContactInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyContactInputEnvelope)
    createMany?: UserCreateManyContactInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutContactInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutContactInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutContactInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutContactInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutContactInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutContactInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
