import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusHistoryCreateWithoutStatusInput } from './subsidy-status-history-create-without-status.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryCreateOrConnectWithoutStatusInput } from './subsidy-status-history-create-or-connect-without-status.input';
import { SubsidyStatusHistoryUpsertWithWhereUniqueWithoutStatusInput } from './subsidy-status-history-upsert-with-where-unique-without-status.input';
import { SubsidyStatusHistoryCreateManyStatusInputEnvelope } from './subsidy-status-history-create-many-status-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';
import { SubsidyStatusHistoryUpdateWithWhereUniqueWithoutStatusInput } from './subsidy-status-history-update-with-where-unique-without-status.input';
import { SubsidyStatusHistoryUpdateManyWithWhereWithoutStatusInput } from './subsidy-status-history-update-many-with-where-without-status.input';
import { SubsidyStatusHistoryScalarWhereInput } from './subsidy-status-history-scalar-where.input';

@InputType()
export class SubsidyStatusHistoryUncheckedUpdateManyWithoutStatusNestedInput {

    @Field(() => [SubsidyStatusHistoryCreateWithoutStatusInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateWithoutStatusInput)
    create?: Array<SubsidyStatusHistoryCreateWithoutStatusInput>;

    @Field(() => [SubsidyStatusHistoryCreateOrConnectWithoutStatusInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateOrConnectWithoutStatusInput)
    connectOrCreate?: Array<SubsidyStatusHistoryCreateOrConnectWithoutStatusInput>;

    @Field(() => [SubsidyStatusHistoryUpsertWithWhereUniqueWithoutStatusInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryUpsertWithWhereUniqueWithoutStatusInput)
    upsert?: Array<SubsidyStatusHistoryUpsertWithWhereUniqueWithoutStatusInput>;

    @Field(() => SubsidyStatusHistoryCreateManyStatusInputEnvelope, {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateManyStatusInputEnvelope)
    createMany?: SubsidyStatusHistoryCreateManyStatusInputEnvelope;

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

    @Field(() => [SubsidyStatusHistoryUpdateWithWhereUniqueWithoutStatusInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryUpdateWithWhereUniqueWithoutStatusInput)
    update?: Array<SubsidyStatusHistoryUpdateWithWhereUniqueWithoutStatusInput>;

    @Field(() => [SubsidyStatusHistoryUpdateManyWithWhereWithoutStatusInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryUpdateManyWithWhereWithoutStatusInput)
    updateMany?: Array<SubsidyStatusHistoryUpdateManyWithWhereWithoutStatusInput>;

    @Field(() => [SubsidyStatusHistoryScalarWhereInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryScalarWhereInput)
    deleteMany?: Array<SubsidyStatusHistoryScalarWhereInput>;
}
