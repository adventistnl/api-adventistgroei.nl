import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EntityType } from '../prisma/entity-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@InputType()
export class FundingPoliciesUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => EntityType, {nullable:false})
    entity_type!: `${EntityType}`;

    @Field(() => String, {nullable:false})
    entity_id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    max_percent!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    annual_cap!: Decimal;

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;
}
