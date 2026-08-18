import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { PreacherRegionAccessUncheckedCreateNestedManyWithoutRegionInput } from '../preacher-region-access/preacher-region-access-unchecked-create-nested-many-without-region.input';

@InputType()
export class RegionUncheckedCreateWithoutChurchesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    territory?: any;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => PreacherRegionAccessUncheckedCreateNestedManyWithoutRegionInput, {nullable:true})
    preacher_region_access?: PreacherRegionAccessUncheckedCreateNestedManyWithoutRegionInput;
}
