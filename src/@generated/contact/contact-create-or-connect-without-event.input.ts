import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';
import { Type } from 'class-transformer';
import { ContactCreateWithoutEventInput } from './contact-create-without-event.input';

@InputType()
export class ContactCreateOrConnectWithoutEventInput {

    @Field(() => ContactWhereUniqueInput, {nullable:false})
    @Type(() => ContactWhereUniqueInput)
    where!: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;

    @Field(() => ContactCreateWithoutEventInput, {nullable:false})
    @Type(() => ContactCreateWithoutEventInput)
    create!: ContactCreateWithoutEventInput;
}
