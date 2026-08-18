import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreacherRegionAccessUpdateInput } from './preacher-region-access-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PreacherRegionAccessWhereUniqueInput } from './preacher-region-access-where-unique.input';

@ArgsType()
export class UpdateOnePreacherRegionAccessArgs {

    @Field(() => PreacherRegionAccessUpdateInput, {nullable:false})
    @Type(() => PreacherRegionAccessUpdateInput)
    data!: PreacherRegionAccessUpdateInput;

    @Field(() => PreacherRegionAccessWhereUniqueInput, {nullable:false})
    @Type(() => PreacherRegionAccessWhereUniqueInput)
    where!: Prisma.AtLeast<PreacherRegionAccessWhereUniqueInput, 'id' | 'user_id_region_id'>;
}
