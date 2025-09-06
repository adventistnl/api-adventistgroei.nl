import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutParent_regionInput } from './region-create-without-parent-region.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutParent_regionInput } from './region-create-or-connect-without-parent-region.input';
import { RegionCreateManyParent_regionInputEnvelope } from './region-create-many-parent-region-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';

@InputType()
export class RegionCreateNestedManyWithoutParent_regionInput {

    @Field(() => [RegionCreateWithoutParent_regionInput], {nullable:true})
    @Type(() => RegionCreateWithoutParent_regionInput)
    create?: Array<RegionCreateWithoutParent_regionInput>;

    @Field(() => [RegionCreateOrConnectWithoutParent_regionInput], {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutParent_regionInput)
    connectOrCreate?: Array<RegionCreateOrConnectWithoutParent_regionInput>;

    @Field(() => RegionCreateManyParent_regionInputEnvelope, {nullable:true})
    @Type(() => RegionCreateManyParent_regionInputEnvelope)
    createMany?: RegionCreateManyParent_regionInputEnvelope;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RegionWhereUniqueInput, 'id'>>;
}
