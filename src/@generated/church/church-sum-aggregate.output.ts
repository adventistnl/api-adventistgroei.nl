import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ChurchSumAggregate {

    @Field(() => Int, {nullable:true})
    house_number?: number;
}
