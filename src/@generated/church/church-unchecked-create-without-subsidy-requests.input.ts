import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUncheckedCreateNestedManyWithoutChurchInput } from '../department/department-unchecked-create-nested-many-without-church.input';
import { Type } from 'class-transformer';
import { UserUncheckedCreateNestedManyWithoutChurchInput } from '../user/user-unchecked-create-nested-many-without-church.input';

@InputType()
export class ChurchUncheckedCreateWithoutSubsidy_requestsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    region_id!: string;

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

    @Field(() => DepartmentUncheckedCreateNestedManyWithoutChurchInput, {nullable:true})
    @Type(() => DepartmentUncheckedCreateNestedManyWithoutChurchInput)
    departments?: DepartmentUncheckedCreateNestedManyWithoutChurchInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutChurchInput, {nullable:true})
    @Type(() => UserUncheckedCreateNestedManyWithoutChurchInput)
    users?: UserUncheckedCreateNestedManyWithoutChurchInput;
}
