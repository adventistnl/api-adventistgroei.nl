import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreacherRegionAccessCreateWithoutRegionInput } from './preacher-region-access-create-without-region.input';
import { Type } from 'class-transformer';
import { PreacherRegionAccessCreateOrConnectWithoutRegionInput } from './preacher-region-access-create-or-connect-without-region.input';
import { PreacherRegionAccessUpsertWithWhereUniqueWithoutRegionInput } from './preacher-region-access-upsert-with-where-unique-without-region.input';
import { PreacherRegionAccessCreateManyRegionInputEnvelope } from './preacher-region-access-create-many-region-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PreacherRegionAccessWhereUniqueInput } from './preacher-region-access-where-unique.input';
import { PreacherRegionAccessUpdateWithWhereUniqueWithoutRegionInput } from './preacher-region-access-update-with-where-unique-without-region.input';
import { PreacherRegionAccessUpdateManyWithWhereWithoutRegionInput } from './preacher-region-access-update-many-with-where-without-region.input';
import { PreacherRegionAccessScalarWhereInput } from './preacher-region-access-scalar-where.input';

@InputType()
export class PreacherRegionAccessUncheckedUpdateManyWithoutRegionNestedInput {

    @Field(() => [PreacherRegionAccessCreateWithoutRegionInput], {nullable:true})
    @Type(() => PreacherRegionAccessCreateWithoutRegionInput)
    create?: Array<PreacherRegionAccessCreateWithoutRegionInput>;

    @Field(() => [PreacherRegionAccessCreateOrConnectWithoutRegionInput], {nullable:true})
    @Type(() => PreacherRegionAccessCreateOrConnectWithoutRegionInput)
    connectOrCreate?: Array<PreacherRegionAccessCreateOrConnectWithoutRegionInput>;

    @Field(() => [PreacherRegionAccessUpsertWithWhereUniqueWithoutRegionInput], {nullable:true})
    @Type(() => PreacherRegionAccessUpsertWithWhereUniqueWithoutRegionInput)
    upsert?: Array<PreacherRegionAccessUpsertWithWhereUniqueWithoutRegionInput>;

    @Field(() => PreacherRegionAccessCreateManyRegionInputEnvelope, {nullable:true})
    @Type(() => PreacherRegionAccessCreateManyRegionInputEnvelope)
    createMany?: PreacherRegionAccessCreateManyRegionInputEnvelope;

    @Field(() => [PreacherRegionAccessWhereUniqueInput], {nullable:true})
    @Type(() => PreacherRegionAccessWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PreacherRegionAccessWhereUniqueInput, 'id' | 'user_id_region_id'>>;

    @Field(() => [PreacherRegionAccessWhereUniqueInput], {nullable:true})
    @Type(() => PreacherRegionAccessWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PreacherRegionAccessWhereUniqueInput, 'id' | 'user_id_region_id'>>;

    @Field(() => [PreacherRegionAccessWhereUniqueInput], {nullable:true})
    @Type(() => PreacherRegionAccessWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PreacherRegionAccessWhereUniqueInput, 'id' | 'user_id_region_id'>>;

    @Field(() => [PreacherRegionAccessWhereUniqueInput], {nullable:true})
    @Type(() => PreacherRegionAccessWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PreacherRegionAccessWhereUniqueInput, 'id' | 'user_id_region_id'>>;

    @Field(() => [PreacherRegionAccessUpdateWithWhereUniqueWithoutRegionInput], {nullable:true})
    @Type(() => PreacherRegionAccessUpdateWithWhereUniqueWithoutRegionInput)
    update?: Array<PreacherRegionAccessUpdateWithWhereUniqueWithoutRegionInput>;

    @Field(() => [PreacherRegionAccessUpdateManyWithWhereWithoutRegionInput], {nullable:true})
    @Type(() => PreacherRegionAccessUpdateManyWithWhereWithoutRegionInput)
    updateMany?: Array<PreacherRegionAccessUpdateManyWithWhereWithoutRegionInput>;

    @Field(() => [PreacherRegionAccessScalarWhereInput], {nullable:true})
    @Type(() => PreacherRegionAccessScalarWhereInput)
    deleteMany?: Array<PreacherRegionAccessScalarWhereInput>;
}
