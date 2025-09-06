import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateWithoutSubsidy_requestsInput } from './department-update-without-subsidy-requests.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutSubsidy_requestsInput } from './department-create-without-subsidy-requests.input';
import { DepartmentWhereInput } from './department-where.input';

@InputType()
export class DepartmentUpsertWithoutSubsidy_requestsInput {

    @Field(() => DepartmentUpdateWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutSubsidy_requestsInput)
    update!: DepartmentUpdateWithoutSubsidy_requestsInput;

    @Field(() => DepartmentCreateWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutSubsidy_requestsInput)
    create!: DepartmentCreateWithoutSubsidy_requestsInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;
}
