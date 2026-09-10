import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentCreateWithoutInstitutionInput } from './assignment-create-without-institution.input';
import { Type } from 'class-transformer';
import { AssignmentCreateOrConnectWithoutInstitutionInput } from './assignment-create-or-connect-without-institution.input';
import { AssignmentCreateManyInstitutionInputEnvelope } from './assignment-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssignmentWhereUniqueInput } from './assignment-where-unique.input';

@InputType()
export class AssignmentCreateNestedManyWithoutInstitutionInput {

    @Field(() => [AssignmentCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentCreateWithoutInstitutionInput)
    create?: Array<AssignmentCreateWithoutInstitutionInput>;

    @Field(() => [AssignmentCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<AssignmentCreateOrConnectWithoutInstitutionInput>;

    @Field(() => AssignmentCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => AssignmentCreateManyInstitutionInputEnvelope)
    createMany?: AssignmentCreateManyInstitutionInputEnvelope;

    @Field(() => [AssignmentWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>>;
}
