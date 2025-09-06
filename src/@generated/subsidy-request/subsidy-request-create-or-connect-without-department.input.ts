import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateWithoutDepartmentInput } from './subsidy-request-create-without-department.input';

@InputType()
export class SubsidyRequestCreateOrConnectWithoutDepartmentInput {

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestCreateWithoutDepartmentInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutDepartmentInput)
    create!: SubsidyRequestCreateWithoutDepartmentInput;
}
