import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateNestedOneWithoutPreacher_region_accessInput } from '../institution/institution-create-nested-one-without-preacher-region-access.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutPreacher_region_accessInput } from '../user/user-create-nested-one-without-preacher-region-access.input';
import { RegionCreateNestedOneWithoutPreacher_region_accessInput } from '../region/region-create-nested-one-without-preacher-region-access.input';

@InputType()
export class PreacherRegionAccessCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => InstitutionCreateNestedOneWithoutPreacher_region_accessInput, {nullable:false})
    @Type(() => InstitutionCreateNestedOneWithoutPreacher_region_accessInput)
    institution!: InstitutionCreateNestedOneWithoutPreacher_region_accessInput;

    @Field(() => UserCreateNestedOneWithoutPreacher_region_accessInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutPreacher_region_accessInput)
    user!: UserCreateNestedOneWithoutPreacher_region_accessInput;

    @Field(() => RegionCreateNestedOneWithoutPreacher_region_accessInput, {nullable:false})
    region!: RegionCreateNestedOneWithoutPreacher_region_accessInput;
}
