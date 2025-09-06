import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutDepartmentsInput } from './institution-create-without-departments.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutDepartmentsInput } from './institution-create-or-connect-without-departments.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionCreateNestedOneWithoutDepartmentsInput {

    @Field(() => InstitutionCreateWithoutDepartmentsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutDepartmentsInput)
    create?: InstitutionCreateWithoutDepartmentsInput;

    @Field(() => InstitutionCreateOrConnectWithoutDepartmentsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutDepartmentsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutDepartmentsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
