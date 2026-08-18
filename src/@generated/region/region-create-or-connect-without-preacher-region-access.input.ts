import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { Type } from 'class-transformer';
import { RegionCreateWithoutPreacher_region_accessInput } from './region-create-without-preacher-region-access.input';

@InputType()
export class RegionCreateOrConnectWithoutPreacher_region_accessInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    @Type(() => RegionWhereUniqueInput)
    where!: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;

    @Field(() => RegionCreateWithoutPreacher_region_accessInput, {nullable:false})
    @Type(() => RegionCreateWithoutPreacher_region_accessInput)
    create!: RegionCreateWithoutPreacher_region_accessInput;
}
