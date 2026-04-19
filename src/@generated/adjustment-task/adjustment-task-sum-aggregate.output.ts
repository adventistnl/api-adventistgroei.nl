import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AdjustmentTaskSumAggregate {

    @Field(() => Int, {nullable:true})
    position?: number;
}
