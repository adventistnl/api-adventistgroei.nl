import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentInviteTemplateCreateWithoutInstitutionInput } from './assignment-invite-template-create-without-institution.input';
import { Type } from 'class-transformer';
import { AssignmentInviteTemplateCreateOrConnectWithoutInstitutionInput } from './assignment-invite-template-create-or-connect-without-institution.input';
import { AssignmentInviteTemplateCreateManyInstitutionInputEnvelope } from './assignment-invite-template-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssignmentInviteTemplateWhereUniqueInput } from './assignment-invite-template-where-unique.input';

@InputType()
export class AssignmentInviteTemplateUncheckedCreateNestedManyWithoutInstitutionInput {

    @Field(() => [AssignmentInviteTemplateCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentInviteTemplateCreateWithoutInstitutionInput)
    create?: Array<AssignmentInviteTemplateCreateWithoutInstitutionInput>;

    @Field(() => [AssignmentInviteTemplateCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => AssignmentInviteTemplateCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<AssignmentInviteTemplateCreateOrConnectWithoutInstitutionInput>;

    @Field(() => AssignmentInviteTemplateCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => AssignmentInviteTemplateCreateManyInstitutionInputEnvelope)
    createMany?: AssignmentInviteTemplateCreateManyInstitutionInputEnvelope;

    @Field(() => [AssignmentInviteTemplateWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentInviteTemplateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssignmentInviteTemplateWhereUniqueInput, 'id'>>;
}
