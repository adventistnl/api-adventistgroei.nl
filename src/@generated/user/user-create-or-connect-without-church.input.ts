import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutChurchInput } from './user-create-without-church.input';

@InputType()
export class UserCreateOrConnectWithoutChurchInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutChurchInput, {nullable:false})
    @Type(() => UserCreateWithoutChurchInput)
    create!: UserCreateWithoutChurchInput;
}
