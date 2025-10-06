import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutDepartmentsInput } from './church-create-without-departments.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutDepartmentsInput } from './church-create-or-connect-without-departments.input';
import { ChurchUpsertWithoutDepartmentsInput } from './church-upsert-without-departments.input';
import { ChurchWhereInput } from './church-where.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { ChurchUpdateToOneWithWhereWithoutDepartmentsInput } from './church-update-to-one-with-where-without-departments.input';

@InputType()
export class ChurchUpdateOneWithoutDepartmentsNestedInput {

    @Field(() => ChurchCreateWithoutDepartmentsInput, {nullable:true})
    @Type(() => ChurchCreateWithoutDepartmentsInput)
    create?: ChurchCreateWithoutDepartmentsInput;

    @Field(() => ChurchCreateOrConnectWithoutDepartmentsInput, {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutDepartmentsInput)
    connectOrCreate?: ChurchCreateOrConnectWithoutDepartmentsInput;

    @Field(() => ChurchUpsertWithoutDepartmentsInput, {nullable:true})
    @Type(() => ChurchUpsertWithoutDepartmentsInput)
    upsert?: ChurchUpsertWithoutDepartmentsInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    disconnect?: ChurchWhereInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    delete?: ChurchWhereInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>;

    @Field(() => ChurchUpdateToOneWithWhereWithoutDepartmentsInput, {nullable:true})
    @Type(() => ChurchUpdateToOneWithWhereWithoutDepartmentsInput)
    update?: ChurchUpdateToOneWithWhereWithoutDepartmentsInput;
}
