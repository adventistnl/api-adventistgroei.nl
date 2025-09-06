import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutInstitutionInput } from './user-create-without-institution.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutInstitutionInput } from './user-create-or-connect-without-institution.input';
import { UserCreateManyInstitutionInputEnvelope } from './user-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutInstitutionInput {

    @Field(() => [UserCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => UserCreateWithoutInstitutionInput)
    create?: Array<UserCreateWithoutInstitutionInput>;

    @Field(() => [UserCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutInstitutionInput>;

    @Field(() => UserCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyInstitutionInputEnvelope)
    createMany?: UserCreateManyInstitutionInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}
