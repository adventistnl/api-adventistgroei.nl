import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactCreateWithoutDepartmentInput } from './contact-create-without-department.input';
import { Type } from 'class-transformer';
import { ContactCreateOrConnectWithoutDepartmentInput } from './contact-create-or-connect-without-department.input';
import { ContactUpsertWithoutDepartmentInput } from './contact-upsert-without-department.input';
import { ContactWhereInput } from './contact-where.input';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';
import { ContactUpdateToOneWithWhereWithoutDepartmentInput } from './contact-update-to-one-with-where-without-department.input';

@InputType()
export class ContactUpdateOneWithoutDepartmentNestedInput {

    @Field(() => ContactCreateWithoutDepartmentInput, {nullable:true})
    @Type(() => ContactCreateWithoutDepartmentInput)
    create?: ContactCreateWithoutDepartmentInput;

    @Field(() => ContactCreateOrConnectWithoutDepartmentInput, {nullable:true})
    @Type(() => ContactCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: ContactCreateOrConnectWithoutDepartmentInput;

    @Field(() => ContactUpsertWithoutDepartmentInput, {nullable:true})
    @Type(() => ContactUpsertWithoutDepartmentInput)
    upsert?: ContactUpsertWithoutDepartmentInput;

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    disconnect?: ContactWhereInput;

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    delete?: ContactWhereInput;

    @Field(() => ContactWhereUniqueInput, {nullable:true})
    @Type(() => ContactWhereUniqueInput)
    connect?: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;

    @Field(() => ContactUpdateToOneWithWhereWithoutDepartmentInput, {nullable:true})
    @Type(() => ContactUpdateToOneWithWhereWithoutDepartmentInput)
    update?: ContactUpdateToOneWithWhereWithoutDepartmentInput;
}
