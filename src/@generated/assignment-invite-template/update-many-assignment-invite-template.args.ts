import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentInviteTemplateUpdateManyMutationInput } from './assignment-invite-template-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AssignmentInviteTemplateWhereInput } from './assignment-invite-template-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyAssignmentInviteTemplateArgs {

    @Field(() => AssignmentInviteTemplateUpdateManyMutationInput, {nullable:false})
    @Type(() => AssignmentInviteTemplateUpdateManyMutationInput)
    data!: AssignmentInviteTemplateUpdateManyMutationInput;

    @Field(() => AssignmentInviteTemplateWhereInput, {nullable:true})
    @Type(() => AssignmentInviteTemplateWhereInput)
    where?: AssignmentInviteTemplateWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
