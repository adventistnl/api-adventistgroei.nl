import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutDepartmentInput } from './subsidy-request-create-without-department.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutDepartmentInput } from './subsidy-request-create-or-connect-without-department.input';
import { SubsidyRequestUpsertWithWhereUniqueWithoutDepartmentInput } from './subsidy-request-upsert-with-where-unique-without-department.input';
import { SubsidyRequestCreateManyDepartmentInputEnvelope } from './subsidy-request-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { SubsidyRequestUpdateWithWhereUniqueWithoutDepartmentInput } from './subsidy-request-update-with-where-unique-without-department.input';
import { SubsidyRequestUpdateManyWithWhereWithoutDepartmentInput } from './subsidy-request-update-many-with-where-without-department.input';
import { SubsidyRequestScalarWhereInput } from './subsidy-request-scalar-where.input';

@InputType()
export class SubsidyRequestUncheckedUpdateManyWithoutDepartmentNestedInput {

    @Field(() => [SubsidyRequestCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutDepartmentInput)
    create?: Array<SubsidyRequestCreateWithoutDepartmentInput>;

    @Field(() => [SubsidyRequestCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<SubsidyRequestCreateOrConnectWithoutDepartmentInput>;

    @Field(() => [SubsidyRequestUpsertWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => SubsidyRequestUpsertWithWhereUniqueWithoutDepartmentInput)
    upsert?: Array<SubsidyRequestUpsertWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => SubsidyRequestCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => SubsidyRequestCreateManyDepartmentInputEnvelope)
    createMany?: SubsidyRequestCreateManyDepartmentInputEnvelope;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestUpdateWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => SubsidyRequestUpdateWithWhereUniqueWithoutDepartmentInput)
    update?: Array<SubsidyRequestUpdateWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => [SubsidyRequestUpdateManyWithWhereWithoutDepartmentInput], {nullable:true})
    @Type(() => SubsidyRequestUpdateManyWithWhereWithoutDepartmentInput)
    updateMany?: Array<SubsidyRequestUpdateManyWithWhereWithoutDepartmentInput>;

    @Field(() => [SubsidyRequestScalarWhereInput], {nullable:true})
    @Type(() => SubsidyRequestScalarWhereInput)
    deleteMany?: Array<SubsidyRequestScalarWhereInput>;
}
