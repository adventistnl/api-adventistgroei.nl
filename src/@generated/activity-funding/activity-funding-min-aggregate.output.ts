import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ActivityFundingMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    activity_id?: string;

    @Field(() => String, {nullable:true})
    entity_type?: string;

    @Field(() => String, {nullable:true})
    entity_id?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    contribution_amount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    contribution_percent?: Decimal;

    @Field(() => Boolean, {nullable:true})
    validated?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
