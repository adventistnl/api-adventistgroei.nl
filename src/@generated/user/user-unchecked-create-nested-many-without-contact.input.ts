import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutContactInput } from './user-create-without-contact.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutContactInput } from './user-create-or-connect-without-contact.input';
import { UserCreateManyContactInputEnvelope } from './user-create-many-contact-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutContactInput {

    @Field(() => [UserCreateWithoutContactInput], {nullable:true})
    @Type(() => UserCreateWithoutContactInput)
    create?: Array<UserCreateWithoutContactInput>;

    @Field(() => [UserCreateOrConnectWithoutContactInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutContactInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutContactInput>;

    @Field(() => UserCreateManyContactInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyContactInputEnvelope)
    createMany?: UserCreateManyContactInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}
