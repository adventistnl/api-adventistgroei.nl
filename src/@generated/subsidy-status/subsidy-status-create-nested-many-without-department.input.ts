import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusCreateWithoutDepartmentInput } from './subsidy-status-create-without-department.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateOrConnectWithoutDepartmentInput } from './subsidy-status-create-or-connect-without-department.input';
import { SubsidyStatusCreateManyDepartmentInputEnvelope } from './subsidy-status-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';

@InputType()
export class SubsidyStatusCreateNestedManyWithoutDepartmentInput {

    @Field(() => [SubsidyStatusCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => SubsidyStatusCreateWithoutDepartmentInput)
    create?: Array<SubsidyStatusCreateWithoutDepartmentInput>;

    @Field(() => [SubsidyStatusCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => SubsidyStatusCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<SubsidyStatusCreateOrConnectWithoutDepartmentInput>;

    @Field(() => SubsidyStatusCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => SubsidyStatusCreateManyDepartmentInputEnvelope)
    createMany?: SubsidyStatusCreateManyDepartmentInputEnvelope;

    @Field(() => [SubsidyStatusWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyStatusWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>>;
}
