import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentCreateWithoutInstitutionInput } from './assignment-create-without-institution.input';
import { Type } from 'class-transformer';
import { AssignmentCreateOrConnectWithoutInstitutionInput } from './assignment-create-or-connect-without-institution.input';
import { AssignmentUpsertWithWhereUniqueWithoutInstitutionInput } from './assignment-upsert-with-where-unique-without-institution.input';
import { AssignmentCreateManyInstitutionInputEnvelope } from './assignment-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssignmentWhereUniqueInput } from './assignment-where-unique.input';
import { AssignmentUpdateWithWhereUniqueWithoutInstitutionInput } from './assignment-update-with-where-unique-without-institution.input';
import { AssignmentUpdateManyWithWhereWithoutInstitutionInput } from './assignment-update-many-with-where-without-institution.input';
import { AssignmentScalarWhereInput } from './assignment-scalar-where.input';

@InputType()
export class AssignmentUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [AssignmentCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentCreateWithoutInstitutionInput)
    create?: Array<AssignmentCreateWithoutInstitutionInput>;

    @Field(() => [AssignmentCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<AssignmentCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [AssignmentUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<AssignmentUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => AssignmentCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => AssignmentCreateManyInstitutionInputEnvelope)
    createMany?: AssignmentCreateManyInstitutionInputEnvelope;

    @Field(() => [AssignmentWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>>;

    @Field(() => [AssignmentWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>>;

    @Field(() => [AssignmentWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>>;

    @Field(() => [AssignmentWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>>;

    @Field(() => [AssignmentUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<AssignmentUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [AssignmentUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<AssignmentUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [AssignmentScalarWhereInput], {nullable:true})
    @Type(() => AssignmentScalarWhereInput)
    deleteMany?: Array<AssignmentScalarWhereInput>;
}
