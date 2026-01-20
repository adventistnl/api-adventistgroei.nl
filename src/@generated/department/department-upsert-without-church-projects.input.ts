import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateWithoutChurch_projectsInput } from './department-update-without-church-projects.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutChurch_projectsInput } from './department-create-without-church-projects.input';
import { DepartmentWhereInput } from './department-where.input';

@InputType()
export class DepartmentUpsertWithoutChurch_projectsInput {

    @Field(() => DepartmentUpdateWithoutChurch_projectsInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutChurch_projectsInput)
    update!: DepartmentUpdateWithoutChurch_projectsInput;

    @Field(() => DepartmentCreateWithoutChurch_projectsInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutChurch_projectsInput)
    create!: DepartmentCreateWithoutChurch_projectsInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;
}
