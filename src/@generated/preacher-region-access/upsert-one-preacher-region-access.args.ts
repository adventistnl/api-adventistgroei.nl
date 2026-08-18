import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PreacherRegionAccessWhereUniqueInput } from './preacher-region-access-where-unique.input';
import { Type } from 'class-transformer';
import { PreacherRegionAccessCreateInput } from './preacher-region-access-create.input';
import { PreacherRegionAccessUpdateInput } from './preacher-region-access-update.input';

@ArgsType()
export class UpsertOnePreacherRegionAccessArgs {

    @Field(() => PreacherRegionAccessWhereUniqueInput, {nullable:false})
    @Type(() => PreacherRegionAccessWhereUniqueInput)
    where!: Prisma.AtLeast<PreacherRegionAccessWhereUniqueInput, 'id' | 'user_id_region_id'>;

    @Field(() => PreacherRegionAccessCreateInput, {nullable:false})
    @Type(() => PreacherRegionAccessCreateInput)
    create!: PreacherRegionAccessCreateInput;

    @Field(() => PreacherRegionAccessUpdateInput, {nullable:false})
    @Type(() => PreacherRegionAccessUpdateInput)
    update!: PreacherRegionAccessUpdateInput;
}
