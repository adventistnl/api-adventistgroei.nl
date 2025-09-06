import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutChurchInput } from './user-update-without-church.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutChurchInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateWithoutChurchInput, {nullable:false})
    @Type(() => UserUpdateWithoutChurchInput)
    data!: UserUpdateWithoutChurchInput;
}
