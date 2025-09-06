import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutParent_regionInput } from './region-create-without-parent-region.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutParent_regionInput } from './region-create-or-connect-without-parent-region.input';
import { RegionUpsertWithWhereUniqueWithoutParent_regionInput } from './region-upsert-with-where-unique-without-parent-region.input';
import { RegionCreateManyParent_regionInputEnvelope } from './region-create-many-parent-region-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { RegionUpdateWithWhereUniqueWithoutParent_regionInput } from './region-update-with-where-unique-without-parent-region.input';
import { RegionUpdateManyWithWhereWithoutParent_regionInput } from './region-update-many-with-where-without-parent-region.input';
import { RegionScalarWhereInput } from './region-scalar-where.input';

@InputType()
export class RegionUpdateManyWithoutParent_regionNestedInput {

    @Field(() => [RegionCreateWithoutParent_regionInput], {nullable:true})
    @Type(() => RegionCreateWithoutParent_regionInput)
    create?: Array<RegionCreateWithoutParent_regionInput>;

    @Field(() => [RegionCreateOrConnectWithoutParent_regionInput], {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutParent_regionInput)
    connectOrCreate?: Array<RegionCreateOrConnectWithoutParent_regionInput>;

    @Field(() => [RegionUpsertWithWhereUniqueWithoutParent_regionInput], {nullable:true})
    @Type(() => RegionUpsertWithWhereUniqueWithoutParent_regionInput)
    upsert?: Array<RegionUpsertWithWhereUniqueWithoutParent_regionInput>;

    @Field(() => RegionCreateManyParent_regionInputEnvelope, {nullable:true})
    @Type(() => RegionCreateManyParent_regionInputEnvelope)
    createMany?: RegionCreateManyParent_regionInputEnvelope;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RegionWhereUniqueInput, 'id'>>;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RegionWhereUniqueInput, 'id'>>;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RegionWhereUniqueInput, 'id'>>;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RegionWhereUniqueInput, 'id'>>;

    @Field(() => [RegionUpdateWithWhereUniqueWithoutParent_regionInput], {nullable:true})
    @Type(() => RegionUpdateWithWhereUniqueWithoutParent_regionInput)
    update?: Array<RegionUpdateWithWhereUniqueWithoutParent_regionInput>;

    @Field(() => [RegionUpdateManyWithWhereWithoutParent_regionInput], {nullable:true})
    @Type(() => RegionUpdateManyWithWhereWithoutParent_regionInput)
    updateMany?: Array<RegionUpdateManyWithWhereWithoutParent_regionInput>;

    @Field(() => [RegionScalarWhereInput], {nullable:true})
    @Type(() => RegionScalarWhereInput)
    deleteMany?: Array<RegionScalarWhereInput>;
}
