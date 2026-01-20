import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusHistoryCreateWithoutSubsidy_requestInput } from './subsidy-status-history-create-without-subsidy-request.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryCreateOrConnectWithoutSubsidy_requestInput } from './subsidy-status-history-create-or-connect-without-subsidy-request.input';
import { SubsidyStatusHistoryUpsertWithWhereUniqueWithoutSubsidy_requestInput } from './subsidy-status-history-upsert-with-where-unique-without-subsidy-request.input';
import { SubsidyStatusHistoryCreateManySubsidy_requestInputEnvelope } from './subsidy-status-history-create-many-subsidy-request-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';
import { SubsidyStatusHistoryUpdateWithWhereUniqueWithoutSubsidy_requestInput } from './subsidy-status-history-update-with-where-unique-without-subsidy-request.input';
import { SubsidyStatusHistoryUpdateManyWithWhereWithoutSubsidy_requestInput } from './subsidy-status-history-update-many-with-where-without-subsidy-request.input';
import { SubsidyStatusHistoryScalarWhereInput } from './subsidy-status-history-scalar-where.input';

@InputType()
export class SubsidyStatusHistoryUncheckedUpdateManyWithoutSubsidy_requestNestedInput {

    @Field(() => [SubsidyStatusHistoryCreateWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateWithoutSubsidy_requestInput)
    create?: Array<SubsidyStatusHistoryCreateWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyStatusHistoryCreateOrConnectWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateOrConnectWithoutSubsidy_requestInput)
    connectOrCreate?: Array<SubsidyStatusHistoryCreateOrConnectWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyStatusHistoryUpsertWithWhereUniqueWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryUpsertWithWhereUniqueWithoutSubsidy_requestInput)
    upsert?: Array<SubsidyStatusHistoryUpsertWithWhereUniqueWithoutSubsidy_requestInput>;

    @Field(() => SubsidyStatusHistoryCreateManySubsidy_requestInputEnvelope, {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateManySubsidy_requestInputEnvelope)
    createMany?: SubsidyStatusHistoryCreateManySubsidy_requestInputEnvelope;

    @Field(() => [SubsidyStatusHistoryWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyStatusHistoryWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyStatusHistoryWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyStatusHistoryWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyStatusHistoryUpdateWithWhereUniqueWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryUpdateWithWhereUniqueWithoutSubsidy_requestInput)
    update?: Array<SubsidyStatusHistoryUpdateWithWhereUniqueWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyStatusHistoryUpdateManyWithWhereWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryUpdateManyWithWhereWithoutSubsidy_requestInput)
    updateMany?: Array<SubsidyStatusHistoryUpdateManyWithWhereWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyStatusHistoryScalarWhereInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryScalarWhereInput)
    deleteMany?: Array<SubsidyStatusHistoryScalarWhereInput>;
}
