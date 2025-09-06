import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnualReportCreateInput } from './annual-report-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAnnualReportArgs {

    @Field(() => AnnualReportCreateInput, {nullable:false})
    @Type(() => AnnualReportCreateInput)
    data!: AnnualReportCreateInput;
}
