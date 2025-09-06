import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutContactInput } from './region-create-without-contact.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutContactInput } from './region-create-or-connect-without-contact.input';
import { RegionUpsertWithWhereUniqueWithoutContactInput } from './region-upsert-with-where-unique-without-contact.input';
import { RegionCreateManyContactInputEnvelope } from './region-create-many-contact-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { RegionUpdateWithWhereUniqueWithoutContactInput } from './region-update-with-where-unique-without-contact.input';
import { RegionUpdateManyWithWhereWithoutContactInput } from './region-update-many-with-where-without-contact.input';
import { RegionScalarWhereInput } from './region-scalar-where.input';

@InputType()
export class RegionUpdateManyWithoutContactNestedInput {

    @Field(() => [RegionCreateWithoutContactInput], {nullable:true})
    @Type(() => RegionCreateWithoutContactInput)
    create?: Array<RegionCreateWithoutContactInput>;

    @Field(() => [RegionCreateOrConnectWithoutContactInput], {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutContactInput)
    connectOrCreate?: Array<RegionCreateOrConnectWithoutContactInput>;

    @Field(() => [RegionUpsertWithWhereUniqueWithoutContactInput], {nullable:true})
    @Type(() => RegionUpsertWithWhereUniqueWithoutContactInput)
    upsert?: Array<RegionUpsertWithWhereUniqueWithoutContactInput>;

    @Field(() => RegionCreateManyContactInputEnvelope, {nullable:true})
    @Type(() => RegionCreateManyContactInputEnvelope)
    createMany?: RegionCreateManyContactInputEnvelope;

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

    @Field(() => [RegionUpdateWithWhereUniqueWithoutContactInput], {nullable:true})
    @Type(() => RegionUpdateWithWhereUniqueWithoutContactInput)
    update?: Array<RegionUpdateWithWhereUniqueWithoutContactInput>;

    @Field(() => [RegionUpdateManyWithWhereWithoutContactInput], {nullable:true})
    @Type(() => RegionUpdateManyWithWhereWithoutContactInput)
    updateMany?: Array<RegionUpdateManyWithWhereWithoutContactInput>;

    @Field(() => [RegionScalarWhereInput], {nullable:true})
    @Type(() => RegionScalarWhereInput)
    deleteMany?: Array<RegionScalarWhereInput>;
}
