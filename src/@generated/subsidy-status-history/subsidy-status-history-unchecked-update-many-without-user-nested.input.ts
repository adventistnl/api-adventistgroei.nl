import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusHistoryCreateWithoutUserInput } from './subsidy-status-history-create-without-user.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryCreateOrConnectWithoutUserInput } from './subsidy-status-history-create-or-connect-without-user.input';
import { SubsidyStatusHistoryUpsertWithWhereUniqueWithoutUserInput } from './subsidy-status-history-upsert-with-where-unique-without-user.input';
import { SubsidyStatusHistoryCreateManyUserInputEnvelope } from './subsidy-status-history-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';
import { SubsidyStatusHistoryUpdateWithWhereUniqueWithoutUserInput } from './subsidy-status-history-update-with-where-unique-without-user.input';
import { SubsidyStatusHistoryUpdateManyWithWhereWithoutUserInput } from './subsidy-status-history-update-many-with-where-without-user.input';
import { SubsidyStatusHistoryScalarWhereInput } from './subsidy-status-history-scalar-where.input';

@InputType()
export class SubsidyStatusHistoryUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [SubsidyStatusHistoryCreateWithoutUserInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateWithoutUserInput)
    create?: Array<SubsidyStatusHistoryCreateWithoutUserInput>;

    @Field(() => [SubsidyStatusHistoryCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SubsidyStatusHistoryCreateOrConnectWithoutUserInput>;

    @Field(() => [SubsidyStatusHistoryUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<SubsidyStatusHistoryUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => SubsidyStatusHistoryCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateManyUserInputEnvelope)
    createMany?: SubsidyStatusHistoryCreateManyUserInputEnvelope;

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

    @Field(() => [SubsidyStatusHistoryUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<SubsidyStatusHistoryUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [SubsidyStatusHistoryUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<SubsidyStatusHistoryUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [SubsidyStatusHistoryScalarWhereInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryScalarWhereInput)
    deleteMany?: Array<SubsidyStatusHistoryScalarWhereInput>;
}
