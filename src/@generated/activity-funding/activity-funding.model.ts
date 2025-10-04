import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Float } from '@nestjs/graphql';
import { EntityType } from '../prisma/entity-type.enum';
import { ProjectActivity } from '../project-activity/project-activity.model';

@ObjectType()
export class ActivityFunding {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    activity_id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    entity_contribution_amount!: Decimal;

    @Field(() => Float, {nullable:false})
    entity_contribution_percent!: number;

    @Field(() => EntityType, {nullable:false})
    entity_type!: `${EntityType}`;

    @Field(() => String, {nullable:false})
    entity_id!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    validated!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => ProjectActivity, {nullable:false})
    activity?: ProjectActivity;
}
