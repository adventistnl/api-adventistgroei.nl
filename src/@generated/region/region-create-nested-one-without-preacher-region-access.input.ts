import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutPreacher_region_accessInput } from './region-create-without-preacher-region-access.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutPreacher_region_accessInput } from './region-create-or-connect-without-preacher-region-access.input';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';

@InputType()
export class RegionCreateNestedOneWithoutPreacher_region_accessInput {

    @Field(() => RegionCreateWithoutPreacher_region_accessInput, {nullable:true})
    @Type(() => RegionCreateWithoutPreacher_region_accessInput)
    create?: RegionCreateWithoutPreacher_region_accessInput;

    @Field(() => RegionCreateOrConnectWithoutPreacher_region_accessInput, {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutPreacher_region_accessInput)
    connectOrCreate?: RegionCreateOrConnectWithoutPreacher_region_accessInput;

    @Field(() => RegionWhereUniqueInput, {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;
}
