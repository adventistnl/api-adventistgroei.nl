import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutDepartmentsInput } from './institution-update-without-departments.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutDepartmentsInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutDepartmentsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutDepartmentsInput)
    data!: InstitutionUpdateWithoutDepartmentsInput;
}
