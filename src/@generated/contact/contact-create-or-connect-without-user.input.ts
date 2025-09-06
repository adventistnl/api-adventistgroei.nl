import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';
import { Type } from 'class-transformer';
import { ContactCreateWithoutUserInput } from './contact-create-without-user.input';

@InputType()
export class ContactCreateOrConnectWithoutUserInput {

    @Field(() => ContactWhereUniqueInput, {nullable:false})
    @Type(() => ContactWhereUniqueInput)
    where!: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;

    @Field(() => ContactCreateWithoutUserInput, {nullable:false})
    @Type(() => ContactCreateWithoutUserInput)
    create!: ContactCreateWithoutUserInput;
}
