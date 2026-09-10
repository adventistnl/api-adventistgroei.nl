import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateNestedOneWithoutAssignment_invite_templatesInput } from '../institution/institution-create-nested-one-without-assignment-invite-templates.input';
import { Type } from 'class-transformer';
import { AssignmentRequestCreateNestedManyWithoutTemplateInput } from '../assignment-request/assignment-request-create-nested-many-without-template.input';

@InputType()
export class AssignmentInviteTemplateCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    subject!: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => InstitutionCreateNestedOneWithoutAssignment_invite_templatesInput, {nullable:false})
    @Type(() => InstitutionCreateNestedOneWithoutAssignment_invite_templatesInput)
    institution!: InstitutionCreateNestedOneWithoutAssignment_invite_templatesInput;

    @Field(() => AssignmentRequestCreateNestedManyWithoutTemplateInput, {nullable:true})
    requests?: AssignmentRequestCreateNestedManyWithoutTemplateInput;
}
