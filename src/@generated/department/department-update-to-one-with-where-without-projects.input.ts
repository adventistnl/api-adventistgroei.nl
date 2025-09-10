import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutProjectsInput } from './department-update-without-projects.input';

@InputType()
export class DepartmentUpdateToOneWithWhereWithoutProjectsInput {

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;

    @Field(() => DepartmentUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutProjectsInput)
    data!: DepartmentUpdateWithoutProjectsInput;
}
