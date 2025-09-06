import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnualReportUpdateManyMutationInput } from './annual-report-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AnnualReportWhereInput } from './annual-report-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyAnnualReportArgs {

    @Field(() => AnnualReportUpdateManyMutationInput, {nullable:false})
    @Type(() => AnnualReportUpdateManyMutationInput)
    data!: AnnualReportUpdateManyMutationInput;

    @Field(() => AnnualReportWhereInput, {nullable:true})
    @Type(() => AnnualReportWhereInput)
    where?: AnnualReportWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
