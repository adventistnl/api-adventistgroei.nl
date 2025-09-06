import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutContactInput } from './region-create-without-contact.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutContactInput } from './region-create-or-connect-without-contact.input';
import { RegionCreateManyContactInputEnvelope } from './region-create-many-contact-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RegionWhereUniqueInput } from './region-where-unique.input';

@InputType()
export class RegionUncheckedCreateNestedManyWithoutContactInput {

    @Field(() => [RegionCreateWithoutContactInput], {nullable:true})
    @Type(() => RegionCreateWithoutContactInput)
    create?: Array<RegionCreateWithoutContactInput>;

    @Field(() => [RegionCreateOrConnectWithoutContactInput], {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutContactInput)
    connectOrCreate?: Array<RegionCreateOrConnectWithoutContactInput>;

    @Field(() => RegionCreateManyContactInputEnvelope, {nullable:true})
    @Type(() => RegionCreateManyContactInputEnvelope)
    createMany?: RegionCreateManyContactInputEnvelope;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RegionWhereUniqueInput, 'id'>>;
}
