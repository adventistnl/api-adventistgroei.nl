import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusHistoryCreateWithoutPrevious_statusInput } from './subsidy-status-history-create-without-previous-status.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryCreateOrConnectWithoutPrevious_statusInput } from './subsidy-status-history-create-or-connect-without-previous-status.input';
import { SubsidyStatusHistoryUpsertWithWhereUniqueWithoutPrevious_statusInput } from './subsidy-status-history-upsert-with-where-unique-without-previous-status.input';
import { SubsidyStatusHistoryCreateManyPrevious_statusInputEnvelope } from './subsidy-status-history-create-many-previous-status-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';
import { SubsidyStatusHistoryUpdateWithWhereUniqueWithoutPrevious_statusInput } from './subsidy-status-history-update-with-where-unique-without-previous-status.input';
import { SubsidyStatusHistoryUpdateManyWithWhereWithoutPrevious_statusInput } from './subsidy-status-history-update-many-with-where-without-previous-status.input';
import { SubsidyStatusHistoryScalarWhereInput } from './subsidy-status-history-scalar-where.input';

@InputType()
export class SubsidyStatusHistoryUpdateManyWithoutPrevious_statusNestedInput {

    @Field(() => [SubsidyStatusHistoryCreateWithoutPrevious_statusInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateWithoutPrevious_statusInput)
    create?: Array<SubsidyStatusHistoryCreateWithoutPrevious_statusInput>;

    @Field(() => [SubsidyStatusHistoryCreateOrConnectWithoutPrevious_statusInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateOrConnectWithoutPrevious_statusInput)
    connectOrCreate?: Array<SubsidyStatusHistoryCreateOrConnectWithoutPrevious_statusInput>;

    @Field(() => [SubsidyStatusHistoryUpsertWithWhereUniqueWithoutPrevious_statusInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryUpsertWithWhereUniqueWithoutPrevious_statusInput)
    upsert?: Array<SubsidyStatusHistoryUpsertWithWhereUniqueWithoutPrevious_statusInput>;

    @Field(() => SubsidyStatusHistoryCreateManyPrevious_statusInputEnvelope, {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateManyPrevious_statusInputEnvelope)
    createMany?: SubsidyStatusHistoryCreateManyPrevious_statusInputEnvelope;

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

    @Field(() => [SubsidyStatusHistoryUpdateWithWhereUniqueWithoutPrevious_statusInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryUpdateWithWhereUniqueWithoutPrevious_statusInput)
    update?: Array<SubsidyStatusHistoryUpdateWithWhereUniqueWithoutPrevious_statusInput>;

    @Field(() => [SubsidyStatusHistoryUpdateManyWithWhereWithoutPrevious_statusInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryUpdateManyWithWhereWithoutPrevious_statusInput)
    updateMany?: Array<SubsidyStatusHistoryUpdateManyWithWhereWithoutPrevious_statusInput>;

    @Field(() => [SubsidyStatusHistoryScalarWhereInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryScalarWhereInput)
    deleteMany?: Array<SubsidyStatusHistoryScalarWhereInput>;
}
