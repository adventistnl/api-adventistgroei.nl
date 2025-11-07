import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUncheckedCreateNestedOneWithoutContactInput } from '../institution/institution-unchecked-create-nested-one-without-contact.input';
import { Type } from 'class-transformer';
import { ChurchUncheckedCreateNestedManyWithoutContactInput } from '../church/church-unchecked-create-nested-many-without-contact.input';
import { DepartmentUncheckedCreateNestedManyWithoutContactInput } from '../department/department-unchecked-create-nested-many-without-contact.input';
import { UserUncheckedCreateNestedManyWithoutContactInput } from '../user/user-unchecked-create-nested-many-without-contact.input';
import { EventUncheckedCreateNestedManyWithoutContactInput } from '../event/event-unchecked-create-nested-many-without-contact.input';

@InputType()
export class ContactUncheckedCreateInput {

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
    state?: string;

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

    @Field(() => InstitutionUncheckedCreateNestedOneWithoutContactInput, {nullable:true})
    @Type(() => InstitutionUncheckedCreateNestedOneWithoutContactInput)
    Institution?: InstitutionUncheckedCreateNestedOneWithoutContactInput;

    @Field(() => ChurchUncheckedCreateNestedManyWithoutContactInput, {nullable:true})
    @Type(() => ChurchUncheckedCreateNestedManyWithoutContactInput)
    Church?: ChurchUncheckedCreateNestedManyWithoutContactInput;

    @Field(() => DepartmentUncheckedCreateNestedManyWithoutContactInput, {nullable:true})
    @Type(() => DepartmentUncheckedCreateNestedManyWithoutContactInput)
    Department?: DepartmentUncheckedCreateNestedManyWithoutContactInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutContactInput, {nullable:true})
    @Type(() => UserUncheckedCreateNestedManyWithoutContactInput)
    User?: UserUncheckedCreateNestedManyWithoutContactInput;

    @Field(() => EventUncheckedCreateNestedManyWithoutContactInput, {nullable:true})
    @Type(() => EventUncheckedCreateNestedManyWithoutContactInput)
    Event?: EventUncheckedCreateNestedManyWithoutContactInput;
}
