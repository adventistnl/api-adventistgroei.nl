import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactWhereInput } from './contact-where.input';
import { Type } from 'class-transformer';
import { ContactUpdateWithoutDepartmentInput } from './contact-update-without-department.input';

@InputType()
export class ContactUpdateToOneWithWhereWithoutDepartmentInput {

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    where?: ContactWhereInput;

    @Field(() => ContactUpdateWithoutDepartmentInput, {nullable:false})
    @Type(() => ContactUpdateWithoutDepartmentInput)
    data!: ContactUpdateWithoutDepartmentInput;
}
