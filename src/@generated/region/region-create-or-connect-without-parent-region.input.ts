import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { Type } from 'class-transformer';
import { RegionCreateWithoutParent_regionInput } from './region-create-without-parent-region.input';

@InputType()
export class RegionCreateOrConnectWithoutParent_regionInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    @Type(() => RegionWhereUniqueInput)
    where!: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;

    @Field(() => RegionCreateWithoutParent_regionInput, {nullable:false})
    @Type(() => RegionCreateWithoutParent_regionInput)
    create!: RegionCreateWithoutParent_regionInput;
}
