import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreacherRegionAccessCreateWithoutRegionInput } from './preacher-region-access-create-without-region.input';
import { Type } from 'class-transformer';
import { PreacherRegionAccessCreateOrConnectWithoutRegionInput } from './preacher-region-access-create-or-connect-without-region.input';
import { PreacherRegionAccessCreateManyRegionInputEnvelope } from './preacher-region-access-create-many-region-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PreacherRegionAccessWhereUniqueInput } from './preacher-region-access-where-unique.input';

@InputType()
export class PreacherRegionAccessUncheckedCreateNestedManyWithoutRegionInput {

    @Field(() => [PreacherRegionAccessCreateWithoutRegionInput], {nullable:true})
    @Type(() => PreacherRegionAccessCreateWithoutRegionInput)
    create?: Array<PreacherRegionAccessCreateWithoutRegionInput>;

    @Field(() => [PreacherRegionAccessCreateOrConnectWithoutRegionInput], {nullable:true})
    @Type(() => PreacherRegionAccessCreateOrConnectWithoutRegionInput)
    connectOrCreate?: Array<PreacherRegionAccessCreateOrConnectWithoutRegionInput>;

    @Field(() => PreacherRegionAccessCreateManyRegionInputEnvelope, {nullable:true})
    @Type(() => PreacherRegionAccessCreateManyRegionInputEnvelope)
    createMany?: PreacherRegionAccessCreateManyRegionInputEnvelope;

    @Field(() => [PreacherRegionAccessWhereUniqueInput], {nullable:true})
    @Type(() => PreacherRegionAccessWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PreacherRegionAccessWhereUniqueInput, 'id' | 'user_id_region_id'>>;
}
