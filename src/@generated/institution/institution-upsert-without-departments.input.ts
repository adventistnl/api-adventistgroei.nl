import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutDepartmentsInput } from './institution-update-without-departments.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutDepartmentsInput } from './institution-create-without-departments.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutDepartmentsInput {

    @Field(() => InstitutionUpdateWithoutDepartmentsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutDepartmentsInput)
    update!: InstitutionUpdateWithoutDepartmentsInput;

    @Field(() => InstitutionCreateWithoutDepartmentsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutDepartmentsInput)
    create!: InstitutionCreateWithoutDepartmentsInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
