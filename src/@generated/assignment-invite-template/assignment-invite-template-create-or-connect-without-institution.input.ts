import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentInviteTemplateWhereUniqueInput } from './assignment-invite-template-where-unique.input';
import { Type } from 'class-transformer';
import { AssignmentInviteTemplateCreateWithoutInstitutionInput } from './assignment-invite-template-create-without-institution.input';

@InputType()
export class AssignmentInviteTemplateCreateOrConnectWithoutInstitutionInput {

    @Field(() => AssignmentInviteTemplateWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentInviteTemplateWhereUniqueInput, 'id'>;

    @Field(() => AssignmentInviteTemplateCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateCreateWithoutInstitutionInput)
    create!: AssignmentInviteTemplateCreateWithoutInstitutionInput;
}
