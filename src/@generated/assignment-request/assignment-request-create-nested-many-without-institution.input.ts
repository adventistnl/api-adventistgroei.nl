import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentRequestCreateWithoutInstitutionInput } from './assignment-request-create-without-institution.input';
import { Type } from 'class-transformer';
import { AssignmentRequestCreateOrConnectWithoutInstitutionInput } from './assignment-request-create-or-connect-without-institution.input';
import { AssignmentRequestCreateManyInstitutionInputEnvelope } from './assignment-request-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssignmentRequestWhereUniqueInput } from './assignment-request-where-unique.input';

@InputType()
export class AssignmentRequestCreateNestedManyWithoutInstitutionInput {

    @Field(() => [AssignmentRequestCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentRequestCreateWithoutInstitutionInput)
    create?: Array<AssignmentRequestCreateWithoutInstitutionInput>;

    @Field(() => [AssignmentRequestCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentRequestCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<AssignmentRequestCreateOrConnectWithoutInstitutionInput>;

    @Field(() => AssignmentRequestCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => AssignmentRequestCreateManyInstitutionInputEnvelope)
    createMany?: AssignmentRequestCreateManyInstitutionInputEnvelope;

    @Field(() => [AssignmentRequestWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>>;
}
