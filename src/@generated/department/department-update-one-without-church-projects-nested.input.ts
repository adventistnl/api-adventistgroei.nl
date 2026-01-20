import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutChurch_projectsInput } from './department-create-without-church-projects.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutChurch_projectsInput } from './department-create-or-connect-without-church-projects.input';
import { DepartmentUpsertWithoutChurch_projectsInput } from './department-upsert-without-church-projects.input';
import { DepartmentWhereInput } from './department-where.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateToOneWithWhereWithoutChurch_projectsInput } from './department-update-to-one-with-where-without-church-projects.input';

@InputType()
export class DepartmentUpdateOneWithoutChurch_projectsNestedInput {

    @Field(() => DepartmentCreateWithoutChurch_projectsInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutChurch_projectsInput)
    create?: DepartmentCreateWithoutChurch_projectsInput;

    @Field(() => DepartmentCreateOrConnectWithoutChurch_projectsInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutChurch_projectsInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutChurch_projectsInput;

    @Field(() => DepartmentUpsertWithoutChurch_projectsInput, {nullable:true})
    @Type(() => DepartmentUpsertWithoutChurch_projectsInput)
    upsert?: DepartmentUpsertWithoutChurch_projectsInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    disconnect?: DepartmentWhereInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    delete?: DepartmentWhereInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentUpdateToOneWithWhereWithoutChurch_projectsInput, {nullable:true})
    @Type(() => DepartmentUpdateToOneWithWhereWithoutChurch_projectsInput)
    update?: DepartmentUpdateToOneWithWhereWithoutChurch_projectsInput;
}
