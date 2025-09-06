import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutChurchInput } from './user-create-without-church.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutChurchInput } from './user-create-or-connect-without-church.input';
import { UserUpsertWithWhereUniqueWithoutChurchInput } from './user-upsert-with-where-unique-without-church.input';
import { UserCreateManyChurchInputEnvelope } from './user-create-many-church-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutChurchInput } from './user-update-with-where-unique-without-church.input';
import { UserUpdateManyWithWhereWithoutChurchInput } from './user-update-many-with-where-without-church.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutChurchNestedInput {

    @Field(() => [UserCreateWithoutChurchInput], {nullable:true})
    @Type(() => UserCreateWithoutChurchInput)
    create?: Array<UserCreateWithoutChurchInput>;

    @Field(() => [UserCreateOrConnectWithoutChurchInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutChurchInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutChurchInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutChurchInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutChurchInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutChurchInput>;

    @Field(() => UserCreateManyChurchInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyChurchInputEnvelope)
    createMany?: UserCreateManyChurchInputEnvelope;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutChurchInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutChurchInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutChurchInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutChurchInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutChurchInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutChurchInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
