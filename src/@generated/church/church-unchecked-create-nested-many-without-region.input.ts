import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutRegionInput } from './church-create-without-region.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutRegionInput } from './church-create-or-connect-without-region.input';
import { ChurchCreateManyRegionInputEnvelope } from './church-create-many-region-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';

@InputType()
export class ChurchUncheckedCreateNestedManyWithoutRegionInput {

    @Field(() => [ChurchCreateWithoutRegionInput], {nullable:true})
    @Type(() => ChurchCreateWithoutRegionInput)
    create?: Array<ChurchCreateWithoutRegionInput>;

    @Field(() => [ChurchCreateOrConnectWithoutRegionInput], {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutRegionInput)
    connectOrCreate?: Array<ChurchCreateOrConnectWithoutRegionInput>;

    @Field(() => ChurchCreateManyRegionInputEnvelope, {nullable:true})
    @Type(() => ChurchCreateManyRegionInputEnvelope)
    createMany?: ChurchCreateManyRegionInputEnvelope;

    @Field(() => [ChurchWhereUniqueInput], {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>>;
}
