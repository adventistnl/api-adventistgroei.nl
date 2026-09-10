import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentRequestUncheckedCreateNestedManyWithoutTemplateInput } from '../assignment-request/assignment-request-unchecked-create-nested-many-without-template.input';

@InputType()
export class AssignmentInviteTemplateUncheckedCreateWithoutInstitutionInput {

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

    @Field(() => AssignmentRequestUncheckedCreateNestedManyWithoutTemplateInput, {nullable:true})
    requests?: AssignmentRequestUncheckedCreateNestedManyWithoutTemplateInput;
}
