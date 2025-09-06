import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchWhereInput } from './church-where.input';
import { Type } from 'class-transformer';
import { ChurchUpdateWithoutDepartmentsInput } from './church-update-without-departments.input';

@InputType()
export class ChurchUpdateToOneWithWhereWithoutDepartmentsInput {

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;

    @Field(() => ChurchUpdateWithoutDepartmentsInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutDepartmentsInput)
    data!: ChurchUpdateWithoutDepartmentsInput;
}
