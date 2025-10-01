import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';

@ObjectType()
export class ActivityFunding {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    activity_id!: string;

    @Field(() => String, {nullable:false})
    entity_type!: string;

    @Field(() => String, {nullable:false})
    entity_id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    contribution_amount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    contribution_percent!: Decimal;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    validated!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;
}
