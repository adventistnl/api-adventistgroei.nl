import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactCreateWithoutDepartmentInput } from './contact-create-without-department.input';
import { Type } from 'class-transformer';
import { ContactCreateOrConnectWithoutDepartmentInput } from './contact-create-or-connect-without-department.input';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';

@InputType()
export class ContactCreateNestedOneWithoutDepartmentInput {

    @Field(() => ContactCreateWithoutDepartmentInput, {nullable:true})
    @Type(() => ContactCreateWithoutDepartmentInput)
    create?: ContactCreateWithoutDepartmentInput;

    @Field(() => ContactCreateOrConnectWithoutDepartmentInput, {nullable:true})
    @Type(() => ContactCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: ContactCreateOrConnectWithoutDepartmentInput;

    @Field(() => ContactWhereUniqueInput, {nullable:true})
    @Type(() => ContactWhereUniqueInput)
    connect?: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;
}
