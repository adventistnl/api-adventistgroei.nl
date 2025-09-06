import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutAnnual_reportsInput } from './department-create-without-annual-reports.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutAnnual_reportsInput } from './department-create-or-connect-without-annual-reports.input';
import { DepartmentUpsertWithoutAnnual_reportsInput } from './department-upsert-without-annual-reports.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateToOneWithWhereWithoutAnnual_reportsInput } from './department-update-to-one-with-where-without-annual-reports.input';

@InputType()
export class DepartmentUpdateOneRequiredWithoutAnnual_reportsNestedInput {

    @Field(() => DepartmentCreateWithoutAnnual_reportsInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutAnnual_reportsInput)
    create?: DepartmentCreateWithoutAnnual_reportsInput;

    @Field(() => DepartmentCreateOrConnectWithoutAnnual_reportsInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutAnnual_reportsInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutAnnual_reportsInput;

    @Field(() => DepartmentUpsertWithoutAnnual_reportsInput, {nullable:true})
    @Type(() => DepartmentUpsertWithoutAnnual_reportsInput)
    upsert?: DepartmentUpsertWithoutAnnual_reportsInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentUpdateToOneWithWhereWithoutAnnual_reportsInput, {nullable:true})
    @Type(() => DepartmentUpdateToOneWithWhereWithoutAnnual_reportsInput)
    update?: DepartmentUpdateToOneWithWhereWithoutAnnual_reportsInput;
}
