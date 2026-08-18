import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentInviteTemplateCreateManyInput } from './assignment-invite-template-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAssignmentInviteTemplateArgs {

    @Field(() => [AssignmentInviteTemplateCreateManyInput], {nullable:false})
    @Type(() => AssignmentInviteTemplateCreateManyInput)
    data!: Array<AssignmentInviteTemplateCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
