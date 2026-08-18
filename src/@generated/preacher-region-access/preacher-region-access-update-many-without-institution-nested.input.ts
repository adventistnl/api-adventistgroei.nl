import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreacherRegionAccessCreateWithoutInstitutionInput } from './preacher-region-access-create-without-institution.input';
import { Type } from 'class-transformer';
import { PreacherRegionAccessCreateOrConnectWithoutInstitutionInput } from './preacher-region-access-create-or-connect-without-institution.input';
import { PreacherRegionAccessUpsertWithWhereUniqueWithoutInstitutionInput } from './preacher-region-access-upsert-with-where-unique-without-institution.input';
import { PreacherRegionAccessCreateManyInstitutionInputEnvelope } from './preacher-region-access-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PreacherRegionAccessWhereUniqueInput } from './preacher-region-access-where-unique.input';
import { PreacherRegionAccessUpdateWithWhereUniqueWithoutInstitutionInput } from './preacher-region-access-update-with-where-unique-without-institution.input';
import { PreacherRegionAccessUpdateManyWithWhereWithoutInstitutionInput } from './preacher-region-access-update-many-with-where-without-institution.input';
import { PreacherRegionAccessScalarWhereInput } from './preacher-region-access-scalar-where.input';

@InputType()
export class PreacherRegionAccessUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [PreacherRegionAccessCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => PreacherRegionAccessCreateWithoutInstitutionInput)
    create?: Array<PreacherRegionAccessCreateWithoutInstitutionInput>;

    @Field(() => [PreacherRegionAccessCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => PreacherRegionAccessCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<PreacherRegionAccessCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [PreacherRegionAccessUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => PreacherRegionAccessUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<PreacherRegionAccessUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => PreacherRegionAccessCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => PreacherRegionAccessCreateManyInstitutionInputEnvelope)
    createMany?: PreacherRegionAccessCreateManyInstitutionInputEnvelope;

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

    @Field(() => [PreacherRegionAccessUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => PreacherRegionAccessUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<PreacherRegionAccessUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [PreacherRegionAccessUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => PreacherRegionAccessUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<PreacherRegionAccessUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [PreacherRegionAccessScalarWhereInput], {nullable:true})
    @Type(() => PreacherRegionAccessScalarWhereInput)
    deleteMany?: Array<PreacherRegionAccessScalarWhereInput>;
}
