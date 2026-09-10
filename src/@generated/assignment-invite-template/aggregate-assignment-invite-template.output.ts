import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AssignmentInviteTemplateCountAggregate } from './assignment-invite-template-count-aggregate.output';
import { AssignmentInviteTemplateMinAggregate } from './assignment-invite-template-min-aggregate.output';
import { AssignmentInviteTemplateMaxAggregate } from './assignment-invite-template-max-aggregate.output';

@ObjectType()
export class AggregateAssignmentInviteTemplate {

    @Field(() => AssignmentInviteTemplateCountAggregate, {nullable:true})
    _count?: AssignmentInviteTemplateCountAggregate;

    @Field(() => AssignmentInviteTemplateMinAggregate, {nullable:true})
    _min?: AssignmentInviteTemplateMinAggregate;

    @Field(() => AssignmentInviteTemplateMaxAggregate, {nullable:true})
    _max?: AssignmentInviteTemplateMaxAggregate;
}
