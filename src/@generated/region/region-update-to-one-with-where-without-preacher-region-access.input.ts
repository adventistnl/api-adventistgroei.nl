import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionWhereInput } from './region-where.input';
import { Type } from 'class-transformer';
import { RegionUpdateWithoutPreacher_region_accessInput } from './region-update-without-preacher-region-access.input';

@InputType()
export class RegionUpdateToOneWithWhereWithoutPreacher_region_accessInput {

    @Field(() => RegionWhereInput, {nullable:true})
    @Type(() => RegionWhereInput)
    where?: RegionWhereInput;

    @Field(() => RegionUpdateWithoutPreacher_region_accessInput, {nullable:false})
    @Type(() => RegionUpdateWithoutPreacher_region_accessInput)
    data!: RegionUpdateWithoutPreacher_region_accessInput;
}
