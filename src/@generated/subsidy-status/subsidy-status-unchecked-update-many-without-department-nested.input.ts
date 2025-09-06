import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusCreateWithoutDepartmentInput } from './subsidy-status-create-without-department.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateOrConnectWithoutDepartmentInput } from './subsidy-status-create-or-connect-without-department.input';
import { SubsidyStatusUpsertWithWhereUniqueWithoutDepartmentInput } from './subsidy-status-upsert-with-where-unique-without-department.input';
import { SubsidyStatusCreateManyDepartmentInputEnvelope } from './subsidy-status-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';
import { SubsidyStatusUpdateWithWhereUniqueWithoutDepartmentInput } from './subsidy-status-update-with-where-unique-without-department.input';
import { SubsidyStatusUpdateManyWithWhereWithoutDepartmentInput } from './subsidy-status-update-many-with-where-without-department.input';
import { SubsidyStatusScalarWhereInput } from './subsidy-status-scalar-where.input';

@InputType()
export class SubsidyStatusUncheckedUpdateManyWithoutDepartmentNestedInput {

    @Field(() => [SubsidyStatusCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => SubsidyStatusCreateWithoutDepartmentInput)
    create?: Array<SubsidyStatusCreateWithoutDepartmentInput>;

    @Field(() => [SubsidyStatusCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => SubsidyStatusCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<SubsidyStatusCreateOrConnectWithoutDepartmentInput>;

    @Field(() => [SubsidyStatusUpsertWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => SubsidyStatusUpsertWithWhereUniqueWithoutDepartmentInput)
    upsert?: Array<SubsidyStatusUpsertWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => SubsidyStatusCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => SubsidyStatusCreateManyDepartmentInputEnvelope)
    createMany?: SubsidyStatusCreateManyDepartmentInputEnvelope;

    @Field(() => [SubsidyStatusWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyStatusWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyStatusWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyStatusWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyStatusWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyStatusWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyStatusWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyStatusWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyStatusUpdateWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => SubsidyStatusUpdateWithWhereUniqueWithoutDepartmentInput)
    update?: Array<SubsidyStatusUpdateWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => [SubsidyStatusUpdateManyWithWhereWithoutDepartmentInput], {nullable:true})
    @Type(() => SubsidyStatusUpdateManyWithWhereWithoutDepartmentInput)
    updateMany?: Array<SubsidyStatusUpdateManyWithWhereWithoutDepartmentInput>;

    @Field(() => [SubsidyStatusScalarWhereInput], {nullable:true})
    @Type(() => SubsidyStatusScalarWhereInput)
    deleteMany?: Array<SubsidyStatusScalarWhereInput>;
}
