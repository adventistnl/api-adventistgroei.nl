import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutPreacher_region_accessInput } from './region-create-without-preacher-region-access.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutPreacher_region_accessInput } from './region-create-or-connect-without-preacher-region-access.input';
import { RegionUpsertWithoutPreacher_region_accessInput } from './region-upsert-without-preacher-region-access.input';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { RegionUpdateToOneWithWhereWithoutPreacher_region_accessInput } from './region-update-to-one-with-where-without-preacher-region-access.input';

@InputType()
export class RegionUpdateOneRequiredWithoutPreacher_region_accessNestedInput {

    @Field(() => RegionCreateWithoutPreacher_region_accessInput, {nullable:true})
    @Type(() => RegionCreateWithoutPreacher_region_accessInput)
    create?: RegionCreateWithoutPreacher_region_accessInput;

    @Field(() => RegionCreateOrConnectWithoutPreacher_region_accessInput, {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutPreacher_region_accessInput)
    connectOrCreate?: RegionCreateOrConnectWithoutPreacher_region_accessInput;

    @Field(() => RegionUpsertWithoutPreacher_region_accessInput, {nullable:true})
    @Type(() => RegionUpsertWithoutPreacher_region_accessInput)
    upsert?: RegionUpsertWithoutPreacher_region_accessInput;

    @Field(() => RegionWhereUniqueInput, {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;

    @Field(() => RegionUpdateToOneWithWhereWithoutPreacher_region_accessInput, {nullable:true})
    @Type(() => RegionUpdateToOneWithWhereWithoutPreacher_region_accessInput)
    update?: RegionUpdateToOneWithWhereWithoutPreacher_region_accessInput;
}
