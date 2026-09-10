import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateNestedOneWithoutPreacher_region_accessInput } from '../institution/institution-create-nested-one-without-preacher-region-access.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutPreacher_region_accessInput } from '../user/user-create-nested-one-without-preacher-region-access.input';

@InputType()
export class PreacherRegionAccessCreateWithoutRegionInput {

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
}
