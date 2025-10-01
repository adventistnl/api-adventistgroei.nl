import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SpecialProjectsUncheckedCreateNestedManyWithoutSubsidy_statusInput } from '../special-projects/special-projects-unchecked-create-nested-many-without-subsidy-status.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyStatusUncheckedCreateWithoutSubsidy_requestsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    department_id!: string;

    @Field(() => String, {nullable:false})
    assigned_to!: string;

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

    @Field(() => SpecialProjectsUncheckedCreateNestedManyWithoutSubsidy_statusInput, {nullable:true})
    @Type(() => SpecialProjectsUncheckedCreateNestedManyWithoutSubsidy_statusInput)
    special_projects?: SpecialProjectsUncheckedCreateNestedManyWithoutSubsidy_statusInput;
}
