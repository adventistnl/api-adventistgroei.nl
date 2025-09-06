import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutDepartmentInput } from './subsidy-request-create-without-department.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutDepartmentInput } from './subsidy-request-create-or-connect-without-department.input';
import { SubsidyRequestCreateManyDepartmentInputEnvelope } from './subsidy-request-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';

@InputType()
export class SubsidyRequestUncheckedCreateNestedManyWithoutDepartmentInput {

    @Field(() => [SubsidyRequestCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutDepartmentInput)
    create?: Array<SubsidyRequestCreateWithoutDepartmentInput>;

    @Field(() => [SubsidyRequestCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<SubsidyRequestCreateOrConnectWithoutDepartmentInput>;

    @Field(() => SubsidyRequestCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => SubsidyRequestCreateManyDepartmentInputEnvelope)
    createMany?: SubsidyRequestCreateManyDepartmentInputEnvelope;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;
}
