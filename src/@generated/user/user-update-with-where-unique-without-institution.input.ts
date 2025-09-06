import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutInstitutionInput } from './user-update-without-institution.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutInstitutionInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => UserUpdateWithoutInstitutionInput)
    data!: UserUpdateWithoutInstitutionInput;
}
