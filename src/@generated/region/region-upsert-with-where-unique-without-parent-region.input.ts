import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { Type } from 'class-transformer';
import { RegionUpdateWithoutParent_regionInput } from './region-update-without-parent-region.input';
import { RegionCreateWithoutParent_regionInput } from './region-create-without-parent-region.input';

@InputType()
export class RegionUpsertWithWhereUniqueWithoutParent_regionInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    @Type(() => RegionWhereUniqueInput)
    where!: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;

    @Field(() => RegionUpdateWithoutParent_regionInput, {nullable:false})
    @Type(() => RegionUpdateWithoutParent_regionInput)
    update!: RegionUpdateWithoutParent_regionInput;

    @Field(() => RegionCreateWithoutParent_regionInput, {nullable:false})
    @Type(() => RegionCreateWithoutParent_regionInput)
    create!: RegionCreateWithoutParent_regionInput;
}
