import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutInstitutionInput } from './department-create-without-institution.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutInstitutionInput } from './department-create-or-connect-without-institution.input';
import { DepartmentUpsertWithWhereUniqueWithoutInstitutionInput } from './department-upsert-with-where-unique-without-institution.input';
import { DepartmentCreateManyInstitutionInputEnvelope } from './department-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateWithWhereUniqueWithoutInstitutionInput } from './department-update-with-where-unique-without-institution.input';
import { DepartmentUpdateManyWithWhereWithoutInstitutionInput } from './department-update-many-with-where-without-institution.input';
import { DepartmentScalarWhereInput } from './department-scalar-where.input';

@InputType()
export class DepartmentUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [DepartmentCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => DepartmentCreateWithoutInstitutionInput)
    create?: Array<DepartmentCreateWithoutInstitutionInput>;

    @Field(() => [DepartmentCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<DepartmentCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [DepartmentUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => DepartmentUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<DepartmentUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => DepartmentCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => DepartmentCreateManyInstitutionInputEnvelope)
    createMany?: DepartmentCreateManyInstitutionInputEnvelope;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>>;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>>;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>>;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>>;

    @Field(() => [DepartmentUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => DepartmentUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<DepartmentUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [DepartmentUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => DepartmentUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<DepartmentUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [DepartmentScalarWhereInput], {nullable:true})
    @Type(() => DepartmentScalarWhereInput)
    deleteMany?: Array<DepartmentScalarWhereInput>;
}
