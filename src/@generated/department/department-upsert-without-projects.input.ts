import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateWithoutProjectsInput } from './department-update-without-projects.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutProjectsInput } from './department-create-without-projects.input';
import { DepartmentWhereInput } from './department-where.input';

@InputType()
export class DepartmentUpsertWithoutProjectsInput {

    @Field(() => DepartmentUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutProjectsInput)
    update!: DepartmentUpdateWithoutProjectsInput;

    @Field(() => DepartmentCreateWithoutProjectsInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutProjectsInput)
    create!: DepartmentCreateWithoutProjectsInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;
}
