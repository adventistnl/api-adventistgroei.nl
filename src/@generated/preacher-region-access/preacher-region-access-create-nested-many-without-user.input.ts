import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreacherRegionAccessCreateWithoutUserInput } from './preacher-region-access-create-without-user.input';
import { Type } from 'class-transformer';
import { PreacherRegionAccessCreateOrConnectWithoutUserInput } from './preacher-region-access-create-or-connect-without-user.input';
import { PreacherRegionAccessCreateManyUserInputEnvelope } from './preacher-region-access-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PreacherRegionAccessWhereUniqueInput } from './preacher-region-access-where-unique.input';

@InputType()
export class PreacherRegionAccessCreateNestedManyWithoutUserInput {

    @Field(() => [PreacherRegionAccessCreateWithoutUserInput], {nullable:true})
    @Type(() => PreacherRegionAccessCreateWithoutUserInput)
    create?: Array<PreacherRegionAccessCreateWithoutUserInput>;

    @Field(() => [PreacherRegionAccessCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PreacherRegionAccessCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PreacherRegionAccessCreateOrConnectWithoutUserInput>;

    @Field(() => PreacherRegionAccessCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PreacherRegionAccessCreateManyUserInputEnvelope)
    createMany?: PreacherRegionAccessCreateManyUserInputEnvelope;

    @Field(() => [PreacherRegionAccessWhereUniqueInput], {nullable:true})
    @Type(() => PreacherRegionAccessWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PreacherRegionAccessWhereUniqueInput, 'id' | 'user_id_region_id'>>;
}
