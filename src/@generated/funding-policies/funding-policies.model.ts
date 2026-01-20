import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { EntityType } from '../prisma/entity-type.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FundingPolicies {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => EntityType, {nullable:false})
    entity_type!: `${EntityType}`;

    @Field(() => String, {nullable:false})
    entity_id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    max_percent!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    annual_cap!: Decimal;

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    created_by!: string;
}
