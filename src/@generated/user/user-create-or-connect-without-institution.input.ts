import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutInstitutionInput } from './user-create-without-institution.input';

@InputType()
export class UserCreateOrConnectWithoutInstitutionInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => UserCreateWithoutInstitutionInput)
    create!: UserCreateWithoutInstitutionInput;
}
