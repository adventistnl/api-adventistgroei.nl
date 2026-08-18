import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentInviteTemplateWhereInput } from './assignment-invite-template-where.input';

@InputType()
export class AssignmentInviteTemplateNullableScalarRelationFilter {

    @Field(() => AssignmentInviteTemplateWhereInput, {nullable:true})
    is?: AssignmentInviteTemplateWhereInput;

    @Field(() => AssignmentInviteTemplateWhereInput, {nullable:true})
    isNot?: AssignmentInviteTemplateWhereInput;
}
