import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateNestedOneWithoutChurchesInput } from '../region/region-create-nested-one-without-churches.input';
import { ContactCreateNestedOneWithoutChurchInput } from '../contact/contact-create-nested-one-without-church.input';
import { Type } from 'class-transformer';
import { DepartmentCreateNestedManyWithoutChurchInput } from '../department/department-create-nested-many-without-church.input';
import { UserCreateNestedManyWithoutChurchInput } from '../user/user-create-nested-many-without-church.input';
import { SubsidyRequestCreateNestedManyWithoutChurchInput } from '../subsidy-request/subsidy-request-create-nested-many-without-church.input';

@InputType()
export class ChurchCreateWithoutInstitutionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

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

    @Field(() => RegionCreateNestedOneWithoutChurchesInput, {nullable:false})
    region!: RegionCreateNestedOneWithoutChurchesInput;

    @Field(() => ContactCreateNestedOneWithoutChurchInput, {nullable:true})
    @Type(() => ContactCreateNestedOneWithoutChurchInput)
    contact?: ContactCreateNestedOneWithoutChurchInput;

    @Field(() => DepartmentCreateNestedManyWithoutChurchInput, {nullable:true})
    @Type(() => DepartmentCreateNestedManyWithoutChurchInput)
    departments?: DepartmentCreateNestedManyWithoutChurchInput;

    @Field(() => UserCreateNestedManyWithoutChurchInput, {nullable:true})
    @Type(() => UserCreateNestedManyWithoutChurchInput)
    users?: UserCreateNestedManyWithoutChurchInput;

    @Field(() => SubsidyRequestCreateNestedManyWithoutChurchInput, {nullable:true})
    @Type(() => SubsidyRequestCreateNestedManyWithoutChurchInput)
    subsidy_requests?: SubsidyRequestCreateNestedManyWithoutChurchInput;
}
