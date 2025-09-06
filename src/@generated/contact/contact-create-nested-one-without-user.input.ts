import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactCreateWithoutUserInput } from './contact-create-without-user.input';
import { Type } from 'class-transformer';
import { ContactCreateOrConnectWithoutUserInput } from './contact-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';

@InputType()
export class ContactCreateNestedOneWithoutUserInput {

    @Field(() => ContactCreateWithoutUserInput, {nullable:true})
    @Type(() => ContactCreateWithoutUserInput)
    create?: ContactCreateWithoutUserInput;

    @Field(() => ContactCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => ContactCreateOrConnectWithoutUserInput)
    connectOrCreate?: ContactCreateOrConnectWithoutUserInput;

    @Field(() => ContactWhereUniqueInput, {nullable:true})
    @Type(() => ContactWhereUniqueInput)
    connect?: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;
}
