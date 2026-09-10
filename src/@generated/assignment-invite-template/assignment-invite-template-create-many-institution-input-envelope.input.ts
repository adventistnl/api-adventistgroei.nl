import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentInviteTemplateCreateManyInstitutionInput } from './assignment-invite-template-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class AssignmentInviteTemplateCreateManyInstitutionInputEnvelope {

    @Field(() => [AssignmentInviteTemplateCreateManyInstitutionInput], {nullable:false})
    @Type(() => AssignmentInviteTemplateCreateManyInstitutionInput)
    data!: Array<AssignmentInviteTemplateCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
