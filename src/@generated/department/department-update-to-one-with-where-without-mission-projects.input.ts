import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutMission_projectsInput } from './department-update-without-mission-projects.input';

@InputType()
export class DepartmentUpdateToOneWithWhereWithoutMission_projectsInput {

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;

    @Field(() => DepartmentUpdateWithoutMission_projectsInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutMission_projectsInput)
    data!: DepartmentUpdateWithoutMission_projectsInput;
}
