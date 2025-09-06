import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { SubsidyActivityUncheckedCreateNestedManyWithoutSubsidy_requestInput } from '../subsidy-activity/subsidy-activity-unchecked-create-nested-many-without-subsidy-request.input';

@InputType()
export class SubsidyRequestUncheckedCreateWithoutInstitutionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    requester_id!: string;

    @Field(() => String, {nullable:false})
    department_project_id!: string;

    @Field(() => String, {nullable:false})
    church_id!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    total_budget!: Decimal;

    @Field(() => String, {nullable:false})
    subsidy_statuses_id!: string;

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

    @Field(() => SubsidyActivityUncheckedCreateNestedManyWithoutSubsidy_requestInput, {nullable:true})
    @Type(() => SubsidyActivityUncheckedCreateNestedManyWithoutSubsidy_requestInput)
    subsidy_activities?: SubsidyActivityUncheckedCreateNestedManyWithoutSubsidy_requestInput;
}
