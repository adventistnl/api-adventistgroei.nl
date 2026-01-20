import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusHistoryCreateWithoutUserInput } from './subsidy-status-history-create-without-user.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryCreateOrConnectWithoutUserInput } from './subsidy-status-history-create-or-connect-without-user.input';
import { SubsidyStatusHistoryCreateManyUserInputEnvelope } from './subsidy-status-history-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';

@InputType()
export class SubsidyStatusHistoryUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [SubsidyStatusHistoryCreateWithoutUserInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateWithoutUserInput)
    create?: Array<SubsidyStatusHistoryCreateWithoutUserInput>;

    @Field(() => [SubsidyStatusHistoryCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SubsidyStatusHistoryCreateOrConnectWithoutUserInput>;

    @Field(() => SubsidyStatusHistoryCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateManyUserInputEnvelope)
    createMany?: SubsidyStatusHistoryCreateManyUserInputEnvelope;

    @Field(() => [SubsidyStatusHistoryWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>>;
}
