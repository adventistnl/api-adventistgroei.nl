import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutRegionInput } from './church-create-without-region.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutRegionInput } from './church-create-or-connect-without-region.input';
import { ChurchUpsertWithWhereUniqueWithoutRegionInput } from './church-upsert-with-where-unique-without-region.input';
import { ChurchCreateManyRegionInputEnvelope } from './church-create-many-region-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { ChurchUpdateWithWhereUniqueWithoutRegionInput } from './church-update-with-where-unique-without-region.input';
import { ChurchUpdateManyWithWhereWithoutRegionInput } from './church-update-many-with-where-without-region.input';
import { ChurchScalarWhereInput } from './church-scalar-where.input';

@InputType()
export class ChurchUncheckedUpdateManyWithoutRegionNestedInput {

    @Field(() => [ChurchCreateWithoutRegionInput], {nullable:true})
    @Type(() => ChurchCreateWithoutRegionInput)
    create?: Array<ChurchCreateWithoutRegionInput>;

    @Field(() => [ChurchCreateOrConnectWithoutRegionInput], {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutRegionInput)
    connectOrCreate?: Array<ChurchCreateOrConnectWithoutRegionInput>;

    @Field(() => [ChurchUpsertWithWhereUniqueWithoutRegionInput], {nullable:true})
    @Type(() => ChurchUpsertWithWhereUniqueWithoutRegionInput)
    upsert?: Array<ChurchUpsertWithWhereUniqueWithoutRegionInput>;

    @Field(() => ChurchCreateManyRegionInputEnvelope, {nullable:true})
    @Type(() => ChurchCreateManyRegionInputEnvelope)
    createMany?: ChurchCreateManyRegionInputEnvelope;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>>;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>>;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>>;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>>;

    @Field(() => [ChurchUpdateWithWhereUniqueWithoutRegionInput], {nullable:true})
    @Type(() => ChurchUpdateWithWhereUniqueWithoutRegionInput)
    update?: Array<ChurchUpdateWithWhereUniqueWithoutRegionInput>;

    @Field(() => [ChurchUpdateManyWithWhereWithoutRegionInput], {nullable:true})
    @Type(() => ChurchUpdateManyWithWhereWithoutRegionInput)
    updateMany?: Array<ChurchUpdateManyWithWhereWithoutRegionInput>;

    @Field(() => [ChurchScalarWhereInput], {nullable:true})
    @Type(() => ChurchScalarWhereInput)
    deleteMany?: Array<ChurchScalarWhereInput>;
}
