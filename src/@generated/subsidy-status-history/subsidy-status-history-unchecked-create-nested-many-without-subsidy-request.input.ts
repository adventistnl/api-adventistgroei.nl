import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusHistoryCreateWithoutSubsidy_requestInput } from './subsidy-status-history-create-without-subsidy-request.input';
import { Type } from 'class-transformer';
import { SubsidyStatusHistoryCreateOrConnectWithoutSubsidy_requestInput } from './subsidy-status-history-create-or-connect-without-subsidy-request.input';
import { SubsidyStatusHistoryCreateManySubsidy_requestInputEnvelope } from './subsidy-status-history-create-many-subsidy-request-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusHistoryWhereUniqueInput } from './subsidy-status-history-where-unique.input';

@InputType()
export class SubsidyStatusHistoryUncheckedCreateNestedManyWithoutSubsidy_requestInput {

    @Field(() => [SubsidyStatusHistoryCreateWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateWithoutSubsidy_requestInput)
    create?: Array<SubsidyStatusHistoryCreateWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyStatusHistoryCreateOrConnectWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateOrConnectWithoutSubsidy_requestInput)
    connectOrCreate?: Array<SubsidyStatusHistoryCreateOrConnectWithoutSubsidy_requestInput>;

    @Field(() => SubsidyStatusHistoryCreateManySubsidy_requestInputEnvelope, {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateManySubsidy_requestInputEnvelope)
    createMany?: SubsidyStatusHistoryCreateManySubsidy_requestInputEnvelope;

    @Field(() => [SubsidyStatusHistoryWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyStatusHistoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyStatusHistoryWhereUniqueInput, 'id'>>;
}
