import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProjectActivityCount {

    @Field(() => Int, {nullable:false})
    subsidy_request?: number;

    @Field(() => Int, {nullable:false})
    subsidy_receipts?: number;
}
