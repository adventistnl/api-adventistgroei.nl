import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutProjectsInput } from './department-create-without-projects.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutProjectsInput } from './department-create-or-connect-without-projects.input';
import { DepartmentUpsertWithoutProjectsInput } from './department-upsert-without-projects.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateToOneWithWhereWithoutProjectsInput } from './department-update-to-one-with-where-without-projects.input';

@InputType()
export class DepartmentUpdateOneRequiredWithoutProjectsNestedInput {

    @Field(() => DepartmentCreateWithoutProjectsInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutProjectsInput)
    create?: DepartmentCreateWithoutProjectsInput;

    @Field(() => DepartmentCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutProjectsInput;

    @Field(() => DepartmentUpsertWithoutProjectsInput, {nullable:true})
    @Type(() => DepartmentUpsertWithoutProjectsInput)
    upsert?: DepartmentUpsertWithoutProjectsInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentUpdateToOneWithWhereWithoutProjectsInput, {nullable:true})
    @Type(() => DepartmentUpdateToOneWithWhereWithoutProjectsInput)
    update?: DepartmentUpdateToOneWithWhereWithoutProjectsInput;
}
