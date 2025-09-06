import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SubsidyRequestCount {

    @Field(() => Int, {nullable:false})
    subsidy_activities?: number;
}
