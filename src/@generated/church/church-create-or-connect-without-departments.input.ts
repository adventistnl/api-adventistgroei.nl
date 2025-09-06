import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutDepartmentsInput } from './church-create-without-departments.input';

@InputType()
export class ChurchCreateOrConnectWithoutDepartmentsInput {

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>;

    @Field(() => ChurchCreateWithoutDepartmentsInput, {nullable:false})
    @Type(() => ChurchCreateWithoutDepartmentsInput)
    create!: ChurchCreateWithoutDepartmentsInput;
}
