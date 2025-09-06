import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutSubsidy_requestsInput } from './department-update-without-subsidy-requests.input';

@InputType()
export class DepartmentUpdateToOneWithWhereWithoutSubsidy_requestsInput {

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;

    @Field(() => DepartmentUpdateWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutSubsidy_requestsInput)
    data!: DepartmentUpdateWithoutSubsidy_requestsInput;
}
