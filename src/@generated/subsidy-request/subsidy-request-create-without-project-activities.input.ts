import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { InstitutionCreateNestedOneWithoutSubsidy_requestsInput } from '../institution/institution-create-nested-one-without-subsidy-requests.input';
import { UserCreateNestedOneWithoutSubsidyRequestInput } from '../user/user-create-nested-one-without-subsidy-request.input';
import { DepartmentCreateNestedOneWithoutSubsidy_requestsInput } from '../department/department-create-nested-one-without-subsidy-requests.input';
import { ChurchCreateNestedOneWithoutSubsidy_requestsInput } from '../church/church-create-nested-one-without-subsidy-requests.input';
import { SubsidyStatusCreateNestedOneWithoutSubsidy_requestsInput } from '../subsidy-status/subsidy-status-create-nested-one-without-subsidy-requests.input';

@InputType()
export class SubsidyRequestCreateWithoutProject_activitiesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    total_budget!: Decimal;

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

    @Field(() => InstitutionCreateNestedOneWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => InstitutionCreateNestedOneWithoutSubsidy_requestsInput)
    institution!: InstitutionCreateNestedOneWithoutSubsidy_requestsInput;

    @Field(() => UserCreateNestedOneWithoutSubsidyRequestInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutSubsidyRequestInput)
    requester!: UserCreateNestedOneWithoutSubsidyRequestInput;

    @Field(() => DepartmentCreateNestedOneWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => DepartmentCreateNestedOneWithoutSubsidy_requestsInput)
    department!: DepartmentCreateNestedOneWithoutSubsidy_requestsInput;

    @Field(() => ChurchCreateNestedOneWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => ChurchCreateNestedOneWithoutSubsidy_requestsInput)
    church!: ChurchCreateNestedOneWithoutSubsidy_requestsInput;

    @Field(() => SubsidyStatusCreateNestedOneWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => SubsidyStatusCreateNestedOneWithoutSubsidy_requestsInput)
    subsidy_status!: SubsidyStatusCreateNestedOneWithoutSubsidy_requestsInput;
}
