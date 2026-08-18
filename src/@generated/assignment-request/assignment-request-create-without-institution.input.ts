import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RequestType } from '../prisma/request-type.enum';
import { RequestStatus } from '../prisma/request-status.enum';
import { ChurchCreateNestedOneWithoutAssignment_requestsInput } from '../church/church-create-nested-one-without-assignment-requests.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutAssignment_requestsInput } from '../user/user-create-nested-one-without-assignment-requests.input';
import { AssignmentInviteTemplateCreateNestedOneWithoutRequestsInput } from '../assignment-invite-template/assignment-invite-template-create-nested-one-without-requests.input';

@InputType()
export class AssignmentRequestCreateWithoutInstitutionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => RequestType, {nullable:false})
    type!: `${RequestType}`;

    @Field(() => RequestStatus, {nullable:true})
    status?: `${RequestStatus}`;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    decided_at?: Date | string;

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

    @Field(() => ChurchCreateNestedOneWithoutAssignment_requestsInput, {nullable:false})
    @Type(() => ChurchCreateNestedOneWithoutAssignment_requestsInput)
    church!: ChurchCreateNestedOneWithoutAssignment_requestsInput;

    @Field(() => UserCreateNestedOneWithoutAssignment_requestsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutAssignment_requestsInput)
    user!: UserCreateNestedOneWithoutAssignment_requestsInput;

    @Field(() => AssignmentInviteTemplateCreateNestedOneWithoutRequestsInput, {nullable:true})
    template?: AssignmentInviteTemplateCreateNestedOneWithoutRequestsInput;
}
