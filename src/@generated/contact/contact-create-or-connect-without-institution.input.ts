import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';
import { Type } from 'class-transformer';
import { ContactCreateWithoutInstitutionInput } from './contact-create-without-institution.input';

@InputType()
export class ContactCreateOrConnectWithoutInstitutionInput {

    @Field(() => ContactWhereUniqueInput, {nullable:false})
    @Type(() => ContactWhereUniqueInput)
    where!: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;

    @Field(() => ContactCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => ContactCreateWithoutInstitutionInput)
    create!: ContactCreateWithoutInstitutionInput;
}
