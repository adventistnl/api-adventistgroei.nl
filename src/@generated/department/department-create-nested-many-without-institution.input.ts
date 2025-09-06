import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutInstitutionInput } from './department-create-without-institution.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutInstitutionInput } from './department-create-or-connect-without-institution.input';
import { DepartmentCreateManyInstitutionInputEnvelope } from './department-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedManyWithoutInstitutionInput {

    @Field(() => [DepartmentCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => DepartmentCreateWithoutInstitutionInput)
    create?: Array<DepartmentCreateWithoutInstitutionInput>;

    @Field(() => [DepartmentCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<DepartmentCreateOrConnectWithoutInstitutionInput>;

    @Field(() => DepartmentCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => DepartmentCreateManyInstitutionInputEnvelope)
    createMany?: DepartmentCreateManyInstitutionInputEnvelope;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>>;
}
