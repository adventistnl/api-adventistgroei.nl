import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutInstitutionInput } from './department-update-without-institution.input';

@InputType()
export class DepartmentUpdateWithWhereUniqueWithoutInstitutionInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutInstitutionInput)
    data!: DepartmentUpdateWithoutInstitutionInput;
}
