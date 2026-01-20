import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusHistoryCreateWithoutStatusInput } from './subsidy-status-history-create-without-status.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryCreateOrConnectWithoutStatusInput } from './subsidy-status-history-create-or-connect-without-status.input';
import { SubsidyStatusHistoryCreateManyStatusInputEnvelope } from './subsidy-status-history-create-many-status-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';

@InputType()
export class SubsidyStatusHistoryUncheckedCreateNestedManyWithoutStatusInput {

    @Field(() => [SubsidyStatusHistoryCreateWithoutStatusInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateWithoutStatusInput)
    create?: Array<SubsidyStatusHistoryCreateWithoutStatusInput>;

    @Field(() => [SubsidyStatusHistoryCreateOrConnectWithoutStatusInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateOrConnectWithoutStatusInput)
    connectOrCreate?: Array<SubsidyStatusHistoryCreateOrConnectWithoutStatusInput>;

    @Field(() => SubsidyStatusHistoryCreateManyStatusInputEnvelope, {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateManyStatusInputEnvelope)
    createMany?: SubsidyStatusHistoryCreateManyStatusInputEnvelope;

    @Field(() => [SubsidyStatusHistoryWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>>;
}
