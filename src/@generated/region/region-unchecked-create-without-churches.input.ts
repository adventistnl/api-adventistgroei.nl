import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionUncheckedCreateNestedManyWithoutParent_regionInput } from './region-unchecked-create-nested-many-without-parent-region.input';

@InputType()
export class RegionUncheckedCreateWithoutChurchesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    parent_region_id?: string;

    @Field(() => String, {nullable:true})
    contact_id?: string;

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

    @Field(() => RegionUncheckedCreateNestedManyWithoutParent_regionInput, {nullable:true})
    children?: RegionUncheckedCreateNestedManyWithoutParent_regionInput;
}
