import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PreacherRegionAccessWhereUniqueInput } from './preacher-region-access-where-unique.input';
import { Type } from 'class-transformer';
import { PreacherRegionAccessUpdateWithoutUserInput } from './preacher-region-access-update-without-user.input';
import { PreacherRegionAccessCreateWithoutUserInput } from './preacher-region-access-create-without-user.input';

@InputType()
export class PreacherRegionAccessUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => PreacherRegionAccessWhereUniqueInput, {nullable:false})
    @Type(() => PreacherRegionAccessWhereUniqueInput)
    where!: Prisma.AtLeast<PreacherRegionAccessWhereUniqueInput, 'id' | 'user_id_region_id'>;

    @Field(() => PreacherRegionAccessUpdateWithoutUserInput, {nullable:false})
    @Type(() => PreacherRegionAccessUpdateWithoutUserInput)
    update!: PreacherRegionAccessUpdateWithoutUserInput;

    @Field(() => PreacherRegionAccessCreateWithoutUserInput, {nullable:false})
    @Type(() => PreacherRegionAccessCreateWithoutUserInput)
    create!: PreacherRegionAccessCreateWithoutUserInput;
}
