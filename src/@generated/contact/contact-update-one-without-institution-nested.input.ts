import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactCreateWithoutInstitutionInput } from './contact-create-without-institution.input';
import { Type } from 'class-transformer';
import { ContactCreateOrConnectWithoutInstitutionInput } from './contact-create-or-connect-without-institution.input';
import { ContactUpsertWithoutInstitutionInput } from './contact-upsert-without-institution.input';
import { ContactWhereInput } from './contact-where.input';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';
import { ContactUpdateToOneWithWhereWithoutInstitutionInput } from './contact-update-to-one-with-where-without-institution.input';

@InputType()
export class ContactUpdateOneWithoutInstitutionNestedInput {

    @Field(() => ContactCreateWithoutInstitutionInput, {nullable:true})
    @Type(() => ContactCreateWithoutInstitutionInput)
    create?: ContactCreateWithoutInstitutionInput;

    @Field(() => ContactCreateOrConnectWithoutInstitutionInput, {nullable:true})
    @Type(() => ContactCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: ContactCreateOrConnectWithoutInstitutionInput;

    @Field(() => ContactUpsertWithoutInstitutionInput, {nullable:true})
    @Type(() => ContactUpsertWithoutInstitutionInput)
    upsert?: ContactUpsertWithoutInstitutionInput;

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    disconnect?: ContactWhereInput;

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    delete?: ContactWhereInput;

    @Field(() => ContactWhereUniqueInput, {nullable:true})
    @Type(() => ContactWhereUniqueInput)
    connect?: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;

    @Field(() => ContactUpdateToOneWithWhereWithoutInstitutionInput, {nullable:true})
    @Type(() => ContactUpdateToOneWithWhereWithoutInstitutionInput)
    update?: ContactUpdateToOneWithWhereWithoutInstitutionInput;
}
