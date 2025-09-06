import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';
import { Type } from 'class-transformer';
import { ContactCreateWithoutChurchInput } from './contact-create-without-church.input';

@InputType()
export class ContactCreateOrConnectWithoutChurchInput {

    @Field(() => ContactWhereUniqueInput, {nullable:false})
    @Type(() => ContactWhereUniqueInput)
    where!: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;

    @Field(() => ContactCreateWithoutChurchInput, {nullable:false})
    @Type(() => ContactCreateWithoutChurchInput)
    create!: ContactCreateWithoutChurchInput;
}
