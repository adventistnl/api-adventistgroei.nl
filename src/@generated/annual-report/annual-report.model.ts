import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Department } from '../department/department.model';

@ObjectType()
export class AnnualReport {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    department_id!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:false})
    file_path!: string;

    @Field(() => Date, {nullable:false})
    submission_date!: Date;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:true})
    deleted_by!: string | null;

    @Field(() => Department, {nullable:false})
    department?: Department;
}
