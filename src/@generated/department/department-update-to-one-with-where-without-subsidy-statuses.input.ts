import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutSubsidy_statusesInput } from './department-update-without-subsidy-statuses.input';

@InputType()
export class DepartmentUpdateToOneWithWhereWithoutSubsidy_statusesInput {

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;

    @Field(() => DepartmentUpdateWithoutSubsidy_statusesInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutSubsidy_statusesInput)
    data!: DepartmentUpdateWithoutSubsidy_statusesInput;
}
