import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PreacherRegionAccessWhereUniqueInput } from './preacher-region-access-where-unique.input';
import { Type } from 'class-transformer';
import { PreacherRegionAccessUpdateWithoutRegionInput } from './preacher-region-access-update-without-region.input';
import { PreacherRegionAccessCreateWithoutRegionInput } from './preacher-region-access-create-without-region.input';

@InputType()
export class PreacherRegionAccessUpsertWithWhereUniqueWithoutRegionInput {

    @Field(() => PreacherRegionAccessWhereUniqueInput, {nullable:false})
    @Type(() => PreacherRegionAccessWhereUniqueInput)
    where!: Prisma.AtLeast<PreacherRegionAccessWhereUniqueInput, 'id' | 'user_id_region_id'>;

    @Field(() => PreacherRegionAccessUpdateWithoutRegionInput, {nullable:false})
    @Type(() => PreacherRegionAccessUpdateWithoutRegionInput)
    update!: PreacherRegionAccessUpdateWithoutRegionInput;

    @Field(() => PreacherRegionAccessCreateWithoutRegionInput, {nullable:false})
    @Type(() => PreacherRegionAccessCreateWithoutRegionInput)
    create!: PreacherRegionAccessCreateWithoutRegionInput;
}
