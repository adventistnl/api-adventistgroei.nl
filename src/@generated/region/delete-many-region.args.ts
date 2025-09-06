import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionWhereInput } from './region-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyRegionArgs {

    @Field(() => RegionWhereInput, {nullable:true})
    @Type(() => RegionWhereInput)
    where?: RegionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
