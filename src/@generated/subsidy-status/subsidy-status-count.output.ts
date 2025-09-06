import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SubsidyStatusCount {

    @Field(() => Int, {nullable:false})
    subsidy_requests?: number;
}
