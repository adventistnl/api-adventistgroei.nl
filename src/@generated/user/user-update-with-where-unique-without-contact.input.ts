import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutContactInput } from './user-update-without-contact.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutContactInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateWithoutContactInput, {nullable:false})
    @Type(() => UserUpdateWithoutContactInput)
    data!: UserUpdateWithoutContactInput;
}
