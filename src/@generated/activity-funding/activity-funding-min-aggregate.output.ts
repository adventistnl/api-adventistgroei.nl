import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EntityType } from '../prisma/entity-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ActivityFundingMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    activity_id?: string;

    @Field(() => EntityType, {nullable:true})
    entity_type?: `${EntityType}`;

    @Field(() => String, {nullable:true})
    entity_id?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    entity_contribution_amount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    entity_contribution_percent?: Decimal;

    @Field(() => Boolean, {nullable:true})
    validated?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    project_activity_id?: string;
}
