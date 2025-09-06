import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutChurchInput } from './user-create-without-church.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutChurchInput } from './user-create-or-connect-without-church.input';
import { UserCreateManyChurchInputEnvelope } from './user-create-many-church-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutChurchInput {

    @Field(() => [UserCreateWithoutChurchInput], {nullable:true})
    @Type(() => UserCreateWithoutChurchInput)
    create?: Array<UserCreateWithoutChurchInput>;

    @Field(() => [UserCreateOrConnectWithoutChurchInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutChurchInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutChurchInput>;

    @Field(() => UserCreateManyChurchInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyChurchInputEnvelope)
    createMany?: UserCreateManyChurchInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}
