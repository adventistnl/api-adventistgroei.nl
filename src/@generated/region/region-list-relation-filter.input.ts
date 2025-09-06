import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionWhereInput } from './region-where.input';

@InputType()
export class RegionListRelationFilter {

    @Field(() => RegionWhereInput, {nullable:true})
    every?: RegionWhereInput;

    @Field(() => RegionWhereInput, {nullable:true})
    some?: RegionWhereInput;

    @Field(() => RegionWhereInput, {nullable:true})
    none?: RegionWhereInput;
}
