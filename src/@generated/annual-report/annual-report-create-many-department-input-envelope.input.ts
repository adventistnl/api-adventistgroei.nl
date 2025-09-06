import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualReportCreateManyDepartmentInput } from './annual-report-create-many-department.input';
import { Type } from 'class-transformer';

@InputType()
export class AnnualReportCreateManyDepartmentInputEnvelope {

    @Field(() => [AnnualReportCreateManyDepartmentInput], {nullable:false})
    @Type(() => AnnualReportCreateManyDepartmentInput)
    data!: Array<AnnualReportCreateManyDepartmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
