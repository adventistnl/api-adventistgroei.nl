import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutPreacher_region_accessInput } from './institution-update-without-preacher-region-access.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutPreacher_region_accessInput } from './institution-create-without-preacher-region-access.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutPreacher_region_accessInput {

    @Field(() => InstitutionUpdateWithoutPreacher_region_accessInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutPreacher_region_accessInput)
    update!: InstitutionUpdateWithoutPreacher_region_accessInput;

    @Field(() => InstitutionCreateWithoutPreacher_region_accessInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutPreacher_region_accessInput)
    create!: InstitutionCreateWithoutPreacher_region_accessInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
