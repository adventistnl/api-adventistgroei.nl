import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactUpdateWithoutInstitutionInput } from './contact-update-without-institution.input';
import { Type } from 'class-transformer';
import { ContactCreateWithoutInstitutionInput } from './contact-create-without-institution.input';
import { ContactWhereInput } from './contact-where.input';

@InputType()
export class ContactUpsertWithoutInstitutionInput {

    @Field(() => ContactUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => ContactUpdateWithoutInstitutionInput)
    update!: ContactUpdateWithoutInstitutionInput;

    @Field(() => ContactCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => ContactCreateWithoutInstitutionInput)
    create!: ContactCreateWithoutInstitutionInput;

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    where?: ContactWhereInput;
}
