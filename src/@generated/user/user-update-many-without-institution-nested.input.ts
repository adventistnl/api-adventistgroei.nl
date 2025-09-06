import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutInstitutionInput } from './user-create-without-institution.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutInstitutionInput } from './user-create-or-connect-without-institution.input';
import { UserUpsertWithWhereUniqueWithoutInstitutionInput } from './user-upsert-with-where-unique-without-institution.input';
import { UserCreateManyInstitutionInputEnvelope } from './user-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutInstitutionInput } from './user-update-with-where-unique-without-institution.input';
import { UserUpdateManyWithWhereWithoutInstitutionInput } from './user-update-many-with-where-without-institution.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [UserCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => UserCreateWithoutInstitutionInput)
    create?: Array<UserCreateWithoutInstitutionInput>;

    @Field(() => [UserCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => UserCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyInstitutionInputEnvelope)
    createMany?: UserCreateManyInstitutionInputEnvelope;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
