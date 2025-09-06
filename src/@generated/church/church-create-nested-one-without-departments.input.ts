import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutDepartmentsInput } from './church-create-without-departments.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutDepartmentsInput } from './church-create-or-connect-without-departments.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';

@InputType()
export class ChurchCreateNestedOneWithoutDepartmentsInput {

    @Field(() => ChurchCreateWithoutDepartmentsInput, {nullable:true})
    @Type(() => ChurchCreateWithoutDepartmentsInput)
    create?: ChurchCreateWithoutDepartmentsInput;

    @Field(() => ChurchCreateOrConnectWithoutDepartmentsInput, {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutDepartmentsInput)
    connectOrCreate?: ChurchCreateOrConnectWithoutDepartmentsInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>;
}
