import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Institution } from '../institution/institution.model';
import { AssignmentRequest } from '../assignment-request/assignment-request.model';
import { AssignmentInviteTemplateCount } from './assignment-invite-template-count.output';

/**
 * R8.2 — reusable invite message templates, rendered through the existing MustacheService
 * (same mechanism as system emails) at send time. Distinct from the locale email JSON files,
 * which are fixed platform copy — this is per-institution, admin-authored content.
 */
@ObjectType({description:'R8.2 — reusable invite message templates, rendered through the existing MustacheService\n(same mechanism as system emails) at send time. Distinct from the locale email JSON files,\nwhich are fixed platform copy — this is per-institution, admin-authored content.'})
export class AssignmentInviteTemplate {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    subject!: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

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

    @Field(() => [AssignmentRequest], {nullable:true})
    requests?: Array<AssignmentRequest>;

    @Field(() => AssignmentInviteTemplateCount, {nullable:false})
    _count?: AssignmentInviteTemplateCount;
}
