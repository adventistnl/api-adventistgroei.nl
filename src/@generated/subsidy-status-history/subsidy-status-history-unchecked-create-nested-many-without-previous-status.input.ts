import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusHistoryCreateWithoutPrevious_statusInput } from './subsidy-status-history-create-without-previous-status.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryCreateOrConnectWithoutPrevious_statusInput } from './subsidy-status-history-create-or-connect-without-previous-status.input';
import { SubsidyStatusHistoryCreateManyPrevious_statusInputEnvelope } from './subsidy-status-history-create-many-previous-status-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';

@InputType()
export class SubsidyStatusHistoryUncheckedCreateNestedManyWithoutPrevious_statusInput {

    @Field(() => [SubsidyStatusHistoryCreateWithoutPrevious_statusInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateWithoutPrevious_statusInput)
    create?: Array<SubsidyStatusHistoryCreateWithoutPrevious_statusInput>;

    @Field(() => [SubsidyStatusHistoryCreateOrConnectWithoutPrevious_statusInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateOrConnectWithoutPrevious_statusInput)
    connectOrCreate?: Array<SubsidyStatusHistoryCreateOrConnectWithoutPrevious_statusInput>;

    @Field(() => SubsidyStatusHistoryCreateManyPrevious_statusInputEnvelope, {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateManyPrevious_statusInputEnvelope)
    createMany?: SubsidyStatusHistoryCreateManyPrevious_statusInputEnvelope;

    @Field(() => [SubsidyStatusHistoryWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>>;
}
