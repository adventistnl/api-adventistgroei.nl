import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnnualReportWhereInput } from './annual-report-where.input';
import { Type } from 'class-transformer';
import { AnnualReportOrderByWithRelationInput } from './annual-report-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AnnualReportWhereUniqueInput } from './annual-report-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AnnualReportScalarFieldEnum } from './annual-report-scalar-field.enum';

@ArgsType()
export class FindManyAnnualReportArgs {

    @Field(() => AnnualReportWhereInput, {nullable:true})
    @Type(() => AnnualReportWhereInput)
    where?: AnnualReportWhereInput;

    @Field(() => [AnnualReportOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AnnualReportOrderByWithRelationInput>;

    @Field(() => AnnualReportWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AnnualReportWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AnnualReportScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AnnualReportScalarFieldEnum}`>;
}
