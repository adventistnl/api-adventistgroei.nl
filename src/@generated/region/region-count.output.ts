import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RegionCount {

    @Field(() => Int, {nullable:false})
    children?: number;

    @Field(() => Int, {nullable:false})
    churches?: number;
}
