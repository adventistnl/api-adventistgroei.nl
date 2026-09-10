import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RequestType } from '../prisma/request-type.enum';
import { RequestStatus } from '../prisma/request-status.enum';
import { Institution } from '../institution/institution.model';
import { Church } from '../church/church.model';
import { User } from '../user/user.model';
import { AssignmentInviteTemplate } from '../assignment-invite-template/assignment-invite-template.model';

/**
 * R5 — a pending candidature (preacher applied) or invite (church/admin invited), converging
 * on the same accept/decline flow (respondToAssignmentRequest). R7 — accepting one supersedes
 * every other pending request for the same church+date.
 */
@ObjectType({description:'R5 — a pending candidature (preacher applied) or invite (church/admin invited), converging\non the same accept/decline flow (respondToAssignmentRequest). R7 — accepting one supersedes\nevery other pending request for the same church+date.'})
export class AssignmentRequest {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    church_id!: string;

    @Field(() => Date, {nullable:false})
    date!: Date;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => RequestType, {nullable:false})
    type!: `${RequestType}`;

    @Field(() => RequestStatus, {defaultValue:'PENDING',nullable:false})
    status!: `${RequestStatus}`;

    @Field(() => String, {nullable:true})
    template_id!: string | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:true})
    decided_at!: Date | null;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:true})
    deleted_by!: string | null;

    @Field(() => Institution, {nullable:false})
    institution?: Institution;

    @Field(() => Church, {nullable:false})
    church?: Church;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => AssignmentInviteTemplate, {nullable:true})
    template?: AssignmentInviteTemplate | null;
}
