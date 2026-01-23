import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ChurchAvgAggregate {

    @Field(() => Float, {nullable:true})
    house_number?: number;
}
