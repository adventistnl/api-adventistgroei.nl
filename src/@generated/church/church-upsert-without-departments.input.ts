import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchUpdateWithoutDepartmentsInput } from './church-update-without-departments.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutDepartmentsInput } from './church-create-without-departments.input';
import { ChurchWhereInput } from './church-where.input';

@InputType()
export class ChurchUpsertWithoutDepartmentsInput {

    @Field(() => ChurchUpdateWithoutDepartmentsInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutDepartmentsInput)
    update!: ChurchUpdateWithoutDepartmentsInput;

    @Field(() => ChurchCreateWithoutDepartmentsInput, {nullable:false})
    @Type(() => ChurchCreateWithoutDepartmentsInput)
    create!: ChurchCreateWithoutDepartmentsInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;
}
