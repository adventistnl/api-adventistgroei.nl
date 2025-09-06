import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutMission_projectsInput } from './department-create-without-mission-projects.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutMission_projectsInput } from './department-create-or-connect-without-mission-projects.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedOneWithoutMission_projectsInput {

    @Field(() => DepartmentCreateWithoutMission_projectsInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutMission_projectsInput)
    create?: DepartmentCreateWithoutMission_projectsInput;

    @Field(() => DepartmentCreateOrConnectWithoutMission_projectsInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutMission_projectsInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutMission_projectsInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;
}
