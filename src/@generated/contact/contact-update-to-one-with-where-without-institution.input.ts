import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactWhereInput } from './contact-where.input';
import { Type } from 'class-transformer';
import { ContactUpdateWithoutInstitutionInput } from './contact-update-without-institution.input';

@InputType()
export class ContactUpdateToOneWithWhereWithoutInstitutionInput {

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    where?: ContactWhereInput;

    @Field(() => ContactUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => ContactUpdateWithoutInstitutionInput)
    data!: ContactUpdateWithoutInstitutionInput;
}
