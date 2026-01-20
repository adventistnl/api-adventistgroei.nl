import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutChurch_projectsInput } from './department-update-without-church-projects.input';

@InputType()
export class DepartmentUpdateToOneWithWhereWithoutChurch_projectsInput {

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;

    @Field(() => DepartmentUpdateWithoutChurch_projectsInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutChurch_projectsInput)
    data!: DepartmentUpdateWithoutChurch_projectsInput;
}
