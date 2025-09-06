import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutAnnual_reportsInput } from './department-create-without-annual-reports.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutAnnual_reportsInput } from './department-create-or-connect-without-annual-reports.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedOneWithoutAnnual_reportsInput {

    @Field(() => DepartmentCreateWithoutAnnual_reportsInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutAnnual_reportsInput)
    create?: DepartmentCreateWithoutAnnual_reportsInput;

    @Field(() => DepartmentCreateOrConnectWithoutAnnual_reportsInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutAnnual_reportsInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutAnnual_reportsInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;
}
