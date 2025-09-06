import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestUpdateWithoutDepartmentInput } from './subsidy-request-update-without-department.input';
import { SubsidyRequestCreateWithoutDepartmentInput } from './subsidy-request-create-without-department.input';

@InputType()
export class SubsidyRequestUpsertWithWhereUniqueWithoutDepartmentInput {

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestUpdateWithoutDepartmentInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutDepartmentInput)
    update!: SubsidyRequestUpdateWithoutDepartmentInput;

    @Field(() => SubsidyRequestCreateWithoutDepartmentInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutDepartmentInput)
    create!: SubsidyRequestCreateWithoutDepartmentInput;
}
