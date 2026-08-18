import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentInviteTemplateWhereInput } from './assignment-invite-template-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyAssignmentInviteTemplateArgs {

    @Field(() => AssignmentInviteTemplateWhereInput, {nullable:true})
    @Type(() => AssignmentInviteTemplateWhereInput)
    where?: AssignmentInviteTemplateWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
