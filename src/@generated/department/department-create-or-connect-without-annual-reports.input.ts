import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutAnnual_reportsInput } from './department-create-without-annual-reports.input';

@InputType()
export class DepartmentCreateOrConnectWithoutAnnual_reportsInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentCreateWithoutAnnual_reportsInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutAnnual_reportsInput)
    create!: DepartmentCreateWithoutAnnual_reportsInput;
}
