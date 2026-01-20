import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Float } from '@nestjs/graphql';
import { EntityType } from '../prisma/entity-type.enum';

@ObjectType()
export class ActivityFundingMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    activity_id?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    entity_contribution_amount?: Decimal;

    @Field(() => Float, {nullable:true})
    entity_contribution_percent?: number;

    @Field(() => EntityType, {nullable:true})
    entity_type?: `${EntityType}`;

    @Field(() => String, {nullable:true})
    entity_id?: string;

    @Field(() => Boolean, {nullable:true})
    validated?: boolean;

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
}
