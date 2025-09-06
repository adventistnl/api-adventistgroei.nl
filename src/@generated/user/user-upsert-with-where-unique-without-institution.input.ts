import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutInstitutionInput } from './user-update-without-institution.input';
import { UserCreateWithoutInstitutionInput } from './user-create-without-institution.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutInstitutionInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => UserUpdateWithoutInstitutionInput)
    update!: UserUpdateWithoutInstitutionInput;

    @Field(() => UserCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => UserCreateWithoutInstitutionInput)
    create!: UserCreateWithoutInstitutionInput;
}
