import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateWithoutDepartmentInput } from './subsidy-status-create-without-department.input';

@InputType()
export class SubsidyStatusCreateOrConnectWithoutDepartmentInput {

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusCreateWithoutDepartmentInput, {nullable:false})
    @Type(() => SubsidyStatusCreateWithoutDepartmentInput)
    create!: SubsidyStatusCreateWithoutDepartmentInput;
}
