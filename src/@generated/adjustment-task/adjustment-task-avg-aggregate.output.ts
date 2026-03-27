import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AdjustmentTaskAvgAggregate {

    @Field(() => Float, {nullable:true})
    position?: number;
}
