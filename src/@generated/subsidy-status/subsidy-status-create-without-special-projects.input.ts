import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DepartmentCreateNestedOneWithoutSubsidy_statusesInput } from '../department/department-create-nested-one-without-subsidy-statuses.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutSubsidyStatusInput } from '../user/user-create-nested-one-without-subsidy-status.input';
import { SubsidyRequestCreateNestedManyWithoutSubsidy_statusInput } from '../subsidy-request/subsidy-request-create-nested-many-without-subsidy-status.input';

@InputType()
export class SubsidyStatusCreateWithoutSpecial_projectsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

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

    @Field(() => DepartmentCreateNestedOneWithoutSubsidy_statusesInput, {nullable:false})
    @Type(() => DepartmentCreateNestedOneWithoutSubsidy_statusesInput)
    department!: DepartmentCreateNestedOneWithoutSubsidy_statusesInput;

    @Field(() => UserCreateNestedOneWithoutSubsidyStatusInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutSubsidyStatusInput)
    assigned_user!: UserCreateNestedOneWithoutSubsidyStatusInput;

    @Field(() => SubsidyRequestCreateNestedManyWithoutSubsidy_statusInput, {nullable:true})
    @Type(() => SubsidyRequestCreateNestedManyWithoutSubsidy_statusInput)
    subsidy_requests?: SubsidyRequestCreateNestedManyWithoutSubsidy_statusInput;
}
