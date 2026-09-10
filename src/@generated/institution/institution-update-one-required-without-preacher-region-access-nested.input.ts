import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutPreacher_region_accessInput } from './institution-create-without-preacher-region-access.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutPreacher_region_accessInput } from './institution-create-or-connect-without-preacher-region-access.input';
import { InstitutionUpsertWithoutPreacher_region_accessInput } from './institution-upsert-without-preacher-region-access.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateToOneWithWhereWithoutPreacher_region_accessInput } from './institution-update-to-one-with-where-without-preacher-region-access.input';

@InputType()
export class InstitutionUpdateOneRequiredWithoutPreacher_region_accessNestedInput {

    @Field(() => InstitutionCreateWithoutPreacher_region_accessInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutPreacher_region_accessInput)
    create?: InstitutionCreateWithoutPreacher_region_accessInput;

    @Field(() => InstitutionCreateOrConnectWithoutPreacher_region_accessInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutPreacher_region_accessInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutPreacher_region_accessInput;

    @Field(() => InstitutionUpsertWithoutPreacher_region_accessInput, {nullable:true})
    @Type(() => InstitutionUpsertWithoutPreacher_region_accessInput)
    upsert?: InstitutionUpsertWithoutPreacher_region_accessInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateToOneWithWhereWithoutPreacher_region_accessInput, {nullable:true})
    @Type(() => InstitutionUpdateToOneWithWhereWithoutPreacher_region_accessInput)
    update?: InstitutionUpdateToOneWithWhereWithoutPreacher_region_accessInput;
}
