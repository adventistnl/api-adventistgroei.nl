import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentInviteTemplateWhereUniqueInput } from './assignment-invite-template-where-unique.input';
import { Type } from 'class-transformer';
import { AssignmentInviteTemplateUpdateWithoutInstitutionInput } from './assignment-invite-template-update-without-institution.input';
import { AssignmentInviteTemplateCreateWithoutInstitutionInput } from './assignment-invite-template-create-without-institution.input';

@InputType()
export class AssignmentInviteTemplateUpsertWithWhereUniqueWithoutInstitutionInput {

    @Field(() => AssignmentInviteTemplateWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentInviteTemplateWhereUniqueInput, 'id'>;

    @Field(() => AssignmentInviteTemplateUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateUpdateWithoutInstitutionInput)
    update!: AssignmentInviteTemplateUpdateWithoutInstitutionInput;

    @Field(() => AssignmentInviteTemplateCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateCreateWithoutInstitutionInput)
    create!: AssignmentInviteTemplateCreateWithoutInstitutionInput;
}
