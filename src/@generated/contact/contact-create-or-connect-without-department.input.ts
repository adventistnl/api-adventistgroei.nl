import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';
import { Type } from 'class-transformer';
import { ContactCreateWithoutDepartmentInput } from './contact-create-without-department.input';

@InputType()
export class ContactCreateOrConnectWithoutDepartmentInput {

    @Field(() => ContactWhereUniqueInput, {nullable:false})
    @Type(() => ContactWhereUniqueInput)
    where!: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;

    @Field(() => ContactCreateWithoutDepartmentInput, {nullable:false})
    @Type(() => ContactCreateWithoutDepartmentInput)
    create!: ContactCreateWithoutDepartmentInput;
}
