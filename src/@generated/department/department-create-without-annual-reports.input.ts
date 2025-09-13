import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { InstitutionCreateNestedOneWithoutDepartmentsInput } from '../institution/institution-create-nested-one-without-departments.input';
import { ChurchCreateNestedOneWithoutDepartmentsInput } from '../church/church-create-nested-one-without-departments.input';
import { ContactCreateNestedOneWithoutDepartmentInput } from '../contact/contact-create-nested-one-without-department.input';
import { SubsidyStatusCreateNestedManyWithoutDepartmentInput } from '../subsidy-status/subsidy-status-create-nested-many-without-department.input';
import { ProjectCreateNestedManyWithoutDepartmentInput } from '../project/project-create-nested-many-without-department.input';
import { SubsidyRequestCreateNestedManyWithoutDepartmentInput } from '../subsidy-request/subsidy-request-create-nested-many-without-department.input';
import { UserCreateNestedManyWithoutDepartmentInput } from '../user/user-create-nested-many-without-department.input';

@InputType()
export class DepartmentCreateWithoutAnnual_reportsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    annual_budget!: Decimal;

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

    @Field(() => InstitutionCreateNestedOneWithoutDepartmentsInput, {nullable:false})
    @Type(() => InstitutionCreateNestedOneWithoutDepartmentsInput)
    institution!: InstitutionCreateNestedOneWithoutDepartmentsInput;

    @Field(() => ChurchCreateNestedOneWithoutDepartmentsInput, {nullable:false})
    @Type(() => ChurchCreateNestedOneWithoutDepartmentsInput)
    church!: ChurchCreateNestedOneWithoutDepartmentsInput;

    @Field(() => ContactCreateNestedOneWithoutDepartmentInput, {nullable:true})
    @Type(() => ContactCreateNestedOneWithoutDepartmentInput)
    contact?: ContactCreateNestedOneWithoutDepartmentInput;

    @Field(() => SubsidyStatusCreateNestedManyWithoutDepartmentInput, {nullable:true})
    @Type(() => SubsidyStatusCreateNestedManyWithoutDepartmentInput)
    subsidy_statuses?: SubsidyStatusCreateNestedManyWithoutDepartmentInput;

    @Field(() => ProjectCreateNestedManyWithoutDepartmentInput, {nullable:true})
    @Type(() => ProjectCreateNestedManyWithoutDepartmentInput)
    projects?: ProjectCreateNestedManyWithoutDepartmentInput;

    @Field(() => SubsidyRequestCreateNestedManyWithoutDepartmentInput, {nullable:true})
    @Type(() => SubsidyRequestCreateNestedManyWithoutDepartmentInput)
    subsidy_requests?: SubsidyRequestCreateNestedManyWithoutDepartmentInput;

    @Field(() => UserCreateNestedManyWithoutDepartmentInput, {nullable:true})
    @Type(() => UserCreateNestedManyWithoutDepartmentInput)
    users?: UserCreateNestedManyWithoutDepartmentInput;
}
