import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AssignmentHistoryCountAggregate } from './assignment-history-count-aggregate.output';
import { AssignmentHistoryMinAggregate } from './assignment-history-min-aggregate.output';
import { AssignmentHistoryMaxAggregate } from './assignment-history-max-aggregate.output';

@ObjectType()
export class AssignmentHistoryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    assignment_id!: string;

    @Field(() => String, {nullable:false})
    field_name!: string;

    @Field(() => String, {nullable:true})
    old_value?: string;

    @Field(() => String, {nullable:true})
    new_value?: string;

    @Field(() => String, {nullable:false})
    changed_by!: string;

    @Field(() => Date, {nullable:false})
    changed_at!: Date | string;

    @Field(() => AssignmentHistoryCountAggregate, {nullable:true})
    _count?: AssignmentHistoryCountAggregate;

    @Field(() => AssignmentHistoryMinAggregate, {nullable:true})
    _min?: AssignmentHistoryMinAggregate;

    @Field(() => AssignmentHistoryMaxAggregate, {nullable:true})
    _max?: AssignmentHistoryMaxAggregate;
}
