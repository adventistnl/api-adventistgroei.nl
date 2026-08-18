import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RequestType } from '../prisma/request-type.enum';
import { RequestStatus } from '../prisma/request-status.enum';
import { AssignmentRequestCountAggregate } from './assignment-request-count-aggregate.output';
import { AssignmentRequestMinAggregate } from './assignment-request-min-aggregate.output';
import { AssignmentRequestMaxAggregate } from './assignment-request-max-aggregate.output';

@ObjectType()
export class AssignmentRequestGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    church_id!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => RequestType, {nullable:false})
    type!: `${RequestType}`;

    @Field(() => RequestStatus, {nullable:false})
    status!: `${RequestStatus}`;

    @Field(() => String, {nullable:true})
    template_id?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:true})
    decided_at?: Date | string;

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

    @Field(() => AssignmentRequestCountAggregate, {nullable:true})
    _count?: AssignmentRequestCountAggregate;

    @Field(() => AssignmentRequestMinAggregate, {nullable:true})
    _min?: AssignmentRequestMinAggregate;

    @Field(() => AssignmentRequestMaxAggregate, {nullable:true})
    _max?: AssignmentRequestMaxAggregate;
}
