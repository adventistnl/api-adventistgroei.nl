import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PreacherRegionAccessWhereUniqueInput } from './preacher-region-access-where-unique.input';
import { Type } from 'class-transformer';
import { PreacherRegionAccessUpdateWithoutInstitutionInput } from './preacher-region-access-update-without-institution.input';
import { PreacherRegionAccessCreateWithoutInstitutionInput } from './preacher-region-access-create-without-institution.input';

@InputType()
export class PreacherRegionAccessUpsertWithWhereUniqueWithoutInstitutionInput {

    @Field(() => PreacherRegionAccessWhereUniqueInput, {nullable:false})
    @Type(() => PreacherRegionAccessWhereUniqueInput)
    where!: Prisma.AtLeast<PreacherRegionAccessWhereUniqueInput, 'id' | 'user_id_region_id'>;

    @Field(() => PreacherRegionAccessUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => PreacherRegionAccessUpdateWithoutInstitutionInput)
    update!: PreacherRegionAccessUpdateWithoutInstitutionInput;

    @Field(() => PreacherRegionAccessCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => PreacherRegionAccessCreateWithoutInstitutionInput)
    create!: PreacherRegionAccessCreateWithoutInstitutionInput;
}
