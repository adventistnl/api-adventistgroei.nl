import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutSubsidy_statusInput } from './subsidy-request-create-without-subsidy-status.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutSubsidy_statusInput } from './subsidy-request-create-or-connect-without-subsidy-status.input';
import { SubsidyRequestUpsertWithWhereUniqueWithoutSubsidy_statusInput } from './subsidy-request-upsert-with-where-unique-without-subsidy-status.input';
import { SubsidyRequestCreateManySubsidy_statusInputEnvelope } from './subsidy-request-create-many-subsidy-status-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { SubsidyRequestUpdateWithWhereUniqueWithoutSubsidy_statusInput } from './subsidy-request-update-with-where-unique-without-subsidy-status.input';
import { SubsidyRequestUpdateManyWithWhereWithoutSubsidy_statusInput } from './subsidy-request-update-many-with-where-without-subsidy-status.input';
import { SubsidyRequestScalarWhereInput } from './subsidy-request-scalar-where.input';

@InputType()
export class SubsidyRequestUpdateManyWithoutSubsidy_statusNestedInput {

    @Field(() => [SubsidyRequestCreateWithoutSubsidy_statusInput], {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutSubsidy_statusInput)
    create?: Array<SubsidyRequestCreateWithoutSubsidy_statusInput>;

    @Field(() => [SubsidyRequestCreateOrConnectWithoutSubsidy_statusInput], {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutSubsidy_statusInput)
    connectOrCreate?: Array<SubsidyRequestCreateOrConnectWithoutSubsidy_statusInput>;

    @Field(() => [SubsidyRequestUpsertWithWhereUniqueWithoutSubsidy_statusInput], {nullable:true})
    @Type(() => SubsidyRequestUpsertWithWhereUniqueWithoutSubsidy_statusInput)
    upsert?: Array<SubsidyRequestUpsertWithWhereUniqueWithoutSubsidy_statusInput>;

    @Field(() => SubsidyRequestCreateManySubsidy_statusInputEnvelope, {nullable:true})
    @Type(() => SubsidyRequestCreateManySubsidy_statusInputEnvelope)
    createMany?: SubsidyRequestCreateManySubsidy_statusInputEnvelope;

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

    @Field(() => [SubsidyRequestUpdateWithWhereUniqueWithoutSubsidy_statusInput], {nullable:true})
    @Type(() => SubsidyRequestUpdateWithWhereUniqueWithoutSubsidy_statusInput)
    update?: Array<SubsidyRequestUpdateWithWhereUniqueWithoutSubsidy_statusInput>;

    @Field(() => [SubsidyRequestUpdateManyWithWhereWithoutSubsidy_statusInput], {nullable:true})
    @Type(() => SubsidyRequestUpdateManyWithWhereWithoutSubsidy_statusInput)
    updateMany?: Array<SubsidyRequestUpdateManyWithWhereWithoutSubsidy_statusInput>;

    @Field(() => [SubsidyRequestScalarWhereInput], {nullable:true})
    @Type(() => SubsidyRequestScalarWhereInput)
    deleteMany?: Array<SubsidyRequestScalarWhereInput>;
}
