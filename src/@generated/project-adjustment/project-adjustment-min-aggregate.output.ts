import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdjustmentStatus } from '../prisma/adjustment-status.enum';

@ObjectType()
export class ProjectAdjustmentMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    project_history_id?: string;

    @Field(() => AdjustmentStatus, {nullable:true})
    status?: `${AdjustmentStatus}`;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;
}
