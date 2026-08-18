import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionUpdateWithoutPreacher_region_accessInput } from './region-update-without-preacher-region-access.input';
import { Type } from 'class-transformer';
import { RegionCreateWithoutPreacher_region_accessInput } from './region-create-without-preacher-region-access.input';
import { RegionWhereInput } from './region-where.input';

@InputType()
export class RegionUpsertWithoutPreacher_region_accessInput {

    @Field(() => RegionUpdateWithoutPreacher_region_accessInput, {nullable:false})
    @Type(() => RegionUpdateWithoutPreacher_region_accessInput)
    update!: RegionUpdateWithoutPreacher_region_accessInput;

    @Field(() => RegionCreateWithoutPreacher_region_accessInput, {nullable:false})
    @Type(() => RegionCreateWithoutPreacher_region_accessInput)
    create!: RegionCreateWithoutPreacher_region_accessInput;

    @Field(() => RegionWhereInput, {nullable:true})
    @Type(() => RegionWhereInput)
    where?: RegionWhereInput;
}
