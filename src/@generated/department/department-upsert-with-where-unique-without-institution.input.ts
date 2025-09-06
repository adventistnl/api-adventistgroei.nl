import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutInstitutionInput } from './department-update-without-institution.input';
import { DepartmentCreateWithoutInstitutionInput } from './department-create-without-institution.input';

@InputType()
export class DepartmentUpsertWithWhereUniqueWithoutInstitutionInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutInstitutionInput)
    update!: DepartmentUpdateWithoutInstitutionInput;

    @Field(() => DepartmentCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutInstitutionInput)
    create!: DepartmentCreateWithoutInstitutionInput;
}
