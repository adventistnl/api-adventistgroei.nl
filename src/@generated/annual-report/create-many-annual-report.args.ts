import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnualReportCreateManyInput } from './annual-report-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAnnualReportArgs {

    @Field(() => [AnnualReportCreateManyInput], {nullable:false})
    @Type(() => AnnualReportCreateManyInput)
    data!: Array<AnnualReportCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
