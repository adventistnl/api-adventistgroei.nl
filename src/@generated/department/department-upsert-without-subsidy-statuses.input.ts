import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateWithoutSubsidy_statusesInput } from './department-update-without-subsidy-statuses.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutSubsidy_statusesInput } from './department-create-without-subsidy-statuses.input';
import { DepartmentWhereInput } from './department-where.input';

@InputType()
export class DepartmentUpsertWithoutSubsidy_statusesInput {

    @Field(() => DepartmentUpdateWithoutSubsidy_statusesInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutSubsidy_statusesInput)
    update!: DepartmentUpdateWithoutSubsidy_statusesInput;

    @Field(() => DepartmentCreateWithoutSubsidy_statusesInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutSubsidy_statusesInput)
    create!: DepartmentCreateWithoutSubsidy_statusesInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;
}
