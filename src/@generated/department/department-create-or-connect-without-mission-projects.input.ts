import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutMission_projectsInput } from './department-create-without-mission-projects.input';

@InputType()
export class DepartmentCreateOrConnectWithoutMission_projectsInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentCreateWithoutMission_projectsInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutMission_projectsInput)
    create!: DepartmentCreateWithoutMission_projectsInput;
}
