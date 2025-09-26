import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateNestedOneWithoutContactInput } from '../institution/institution-create-nested-one-without-contact.input';
import { Type } from 'class-transformer';
import { RegionCreateNestedManyWithoutContactInput } from '../region/region-create-nested-many-without-contact.input';
import { ChurchCreateNestedManyWithoutContactInput } from '../church/church-create-nested-many-without-contact.input';
import { DepartmentCreateNestedManyWithoutContactInput } from '../department/department-create-nested-many-without-contact.input';
import { UserCreateNestedManyWithoutContactInput } from '../user/user-create-nested-many-without-contact.input';

@InputType()
export class ContactCreateWithoutEventInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    mobile?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    full_address?: string;

    @Field(() => String, {nullable:true})
    postal_code?: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Boolean, {nullable:false})
    is_primary!: boolean;

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

    @Field(() => InstitutionCreateNestedOneWithoutContactInput, {nullable:true})
    @Type(() => InstitutionCreateNestedOneWithoutContactInput)
    Institution?: InstitutionCreateNestedOneWithoutContactInput;

    @Field(() => RegionCreateNestedManyWithoutContactInput, {nullable:true})
    @Type(() => RegionCreateNestedManyWithoutContactInput)
    Region?: RegionCreateNestedManyWithoutContactInput;

    @Field(() => ChurchCreateNestedManyWithoutContactInput, {nullable:true})
    @Type(() => ChurchCreateNestedManyWithoutContactInput)
    Church?: ChurchCreateNestedManyWithoutContactInput;

    @Field(() => DepartmentCreateNestedManyWithoutContactInput, {nullable:true})
    @Type(() => DepartmentCreateNestedManyWithoutContactInput)
    Department?: DepartmentCreateNestedManyWithoutContactInput;

    @Field(() => UserCreateNestedManyWithoutContactInput, {nullable:true})
    @Type(() => UserCreateNestedManyWithoutContactInput)
    User?: UserCreateNestedManyWithoutContactInput;
}
