import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutMission_projectsInput } from './department-create-without-mission-projects.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutMission_projectsInput } from './department-create-or-connect-without-mission-projects.input';
import { DepartmentUpsertWithoutMission_projectsInput } from './department-upsert-without-mission-projects.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateToOneWithWhereWithoutMission_projectsInput } from './department-update-to-one-with-where-without-mission-projects.input';

@InputType()
export class DepartmentUpdateOneRequiredWithoutMission_projectsNestedInput {

    @Field(() => DepartmentCreateWithoutMission_projectsInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutMission_projectsInput)
    create?: DepartmentCreateWithoutMission_projectsInput;

    @Field(() => DepartmentCreateOrConnectWithoutMission_projectsInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutMission_projectsInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutMission_projectsInput;

    @Field(() => DepartmentUpsertWithoutMission_projectsInput, {nullable:true})
    @Type(() => DepartmentUpsertWithoutMission_projectsInput)
    upsert?: DepartmentUpsertWithoutMission_projectsInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentUpdateToOneWithWhereWithoutMission_projectsInput, {nullable:true})
    @Type(() => DepartmentUpdateToOneWithWhereWithoutMission_projectsInput)
    update?: DepartmentUpdateToOneWithWhereWithoutMission_projectsInput;
}
