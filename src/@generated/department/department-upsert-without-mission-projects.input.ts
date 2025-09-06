import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateWithoutMission_projectsInput } from './department-update-without-mission-projects.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutMission_projectsInput } from './department-create-without-mission-projects.input';
import { DepartmentWhereInput } from './department-where.input';

@InputType()
export class DepartmentUpsertWithoutMission_projectsInput {

    @Field(() => DepartmentUpdateWithoutMission_projectsInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutMission_projectsInput)
    update!: DepartmentUpdateWithoutMission_projectsInput;

    @Field(() => DepartmentCreateWithoutMission_projectsInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutMission_projectsInput)
    create!: DepartmentCreateWithoutMission_projectsInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;
}
