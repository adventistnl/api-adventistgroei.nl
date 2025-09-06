import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactCreateWithoutInstitutionInput } from './contact-create-without-institution.input';
import { Type } from 'class-transformer';
import { ContactCreateOrConnectWithoutInstitutionInput } from './contact-create-or-connect-without-institution.input';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';

@InputType()
export class ContactCreateNestedOneWithoutInstitutionInput {

    @Field(() => ContactCreateWithoutInstitutionInput, {nullable:true})
    @Type(() => ContactCreateWithoutInstitutionInput)
    create?: ContactCreateWithoutInstitutionInput;

    @Field(() => ContactCreateOrConnectWithoutInstitutionInput, {nullable:true})
    @Type(() => ContactCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: ContactCreateOrConnectWithoutInstitutionInput;

    @Field(() => ContactWhereUniqueInput, {nullable:true})
    @Type(() => ContactWhereUniqueInput)
    connect?: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;
}
