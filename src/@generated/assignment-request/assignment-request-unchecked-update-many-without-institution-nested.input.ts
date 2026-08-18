import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentRequestCreateWithoutInstitutionInput } from './assignment-request-create-without-institution.input';
import { Type } from 'class-transformer';
import { AssignmentRequestCreateOrConnectWithoutInstitutionInput } from './assignment-request-create-or-connect-without-institution.input';
import { AssignmentRequestUpsertWithWhereUniqueWithoutInstitutionInput } from './assignment-request-upsert-with-where-unique-without-institution.input';
import { AssignmentRequestCreateManyInstitutionInputEnvelope } from './assignment-request-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssignmentRequestWhereUniqueInput } from './assignment-request-where-unique.input';
import { AssignmentRequestUpdateWithWhereUniqueWithoutInstitutionInput } from './assignment-request-update-with-where-unique-without-institution.input';
import { AssignmentRequestUpdateManyWithWhereWithoutInstitutionInput } from './assignment-request-update-many-with-where-without-institution.input';
import { AssignmentRequestScalarWhereInput } from './assignment-request-scalar-where.input';

@InputType()
export class AssignmentRequestUncheckedUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [AssignmentRequestCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentRequestCreateWithoutInstitutionInput)
    create?: Array<AssignmentRequestCreateWithoutInstitutionInput>;

    @Field(() => [AssignmentRequestCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentRequestCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<AssignmentRequestCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [AssignmentRequestUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentRequestUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<AssignmentRequestUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => AssignmentRequestCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => AssignmentRequestCreateManyInstitutionInputEnvelope)
    createMany?: AssignmentRequestCreateManyInstitutionInputEnvelope;

    @Field(() => [AssignmentRequestWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentRequestWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>>;

    @Field(() => [AssignmentRequestWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentRequestWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>>;

    @Field(() => [AssignmentRequestWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentRequestWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>>;

    @Field(() => [AssignmentRequestWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>>;

    @Field(() => [AssignmentRequestUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentRequestUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<AssignmentRequestUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [AssignmentRequestUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentRequestUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<AssignmentRequestUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [AssignmentRequestScalarWhereInput], {nullable:true})
    @Type(() => AssignmentRequestScalarWhereInput)
    deleteMany?: Array<AssignmentRequestScalarWhereInput>;
}
