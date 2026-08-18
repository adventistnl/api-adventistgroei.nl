import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreacherRegionAccessCreateWithoutUserInput } from './preacher-region-access-create-without-user.input';
import { Type } from 'class-transformer';
import { PreacherRegionAccessCreateOrConnectWithoutUserInput } from './preacher-region-access-create-or-connect-without-user.input';
import { PreacherRegionAccessUpsertWithWhereUniqueWithoutUserInput } from './preacher-region-access-upsert-with-where-unique-without-user.input';
import { PreacherRegionAccessCreateManyUserInputEnvelope } from './preacher-region-access-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PreacherRegionAccessWhereUniqueInput } from './preacher-region-access-where-unique.input';
import { PreacherRegionAccessUpdateWithWhereUniqueWithoutUserInput } from './preacher-region-access-update-with-where-unique-without-user.input';
import { PreacherRegionAccessUpdateManyWithWhereWithoutUserInput } from './preacher-region-access-update-many-with-where-without-user.input';
import { PreacherRegionAccessScalarWhereInput } from './preacher-region-access-scalar-where.input';

@InputType()
export class PreacherRegionAccessUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [PreacherRegionAccessCreateWithoutUserInput], {nullable:true})
    @Type(() => PreacherRegionAccessCreateWithoutUserInput)
    create?: Array<PreacherRegionAccessCreateWithoutUserInput>;

    @Field(() => [PreacherRegionAccessCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PreacherRegionAccessCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PreacherRegionAccessCreateOrConnectWithoutUserInput>;

    @Field(() => [PreacherRegionAccessUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PreacherRegionAccessUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PreacherRegionAccessUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PreacherRegionAccessCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PreacherRegionAccessCreateManyUserInputEnvelope)
    createMany?: PreacherRegionAccessCreateManyUserInputEnvelope;

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

    @Field(() => [PreacherRegionAccessUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PreacherRegionAccessUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PreacherRegionAccessUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PreacherRegionAccessUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PreacherRegionAccessUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PreacherRegionAccessUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PreacherRegionAccessScalarWhereInput], {nullable:true})
    @Type(() => PreacherRegionAccessScalarWhereInput)
    deleteMany?: Array<PreacherRegionAccessScalarWhereInput>;
}
