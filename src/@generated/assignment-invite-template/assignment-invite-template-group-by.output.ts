import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AssignmentInviteTemplateCountAggregate } from './assignment-invite-template-count-aggregate.output';
import { AssignmentInviteTemplateMinAggregate } from './assignment-invite-template-min-aggregate.output';
import { AssignmentInviteTemplateMaxAggregate } from './assignment-invite-template-max-aggregate.output';

@ObjectType()
export class AssignmentInviteTemplateGroupBy {

    @Field(() => String, {nullable:false})
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
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => AssignmentInviteTemplateCountAggregate, {nullable:true})
    _count?: AssignmentInviteTemplateCountAggregate;

    @Field(() => AssignmentInviteTemplateMinAggregate, {nullable:true})
    _min?: AssignmentInviteTemplateMinAggregate;

    @Field(() => AssignmentInviteTemplateMaxAggregate, {nullable:true})
    _max?: AssignmentInviteTemplateMaxAggregate;
}
