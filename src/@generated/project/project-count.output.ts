import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProjectCount {

    @Field(() => Int, {nullable:false})
    voluntary_users?: number;

    @Field(() => Int, {nullable:false})
    activities?: number;

    @Field(() => Int, {nullable:false})
    subsidies?: number;

    @Field(() => Int, {nullable:false})
    special_projects?: number;

    @Field(() => Int, {nullable:false})
    history?: number;

    @Field(() => Int, {nullable:false})
    budget_transactions?: number;

    @Field(() => Int, {nullable:false})
    notifications?: number;
}
