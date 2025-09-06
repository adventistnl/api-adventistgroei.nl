import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutSubsidy_statusesInput } from './department-create-without-subsidy-statuses.input';

@InputType()
export class DepartmentCreateOrConnectWithoutSubsidy_statusesInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentCreateWithoutSubsidy_statusesInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutSubsidy_statusesInput)
    create!: DepartmentCreateWithoutSubsidy_statusesInput;
}
