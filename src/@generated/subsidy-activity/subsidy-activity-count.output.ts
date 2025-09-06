import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SubsidyActivityCount {

    @Field(() => Int, {nullable:false})
    subsidy_receipts?: number;
}
