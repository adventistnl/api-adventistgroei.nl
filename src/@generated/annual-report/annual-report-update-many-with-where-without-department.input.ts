import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualReportScalarWhereInput } from './annual-report-scalar-where.input';
import { Type } from 'class-transformer';
import { AnnualReportUpdateManyMutationInput } from './annual-report-update-many-mutation.input';

@InputType()
export class AnnualReportUpdateManyWithWhereWithoutDepartmentInput {

    @Field(() => AnnualReportScalarWhereInput, {nullable:false})
    @Type(() => AnnualReportScalarWhereInput)
    where!: AnnualReportScalarWhereInput;

    @Field(() => AnnualReportUpdateManyMutationInput, {nullable:false})
    @Type(() => AnnualReportUpdateManyMutationInput)
    data!: AnnualReportUpdateManyMutationInput;
}
