import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { ActivityStatus } from '../prisma/activity-status.enum';
import { ActivityPriority } from '../prisma/activity-priority.enum';

@ObjectType()
export class ProjectActivityMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    project_id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    budget_amount?: Decimal;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => Date, {nullable:true})
    deadline?: Date | string;

    @Field(() => String, {nullable:true})
    owner_id?: string;

    @Field(() => ActivityStatus, {nullable:true})
    status?: `${ActivityStatus}`;

    @Field(() => ActivityPriority, {nullable:true})
    priority?: `${ActivityPriority}`;

    @Field(() => Boolean, {nullable:true})
    is_subsidized?: boolean;
}
