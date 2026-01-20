import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EntityType } from '../prisma/entity-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FundingPoliciesMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => EntityType, {nullable:true})
    entity_type?: `${EntityType}`;

    @Field(() => String, {nullable:true})
    entity_id?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    max_percent?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    annual_cap?: Decimal;

    @Field(() => Int, {nullable:true})
    year?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;
}
