import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AssignmentOrigin } from '../prisma/assignment-origin.enum';
import { AssignmentStatus } from '../prisma/assignment-status.enum';
import { AssignmentCountAggregate } from './assignment-count-aggregate.output';
import { AssignmentMinAggregate } from './assignment-min-aggregate.output';
import { AssignmentMaxAggregate } from './assignment-max-aggregate.output';

@ObjectType()
export class AssignmentGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    church_id!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => AssignmentOrigin, {nullable:false})
    origin!: `${AssignmentOrigin}`;

    @Field(() => AssignmentStatus, {nullable:false})
    status!: `${AssignmentStatus}`;

    @Field(() => Date, {nullable:true})
    locked_at?: Date | string;

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

    @Field(() => AssignmentCountAggregate, {nullable:true})
    _count?: AssignmentCountAggregate;

    @Field(() => AssignmentMinAggregate, {nullable:true})
    _min?: AssignmentMinAggregate;

    @Field(() => AssignmentMaxAggregate, {nullable:true})
    _max?: AssignmentMaxAggregate;
}
