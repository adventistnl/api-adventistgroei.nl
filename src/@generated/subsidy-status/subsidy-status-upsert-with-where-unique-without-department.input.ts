import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyStatusUpdateWithoutDepartmentInput } from './subsidy-status-update-without-department.input';
import { SubsidyStatusCreateWithoutDepartmentInput } from './subsidy-status-create-without-department.input';

@InputType()
export class SubsidyStatusUpsertWithWhereUniqueWithoutDepartmentInput {

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusUpdateWithoutDepartmentInput, {nullable:false})
    @Type(() => SubsidyStatusUpdateWithoutDepartmentInput)
    update!: SubsidyStatusUpdateWithoutDepartmentInput;

    @Field(() => SubsidyStatusCreateWithoutDepartmentInput, {nullable:false})
    @Type(() => SubsidyStatusCreateWithoutDepartmentInput)
    create!: SubsidyStatusCreateWithoutDepartmentInput;
}
