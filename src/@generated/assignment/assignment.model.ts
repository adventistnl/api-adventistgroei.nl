import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AssignmentOrigin } from '../prisma/assignment-origin.enum';
import { AssignmentStatus } from '../prisma/assignment-status.enum';
import { Institution } from '../institution/institution.model';
import { Church } from '../church/church.model';
import { User } from '../user/user.model';

/**
 * A church + date slot. Created directly (R8 — "self-filled"/admin-assigned, via
 * setAssignment/setAssignmentAny) in Phase 3; Phase 4 adds the request/invite flow that also
 * produces confirmed rows here.
 */
@ObjectType({description:'A church + date slot. Created directly (R8 — "self-filled"/admin-assigned, via\nsetAssignment/setAssignmentAny) in Phase 3; Phase 4 adds the request/invite flow that also\nproduces confirmed rows here.'})
export class Assignment {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    church_id!: string;

    @Field(() => Date, {nullable:false})
    date!: Date;

    @Field(() => String, {nullable:true})
    user_id!: string | null;

    @Field(() => AssignmentOrigin, {nullable:false})
    origin!: `${AssignmentOrigin}`;

    @Field(() => AssignmentStatus, {defaultValue:'DRAFT',nullable:false})
    status!: `${AssignmentStatus}`;

    @Field(() => Date, {nullable:true})
    locked_at!: Date | null;

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

    @Field(() => Church, {nullable:false})
    church?: Church;

    @Field(() => User, {nullable:true})
    user?: User | null;
}
