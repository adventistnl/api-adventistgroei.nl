import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentInviteTemplateWhereInput } from './assignment-invite-template-where.input';

@InputType()
export class AssignmentInviteTemplateListRelationFilter {

    @Field(() => AssignmentInviteTemplateWhereInput, {nullable:true})
    every?: AssignmentInviteTemplateWhereInput;

    @Field(() => AssignmentInviteTemplateWhereInput, {nullable:true})
    some?: AssignmentInviteTemplateWhereInput;

    @Field(() => AssignmentInviteTemplateWhereInput, {nullable:true})
    none?: AssignmentInviteTemplateWhereInput;
}
