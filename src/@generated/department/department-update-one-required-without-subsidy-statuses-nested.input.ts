import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutSubsidy_statusesInput } from './department-create-without-subsidy-statuses.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutSubsidy_statusesInput } from './department-create-or-connect-without-subsidy-statuses.input';
import { DepartmentUpsertWithoutSubsidy_statusesInput } from './department-upsert-without-subsidy-statuses.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateToOneWithWhereWithoutSubsidy_statusesInput } from './department-update-to-one-with-where-without-subsidy-statuses.input';

@InputType()
export class DepartmentUpdateOneRequiredWithoutSubsidy_statusesNestedInput {

    @Field(() => DepartmentCreateWithoutSubsidy_statusesInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutSubsidy_statusesInput)
    create?: DepartmentCreateWithoutSubsidy_statusesInput;

    @Field(() => DepartmentCreateOrConnectWithoutSubsidy_statusesInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutSubsidy_statusesInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutSubsidy_statusesInput;

    @Field(() => DepartmentUpsertWithoutSubsidy_statusesInput, {nullable:true})
    @Type(() => DepartmentUpsertWithoutSubsidy_statusesInput)
    upsert?: DepartmentUpsertWithoutSubsidy_statusesInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentUpdateToOneWithWhereWithoutSubsidy_statusesInput, {nullable:true})
    @Type(() => DepartmentUpdateToOneWithWhereWithoutSubsidy_statusesInput)
    update?: DepartmentUpdateToOneWithWhereWithoutSubsidy_statusesInput;
}
