import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProjectAdjustment } from '../project-adjustment/project-adjustment.model';

@ObjectType()
export class AdjustmentTask {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    adjustment_id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    completed!: boolean;

    @Field(() => Int, {defaultValue:0,nullable:false})
    position!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => ProjectAdjustment, {nullable:false})
    adjustment?: ProjectAdjustment;
}
