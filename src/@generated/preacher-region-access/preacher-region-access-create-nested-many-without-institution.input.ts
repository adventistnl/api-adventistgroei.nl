import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreacherRegionAccessCreateWithoutInstitutionInput } from './preacher-region-access-create-without-institution.input';
import { Type } from 'class-transformer';
import { PreacherRegionAccessCreateOrConnectWithoutInstitutionInput } from './preacher-region-access-create-or-connect-without-institution.input';
import { PreacherRegionAccessCreateManyInstitutionInputEnvelope } from './preacher-region-access-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PreacherRegionAccessWhereUniqueInput } from './preacher-region-access-where-unique.input';

@InputType()
export class PreacherRegionAccessCreateNestedManyWithoutInstitutionInput {

    @Field(() => [PreacherRegionAccessCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => PreacherRegionAccessCreateWithoutInstitutionInput)
    create?: Array<PreacherRegionAccessCreateWithoutInstitutionInput>;

    @Field(() => [PreacherRegionAccessCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => PreacherRegionAccessCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<PreacherRegionAccessCreateOrConnectWithoutInstitutionInput>;

    @Field(() => PreacherRegionAccessCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => PreacherRegionAccessCreateManyInstitutionInputEnvelope)
    createMany?: PreacherRegionAccessCreateManyInstitutionInputEnvelope;

    @Field(() => [PreacherRegionAccessWhereUniqueInput], {nullable:true})
    @Type(() => PreacherRegionAccessWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PreacherRegionAccessWhereUniqueInput, 'id' | 'user_id_region_id'>>;
}
