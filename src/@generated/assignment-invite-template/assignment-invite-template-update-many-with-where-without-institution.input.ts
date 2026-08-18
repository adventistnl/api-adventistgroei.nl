import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentInviteTemplateScalarWhereInput } from './assignment-invite-template-scalar-where.input';
import { Type } from 'class-transformer';
import { AssignmentInviteTemplateUpdateManyMutationInput } from './assignment-invite-template-update-many-mutation.input';

@InputType()
export class AssignmentInviteTemplateUpdateManyWithWhereWithoutInstitutionInput {

    @Field(() => AssignmentInviteTemplateScalarWhereInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateScalarWhereInput)
    where!: AssignmentInviteTemplateScalarWhereInput;

    @Field(() => AssignmentInviteTemplateUpdateManyMutationInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateUpdateManyMutationInput)
    data!: AssignmentInviteTemplateUpdateManyMutationInput;
}
