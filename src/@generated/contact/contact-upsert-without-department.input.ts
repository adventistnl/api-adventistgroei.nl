import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactUpdateWithoutDepartmentInput } from './contact-update-without-department.input';
import { Type } from 'class-transformer';
import { ContactCreateWithoutDepartmentInput } from './contact-create-without-department.input';
import { ContactWhereInput } from './contact-where.input';

@InputType()
export class ContactUpsertWithoutDepartmentInput {

    @Field(() => ContactUpdateWithoutDepartmentInput, {nullable:false})
    @Type(() => ContactUpdateWithoutDepartmentInput)
    update!: ContactUpdateWithoutDepartmentInput;

    @Field(() => ContactCreateWithoutDepartmentInput, {nullable:false})
    @Type(() => ContactCreateWithoutDepartmentInput)
    create!: ContactCreateWithoutDepartmentInput;

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    where?: ContactWhereInput;
}
